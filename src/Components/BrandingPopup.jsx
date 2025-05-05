import React from 'react';

const BrandingPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  const handleDownload = () => {
    // Replace with your actual PDF download URL
    window.open('/assets/branding-guide.pdf', '_blank');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-200">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50" 
        onClick={onClose}
      ></div>
      
      {/* Popup container */}
      <div className="relative w-full max-w-md bg-black bg-opacity-80 text-white p-8 rounded-xl border border-orange-500 shadow-lg">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-orange-500 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Popup content */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-orange-500 mb-3">Exclusive Branding Resources</h3>
          <p className="mb-6">
            Download our comprehensive branding guide designed specifically for entrepreneurs who want to stand out in the market. This free PDF compilation includes actionable strategies, design templates, and expert tips from our 15+ years of experience.
          </p>
          <button 
            onClick={handleDownload}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Download Free Branding Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandingPopup;