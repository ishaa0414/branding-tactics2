import React, { createContext, useContext, useState } from 'react';
import { Helmet } from 'react-helmet'; // Using react-helmet instead of Next.js Head

// Create the context
const SEOContext = createContext();

// Default brand information
const defaultBrandInfo = {
  name: "BrandingTactics",
  domain: "brandingtactics.in",
  logo: "/images/logo.svg",
  description: "Professional branding services for businesses and entrepreneurs",
  keywordSets: {
    brandStrategy: [
      "brand strategy", "brand positioning", "brand ideals", "brand equity", 
      "brand mantras", "brand resonance"
    ],
    design: [
      "visual identity", "brand identity", "logo design", "typography", 
      "color palette", "creative direction"
    ],
    marketing: [
      "brand marketing", "brand messaging", "brand story", "tone of voice", 
      "brand archetypes", "brand communications"
    ]
  }
};

// Provider component
export const SEOProvider = ({ children, customBrandInfo = {} }) => {
  const [brandInfo, setBrandInfo] = useState({
    ...defaultBrandInfo,
    ...customBrandInfo
  });

  // Function to generate meta tags for SEO
  const generateSEOMeta = ({ 
    title, 
    description, 
    path = "", 
    keywords = [], 
    image = brandInfo.logo,
    customStructuredData = null 
  }) => {
    const fullTitle = `${title} | ${brandInfo.name}`;
    const url = `https://${brandInfo.domain}${path}`;
    const keywordsString = keywords.join(", ");
    
    // Convert structured data to string
    const structuredDataScript = customStructuredData 
      ? JSON.stringify(customStructuredData)
      : JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title,
          "description": description,
          "url": url,
          "isPartOf": {
            "@type": "WebSite",
            "name": brandInfo.name,
            "url": `https://${brandInfo.domain}`
          }
        });

    // Return Helmet component with all meta tags
    return (
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywordsString} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={fullTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {structuredDataScript}
        </script>
      </Helmet>
    );
  };

  // Context value
  const value = {
    brandInfo,
    setBrandInfo,
    generateSEOMeta
  };

  return (
    <SEOContext.Provider value={value}>
      {children}
    </SEOContext.Provider>
  );
};

// Custom hook for consuming the context
export const useSEO = () => {
  const context = useContext(SEOContext);
  if (context === undefined) {
    throw new Error('useSEO must be used within an SEOProvider');
  }
  return context;
};

export default SEOContext;