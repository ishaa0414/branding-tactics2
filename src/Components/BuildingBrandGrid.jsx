// import React from 'react';

// const BuildingBrandGrid = () => {
//   return (
//     <>
//       <div className="flex-col text-center justify-center items-center mt-10 mb-10">
//         <p className="text-2xl text-[#AAAAAA]">
//           A Strategic Approach to
//         </p>
//         <p className="text-3xl text-[#FFFFFF]">
//           Building Brands
//         </p>
//       </div>

//       {/* Mobile view (single column) */}
//       <div className="md:hidden flex w-full flex-col items-center justify-center p-4 bg-[#121212]">
//         <div className="grid w-full grid-cols-1 gap-4">
//           {/* 01 - Research-Backed Process */}
//           <div className="bg-[#1E1E1E] p-4 rounded-lg border-[#FFE11F] border-[0.4px] flex flex-col h-full">
//             <div className='flex justify-start mb-4'>
//               <p className='text-center text-white bg-[#C517E6] h-6 w-6 rounded-full flex items-center justify-center'>01</p>
//             </div>
//             <div className='flex flex-col justify-between flex-grow'>
//               <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
//                 Research-Backed Process
//               </h3>
//               <p className='text-center mx-auto text-[#AAAAAA] max-w-xs'>
//                 We dive deep into your business, audience, and competition to craft a strategy that ensures differentiation and market fit.
//               </p>
//             </div>
//           </div>

//           {/* 02 - Founder-First Approach */}
//           <div className="bg-[#1E1E1E] p-4 rounded-lg border-[#FFE11F] border-[0.4px] flex flex-col h-full">
//             <div className='flex justify-start mb-4'>
//               <p className='text-center text-white bg-[#FF176C] h-6 w-6 rounded-full flex items-center justify-center'>02</p>
//             </div>
//             <div className='flex flex-col justify-between flex-grow'>
//               <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
//                 Founder-First Approach
//               </h3>
//               <p className='text-center mx-auto text-[#AAAAAA] max-w-xs'>
//                 Your vision is at the core of our process. We align branding with your business goals and audience psychology to create meaningful connections.
//               </p>
//             </div>
//           </div>

//           {/* 03 - Relentless Iteration */}
//           <div className="bg-[#1E1E1E] p-4 rounded-lg border-[#FFE11F] border-[0.4px] flex flex-col h-full">
//             <div className='flex justify-start mb-4'>
//               <p className='text-center text-white bg-[#FF4B19] h-6 w-6 rounded-full flex items-center justify-center'>03</p>
//             </div>
//             <div className='flex flex-col justify-between flex-grow'>
//               <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
//                 Relentless Iteration
//               </h3>
//               <p className='text-center mx-auto text-[#AAAAAA] max-w-xs'>
//                 Great brands aren't rushed—they're crafted. We refine obsessively, sometimes exploring 1000+ iterations to ensure precision and impact.
//               </p>
//             </div>
//           </div>

//           {/* 04 - Rigorous Testing */}
//           <div className="bg-[#1E1E1E] p-4 rounded-lg border-[#FFE11F] border-[0.4px] flex flex-col h-full">
//             <div className='flex justify-start mb-4'>
//               <p className='text-center text-white bg-[#4B19FF] h-6 w-6 rounded-full flex items-center justify-center'>04</p>
//             </div>
//             <div className='flex flex-col justify-between flex-grow'>
//               <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
//                 Rigorous Testing
//               </h3>
//               <p className='text-center mx-auto text-[#AAAAAA] max-w-xs'>
//                 We ensure functionality, legibility, and aesthetic excellence through in-depth validation across real-world use cases.
//               </p>
//             </div>
//           </div>

//           {/* 05 - Cohesive Brand Systems */}
//           <div className="bg-[#1E1E1E] p-4 rounded-lg border-[#FFE11F] border-[0.4px] flex flex-col h-full">
//             <div className='flex justify-start mb-4'>
//               <p className='text-center text-white bg-[#E617C5] h-6 w-6 rounded-full flex items-center justify-center'>05</p>
//             </div>
//             <div className='flex flex-col justify-between flex-grow'>
//               <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
//                 Cohesive Brand Systems
//               </h3>
//               <p className='text-center mx-auto text-[#AAAAAA] max-w-xs'>
//                 Every element, from typography to color, is designed to work seamlessly across all touchpoints.
//               </p>
//             </div>
//           </div>

