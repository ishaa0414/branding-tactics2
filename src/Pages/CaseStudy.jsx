import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCaseStudyContext } from '../context/CaseStudyContext';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react'; // Import Home icon from lucide-react
import { Helmet } from 'react-helmet'; // For SEO meta

// Lazy load Footer for better initial load time
const Footer = lazy(() => import('../Components/Footer'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="w-8 h-8 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin mx-auto"></div>
);

// Client Card Component - memoized for performance
const ClientCard = React.memo(({ client, index, colorVariant }) => (
  <div 
    className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col transition-transform duration-300 hover:transform hover:scale-105"
    itemScope
    itemType="https://schema.org/Organization"
  >
    {/* Image Container - Fixed height for consistency */}
    <div className="h-48 bg-[#FFFFFF] flex items-center justify-center p-6">
      <img 
        src={client.logoUrl} 
        alt={`${client.name} Logo`} 
        className="max-h-full max-w-full object-contain"
        loading="lazy"
        width="200"
        height="100"
        itemProp="logo"
        // Fallback to placeholder if image fails to load
        onError={(e) => {
          e.target.src = "/api/placeholder/200/100";
          e.target.alt = "Logo placeholder";
        }}
      />
    </div>
    
    {/* Content Area */}
    <div className="p-4 flex-grow">
      <h3 className="text-white font-semibold text-lg mb-2 truncate" itemProp="name">{client.name}</h3>
      <p className="text-gray-300 text-sm mb-4 line-clamp-3" itemProp="description">
        {client.description}
      </p>
    </div>
    
    {/* Button Area */}
    <div className="p-4 pt-0 flex justify-start">
      <Link 
        to={`/CaseStudy/${client.id}`}
        className={`
          inline-block w-2/3 text-center px-4 py-2 rounded-full 
          transition-all duration-300 
          border border-transparent
          ${colorVariant}
          text-[#1E1E1E]
          hover:border-white hover:shadow-lg
          text-sm font-medium
        `}
        aria-label={`View case study for ${client.name}`}
      >
        View Case Study
      </Link>
    </div>
  </div>
));

const CaseStudy = () => {
  // Get clients data from context
  const { clients, loading } = useCaseStudyContext();
  const navigate = useNavigate();

  const colorVariants = [
    'bg-[#C517E6] hover:bg-fuschia-500',
    'bg-[#0DF5D0] hover:bg-teal-500',
    'bg-[#08EE86] hover:bg-green-500',
    'bg-[#FFE11F] hover:bg-yellow-400',
    'bg-[#FF4B19] hover:bg-orange-500',
    'bg-[#FF176C] hover:bg-pink-500',
    'bg-[#C517E6] hover:bg-fuschia-500',
    'bg-[#0DF5D0] hover:bg-teal-500',
    'bg-[#08EE86] hover:bg-green-500',
  ];

  // Function to handle going back to previous page
  const handleGoBack = () => {
    navigate('/');
  };
  
  // SEO Organization schema
  const organizationSchema = {
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
          "image": client.logoUrl
        }
      }))
    }
  };

  // Preload critical images
  useEffect(() => {
    if (!loading && clients.length > 0) {
      // Preload first 4 client logos for faster initial render
      clients.slice(0, 4).forEach(client => {
        const img = new Image();
        img.src = client.logoUrl;
      });
    }
  }, [loading, clients]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-white text-xl flex flex-col items-center">
          <LoadingSpinner />
          <p className="mt-4">Loading case studies...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Case Studies - Branding Tactics | Real Brands, Real Results</title>
        <meta name="description" content="Explore our client success stories and case studies showcasing how Branding Tactics delivers branding that works, not just looks." />
        <meta name="keywords" content="branding case studies, brand identity case studies, logo design portfolio, brand strategy examples" />
        <link rel="canonical" href="https://brandingtactics.com/CaseStudy" />
        <meta property="og:title" content="Case Studies - Branding Tactics" />
        <meta property="og:description" content="Real brands, real results: Our client success stories demonstrating effective branding strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandingtactics.com/CaseStudy" />
        <meta property="og:image" content="https://brandingtactics.com/og-case-studies.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-[#121212]">
        {/* Navigation Buttons */}
        <nav className="max-w-7xl mx-auto pt-6 px-6 flex justify-between items-center" aria-label="Case study navigation">
          {/* Go Back Button */}
          <button
            onClick={handleGoBack}
            className="flex items-center text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-300 px-4 py-2 rounded-lg mb-6"
            aria-label="Go back to previous page"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Go Back
          </button>
          
          {/* Home Button */}
          <Link 
            to="/" 
            className="flex items-center text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-300 px-4 py-2 rounded-lg mb-6"
            aria-label="Go to homepage"
          >
            <Home className="h-5 w-5 mr-2" aria-hidden="true" />
            Home
          </Link>
        </nav>
        
        <section className="max-w-7xl mx-auto px-6 pb-6">
          {/* Header Section */}
          <header className="text-center text-white mb-12">
            <h1 className="text-4xl font-bold mb-4">
              "Branding That Works, Not Just Looks."
            </h1>
            <p className="text-xl">Real Brands, Real Results: Our Client Success Stories</p>
          </header>
          
          {/* Client Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" role="list" aria-label="Client case studies">
            {clients.map((client, index) => (
              <ClientCard 
                key={client.id}
                client={client}
                index={index}
                colorVariant={colorVariants[index % colorVariants.length]}
              />
            ))}
          </div>
        </section>
        
        {/* Lazy load Footer component */}
        <Suspense fallback={<div className="h-20 bg-gray-900"></div>}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
};

export default React.memo(CaseStudy);