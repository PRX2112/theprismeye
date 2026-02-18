import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroImages } from '../data/clientData';

const preloadImages = (images: string[]) => {
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    preloadImages(heroImages.map(img => img.url));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImageLoad = useCallback((index: number) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
    if (index === 0) setIsLoading(false);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-slate-900 flex items-center justify-center z-50">
          <Loader2 className="h-12 w-12 text-indigo-500 animate-spin" />
        </div>
      )}

      {/* Image Carousel with Parallax */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <img
            src={heroImages[currentSlide].url}
            alt={heroImages[currentSlide].alt}
            className="w-full h-full object-cover"
            onLoad={() => handleImageLoad(currentSlide)}
          />

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-transparent to-cyan-900/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {heroImages[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
              {heroImages[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/portfolio')}
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold rounded-lg overflow-hidden hover-glow transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 glass text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 glass rounded-full hover:bg-white/20 transition-all duration-300 group hover-glow"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 glass rounded-full hover:bg-white/20 transition-all duration-300 group hover-glow"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${index === currentSlide
              ? 'w-12 h-3 gradient-primary'
              : 'w-3 h-3 bg-white/40 hover:bg-white/60'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;