//           {/* 06 - Messaging & Storytelling */}
//           <div className="bg-[#1E1E1E] p-4 rounded-lg border-[#FFE11F] border-[0.4px] flex flex-col h-full">
//             <div className='flex justify-start mb-4'>
//               <p className='text-center text-white bg-[#FF8019] h-6 w-6 rounded-full flex items-center justify-center'>06</p>
//             </div>
//             <div className='flex flex-col justify-between flex-grow'>
//               <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
//                 Messaging & Storytelling
//               </h3>
//               <p className='text-center mx-auto text-[#AAAAAA] max-w-xs'>
//                 Branding isn't just about looks—it's about how your brand speaks, feels, and connects with your audience. We craft compelling brand messaging that strengthens emotional connection and customer trust—not just visuals.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Desktop bento grid view */}
//       <div className="hidden md:flex w-full flex-col items-center justify-center p-4 bg-[#121212]">
//         <div className="grid w-full grid-cols-10 grid-rows-2 gap-4">
//           {/* 01 - Research-Backed Process */}
//           <div className="col-span-4 bg-[#1E1E1E] rounded-lg p-4 lg:p-6 border-[#FFE11F] border-[0.4px] flex flex-col h-full">
//             <div className='flex justify-start mb-4'>
//               <p className='text-center text-white bg-[#C517E6] h-6 w-6 rounded-full flex items-center justify-center'>01</p>
//             </div>
//             <div className='flex flex-col justify-between flex-grow'>
//               <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
//                 Research-Backed Process
//               </h3>
//               <p className='text-center mx-auto text-[#AAAAAA]'>
//                 We dive deep into your business, audience, and competition to craft a strategy that ensures differentiation and market fit.
//               </p>
//             </div>
//           </div>

//           {/* 02 - Founder-First Approach */}
//           <div className="col-span-4 bg-[#1E1E1E] rounded-lg p-4 lg:p-6 border-[#FFE11F] border-[0.4px] flex flex-col h-full">
//             <div className='flex justify-start mb-4'>
//               <p className='text-center text-white bg-[#FF176C] h-6 w-6 rounded-full flex items-center justify-center'>02</p>
//             </div>
//             <div className='flex flex-col justify-between flex-grow'>
//               <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
//                 Founder-First Approach
//               </h3>
//               <p className='text-center mx-auto text-[#AAAAAA]'>
//                 Your vision is at the core of our process. We align branding with your business goals and audience psychology to create meaningful connections.
//               </p>
//             </div>
//           </div>

//           {/* 06 - Messaging & Storytelling */}
//           <div className="col-span-2 row-span-2 bg-[#1E1E1E] rounded-lg p-4 lg:p-6 border-[#FFE11F] border-[0.4px] flex flex-col h-full">
//             <div className='flex justify-start mb-4'>
//               <p className='text-center text-white bg-[#FF8019] h-6 w-6 rounded-full flex items-center justify-center'>06</p>
//             </div>
//             <div className='flex flex-col justify-between flex-grow'>
//               <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
//                 Messaging & Storytelling
//               </h3>
//               <p className='text-center mx-auto text-[#AAAAAA]'>
//                 Branding isn't just about looks—it's about how your brand speaks, feels, and connects with your audience. We craft compelling brand messaging that strengthens emotional connection and customer trust—not just visuals.
//               </p>
//             </div>
//           </div>

//           {/* 03 - Relentless Iteration */}
//           <div className="col-span-4 bg-[#1E1E1E] rounded-lg p-4 lg:p-6 border-[#FFE11F] border-[0.4px] flex flex-col h-full">
//             <div className='flex justify-start mb-4'>
//               <p className='text-center text-white bg-[#FF4B19] h-6 w-6 rounded-full flex items-center justify-center'>03</p>
//             </div>
//             <div className='flex flex-col justify-between flex-grow'>
//               <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
//                 Relentless Iteration
//               </h3>
//               <p className='text-center mx-auto text-[#AAAAAA]'>
//                 Great brands aren't rushed—they're crafted. We refine obsessively, sometimes exploring 1000+ iterations to ensure precision and impact.
//               </p>
//             </div>
//           </div>

