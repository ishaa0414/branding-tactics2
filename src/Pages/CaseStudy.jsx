import React, { lazy, Suspense, useEffect, useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCaseStudyContext } from '../context/CaseStudyContext';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, ExternalLink, Eye } from 'lucide-react';

// Lazy load non-critical components
const Helmet = lazy(() => import('react-helmet'));
const Footer = lazy(() => import('../Components/Footer'));

// Minimal Loading Spinner
const LoadingSpinner = () => (
  <div className="flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-gray-300 border-t-white rounded-full animate-spin"></div>
  </div>
);

// Enhanced Client Card with high-contrast sophisticated colors
const ClientCard = React.memo(({ client, index, getSlugFromName }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Enhanced color palette with higher contrast and vibrancy
  const colors = [
    { 
      primary: "rgba(159, 94, 186, 0.15)", // Brighter muted purple - increased opacity
      accent: "rgba(159, 94, 186, 0.9)", // Much higher opacity for accent
      border: "rgba(159, 94, 186, 0.4)", // Increased border visibility
      glow: "rgba(197, 23, 230, 0.25)", // Stronger glow
      hoverAccent: "rgba(197, 23, 230, 1)" // Pure vibrant hover color
    },
    { 
      primary: "rgba(214, 89, 127, 0.15)", // Brighter muted rose
      accent: "rgba(214, 89, 127, 0.9)",
      border: "rgba(214, 89, 127, 0.4)",
      glow: "rgba(255, 23, 108, 0.25)",
      hoverAccent: "rgba(255, 23, 108, 1)"
    },
    { 
      primary: "rgba(94, 185, 162, 0.15)", // Brighter muted teal
      accent: "rgba(94, 185, 162, 0.9)",
      border: "rgba(94, 185, 162, 0.4)",
      glow: "rgba(13, 245, 208, 0.25)",
      hoverAccent: "rgba(13, 245, 208, 1)"
    },
    { 
      primary: "rgba(214, 193, 91, 0.15)", // Brighter muted gold
      accent: "rgba(214, 193, 91, 0.9)",
      border: "rgba(214, 193, 91, 0.4)",
      glow: "rgba(255, 225, 31, 0.25)",
      hoverAccent: "rgba(255, 225, 31, 1)"
    },
    { 
      primary: "rgba(214, 116, 81, 0.15)", // Brighter muted orange
      accent: "rgba(214, 116, 81, 0.9)",
      border: "rgba(214, 116, 81, 0.4)",
      glow: "rgba(255, 75, 25, 0.25)",
      hoverAccent: "rgba(255, 75, 25, 1)"
    },
    { 
      primary: "rgba(127, 111, 214, 0.15)", // Brighter muted blue
      accent: "rgba(127, 111, 214, 0.9)",
      border: "rgba(127, 111, 214, 0.4)",
      glow: "rgba(75, 25, 255, 0.25)",
      hoverAccent: "rgba(75, 25, 255, 1)"
    },
  ];
  
  const colorScheme = colors[index % colors.length];

  return (
    <article 
      className="group relative cursor-pointer transform transition-all duration-500 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)', // Increased lift
      }}
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Enhanced glow effect with higher intensity */}
      <div 
        className="absolute inset-0 rounded-lg transition-all duration-500 -z-10"
        style={{
          background: isHovered 
            ? `radial-gradient(circle at 50% 50%, ${colorScheme.glow}, transparent 60%)`
            : 'transparent',
          transform: 'translate(0, 0)',
          opacity: isHovered ? 1 : 0,
          filter: 'blur(25px)', // Increased blur for stronger glow
          scale: isHovered ? '1.15' : '1' // Larger scale
        }}
      />
      
      {/* Enhanced shadow with more prominent color */}
      <div 
        className="absolute inset-0 rounded-lg transition-all duration-500 -z-5"
        style={{
          backgroundColor: isHovered ? colorScheme.primary : 'rgba(255, 255, 255, 0.05)',
          transform: 'translate(3px, 3px)', // Slightly larger offset
          opacity: isHovered ? 0.6 : 0.2, // Higher opacity
          filter: 'blur(2px)'
        }}
      />
      
      {/* Main card with enhanced dynamic border */}
      <div 
        className="relative bg-[#1A1A1A] rounded-lg overflow-hidden transition-all duration-500 flex flex-col h-full"
        style={{
          border: `2px solid ${isHovered ? colorScheme.border : '#2A2A2A'}`, // Thicker border
          boxShadow: isHovered 
            ? `0 12px 40px ${colorScheme.primary}, 0 0 0 2px ${colorScheme.border}, inset 0 1px 0 ${colorScheme.glow}`
            : 'none',
          background: isHovered 
            ? `linear-gradient(135deg, #1A1A1A 0%, ${colorScheme.primary} 100%)`
            : '#1A1A1A'
        }}
      >
        {/* Image Container with enhanced color overlay */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={client.caseStudyCover} 
            alt={`${client.name} case study cover`} 
            className="w-full h-full object-cover transition-all duration-500"
            style={{
              transform: isHovered ? 'scale(1.08)' : 'scale(1)', // Increased scale
              filter: isHovered 
                ? `brightness(1.2) contrast(1.1) saturate(1.3)` // Enhanced image effects
                : 'brightness(0.85) grayscale(0.4)' // More contrast in default state
            }}
            loading="lazy"
            itemProp="image"
            onError={(e) => {
              e.target.src = "/api/placeholder/400/192";
              e.target.alt = "Case study cover placeholder";
            }}
          />
          
          {/* Enhanced color overlay with gradient */}
          <div 
            className="absolute inset-0 transition-all duration-500"
            style={{
              background: isHovered 
                ? `linear-gradient(135deg, ${colorScheme.primary} 0%, ${colorScheme.glow} 100%)`
                : 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 100%)',
              opacity: isHovered ? 0.7 : 0.3 // Higher opacity overlay
            }}
          />
          
          {/* Enhanced view indicator with pulsing effect */}
          <div 
            className="absolute top-3 right-3 backdrop-blur-sm rounded-full p-2 transition-all duration-500"
            style={{
              background: isHovered 
                ? `linear-gradient(135deg, ${colorScheme.hoverAccent}, ${colorScheme.accent})`
                : 'rgba(0, 0, 0, 0.6)',
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'scale(1.1) rotate(0deg)' : 'scale(0.8) rotate(-10deg)',
              boxShadow: isHovered ? `0 0 15px ${colorScheme.glow}` : 'none'
            }}
          >
            <Eye className="w-4 h-4 text-white" style={{
              filter: isHovered ? 'drop-shadow(0 0 3px rgba(255,255,255,0.5))' : 'none'
            }} />
          </div>
        </div>
        
        {/* Content Area with enhanced color hints */}
        <div className="p-6 flex-grow flex flex-col">
          {/* Enhanced dynamic accent line */}
          <div 
            className="h-0.5 mb-4 transition-all duration-500 rounded-full" // Thicker line
            style={{
              background: isHovered 
                ? `linear-gradient(90deg, ${colorScheme.hoverAccent} 0%, ${colorScheme.accent} 70%, transparent 100%)`
                : 'linear-gradient(90deg, #505050 0%, transparent 100%)', // Brighter default
              width: isHovered ? '65%' : '35%', // Wider line
              boxShadow: isHovered ? `0 0 8px ${colorScheme.glow}` : 'none'
            }}
          />
          
          <h3 
            className="font-semibold text-lg mb-3 transition-all duration-500"
            style={{
              color: isHovered ? '#FFFFFF' : '#E5E5E5',
              transform: isHovered ? 'translateX(6px)' : 'translateX(0)', // More movement
              textShadow: isHovered ? `0 0 25px ${colorScheme.glow}` : 'none', // Stronger text glow
              fontWeight: isHovered ? '600' : '500' // Bolder on hover
            }}
            itemProp="name"
          >
            {client.name}
          </h3>
          
          <p 
            className="text-sm leading-relaxed mb-6 line-clamp-3 transition-all duration-500"
            style={{
              color: isHovered ? '#E0E0E0' : '#9CA3AF' // Brighter text on hover
            }}
            itemProp="description"
          >
            {client.description}
          </p>
          
          {/* Enhanced CTA button with stronger effects */}
          <div className="mt-auto">
            <Link 
              to={`/caseStudy/${getSlugFromName(client.name)}`}
              className="group/button inline-flex items-center text-sm font-medium transition-all duration-500"
              style={{
                color: isHovered ? colorScheme.hoverAccent : '#9CA3AF',
                textShadow: isHovered ? `0 0 10px ${colorScheme.glow}` : 'none'
              }}
              aria-label={`View case study for ${client.name}`}
            >
              <span className="relative mr-2 font-medium">
                View Case Study
                <div 
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-500 rounded-full"
                  style={{
                    background: isHovered ? colorScheme.hoverAccent : colorScheme.accent,
                    width: isHovered ? '100%' : '0%',
                    boxShadow: isHovered ? `0 0 6px ${colorScheme.glow}` : 'none'
                  }}
                />
              </span>
              <ExternalLink 
                className="w-3 h-3 transition-all duration-500" 
                style={{
                  transform: isHovered ? 'translateX(4px) scale(1.15)' : 'translateX(0) scale(1)', // More movement
                  filter: isHovered ? `drop-shadow(0 0 6px ${colorScheme.glow})` : 'none'
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
});

