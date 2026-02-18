import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Package {
    name: string;
    basePrice: number;
    features: string[];
}

const packages: Package[] = [
    {
        name: 'Basic',
        basePrice: 15000,
        features: ['4 hours coverage', '100 edited photos', 'Online gallery', 'Basic retouching']
    },
    {
        name: 'Standard',
        basePrice: 30000,
        features: ['8 hours coverage', '300 edited photos', 'Online gallery', 'Advanced retouching', 'Printed album (20 pages)', 'Highlight video']
    },
    {
        name: 'Premium',
        basePrice: 50000,
        features: ['Full day coverage', '500+ edited photos', 'Online gallery', 'Professional retouching', 'Premium album (40 pages)', 'Cinematic video', 'Pre-wedding shoot', 'Drone coverage']
    }
];

const addons = [
    { name: 'Extra Hour', price: 2000 },
    { name: 'Additional Photographer', price: 5000 },
    { name: 'Drone Coverage', price: 8000 },
    { name: 'Same Day Edit', price: 10000 },
    { name: 'Photo Booth', price: 12000 }
];

interface QuoteCalculatorProps {
    onClose: () => void;
}

const QuoteCalculator = ({ onClose }: QuoteCalculatorProps) => {
    const [selectedPackage, setSelectedPackage] = useState<Package>(packages[1]);
    const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

    const toggleAddon = (addonName: string) => {
        setSelectedAddons(prev =>
            prev.includes(addonName)
                ? prev.filter(a => a !== addonName)
                : [...prev, addonName]
        );
    };

    const calculateTotal = () => {
        const addonTotal = selectedAddons.reduce((sum, addonName) => {
            const addon = addons.find(a => a.name === addonName);
            return sum + (addon?.price || 0);
        }, 0);
        return selectedPackage.basePrice + addonTotal;
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div className="flex min-h-full items-center justify-center p-4 text-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative w-full max-w-4xl transform overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-left shadow-2xl transition-all my-8"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 glass rounded-full hover:bg-white/20 transition-all z-10"
                    >
                        <X className="h-6 w-6 text-white" />
                    </button>

                    <div className="p-6 md:p-8">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                            Calculate Your <span className="text-gradient-accent">Quote</span>
                        </h2>
                        <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8">Customize your photography package</p>

                        {/* Package Selection */}
                        <div className="mb-8">
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Select Package</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {packages.map((pkg) => (
                                    <button
                                        key={pkg.name}
                                        onClick={() => setSelectedPackage(pkg)}
                                        className={`p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden ${selectedPackage.name === pkg.name
                                            ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-lg scale-[1.02] md:scale-105 ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-900'
                                            : 'glass hover:bg-white/10'
                                            }`}
                                    >
                                        <h4 className="text-lg font-bold text-white mb-2">{pkg.name}</h4>
                                        <p className="text-xl md:text-2xl font-bold text-cyan-300 mb-4">
                                            ₹{pkg.basePrice.toLocaleString()}
                                        </p>
                                        <ul className="space-y-2">
                                            {pkg.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-gray-300">
                                                    <Check className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Add-ons */}
                        <div className="mb-8">
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Add-ons (Optional)</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {addons.map((addon) => (
                                    <button
                                        key={addon.name}
                                        onClick={() => toggleAddon(addon.name)}
                                        className={`p-4 rounded-xl text-left transition-all duration-300 flex items-center justify-between group ${selectedAddons.includes(addon.name)
                                            ? 'bg-gradient-to-r from-indigo-600/50 to-cyan-500/50 border-2 border-cyan-400'
                                            : 'glass hover:bg-white/10 border-2 border-transparent'
                                            }`}
                                    >
                                        <div>
                                            <p className="font-semibold text-white text-sm md:text-base group-hover:text-cyan-200 transition-colors">{addon.name}</p>
                                            <p className="text-sm text-cyan-300">+₹{addon.price.toLocaleString()}</p>
                                        </div>
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedAddons.includes(addon.name)
                                            ? 'border-cyan-400 bg-cyan-400'
                                            : 'border-gray-500 group-hover:border-cyan-400'
                                            }`}>
                                            {selectedAddons.includes(addon.name) && (
                                                <Check className="h-4 w-4 text-slate-900" />
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Total */}
                        <div className="glass p-5 md:p-6 rounded-2xl border border-white/10">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                                <div>
                                    <p className="text-gray-400 text-sm">Estimated Total</p>
                                    <p className="text-3xl md:text-4xl font-bold text-white">
                                        ₹{calculateTotal().toLocaleString()}
                                    </p>
                                </div>
                                <div className="text-left sm:text-right">
                                    <p className="text-sm text-gray-400">Package: <span className="text-cyan-300">{selectedPackage.name}</span></p>
                                    <p className="text-sm text-gray-400">{selectedAddons.length} add-ons selected</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-xl font-bold hover-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-indigo-500/20"
                            >
                                Proceed to Contact
                            </button>
                            <p className="text-xs text-gray-400 text-center mt-3">
                                *Final pricing may vary based on specific requirements
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default QuoteCalculator;
