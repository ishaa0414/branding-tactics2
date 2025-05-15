import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import logo from '/logo.svg';

// Lazy-loaded components
const Problems = lazy(() => import("./Problems"));

// SEO Schema markup for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Branding Tactics",
  "description": "Serious branding services for entrepreneurs and businesses",
  "url": "https://www.brandingtactics.in",
  "logo": "/logo.svg",
  "sameAs": [
    "https://www.instagram.com/brandingtactics",
    "https://www.facebook.com/brandingtactics"
  ]
};

// Pre-defined client arrays - moved outside component to prevent re-creation on each render
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
  // Reduced to just 10 images for faster initial load
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
];

// Simple loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-40">
    <div className="w-8 h-8 border-4 border-t-teal-400 border-r-orange-500 border-b-purple-500 border-l-yellow-400 rounded-full animate-spin"></div>
  </div>
);

const VisionaryBrand = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // Using refs instead of state for animation targets to avoid re-renders
  const [stats, setStats] = useState({
    clientCount: 0,
    followerCount: 0,
    yearsCount: 0
  });
  
  // Target values for counters
  const clientTarget = 100;
  const followerTarget = 13000;
  const yearsTarget = 5;
  
  useEffect(() => {
    // Apply dark mode class
    document.documentElement.classList.toggle('dark', darkMode);
    
    // Preload video
    const videoPreload = new Image();
    videoPreload.onload = () => setVideoLoaded(true);
    videoPreload.src = '/bg-video/bg-video-poster.jpg'; // Create a poster image
    
    // Set a maximum timeout for loading
    const loadTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Reduced from 8000ms to 3000ms
    
    return () => clearTimeout(loadTimeout);
  }, [darkMode]);
  
  // Effect to handle counter animations using requestAnimationFrame but with reduced complexity
  useEffect(() => {
    if (loading) return;
    
    let animationFrameId;
    let startTime;
    
    const animateStats = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1500, 1); // Reduced duration from 2000 to 1500
      
      // Simplified easing function
      const easedProgress = progress;
      
      setStats({
        clientCount: Math.floor(easedProgress * clientTarget),
        followerCount: Math.floor(easedProgress * followerTarget),
        yearsCount: Math.min(Math.floor(easedProgress * yearsTarget * 10) / 10, yearsTarget)
      });
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateStats);
      }
    };
    
    animationFrameId = requestAnimationFrame(animateStats);
    return () => cancelAnimationFrame(animationFrameId);
  }, [loading]);

  // Format the follower count (13k+)
  const formatFollowers = (count) => {
    return count >= 1000 ? `${Math.floor(count / 1000)}k+` : `${count}+`;
  };

  // Load video with reduced quality or based on connection speed
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Branding Tactics - Serious Branding for Serious Entrepreneurs</title>
        <meta name="description" content="Branding Tactics provides premium branding services for entrepreneurs and businesses. Over 100+ satisfied clients and 5+ years of experience." />
        <link rel="preload" href="/bg-video/bg-video.mp4" as="video" type="video/mp4" />
        <link rel="preconnect" href="https://superprofile.bio" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <main className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text transition-colors duration-300">
        {/* Hero Section with Background Video */}
        <section aria-label="Hero Section" className="relative h-screen w-full overflow-hidden">
          {/* Simplified Loader */}
          {loading && (
            <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-t-teal-400 border-r-orange-500 border-b-purple-500 border-l-yellow-400 rounded-full animate-spin"></div>
            </div>
          )}
          
          {/* Background Video - with optimized loading */}
          <div className={loading ? "invisible" : "visible"}>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              poster="/bg-video/bg-video-poster.jpg"
              onLoadedData={handleVideoLoaded}
              className="absolute inset-0 w-full h-full object-cover"
              aria-hidden="true"
              loading="lazy"
            >
              <source src="/bg-video/bg-video.mp4" type="video/mp4" />
            </video>
          </div>
          
          {/* Content Container - streamlined markup */}
          <div className={`relative z-10 h-full flex flex-col ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
            {/* Header with Logo and Case Study Button */}
            <header className="flex justify-between items-center p-4 sm:p-6 w-full">
              <div className="flex items-center">
                <img 
                  src={logo} 
                  alt="Branding Tactics Logo" 
                  className="h-10 sm:h-12 w-auto"
                  width="144"
                  height="48"
                />
              </div>
              
              <Link to="/CaseStudy" aria-label="View our case studies">
                <button className="border border-orange-500 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base text-white hover:bg-orange-500/20 transition duration-300">
                  Case Study
                </button>
              </Link>
            </header>
            
            <div className="flex-grow flex items-center justify-center">
              <div className="w-full max-w-6xl px-4">
                <div className="flex flex-col sm:flex-row sm:justify-end gap-6 sm:gap-8 md:gap-16 mb-6 sm:mb-8 md:mb-12" aria-label="Key Statistics">
                  <div className="text-center">
                    <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold" aria-label="Client Count">{stats.clientCount}+</div>
                    <div className="text-white text-xs sm:text-sm">Satisfied Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold" aria-label="Instagram Followers">{formatFollowers(stats.followerCount)}</div>
                    <div className="text-white text-xs sm:text-sm">Instagram Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold" aria-label="Years Experience">{stats.yearsCount}+</div>
                    <div className="text-white text-xs sm:text-sm">Years Experience</div>
                  </div>
                </div>
                
                {/* Headline with simplified styling */}
                <div className="text-center sm:text-right mb-8 sm:mb-12">
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Serious Branding for
                    <br className="hidden sm:inline" />
                    <span className="sm:hidden"> </span>
                    Serious Entrepreneurs
                  </h1>
                </div>

                {/* CTA button */}
                <div className="flex justify-center sm:justify-end md:justify-center">
                  <a href="https://superprofile.bio/brandingtactics" aria-label="Book a consultation call" rel="noopener"> 
                    <button 
                      className="border-2 border-teal-400 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium text-white hover:bg-teal-400 hover:text-black transition-all duration-300"
                    >
                      Book a Call
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Optimized Client Logo Section */}
        <section aria-labelledby="trusted-by-heading" className="bg-[#121212] py-10">
          <div className="container mx-auto px-4">
            <h2 id="trusted-by-heading" className="flex items-center justify-center mb-10">
              <span className="text-2xl text-[#AAAAAA]">Trusted By</span>
              <span className="text-3xl text-[#FFFFFF] ml-2">Visionary Brands</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {clientLogos.map((logo, index) => (
                <div key={index} className="w-24 h-16 bg-white flex items-center justify-center p-2">
                  <img 
                    src={logo} 
                    alt={`Client Logo: ${clientNames[index]}`}
                    loading="lazy" 
                    className="max-w-full max-h-full object-contain"
                    width="80"
                    height="40" 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lazy-loaded Problems Section */}
        <section id="common-problems">
          <Suspense fallback={<LoadingFallback />}>
            <Problems />
          </Suspense>
        </section>
      </main>
    </>
  );
};

export default VisionaryBrand;