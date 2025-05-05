import React from 'react';
import { Instagram, X, Linkedin, Facebook } from 'lucide-react';
import Footer from './Footer';

const GetInTouch = () => {
  return (
    <div className="bg-[#121212] text-white py-16 px-4 flex flex-col items-center">
      {/* Wireframe section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-10">
          Get in Touch – Let's Create Something Iconic
        </h2>
        
        <p className="text-lg mb-10">
          Ready to build a brand that stands out? Whether you need
          strategic branding, design, or a complete transformation,
          we're here to help. Let's discuss your vision and create
          something impactful together!
        </p>
{/*         
        <button className="bg-white text-black px-6 py-3 font-medium flex items-center mx-auto">
          LET'S TALK <span className="ml-2">→</span>
        </button> */}
           <div className="flex justify-center mt-8">
            <a href="https://superprofile.bio/brandingtactics?fbclid=PAZXh0bgNhZW0CMTEAAadatm808cqzeYJghPSCZHEXDihI0qSDc2IodHxWVjWtmlOt-e_eQlOYzn0ESw_aem_i1soeOjRWKYNTb4eaAymlg">
            <button  className=" cursor-pointer border border-orange-500 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base text-white hover:bg-orange-500/20 transition duration-300">
            Get In Touch
            </button>
            </a>
        
        </div>
      </div>
      
      {/* Footer section */}
   
    </div>
  );
};

export default GetInTouch;