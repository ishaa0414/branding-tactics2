import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Testimonials data
const testimonials = [
  {
    id: 1,
    content: "Previously I was working with a big agency from India but the quality I was getting was not expected from them. First I was so so afraid to work with him because we never worked with any freelancer before, to design our brand identity. But we thought why not take a chance, believe me he delivered the things that was beyond my expectations, the way he explained me whole elements and all the design elements to me was so so amazing. He is on time delivered me on my estimated budget and reasonable price. I've worked with him on more than six Brands of ours and will definitely work with him in future. Kudos to him and all the very best.",
    author: "Pawan Kumar",
    company: "Artkala Productions",
    color: "#C517E6",
    hoverColor: "#D93DFA"
  },
  {
    id: 2,
    content: "Working with Rishav on the logo design for FIZMAA was a seamless and deeply satisfying experience. From the very beginning, he demonstrated an impressive depth of research and understanding of our brand's mission, to revolutionize the way people hire vendors through a smart, digital platform. What stood out most was Rishav's ability to truly listen. He didn't just take a brief; he absorbed the vision, asked the right questions, and came back with a concept that captured the heart of what FIZMAA stands for. The process was clear, collaborative, and efficient, he respected our timelines and maintained constant communication throughout. The outcome speaks for itself.",
    author: "Tejas Jadhav",
    company: "Fizmaa",
    color: "#FF176C",
    hoverColor: "#FF4889"
  },
  {
    id: 3,
    content: "Working with Rishav was a smooth and insightful experience. The depth of research he brought to the table really stood out. He clearly spent time understanding the nuances before jumping in. The process was thoughtful, well structured and collaborative throughout. And the outcome were sharp, clean and on point everytime. He clearly understood our requirements and accordingly delivered ahead of time. Definitely recommend.",
    author: "Shashak Singh",
    company: "Acrements",
    color: "#0DF5D0",
    hoverColor: "#4FFADE"
  },
  {
    id: 4,
    content: "The logo and overall brand design you've created are nothing short of extraordinary. You've not only captured the essence of what the brand stands for — tradition, freedom, emotion, and authenticity — but also given it a visual identity that is both modern and deeply meaningful. Every detail feels intentional and aligned with the story we're trying to tell, and it has already started resonating with people in ways I couldn't have imagined. Your creativity, patience, and thoughtful approach have made this journey a very special one.",
    author: "Vaishnav",
    company: "Dad's Sparrow",
    color: "#FFE11F",
    hoverColor: "#FFEA5C"
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMore, setShowMore] = useState({});
  const [hoveredCard, setHoveredCard] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance testimonials
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentTestimonial, isPaused]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToTestimonial = (index) => {
    if (isAnimating || index === currentTestimonial) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial(index);
      setIsAnimating(false);
    }, 300);
  };

  const toggleShowMore = (id) => {
    setShowMore(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    // Pause auto-advance when expanding content
    setIsPaused(true);
    // Resume after 15 seconds of reading time
    setTimeout(() => setIsPaused(false), 15000);
  };

  const truncateText = (text, wordLimit = 50) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <div className="py-12 px-4" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex-col text-center justify-center items-center mt-10 mb-10">
          <p className="text-2xl" style={{ color: "#AAAAAA" }}>
            Client Stories:
          </p>
          <p className="text-3xl font-bold" style={{ color: "#FFFFFF" }}>
            What Our Clients Say
          </p>
        </div>

        {/* Current Testimonial Card */}
        <div className="mb-8 cursor-pointer">
          <div 
            className="relative w-full transform transition-all duration-300 ease-in-out"
            onMouseEnter={() => setHoveredCard(true)}
            onMouseLeave={() => setHoveredCard(false)}
            style={{
              transform: hoveredCard ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          >
            {/* Shadow element with animation */}
            <span 
              className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg transition-all duration-300"
              style={{ 
                backgroundColor: hoveredCard ? currentData.hoverColor : currentData.color,
                transform: hoveredCard ? 'translate(3px, 3px)' : 'translate(4px, 4px)',
                opacity: hoveredCard ? 0.9 : 0.8
              }}
            ></span>
            
            {/* Card content */}
            <div 
              className={`relative p-6 border-2 rounded-lg transition-all duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
              style={{ 
                backgroundColor: hoveredCard ? "rgba(30, 30, 30, 0.95)" : "#121212",
                borderColor: hoveredCard ? currentData.hoverColor : currentData.color,
                boxShadow: hoveredCard ? `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(${parseInt(currentData.color.slice(1, 3), 16)}, ${parseInt(currentData.color.slice(3, 5), 16)}, ${parseInt(currentData.color.slice(5, 7), 16)}, 0.3)` : 'none'
              }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Content Section */}
                <div className="flex-1">
                  <div 
                    className="text-4xl font-bold mb-4 transition-all duration-300"
                    style={{ 
                      color: hoveredCard ? currentData.hoverColor : currentData.color,
                      transform: hoveredCard ? 'translateX(5px)' : 'translateX(0)'
                    }}
                  >
                    {String(currentTestimonial + 1).padStart(2, '0')}
                  </div>
                  
                  <h3 
                    className="text-2xl md:text-3xl mb-6 transition-all duration-300" 
                    style={{ 
                      color: hoveredCard ? currentData.hoverColor : "#FFFFFF",
                      transform: hoveredCard ? 'translateX(5px)' : 'translateX(0)'
                    }}
                  >
                    Client Testimonials
                  </h3>
                  
                  <p 
                    className="mt-3 mb-1 text-xs font-medium uppercase transition-all duration-300"
                    style={{ 
                      color: hoveredCard ? currentData.hoverColor : currentData.color,
                    }}
                  >
                    ------------
                  </p>
                  
                  <div style={{ color: "#FFFFFF" }}>
                    <div className="relative">
                      <Quote 
                        className="absolute -top-2 -left-2 w-6 h-6 transition-all duration-300" 
                        style={{ color: hoveredCard ? `${currentData.hoverColor}50` : `${currentData.color}50` }}
                      />
                      <p 
                        className="mb-4 italic pl-6 transition-all duration-300" 
                        style={{ 
                          transform: hoveredCard ? 'translateY(3px)' : 'translateY(0)'
                        }}
                      >
                        {showMore[currentData.id] 
                          ? currentData.content
                          : truncateText(currentData.content)
                        }
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-6">
                      <button 
                        onClick={() => toggleShowMore(currentData.id)}
                        className="flex items-center hover:opacity-80 transition-all duration-300"
                        style={{ 
                          color: hoveredCard ? currentData.hoverColor : currentData.color
                        }}
                      >
                        Show {showMore[currentData.id] ? 'Less' : 'More'} —
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Author Info Section */}
                <div className="md:w-1/3 flex flex-col justify-center">
                  <div 
                    className="rounded-lg p-6 text-center border-2 transition-all duration-300"
                    style={{ 
                      backgroundColor: "#1A1A1A",
                      borderColor: hoveredCard ? currentData.hoverColor : currentData.color
                    }}
                  >
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300"
                      style={{ 
                        backgroundColor: hoveredCard ? `${currentData.hoverColor}20` : `${currentData.color}20`
                      }}
                    >
                      <span 
                        className="text-2xl font-bold transition-all duration-300"
                        style={{ 
                          color: hoveredCard ? currentData.hoverColor : currentData.color
                        }}
                      >
                        {currentData.author.charAt(0)}
                      </span>
                    </div>
                    <h4 
                      className="text-xl font-bold mb-2 transition-all duration-300" 
                      style={{ 
                        color: hoveredCard ? currentData.hoverColor : "#FFFFFF"
                      }}
                    >
                      {currentData.author}
                    </h4>
                    <p className="text-sm" style={{ color: "#AAAAAA" }}>
                      {currentData.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-8">
          {/* Previous/Next Buttons */}
          <div className="flex gap-3">
            <button
              onClick={prevTestimonial}
              disabled={isAnimating}
              className="border-2 rounded-full p-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ 
                backgroundColor: "#121212",
                borderColor: hoveredCard ? currentData.hoverColor : currentData.color
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft 
                className="w-5 h-5 transition-all duration-300" 
                style={{ color: hoveredCard ? currentData.hoverColor : currentData.color }}
              />
            </button>
            
            <button
              onClick={nextTestimonial}
              disabled={isAnimating}
              className="border-2 rounded-full p-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ 
                backgroundColor: "#121212",
                borderColor: hoveredCard ? currentData.hoverColor : currentData.color
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight 
                className="w-5 h-5 transition-all duration-300" 
                style={{ color: hoveredCard ? currentData.hoverColor : currentData.color }}
              />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: index === currentTestimonial 
                    ? (hoveredCard ? currentData.hoverColor : currentData.color)
                    : '#666666'
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full rounded-full h-1 overflow-hidden" style={{ backgroundColor: "#333333" }}>
            <div 
              className="h-1 rounded-full transition-all duration-700"
              style={{ 
                backgroundColor: hoveredCard ? currentData.hoverColor : currentData.color,
                width: `${((currentTestimonial + 1) / testimonials.length) * 100}%`
              }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm" style={{ color: "#AAAAAA" }}>
            <span>{currentTestimonial + 1} of {testimonials.length}</span>
            <span>Client Testimonials</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <a 
            href="https://superprofile.bio/brandingtactics?fbclid=PAZXh0bgNhZW0CMTEAAadatm808cqzeYJghPSCZHEXDihI0qSDc2IodHxWVjWtmlOt-e_eQlOYzn0ESw_aem_i1soeOjRWKYNTb4eaAymlg" 
            className="border-2 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base text-white transition duration-300"
            style={{ 
              borderColor: "#FF8C00",
              backgroundColor: "transparent"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "rgba(255, 140, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
            }}
            rel="noopener"
          >
            Start Your Brand Journey
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;