const CaseStudy = () => {
  const { clients, loading, getSlugFromName } = useCaseStudyContext();
  const navigate = useNavigate();
  const [headerVisible, setHeaderVisible] = useState(false);

  // Animate header on mount
  useEffect(() => {
    const timer = setTimeout(() => setHeaderVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Memoize handler functions
  const handleGoBack = useCallback(() => {
    navigate('/');
  }, [navigate]);
  
  // Memoize schema to prevent recreation on each render
  const organizationSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Case Studies - Branding Tactics",
    "description": "Explore our client success stories and case studies showcasing real brands with real results.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": clients.map((client, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Organization",
          "name": client.name,
          "description": client.description,
          "image": client.logoUrl,
          "url": `/caseStudy/${getSlugFromName(client.name)}`
        }
      }))
    }
  }), [clients, getSlugFromName]);

  // Minimal loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner />
          <p className="mt-6 text-white text-lg">Loading case studies...</p>
          <p className="mt-2 text-gray-400 text-sm">Preparing our work to show you</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Suspense fallback={null}>
        <Helmet>
          <title>Case Studies - Branding Tactics | Real Brands, Real Results</title>
          <meta name="description" content="Explore our client success stories and case studies showcasing how Branding Tactics delivers branding that works, not just looks." />
          <meta name="keywords" content="branding case studies, brand identity case studies, logo design portfolio, brand strategy examples" />
          <link rel="canonical" href="https://brandingtactics.com/caseStudy" />
          <meta property="og:title" content="Case Studies - Branding Tactics" />
          <meta property="og:description" content="Real brands, real results: Our client success stories demonstrating effective branding strategies." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://brandingtactics.com/caseStudy" />
          <meta property="og:image" content="https://brandingtactics.com/og-case-studies.jpg" />
          <script type="application/ld+json">
            {JSON.stringify(organizationSchema)}
          </script>
        </Helmet>
      </Suspense>

      <main className="min-h-screen bg-[#121212]">
        {/* Enhanced Navigation with stronger color accents */}
        <nav 
          className="sticky top-0 z-50 backdrop-blur-md border-b bg-[#121212]/90"
          style={{
            borderColor: 'rgba(127, 111, 214, 0.2)', // More visible border
            background: 'linear-gradient(135deg, #121212 0%, rgba(127, 111, 214, 0.04) 100%)'
          }}
          aria-label="Case study navigation"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Enhanced Back Button with stronger hover effects */}
            <button
              onClick={handleGoBack}
              className="group flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 text-gray-400 hover:text-white rounded-lg"
              style={{
                background: 'transparent',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(127, 111, 214, 0.2)'; // Stronger background
                e.target.style.boxShadow = '0 0 25px rgba(127, 111, 214, 0.15)'; // Stronger glow
                e.target.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.boxShadow = 'none';
                e.target.style.color = '#9CA3AF';
              }}
              aria-label="Go back to previous page"
            >
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back</span>
            </button>
            
            {/* Enhanced Home Button with stronger hover effects */}
            <Link 
              to="/" 
              className="group flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 text-gray-400 hover:text-white rounded-lg"
              style={{
                background: 'transparent',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(94, 185, 162, 0.2)'; // Stronger background
                e.target.style.boxShadow = '0 0 25px rgba(94, 185, 162, 0.15)'; // Stronger glow
                e.target.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.boxShadow = 'none';
                e.target.style.color = '#9CA3AF';
              }}
              aria-label="Go to homepage"
            >
              <Home className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-105" />
              <span>Home</span>
            </Link>
          </div>
        </nav>
        
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Enhanced Header Section */}
          <header 
            className="text-center mb-16 transition-all duration-800"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <div className="flex-col text-center justify-center items-center mt-10 mb-10">
              <p 
                className="text-lg mb-2 transition-all duration-800 delay-100 font-medium"
                style={{
                  color: headerVisible ? 'rgba(159, 94, 186, 0.9)' : '#6B7280', // Brighter accent
                  textShadow: headerVisible ? '0 0 15px rgba(159, 94, 186, 0.3)' : 'none'
                }}
              >
                Real Brands, Real Results
              </p>
              <h1 
                className="text-4xl md:text-5xl font-light mb-6 transition-all duration-800 delay-200"
                style={{
                  color: '#FFFFFF',
                  textShadow: headerVisible ? '0 0 50px rgba(159, 94, 186, 0.2)' : 'none' // Stronger text glow
                }}
              >
                Our Client Success Stories
              </h1>
            </div>
            
            <p className="text-base text-center mb-8 max-w-2xl mx-auto leading-relaxed text-gray-300">
              Branding isn't just about looks—it's about how your brand speaks, feels, and connects with your audience. 
              Explore case studies that demonstrate our strategic approach to building meaningful brand connections.
            </p>
            
            {/* Enhanced accent line with stronger glow */}
            <div 
              className="h-px mx-auto transition-all duration-800 delay-400"
              style={{
                width: headerVisible ? '140px' : '0px', // Wider line
                background: headerVisible 
                  ? 'linear-gradient(90deg, transparent, rgba(159, 94, 186, 0.8), transparent)'
                  : 'transparent',
                boxShadow: headerVisible ? '0 0 20px rgba(159, 94, 186, 0.4)' : 'none' // Added glow
              }}
            />
          </header>
          
          {/* Enhanced Grid Layout */}
          <section 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" 
            role="list" 
            aria-label="Client case studies"
          >
            {clients.map((client, index) => (
              <div
                key={client.id}
                style={{
                  animation: `fadeInUp 0.6s ease-out forwards ${index * 0.08}s`,
                  opacity: 0,
                  transform: 'translateY(30px)'
                }}
              >
                <ClientCard 
                  client={client}
                  index={index}
                  getSlugFromName={getSlugFromName}
                />
              </div>
            ))}
          </section>

          {/* Enhanced Call to Action Section with stronger colors */}
          {clients.length > 0 && (
            <section className="mt-24 text-center">
              <div 
                className="relative p-12 rounded-xl transition-all duration-500 group"
                style={{
                  background: 'linear-gradient(135deg, #1A1A1A 0%, rgba(94, 185, 162, 0.08) 100%)',
                  border: '2px solid rgba(94, 185, 162, 0.25)', // Thicker, more visible border
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 16px 64px rgba(94, 185, 162, 0.2)'; // Stronger glow
                  e.currentTarget.style.transform = 'translateY(-4px)'; // More lift
                  e.currentTarget.style.borderColor = 'rgba(94, 185, 162, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(94, 185, 162, 0.25)';
                }}
              >
                <div className="relative z-10">
                  <h2 
                    className="text-2xl font-light mb-4 transition-all duration-300"
                    style={{
                      color: '#FFFFFF',
                      textShadow: '0 0 25px rgba(94, 185, 162, 0.2)'
                    }}
                  >
                    Ready to Join Our Success Stories?
                  </h2>
                  <p className="text-gray-300 text-base mb-8 max-w-xl mx-auto">
                    Let's create something amazing together. Your brand deserves the same attention and results.
                  </p>
                  <Link
                    to="/contact"
                    className="group/cta inline-flex items-center text-sm font-medium transition-all duration-300 px-8 py-4 rounded-lg"
                    style={{
                      color: 'rgba(94, 185, 162, 0.9)',
                      background: 'transparent',
                      border: '2px solid rgba(94, 185, 162, 0.4)' // Thicker border
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(94, 185, 162, 0.15)'; // Stronger background
                      e.target.style.color = '#FFFFFF';
                      e.target.style.boxShadow = '0 0 30px rgba(94, 185, 162, 0.3)'; // Stronger glow
                      e.target.style.borderColor = 'rgba(13, 245, 208, 0.6)'; // Brighter border
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'rgba(94, 185, 162, 0.9)';
                      e.target.style.boxShadow = 'none';
                      e.target.style.borderColor = 'rgba(94, 185, 162, 0.4)';
                    }}
                  >
                    <span className="relative mr-2 font-medium">
                      Start Your Project
                    </span>
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                  </Link>
                </div>
              </div>
            </section>
          )}
        </div>
        
        {/* Footer */}
        <Suspense fallback={<div className="h-32 bg-[#1A1A1A]"></div>}>
          <Footer />
        </Suspense>
      </main>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default React.memo(CaseStudy);