import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import { Camera, Award, Users, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { portfolioPreviewImages } from '../data/clientData';

const Home = () => {
  const navigate = useNavigate();

  const getquote = () => {
    navigate('/services');
  }

  const features = [
    {
      icon: Camera,
      title: 'Professional Equipment',
      description: 'State-of-the-art cameras and lighting equipment for exceptional quality'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in wedding and portrait photography'
    },
    {
      icon: Users,
      title: 'Happy Clients',
      description: 'Over 500+ satisfied clients and countless beautiful memories captured'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Professional editing and delivery within 2-3 weeks'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>The Prism Eye | Professional Photography Services in Surat</title>
        <meta name="description" content="Capture your special moments with The Prism Eye. Expert wedding, portrait, and event photography services in Surat, Gujarat." />
      </Helmet>
      <Hero />

      {/* Studio Introduction */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome to <span className="text-gradient">The Prism Eye</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are passionate photographers dedicated to capturing your most precious moments with
                artistic vision and professional excellence. Every image tells a story, and we're here
                to help you tell yours beautifully.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="text-center group glass p-8 rounded-2xl hover-glow transition-all duration-300">
                  <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-cyan-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Latest <span className="text-gradient-accent">Work</span>
              </h2>
              <p className="text-xl text-gray-300">
                Take a glimpse at some of our recent photography sessions
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {portfolioPreviewImages.map((image, index) => (
              <ScrollReveal key={index} delay={index * 0.05} direction="scale">
                <div className="relative group overflow-hidden rounded-lg aspect-square hover-lift">
                  <img
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center">
              <Link to="/portfolio" className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-lg font-semibold hover-glow transition-all duration-300 hover:scale-105">
                View Full Portfolio
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-transparent to-cyan-900/30" />
        <ScrollReveal>
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Capture Your <span className="text-gradient-accent">Story?</span>
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's discuss your vision and create something beautiful together.
              Book your consultation today and let us bring your moments to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-lg font-semibold hover-glow transition-all duration-300 hover:scale-105">
                Book Consultation
              </Link>
              <button onClick={getquote} className="px-8 py-4 glass text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Get Quote
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Home;