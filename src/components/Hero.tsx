import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/cs/1.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-transparent to-cyan-900/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Wedding Photography
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Capturing your most precious moments
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
    </div>
  );
};

export default Hero;