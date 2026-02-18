import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { contactInfo } from '../data/clientData';
import { Helmet } from 'react-helmet-async';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: searchParams.get('service') || '',
    date: '',
    message: searchParams.get('package') ? `I am interested in the ${searchParams.get('package')} package.` : ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but if provided, should be valid)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("https://formsubmit.co/e335bb8cd609c2216e4313710e22ace3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('FormSubmit error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Duplicate import removed


  return (
    <div className="pt-20 min-h-screen bg-white">
      <Helmet>
        <title>Contact Us | The Prism Eye</title>
        <meta name="description" content="Get in touch with The Prism Eye for bookings and inquiries. Visit our studio in Surat or contact us via phone or email." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to capture your special moments? We'd love to hear about your vision and
            discuss how we can bring it to life through our photography services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <p className="text-green-700">Thank you for your inquiry! We'll get back to you within 24 hours.</p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <p className="text-red-700">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 ${errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                    placeholder="+91 9925862371"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 ${errors.service ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                  >
                    <option value="">Select a service</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="portrait">Portrait Photography</option>
                    <option value="event">Event Photography</option>
                    <option value="product">Product Photography</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.service}</span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none ${errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  placeholder="Tell us about your vision, event details, or any specific requirements..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 ${isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-black hover:bg-gray-800 text-white'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <div className="bg-yellow-400 p-3 rounded-full">
                    <info.icon className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                    {info.action.startsWith('#') ? (
                      <p className="text-gray-600">{info.details}</p>
                    ) : (
                      <a
                        href={info.action}
                        className="text-gray-600 hover:text-yellow-600 transition-colors"
                      >
                        {info.details}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/the.nsclicks/" className="bg-gradient-to-r from-purple-400 to-pink-500 p-3 rounded-full text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
              <p className="text-gray-600 mt-4">
                Follow us for the latest work, behind-the-scenes content, and photography tips!
              </p>
            </div>

            {/* Map Placeholder */}
            {/* <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Visit Our Studio</h3>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <iframe className='bg-gray-200 h-64 rounded-lg flex items-center justify-center' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3713.4241050677374!2d72.9478442!3d21.4518697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be03be85b04031d%3A0xa9765c95ad966d62!2sRudra%20Digital%20Studio!5e0!3m2!1sen!2sin!4v1756356992820!5m2!1sen!2sin" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 bg-black text-white rounded-2xl p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Let's Create Something Beautiful</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're excited to learn about your project and discuss how we can capture your vision.
              Whether it's a wedding, portrait session, or corporate event, we're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-yellow-400 mb-2">Quick Response</h3>
              <p className="text-gray-300 text-sm">We typically respond to inquiries within 24 hours</p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-400 mb-2">Free Consultation</h3>
              <p className="text-gray-300 text-sm">Initial consultation is always complimentary</p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-400 mb-2">Custom Packages</h3>
              <p className="text-gray-300 text-sm">Every quote is tailored to your specific needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;