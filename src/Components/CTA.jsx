import { useState } from 'react';
import { MessageCircle, Instagram } from 'lucide-react';

export default function FloatingSocialButtons() {
  const [hoveredButton, setHoveredButton] = useState(null);
  
  return (
    <div className="fixed right-6 bottom-24 flex flex-col gap-4 z-60">
      {/* WhatsApp Button */}
      <button
        className={`
          flex items-center
          rounded-full
          bg-green-500
          text-white
          shadow-lg
          transition-all duration-300
          overflow-hidden
          ${hoveredButton === 'whatsapp' ? 'w-48 justify-start px-4' : 'w-12 justify-center'}
          h-12
        `}
        onMouseEnter={() => setHoveredButton('whatsapp')}
        onMouseLeave={() => setHoveredButton(null)}
        onClick={() => window.open('https://wa.me/+918789814834', '_blank')}
      >
        <MessageCircle className="w-6 h-6 flex-shrink-0" />
        <span className={`ml-2 whitespace-nowrap font-medium transition-opacity duration-300 ${hoveredButton === 'whatsapp' ? 'opacity-100' : 'opacity-0 absolute'}`}>
          Chat with us
        </span>
      </button>

      {/* Instagram Button */}
      <button
        className={`
          flex items-center
          rounded-full
          bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500
          text-white
          shadow-lg
          transition-all duration-300
          overflow-hidden
          ${hoveredButton === 'instagram' ? 'w-48 justify-start px-4' : 'w-12 justify-center'}
          h-12
        `}
        onMouseEnter={() => setHoveredButton('instagram')}
        onMouseLeave={() => setHoveredButton(null)}
        onClick={() => window.open('https://instagram.com/brandingtactics', '_blank')}
      >
        <Instagram className="w-6 h-6 flex-shrink-0" />
        <span className={`ml-2 whitespace-nowrap font-medium transition-opacity duration-300 ${hoveredButton === 'instagram' ? 'opacity-100' : 'opacity-0 absolute'}`}>
          Follow us
        </span>
      </button>
    </div>
  );
}