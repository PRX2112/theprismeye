import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Whatsapp } from 'lucide-react';
import { contactInfo } from '../data/clientData';

const Footer = () => {
  const phoneInfo = contactInfo.find(info => info.title === 'Phone');
  const emailInfo = contactInfo.find(info => info.title === 'Email');
  const addressInfo = contactInfo.find(info => info.title === 'Studio Address');

  return (
    <footer className="relative gradient-dark text-white overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-cyan-900/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Studio Info */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tighter text-white transition-transform duration-300 group-hover:scale-105">
                ThePrismEye
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Capturing life's precious moments with artistic vision and professional excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/the.nsclicks/"
                className="group relative p-3 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-500 transition-all duration-300 hover-glow"
              >
                <Instagram className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="group relative p-3 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-500 transition-all duration-300 hover-glow"
              >
                <MessageCircle className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 animate-fade-in animation-delay-200">
            <h3 className="text-lg font-semibold text-gradient">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/portfolio" className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                Portfolio
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                Services
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <h3 className="text-lg font-semibold text-gradient">Services</h3>
            <div className="space-y-3">
              <p className="text-gray-300">Wedding Photography</p>
              <p className="text-gray-300">Portrait Sessions</p>
              <p className="text-gray-300">Event Photography</p>
              <p className="text-gray-300">Product Photography</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-600">
            <h3 className="text-lg font-semibold text-gradient">Contact</h3>
            <div className="space-y-4">
              {phoneInfo && (
                <div className="flex items-start space-x-3 group">
                  <phoneInfo.icon className="h-5 w-5 text-cyan-400 mt-0.5 group-hover:scale-110 transition-transform" />
                  <a href={phoneInfo.action} className="text-gray-300 hover:text-white transition-colors">
                    {phoneInfo.details}
                  </a>
                </div>
              )}
              {emailInfo && (
                <div className="flex items-start space-x-3 group">
                  <emailInfo.icon className="h-5 w-5 text-cyan-400 mt-0.5 group-hover:scale-110 transition-transform" />
                  <a href={emailInfo.action} className="text-gray-300 hover:text-white transition-colors break-all">
                    {emailInfo.details}
                  </a>
                </div>
              )}
              {addressInfo && (
                <div className="flex items-start space-x-3 group">
                  <addressInfo.icon className="h-5 w-5 text-cyan-400 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300">{addressInfo.details}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; <span>{new Date().getFullYear()}</span> <span className="text-gradient font-semibold">The Prism Eye</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;