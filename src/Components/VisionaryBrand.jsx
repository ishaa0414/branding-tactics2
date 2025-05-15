import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet'; // For SEO meta tags
import Problems from "./Problems";
import bgVideo from '/bg-video/bg-video.mp4';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import logo from '/logo.svg';
import LoaderHomePage from './LoaderHomePage';
import BrandingPopup from './BrandingPopup';

// SEO Schema markup for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Branding Tactics",
  "description": "Serious branding services for entrepreneurs and businesses",
  "url": "https://brandingtactics.com", // Replace with your actual website URL
  "logo": "/logo.svg",
  "sameAs": [
    "https://www.instagram.com/brandingtactics", // Replace with your actual social media URLs
    "https://www.facebook.com/brandingtactics"
  ]
};

const clientLogos = [
  "/client logo/logo1.png",
  "/client logo/logo2.png",
  "/client logo/logo3.png",
  "/client logo/logo4.png",
  "/client logo/logo5.png",
  "/client logo/logo6.png",
  "/client logo/logo7.png",
  "/client logo/logo8.jpg",
  "/client logo/logo9.png",
  "/client logo/logo10.jpeg",
  "/client logo/logo11.png",
  "/client logo/logo12.png",
  "/client logo/logo13.png",
  "/client logo/logo14.jpg",
  "/client logo/logo15.png",
  "/client logo/logo16.png",
  "/client logo/logo17.jpg",
  "/client logo/logo18.png",
  "/client logo/logo19.png",
  "/client logo/logo20.png",
];

// Add client names for SEO and accessibility
const clientNames = [
  "Client 1 Name",
  "Client 2 Name",
  "Client 3 Name",
  "Client 4 Name",
  "Client 5 Name",
  "Client 6 Name",
  "Client 7 Name",
  "Client 8 Name",
  "Client 9 Name",
  "Client 10 Name",
  "Client 11 Name",
  "Client 12 Name",
  "Client 13 Name",
  "Client 14 Name",
  "Client 15 Name",
  "Client 16 Name",
  "Client 17 Name",
  "Client 18 Name",
  "Client 19 Name",
  "Client 20 Name",
];