//           {/* 04 - Rigorous Testing */}
//           <div className="col-span-2 row-span-2 bg-[#1E1E1E] rounded-lg p-0 lg:p-0 border-[#FFE11F] border-[0.4px] flex flex-col h-full">
//             <div className='flex justify-start mb-4'>
//               <p className='text-center text-white bg-[#4B19FF] h-6 w-6 rounded-full flex items-center justify-center'>04</p>
//             </div>
//             <div className='flex flex-col justify-between flex-grow'>
//               <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
//                 Rigorous Testing
//               </h3>
//               <p className='text-center mx-auto text-[#AAAAAA]'>
//                 We ensure functionality, legibility, and aesthetic excellence through in-depth validation across real-world use cases.
//               </p>
//             </div>
//           </div>

//           {/* 05 - Cohesive Brand Systems */}
//           <div className="col-span-2 row-span-2 bg-[#1E1E1E] rounded-lg p-4 lg:p-6 border-[#FFE11F] border-[0.4px] flex flex-col h-full">
//             <div className='flex justify-start mb-4'>
//               <p className='text-center text-white bg-[#E617C5] h-6 w-6 rounded-full flex items-center justify-center'>05</p>
//             </div>
//             <div className='flex flex-col justify-between flex-grow'>
//               <h3 className='text-center mb-3 text-white text-lg md:text-xl font-medium'>
//                 Cohesive Brand Systems
//               </h3>
//               <p className='text-center mx-auto text-[#AAAAAA]'>
//                 Every element, from typography to color, is designed to work seamlessly across all touchpoints.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BuildingBrandGrid;

import React from 'react';
import { useState } from 'react';

