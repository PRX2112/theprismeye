import React, { useState } from 'react';
import { Lock, Download, Heart, Eye, X } from 'lucide-react';
import { sampleImages, GALLERY_PASSWORD } from '../data/clientData';
import { Helmet } from 'react-helmet-async';

const ClientProofing = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedImages, setSelectedImages] = useState<number[]>([]);
  const [viewingImage, setViewingImage] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in real app, this would be more secure
    if (password === GALLERY_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Please contact your photographer.');
    }
  };



  const toggleImageSelection = (index: number) => {
    setSelectedImages(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <Lock className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Client Gallery Access</h1>
            <p className="text-gray-600">Enter your password to view your photos</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                placeholder="Enter your gallery password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              Access Gallery
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Don't have the password? Contact your photographer:</p>
            <a href="mailto:hello@prxdigital.com" className="text-yellow-600 hover:text-yellow-700">
              hello@prxdigital.com
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-white">
      <Helmet>
        <title>Client Proofing | The Prism Eye</title>
        <meta name="description" content="Private gallery access for clients to view and select their photos." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Photo Gallery
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Welcome to your private gallery! Browse, select favorites, and download your photos.
          </p>

          {/* Gallery Stats */}
          <div className="bg-gray-50 rounded-lg p-6 inline-block">
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{sampleImages.length}</p>
                <p className="text-sm text-gray-600">Total Photos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-400">{selectedImages.length}</p>
                <p className="text-sm text-gray-600">Selected</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
            <Download className="h-5 w-5" />
            <span>Download Selected ({selectedImages.length})</span>
          </button>
          <button className="flex items-center space-x-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300">
            <Heart className="h-5 w-5" />
            <span>Mark as Favorites</span>
          </button>
          <button
            onClick={() => setSelectedImages([])}
            className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
          >
            <X className="h-5 w-5" />
            <span>Clear Selection</span>
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sampleImages.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-lg aspect-square bg-gray-100 ${selectedImages.includes(index) ? 'ring-4 ring-yellow-400' : ''
                }`}
              onClick={() => toggleImageSelection(index)}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Selection Indicator */}
              <div className={`absolute top-3 right-3 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 ${selectedImages.includes(index)
                ? 'bg-yellow-400'
                : 'bg-black/30 group-hover:bg-black/50'
                }`}>
                {selectedImages.includes(index) && (
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>

              {/* View Full Size Button */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setViewingImage(image);
                  }}
                  className="bg-white text-black px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <Eye className="h-4 w-4" />
                  <span>View</span>
                </button>
              </div>

              {/* Image Number */}
              <div className="absolute bottom-3 left-3 bg-black/70 text-white text-sm px-2 py-1 rounded">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Full Size Image Modal */}
        {viewingImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setViewingImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={viewingImage}
                alt="Full size view"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use This Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-black text-lg">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Select Photos</h3>
              <p className="text-gray-600 text-sm">Click on photos to select them for download or marking as favorites</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-black text-lg">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">View Full Size</h3>
              <p className="text-gray-600 text-sm">Hover over photos and click "View" to see them in full resolution</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-black text-lg">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Download</h3>
              <p className="text-gray-600 text-sm">Use the download button to get high-resolution versions of your selected photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProofing;