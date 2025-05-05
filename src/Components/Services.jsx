import React, { useState, useEffect, useRef } from 'react';
import { 
  Rocket, 
  Heart, 
  TrendingUp, 
  Target, 
  Users, 
  Lightbulb, 
  ArrowRight, 
  BookOpen, 
  UserCircle, 
  MessageSquare, 
  Tag, 
  Palette, 
  Type, 
  Layers, 
  Image, 
  Music, 
  Play, 
  Compass 
} from 'lucide-react';

// Group services by color category
const getServiceColor = (index) => {
  const colors = [
    "#C517E6", // Purple
    "#0DF5D0", // Cyan
    "#08EE86", // Green
    "#FFE11F", // Yellow
    "#FF4B19", // Orange
    "#FF176C"  // Pink
  ];
  return colors[index % colors.length];
};

const ServiceItem = ({ service, icon: Icon, index, isVisible }) => {
  const color = getServiceColor(index);
  const itemRef = useRef(null);
  
  // Calculate staggered delay for each item
  const delay = 0.05 * index;
  
  return (
    <div 
      ref={itemRef}
      className="p-2 sm:w-1/2 w-full"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`
      }}
    >
      <div className="bg-gray-100 dark:bg-[#1E1E1E] rounded flex p-4 h-full items-center transition-all duration-300 hover:bg-gray-200 dark:hover:bg-[#333333] group border-[0.4px] border-transparent hover:border-[#FFE11F] hover:scale-105 hover:shadow-lg">
        <div 
          className="bg-white dark:bg-[#333333] p-2 rounded-lg mr-3 transition-all duration-300 flex-shrink-0 relative overflow-hidden"
          style={{ 
            boxShadow: `0 0 0 1px ${color}`,
          }}
        >
          <Icon 
            className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:rotate-12" 
            style={{ color: color }} 
          />
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            style={{ 
              backgroundColor: color,
              transform: 'scale(0)',
              transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(0)';
            }}
          ></div>
        </div>
        <span className="font-medium text-gray-800 dark:text-[#FFFFFF] transition-transform duration-300 group-hover:translate-x-1">{service}</span>
      </div>
    </div>
  );
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);

  const services = [
    { name: "Brand Ideals", icon: Rocket },
    { name: "Brand Mantras", icon: Heart },
    { name: "Brand Equity", icon: TrendingUp },
    { name: "Brand Positioning", icon: Target },
    { name: "Brand Resonance", icon: Users },
    { name: "Brand Strategy", icon: Lightbulb },
    { name: "Entry Points", icon: ArrowRight },
    { name: "Brand Story", icon: BookOpen },
    { name: "Archetype", icon: UserCircle },
    { name: "Tone of voice", icon: MessageSquare },
    { name: "Naming", icon: Tag },
    { name: "Colour", icon: Palette },
    { name: "Typography", icon: Type },
    { name: "Identity Design", icon: Layers },
    { name: "Brand Imagery", icon: Image },
    { name: "Sonic Branding", icon: Music },
    { name: "Motion Branding", icon: Play },
    { name: "Creative Direction", icon: Compass }
  ];

  useEffect(() => {
    // Set up intersection observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const servicesObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        servicesObserver.unobserve(entries[0].target);
      }
    }, observerOptions);

    const ctaObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsCtaVisible(true);
        ctaObserver.unobserve(entries[0].target);
      }
    }, observerOptions);

    if (servicesRef.current) {
      servicesObserver.observe(servicesRef.current);
    }

    if (ctaRef.current) {
      ctaObserver.observe(ctaRef.current);
    }

    return () => {
      if (servicesRef.current) servicesObserver.unobserve(servicesRef.current);
      if (ctaRef.current) ctaObserver.unobserve(ctaRef.current);
    };
  }, []);

  // Animation for the blurred background
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBgPosition({
        x: Math.random() * 20 - 10,
        y: Math.random() * 20 - 10
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-[#121212] px-6 md:px-12">
      {/* Uncomment if needed
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center mt-10 mb-10">
          <p className="text-2xl text-[#AAAAAA] ">
            Trusted By
          </p>
          <p className="text-3xl text-[#FFFFFF]">
            Visionary Brands
          </p>
        </div>

        <div ref={servicesRef} className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
          {services.map((service, index) => (
            <ServiceItem 
              key={index} 
              service={service.name} 
              icon={service.icon} 
              index={index} 
              isVisible={isVisible}
            />
          ))}
        </div>
      */}
        
      <div 
        ref={ctaRef}
        className="p-8 bg-gray-100 dark:bg-[#1E1E1E] rounded-xl border border-gray-200 dark:border-[#333333] relative overflow-hidden mx-auto lg:w-4/5"
        style={{
          opacity: isCtaVisible ? 1 : 0,
          transform: isCtaVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        <div 
          className="absolute top-0 right-0 h-64 w-64 bg-indigo-500 dark:bg-[#FF4B19] opacity-5 blur-3xl rounded-full"
          style={{
            transform: `translate(${bgPosition.x}px, ${bgPosition.y}px)`,
            transition: 'transform 3s ease-in-out'
          }}
        ></div>
        <h3 
          className="text-gray-900 dark:text-[#FFFFFF] text-2xl font-bold mb-3"
          style={{
            opacity: isCtaVisible ? 1 : 0,
            transform: isCtaVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
          }}
        >
          Ready to transform your brand?
        </h3>
        <p 
          className="text-gray-600 dark:text-[#AAAAAA] mb-6"
          style={{
            opacity: isCtaVisible ? 1 : 0,
            transform: isCtaVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
          }}
        >
          Let's work together to build a distinctive brand that resonates with your audience.
        </p>
        <a href="https://superprofile.bio/brandingtactics?fbclid=PAZXh0bgNhZW0CMTEAAadatm808cqzeYJghPSCZHEXDihI0qSDc2IodHxWVjWtmlOt-e_eQlOYzn0ESw_aem_i1soeOjRWKYNTb4eaAymlg" className='cursor-pointer'>
        <button 
          className="cursor-pointer flex items-center justify-center border border-teal-400 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white hover:bg-teal-400/20 transition duration-300 relative overflow-hidden"
          style={{
            opacity: isCtaVisible ? 1 : 0,
            transform: isCtaVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={(e) => {
            // Create ripple effect
            const button = e.currentTarget;
            const circle = document.createElement('span');
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;
            
            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
            circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
            circle.style.position = 'absolute';
            circle.style.borderRadius = '50%';
            circle.style.backgroundColor = 'rgba(45, 212, 191, 0.2)';
            circle.style.transform = 'scale(0)';
            circle.style.animation = 'ripple 0.6s linear';
            
            button.appendChild(circle);
            
            setTimeout(() => {
              circle.remove();
            }, 600);
          }}
        >
          Get Started
          <ArrowRight 
            className="ml-2 w-4 h-4" 
            style={{
              transform: isHovering ? 'translateX(5px)' : 'translateX(0)',
              transition: 'transform 0.3s ease-out'
            }}
          />
        </button>
        </a>
      
      </div>

      {/* Add CSS animation for ripple effect */}
      <style jsx>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Services;