const BuildingBrandGrid = () => {
  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Array of card data for easier mapping
  const cards = [
    {
      id: 1,
      title: "Research-Backed Process",
      description: "We dive deep into your business, audience, and competition to craft a strategy that ensures differentiation and market fit.",
      color: "#C517E6",
      hoverColor: "#D93DFA",
      borderColor: "#C517E6",
      lineColor: "text-indigo-500"
    },
    {
      id: 2,
      title: "Founder-First Approach",
      description: "Your vision is at the core of our process. We align branding with your business goals and audience psychology to create meaningful connections.",
      color: "#FF176C",
      hoverColor: "#FF4889",
      borderColor: "#FF176C",
      lineColor: "text-purple-500"
    },
    {
      id: 3,
      title: "Relentless Iteration",
      description: "Great brands aren't rushed—they're crafted. We refine obsessively, sometimes exploring 1000+ iterations to ensure precision and impact.",
      color: "#0DF5D0",
      hoverColor: "#4FFADE",
      borderColor: "#0DF5D0",
      lineColor: "text-blue-400"
    },
    {
      id: 4,
      title: "Rigorous Testing",
      description: "We ensure functionality, legibility, and aesthetic excellence through in-depth validation across real-world use cases.",
      color: "#FFE11F",
      hoverColor: "#FFEA5C",
      borderColor: "#FFE11F",
      lineColor: "text-yellow-400"
    },
    {
      id: 5,
      title: "Cohesive Brand Systems",
      description: "Every element, from typography to color, is designed to work seamlessly across all touchpoints.",
      color: "#22c55e",
      hoverColor: "#34d77a",
      borderColor: "#22c55e",
      lineColor: "text-green-500"
    }
  ];

  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      {/* Header with entrance animation */}
      <div className="flex-col text-center justify-center items-center mt-10 mb-10 opacity-0 animate-fadeIn">
        <p className="text-2xl" style={{ color: "#AAAAAA" }}>
          A Strategic Approach to
        </p>
        <p className="text-3xl" style={{ color: "#FFFFFF" }}>
          Building Brands
        </p>
      </div>
      
      <p className="mb-12 text-lg text-center opacity-0 animate-slideUp" style={{ color: "#DDDDDD" }}>
        Branding isn't just about looks—it's about how your brand speaks, feels, and connects with your audience. 
        We craft compelling brand messaging that strengthens emotional connection and customer trust—not just visuals.
      </p>
      
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row cursor-pointer">
          {cards.slice(0, 2).map((card, index) => (
            <div 
              key={card.id}
              className="w-full mb-10 sm:mb-0 sm:w-1/2 transform transition-all duration-300 ease-in-out"
              style={{ 
                animationDelay: `${index * 150}ms`
              }}
            >
              <div 
                className="relative h-full ml-0 mr-0 sm:mr-10"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === card.id ? 'translateY(-8px) scale(1.03)' : 'translateY(0) scale(1)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
              >
                {/* Shadow element with animation */}
                <span 
                  className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg transition-all duration-300"
                  style={{ 
                    backgroundColor: hoveredCard === card.id ? card.hoverColor : card.color,
                    transform: hoveredCard === card.id ? 'translate(3px, 3px)' : 'translate(4px, 4px)',
                    opacity: hoveredCard === card.id ? 0.9 : 0.8
                  }}
                ></span>
                
                {/* Card content */}
                <div 
                  className="relative h-full p-5 border-2 rounded-lg transition-all duration-500 "
                  style={{ 
                    backgroundColor: hoveredCard === card.id ? "rgba(30, 30, 30, 0.95)" : "#121212",
                    borderColor: hoveredCard === card.id ? card.hoverColor : card.color,
                    boxShadow: hoveredCard === card.id ? `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(${parseInt(card.color.slice(1, 3), 16)}, ${parseInt(card.color.slice(3, 5), 16)}, ${parseInt(card.color.slice(5, 7), 16)}, 0.3)` : 'none'
                  }}
                >
                  <div className="flex items-center -mt-1">
                    <h3 
                      className="my-2 ml-3 text-lg font-bold transition-all duration-300" 
                      style={{ 
                        color: hoveredCard === card.id ? card.hoverColor : "#FFFFFF",
                        transform: hoveredCard === card.id ? 'translateX(5px)' : 'translateX(0)'
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <p 
                    className={`mt-3 mb-1 text-xs font-medium uppercase transition-all duration-300 cursor-pointer`}
                    style={{ 
                      color: hoveredCard === card.id ? card.hoverColor : '',
                      width: hoveredCard === card.id ? '50%' : 'auto'
                    }}
                  >
                    ------------
                  </p>
                  <p 
                    className="mb-2 transition-all duration-300" 
                    style={{ 
                      color: "#FFFFFF",
                      transform: hoveredCard === card.id ? 'translateY(3px)' : 'translateY(0)'
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col w-full mb-5 sm:flex-row cursor-pointer">
          {cards.slice(2).map((card, index) => (
            <div 
              key={card.id}
              className="w-full mb-10 sm:mb-0 sm:w-1/3 transform transition-all duration-300 ease-in-out"
              style={{ 
                animationDelay: `${(index + 2) * 150}ms`
              }}
            >
              <div 
                className="relative h-full ml-0 mr-0 sm:mr-10"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === card.id ? 'translateY(-8px) scale(1.03)' : 'translateY(0) scale(1)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
              >
                {/* Shadow element with animation */}
                <span 
                  className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg transition-all duration-300"
                  style={{ 
                    backgroundColor: hoveredCard === card.id ? card.hoverColor : card.color,
                    transform: hoveredCard === card.id ? 'translate(3px, 3px)' : 'translate(4px, 4px)',
                    opacity: hoveredCard === card.id ? 0.9 : 0.8
                  }}
                ></span>
                
                {/* Card content */}
                <div 
                  className="relative h-full p-5 border-2 rounded-lg transition-all duration-500"
                  style={{ 
                    backgroundColor: hoveredCard === card.id ? "rgba(30, 30, 30, 0.95)" : "#121212",
                    borderColor: hoveredCard === card.id ? card.hoverColor : card.color,
                    boxShadow: hoveredCard === card.id ? `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(${parseInt(card.color.slice(1, 3), 16)}, ${parseInt(card.color.slice(3, 5), 16)}, ${parseInt(card.color.slice(5, 7), 16)}, 0.3)` : 'none'
                  }}
                >
                  <div className="flex items-center -mt-1">
                    <h3 
                      className="my-2 ml-3 text-lg font-bold transition-all duration-300" 
                      style={{ 
                        color: hoveredCard === card.id ? card.hoverColor : "#FFFFFF",
                        transform: hoveredCard === card.id ? 'translateX(5px)' : 'translateX(0)'
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <p 
                    className={`mt-3 mb-1 text-xs font-medium uppercase transition-all duration-300`}
                    style={{ 
                      color: hoveredCard === card.id ? card.hoverColor : '',
                      width: hoveredCard === card.id ? '50%' : 'auto'
                    }}
                  >
                    ------------
                  </p>
                  <p 
                    className="mb-2 transition-all duration-300" 
                    style={{ 
                      color: "#FFFFFF",
                      transform: hoveredCard === card.id ? 'translateY(3px)' : 'translateY(0)'
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1.2s forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 1s forwards 0.3s;
        }
      `}</style>
    </div>
  );
};

export default BuildingBrandGrid;