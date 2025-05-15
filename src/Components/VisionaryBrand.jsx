import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Problems from "./Problems";
import bgVideo from '/bg-video/bg-video.mp4';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import logo from '/logo.svg';
import LoaderHomePage from './LoaderHomePage';
import BrandingPopup from './BrandingPopup';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Branding Tactics",
  "description": "Serious branding services for entrepreneurs and businesses",
  "url": "https://brandingtactics.com",
  "logo": "/logo.svg",
  "sameAs": [
    "https://www.instagram.com/brandingtactics",
    "https://www.facebook.com/brandingtactics"
  ]
};

const clientLogos = [
  "/client logo/logo1.png", "/client logo/logo2.png", "/client logo/logo3.png", "/client logo/logo4.png",
  "/client logo/logo5.png", "/client logo/logo6.png", "/client logo/logo7.png", "/client logo/logo8.jpg",
  "/client logo/logo9.png", "/client logo/logo10.jpeg", "/client logo/logo11.png", "/client logo/logo12.png",
  "/client logo/logo13.png", "/client logo/logo14.jpg", "/client logo/logo15.png", "/client logo/logo16.png",
  "/client logo/logo17.jpg", "/client logo/logo18.png", "/client logo/logo19.png", "/client logo/logo20.png"
];

const clientNames = [
  "Client 1 Name", "Client 2 Name", "Client 3 Name", "Client 4 Name", "Client 5 Name",
  "Client 6 Name", "Client 7 Name", "Client 8 Name", "Client 9 Name", "Client 10 Name",
  "Client 11 Name", "Client 12 Name", "Client 13 Name", "Client 14 Name", "Client 15 Name",
  "Client 16 Name", "Client 17 Name", "Client 18 Name", "Client 19 Name", "Client 20 Name"
];

const VisionaryBrand = () => {
  const [darkMode, setdarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [clientCount, setClientCount] = useState(0);
  const [followerCount, setFollowerCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);

  const clientTarget = 100;
  const followerTarget = 13000;
  const yearsTarget = 5;

  const [animationStarted, setAnimationStarted] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setdarkMode(prev => !prev);
  };

  useEffect(() => {
    if (videoLoaded) {
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }
    const fallback = setTimeout(() => setLoading(false), 8000);
    return () => clearTimeout(fallback);
  }, [videoLoaded]);

  useEffect(() => {
    if (!loading && !animationStarted) {
      setAnimationStarted(true);
      const duration = 2000;
      const start = performance.now();
      const animate = (time) => {
        const progress = Math.min((time - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        setClientCount(Math.floor(ease * clientTarget));
        setFollowerCount(Math.floor(ease * followerTarget));
        setYearsCount(Math.min(Math.floor(ease * yearsTarget * 10) / 10, yearsTarget));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [loading, animationStarted]);

  const formatFollowers = (count) => count >= 1000 ? `${Math.floor(count / 1000)}k+` : `${count}+`;

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
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>

      <main className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text transition-colors duration-300">
        <section aria-label="Hero Section" className="relative h-screen w-full overflow-hidden">
          {loading && (
            <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center" role="status" aria-live="polite">
              <div className="w-16 h-16 relative">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-t-teal-400 border-r-orange-500 border-b-purple-500 border-l-yellow-400 rounded-full animate-spin"></div>
              </div>
              <p className="mt-4 text-white text-lg">Loading experience...</p>
            </div>
          )}

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

          <div className={`relative z-10 h-full flex flex-col ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
            <header className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 w-full">
              <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                <img src={logo} alt="Branding Tactics Logo" className="h-10 sm:h-12 w-full drop-shadow-lg" width="144" height="48" />
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
                    <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-md shadow-black" aria-label="Years of Experience">{yearsCount}+</div>
                    <div className="text-white text-xs sm:text-sm drop-shadow-md shadow-black">Years of Experience</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};

export default VisionaryBrand;
