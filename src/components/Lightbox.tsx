import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxProps {
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrevious: () => void;
    alt?: string;
}

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrevious, alt = 'Image' }: LightboxProps) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrevious();
            if (e.key === 'ArrowRight') onNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [onClose, onNext, onPrevious]);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = images[currentIndex];
        link.download = `image-${currentIndex + 1}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
                onClick={onClose}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-3 glass rounded-full hover:bg-white/20 transition-all duration-300 group"
                    aria-label="Close lightbox"
                >
                    <X className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                </button>

                {/* Image Counter */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 glass px-4 py-2 rounded-full">
                    <span className="text-white font-medium">
                        {currentIndex + 1} / {images.length}
                    </span>
                </div>

                {/* Download Button */}
                <button
                    onClick={handleDownload}
                    className="absolute top-4 left-4 z-50 p-3 glass rounded-full hover:bg-white/20 transition-all duration-300 group"
                    aria-label="Download image"
                >
                    <Download className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                </button>

                {/* Previous Button */}
                {images.length > 1 && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onPrevious();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-4 glass rounded-full hover:bg-white/20 transition-all duration-300 group hover-glow"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                    </button>
                )}

                {/* Next Button */}
                {images.length > 1 && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onNext();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-4 glass rounded-full hover:bg-white/20 transition-all duration-300 group hover-glow"
                        aria-label="Next image"
                    >
                        <ChevronRight className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                    </button>
                )}

                {/* Image */}
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-7xl max-h-[90vh] mx-4"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={images[currentIndex]}
                        alt={`${alt} ${currentIndex + 1}`}
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    />
                </motion.div>

                {/* Thumbnail Strip (optional, for multiple images) */}
                {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 glass px-4 py-3 rounded-full max-w-[90vw] overflow-x-auto">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const diff = index - currentIndex;
                                    if (diff > 0) {
                                        for (let i = 0; i < diff; i++) onNext();
                                    } else if (diff < 0) {
                                        for (let i = 0; i < Math.abs(diff); i++) onPrevious();
                                    }
                                }}
                                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${index === currentIndex
                                        ? 'ring-2 ring-cyan-400 scale-110'
                                        : 'opacity-50 hover:opacity-100'
                                    }`}
                            >
                                <img
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    );
};

export default Lightbox;