const VisionaryBrand = () => {
  const [darkMode, setdarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  // Counter state for animations
  const [clientCount, setClientCount] = useState(0);
  const [followerCount, setFollowerCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  
  // Target values for counters
  const clientTarget = 100;
  const followerTarget = 13000;
  const yearsTarget = 5;
  
  // Animation started flag
  const [animationStarted, setAnimationStarted] = useState(false);
  
  // Handle video loaded event
  const handleVideoLoaded = () => {
    console.log("Video loaded successfully");
    setVideoLoaded(true);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    setdarkMode(!darkMode);
  };
  
  // Effect to handle loading state
  useEffect(() => {
    // If video is loaded, set a small delay before hiding loader for smooth transition
    if (videoLoaded) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
    
    // Fallback timer in case video load event doesn't fire
    const fallbackTimer = setTimeout(() => {
      console.log("Fallback timer triggered");
      setLoading(false);
    }, 8000); // Maximum wait time of 8 seconds
    
    return () => clearTimeout(fallbackTimer);
  }, [videoLoaded]);

  // Effect to handle counter animations when page is loaded
  useEffect(() => {
    if (!loading && !animationStarted) {
      setAnimationStarted(true);
      
      // Duration for animations in milliseconds
      const duration = 2000;
      const startTime = performance.now();
      
      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Calculate current values based on easeOutExpo function for smoother ending
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        
        // Update counter states
        setClientCount(Math.floor(easeOutProgress * clientTarget));
        setFollowerCount(Math.floor(easeOutProgress * followerTarget));
        setYearsCount(Math.min(Math.floor(easeOutProgress * yearsTarget * 10) / 10, yearsTarget));
        
        // Continue animation if not complete
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      // Start animation
      requestAnimationFrame(animate);
    }
  }, [loading, animationStarted]);

  // Format the follower count (13k+)
  const formatFollowers = (count) => {
    if (count >= 1000) {
      return `${Math.floor(count / 1000)}k+`;
    }
    return `${count}+`;
  };

  return (
    <>
      <Helmet>
        <title>Branding Tactics - Serious Branding for Serious Entrepreneurs</title>
        <meta name="description" content="Branding Tactics provides premium branding services for entrepreneurs and businesses. Over 100+ satisfied clients and 5+ years of experience." />
        <meta name="keywords" content="branding, entrepreneurs, business branding, logo design, brand strategy, brand identity" />
        <meta property="og:title" content="Branding Tactics - Premium Branding Services" />
        <meta property="og:description" content="Serious branding for serious entrepreneurs. Over 100+ satisfied clients and 5+ years of experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandingtactics.com" />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://brandingtactics.com" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <main className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text transition-colors duration-300">
        {/* Hero Section with Background Video */}
        <section aria-label="Hero Section" className="relative h-screen w-full overflow-hidden">
          {/* Loader */}
          {loading && (
            <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center" role="status" aria-live="polite">
              <div className="w-16 h-16 relative">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-t-teal-400 border-r-orange-500 border-b-purple-500 border-l-yellow-400 rounded-full animate-spin"></div>
              </div>
              <p className="mt-4 text-white text-lg">Loading experience...</p>
            </div>
          )}
          
          {/* Background Video - Hidden until loaded */}
          <div className={loading ? "invisible" : "visible"}>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              onLoadedData={handleVideoLoaded}
              onCanPlayThrough={handleVideoLoaded}
              className="absolute inset-0 w-full h-full object-cover"
              aria-hidden="true"
            >
              <source src={bgVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Content Container - Hidden until loaded */}
          <div className={`relative z-10 h-full flex flex-col ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
            {/* Header with Logo and Case Study Button */}
            <header className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 w-full">
              <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                <img 
                  src={logo} 
                  alt="Branding Tactics Logo" 
                  className="h-10 sm:h-12 w-full drop-shadow-lg"
                  width="144"
                  height="48"
                />
              </div>
              
              <nav aria-label="Main Navigation">
                <Link to="/CaseStudy" aria-label="View our case studies">
                  <button className="cursor-pointer border border-orange-500 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base text-white hover:bg-orange-500/20 transition duration-300 shadow-md">
                    Case Study
                  </button>
                </Link>
              </nav>
            </header>
            
            <div className="flex-grow flex items-center justify-center">
              <div className="w-full max-w-6xl px-4">
                <div className="flex flex-col sm:flex-row sm:justify-end gap-6 sm:gap-8 md:gap-16 mb-6 sm:mb-8 md:mb-12" aria-label="Key Statistics">
                  <div className="text-center">
                    <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-md shadow-black" aria-label="Client Count">{clientCount}+</div>
                    <div className="text-white text-xs sm:text-sm drop-shadow-md shadow-black">Satisfied Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-md shadow-black" aria-label="Instagram Followers">{formatFollowers(followerCount)}</div>
                    <div className="text-white text-xs sm:text-sm drop-shadow-md shadow-black">Instagram Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-md shadow-black" aria-label="Years Experience">{yearsCount}+</div>
                    <div className="text-white text-xs sm:text-sm drop-shadow-md shadow-black">Years Experience</div>
                  </div>
                </div>
                
                {/* Headline with subtle drop shadow */}
                <div className="text-center sm:text-right mb-8 sm:mb-12 md:mb-16">
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    Serious Branding for
                    <br className="hidden sm:inline" />
                    <span className="sm:hidden"> </span>
                    Serious Entrepreneurs
                  </h1>
                </div>

                {/* Enhanced CTA button for better visibility */}
                <div className="flex justify-center sm:justify-end md:justify-center">
                  <a href="https://superprofile.bio/brandingtactics?fbclid=PAZXh0bgNhZW0CMTEAAadatm808cqzeYJghPSCZHEXDihI0qSDc2IodHxWVjWtmlOt-e_eQlOYzn0ESw_aem_i1soeOjRWKYNTb4eaAymlg" aria-label="Book a consultation call" rel="noopener"> 
                    <button 
                      className="cursor-pointer border-2 border-teal-400 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium text-white bg-transparent hover:bg-teal-400 hover:text-black transition-all duration-300 shadow-md flex items-center justify-center"
                    >
                      Book a Call
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Visionary Brands Section */}
        <section aria-labelledby="trusted-by-heading" className="flex flex-col justify-center items-center bg-[#121212] dark:bg-[#121212]">
          <div className="flex flex-col w-full">
            <div className="flex gap-2 justify-center items-center mt-10 mb-10">
              <h2 id="trusted-by-heading" className="flex items-center">
                <span className="text-2xl text-[#AAAAAA]">
                  Trusted By
                </span>
                <span className="text-3xl text-[#FFFFFF] ml-2">
                  Visionary Brands
                </span>
              </h2>
            </div>

            <div className="logo-slider overflow-hidden bg-[#DDDDDD] dark:bg-[#121212]" aria-label="Client logos slider">
              <div className="logo-track">
                {clientLogos.concat(clientLogos).map((logo, index) => {
                  const clientIndex = index % clientNames.length;
                  return (
                    <img 
                      key={index} 
                      src={logo} 
                      alt={`Client Logo: ${clientNames[clientIndex]}`}
                      loading={index < 10 ? "eager" : "lazy"} 
                      className="logo inline-block bg-[#F8F8F8] dark:bg-[#FFFFFF]"
                      width="120"
                      height="70" 
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section - Imported Component */}
        <section id="common-problems">
          <Problems />
        </section>
      </main>
    </>
  );
};

export default VisionaryBrand;