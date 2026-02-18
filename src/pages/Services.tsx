
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Check, Calculator } from "lucide-react";
import { serviceData, faqs } from '../data/clientData';
import QuoteCalculator from '../components/QuoteCalculator';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const [activeService, setActiveService] = useState("wedding");
  const [showCalculator, setShowCalculator] = useState(false);
  const navigate = useNavigate();

  // services data removed

  const currentService = serviceData[activeService as keyof typeof serviceData];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <Helmet>
        <title>Our Services | Rudra Digital Studio</title>
        <meta name="description" content="Explore our professional photography packages for weddings, portraits, events, and products. Customizable options to suit your needs." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services & Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional photography services tailored to capture your most
            important moments with exceptional quality and artistic vision.
          </p>
        </div>

        {/* Service Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(serviceData).map(([key, service]) => (
            <button
              key={key}
              onClick={() => setActiveService(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${activeService === key
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg"
                  : "glass text-gray-700 hover:bg-white/50"
                }`}
            >
              <service.icon className="h-5 w-5" />
              <span>{service.title}</span>
            </button>
          ))}
        </div>

        {/* Service Details */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <currentService.icon className="h-8 w-8 text-yellow-400" />
              <h2 className="text-3xl font-bold text-gray-900">
                {currentService.title}
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              {currentService.description}
            </p>
          </div>

          {/* Pricing Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentService.packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg - white border - 2 rounded - 2xl p - 8 shadow - lg hover: shadow - xl transition - all duration - 300 transform hover: scale - 105 ${index === 1 ? "border-yellow-400 relative" : "border-gray-200"
                  } `}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-3xl font-bold text-yellow-400 mb-1">
                    {pkg.price}
                  </p>
                  <p className="text-gray-600">{pkg.duration}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-2"
                    >
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate(`/ contact ? service = ${activeService}& package=${encodeURIComponent(pkg.name)} `)}
                  className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                >
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-black text-lg">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">
                Discuss your vision and requirements
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-black text-lg">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">
                Detailed session planning and preparation
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-black text-lg">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Photography</h3>
              <p className="text-gray-600">
                Professional photo session execution
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-black text-lg">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Delivery</h3>
              <p className="text-gray-600">
                Professionally edited photos delivered
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-12 bg-black text-white rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Book Your Session?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your photography needs and create something beautiful
            together. Contact us today for a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowCalculator(true)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover-glow transition-all duration-300 hover:scale-105"
            >
              <Calculator className="h-5 w-5" />
              Calculate Your Quote
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 glass text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Quote Calculator Modal */}
      {showCalculator && (
        <QuoteCalculator onClose={() => setShowCalculator(false)} />
      )}
    </div>
  );
};

export default Services;
