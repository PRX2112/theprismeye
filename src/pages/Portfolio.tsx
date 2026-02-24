import { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioItems, portfolioCategories } from '../data/clientData';
import Lightbox from '../components/Lightbox';
import ScrollReveal from '../components/ScrollReveal';
import { Helmet } from 'react-helmet-async';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = portfolioCategories;

  const filteredItems = selectedCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const filteredImages = filteredItems.map(item => item.image);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>Portfolio | The Prism Eye</title>
        <meta name="description" content="View our portfolio showcasing exquisite wedding, portrait, and event photography. See the quality and creativity we bring to every session." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our collection of captured moments across different categories.
              Each image represents a story, an emotion, and a memory preserved forever.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg'
                  : 'glass text-gray-700 hover:bg-white/50'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.05} direction="scale">
              <div
                className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square bg-gray-100 hover-lift"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-semibold text-xl mb-1">{item.title}</h3>
                    <p className="text-cyan-300 text-sm capitalize">{item.category}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <Lightbox
            images={filteredImages}
            currentIndex={currentImageIndex}
            onClose={() => setLightboxOpen(false)}
            onNext={nextImage}
            onPrevious={previousImage}
            onGoTo={setCurrentImageIndex}
            alt="Portfolio"
          />
        )}

        {/* Call to Action */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-20 p-12 gradient-dark rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-transparent to-cyan-900/30" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Love What You <span className="text-gradient-accent">See?</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Ready to create your own beautiful memories? Let's discuss your vision and
                bring it to life with our professional photography services.
              </p>
              <Link to="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-lg font-semibold hover-glow transition-all duration-300 hover:scale-105">
                Book Your Session
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Portfolio;