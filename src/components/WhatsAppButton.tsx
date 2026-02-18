import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

const WhatsAppButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const phoneNumber = '917622890379'; // Without + or spaces
    const message = encodeURIComponent('Hi! I would like to inquire about your photography services.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Contact us on WhatsApp"
        >
            <div className="relative">
                {/* Tooltip */}
                <div
                    className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap glass px-4 py-2 rounded-lg transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
                        }`}
                >
                    <span className="text-white font-medium">Chat with us!</span>
                </div>

                {/* Button */}
                <div className="relative">
                    {/* Pulse Animation */}
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />

                    {/* Main Button */}
                    <div className="relative bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover-glow">
                        <MessageCircle className="h-7 w-7 text-white" />
                    </div>
                </div>
            </div>
        </a>
    );
};

export default WhatsAppButton;
