import React from 'react';
import { Instagram, X, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-black text-white py-8 w-full">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-300">Copyright@2024| All rights reserved</p>
        </div>
        
        <div className="flex space-x-4">
          <a 
            href="https://www.instagram.com/brandingtactics/" 
            className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="https://x.com/brandingtactics" 
            className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition duration-300"
            aria-label="X"
          >
            <X size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/rishav-sagar/" 
            className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
       
        </div>
      </div>
    </div>
  );
};

export default Footer;