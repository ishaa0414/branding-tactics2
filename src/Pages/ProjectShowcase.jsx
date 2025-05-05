// import React, { useEffect, useState, lazy, Suspense } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useCaseStudyContext } from '../context/CaseStudyContext';

// // Lazy loaded component
// const Footer = lazy(() => import('../Components/Footer'));

// const CaseStudyDetail = () => {
//   const { id } = useParams();
//   const [caseStudy, setCaseStudy] = useState(null);
//   const { getCaseStudyById, getRelatedCaseStudies, loading, setLoading } = useCaseStudyContext();

//   useEffect(() => {
//     // Track if component is mounted to prevent memory leaks
//     let isMounted = true;
    
//     const fetchCaseStudy = async () => {
//       setLoading(true);
//       try {
//         const study = await getCaseStudyById(id);
//         if (isMounted && study) {
//           setCaseStudy(study);
//           // Set document title directly instead of using Helmet
//           document.title = `${study.name} - Case Study | Your Brand Agency`;
          
//           // Set meta description directly
//           const metaDescription = document.querySelector('meta[name="description"]');
//           if (metaDescription) {
//             metaDescription.setAttribute('content', 
//               `Case study for ${study.name}. ${study.description?.substring(0, 155) || 'View our work and results for this project.'}`);
//           } else {
//             const meta = document.createElement('meta');
//             meta.name = 'description';
//             meta.content = `Case study for ${study.name}. ${study.description?.substring(0, 155) || 'View our work and results for this project.'}`;
//             document.head.appendChild(meta);
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching case study:", error);
//         if (isMounted) setCaseStudy(null);
//       }
//       if (isMounted) setLoading(false);
//     };

//     fetchCaseStudy();
    
//     // Cleanup function
//     return () => {
//       isMounted = false;
//     };
//   }, [id, getCaseStudyById, setLoading]);

//   // Memoized color classes to avoid recomputation
//   const getBgColorClass = React.useMemo(() => {
//     const colorClasses = [
//       'bg-red-600', 'bg-[#11262c]', 'bg-[#162858]', 'bg-[#8d4010]', 
//       'bg-blue-700', 'bg-lime-950', 'bg-orange-200', 'bg-[#f9e47d]', 'bg-red-950'
//     ];
//     return caseStudy ? colorClasses[(caseStudy.id - 1) % colorClasses.length] : 'bg-blue-700';
//   }, [caseStudy?.id]);

//   // Image loading optimization
//   const renderImage = (imageUrl, alt, className = "w-full h-full object-cover") => {
//     return (
//       <img 
//         src={imageUrl || "/api/placeholder/400/300"}
//         alt={alt}
//         className={className}
//         loading="lazy" // Lazy load images
//         onError={(e) => {
//           e.target.src = "/api/placeholder/400/300";
//           e.target.alt = "Image placeholder";
//         }}
//       />
//     );
//   };

//   // YouTube embed optimization - load only when needed
//   const renderYoutubeEmbed = (youtubeUrl) => {
//     if (!youtubeUrl) return null;
    
//     const videoId = youtubeUrl?.includes('watch?v=') 
//       ? youtubeUrl.split('watch?v=')[1].split('&')[0]
//       : youtubeUrl?.includes('youtu.be/') 
//         ? youtubeUrl.split('youtu.be/')[1]
//         : '';
    
//     if (!videoId) return null;
    
//     return (
//       <div className="relative w-full overflow-hidden shadow-lg rounded-lg" style={{ paddingBottom: '56.25%', height: '0' }}>
//         <iframe
//           src={`https://www.youtube.com/embed/${videoId}`}
//           title={`${caseStudy?.name || 'Case Study'} Video Presentation`}
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           className="absolute top-0 left-0 w-full h-full"
//           loading="lazy"
//         ></iframe>
//       </div>
//     );
//   };

//   // Create and append preconnect links to YouTube for faster loading
//   useEffect(() => {
//     const links = [
//       { rel: 'preconnect', href: 'https://www.youtube.com' },
//       { rel: 'preconnect', href: 'https://i.ytimg.com' }
//     ];
    
//     const fragment = document.createDocumentFragment();
//     links.forEach(linkData => {
//       const existingLink = document.querySelector(`link[rel="${linkData.rel}"][href="${linkData.href}"]`);
//       if (!existingLink) {
//         const link = document.createElement('link');
//         link.rel = linkData.rel;
//         link.href = linkData.href;
//         fragment.appendChild(link);
//       }
//     });
    
//     document.head.appendChild(fragment);

//     // Cleanup when component unmounts
//     return () => {
//       links.forEach(linkData => {
//         const link = document.querySelector(`link[rel="${linkData.rel}"][href="${linkData.href}"]`);
//         if (link) document.head.removeChild(link);
//       });
//     };
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#121212] flex items-center justify-center">
//         <div className="text-white text-xl">Loading case study...</div>
//       </div>
//     );
//   }

//   if (!caseStudy) {
//     // Set not found title
//     document.title = "Case Study Not Found | Your Brand Agency";
    
//     return (
//       <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center p-6">
//         <div className="text-white text-xl mb-6">Case study not found</div>
//         <Link 
//           to="/caseStudy" 
//           className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300"
//         >
//           Return to Case Studies
//         </Link>
//       </div>
//     );
//   }

//   // Get related case studies only when needed
//   const relatedCaseStudies = getRelatedCaseStudies(caseStudy.id, caseStudy.industry);

//   return (
//     <div className="flex flex-col min-h-screen bg-[#121212]">
//       <div className="flex-grow">
//         <main>
//           <div className={`${getBgColorClass} py-16`} id="case-study-hero">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6">
//               <nav aria-label="Breadcrumb" className="flex items-center justify-between mb-6">
//                 <div className="flex space-x-3">
//                   <Link
//                     to="/"
//                     className="flex items-center text-white bg-black bg-opacity-30 hover:bg-opacity-50 transition-colors duration-300 px-4 py-2 rounded-lg"
//                     aria-label="Go to homepage"
//                   >
//                     <svg 
//                       xmlns="http://www.w3.org/2000/svg" 
//                       className="h-5 w-5 mr-2" 
//                       fill="none" 
//                       viewBox="0 0 24 24" 
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path 
//                         strokeLinecap="round" 
//                         strokeLinejoin="round" 
//                         strokeWidth={2} 
//                         d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
//                       />
//                     </svg>
//                     Home
//                   </Link>
//                   <Link
//                     to="/CaseStudy"
//                     className="flex items-center text-white bg-black bg-opacity-30 hover:bg-opacity-50 transition-colors duration-300 px-4 py-2 rounded-lg"
//                     aria-label="Back to all case studies"
//                   >
//                     <svg 
//                       xmlns="http://www.w3.org/2000/svg" 
//                       className="h-5 w-5 mr-2" 
//                       fill="none" 
//                       viewBox="0 0 24 24" 
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path 
//                         strokeLinecap="round" 
//                         strokeLinejoin="round" 
//                         strokeWidth={2} 
//                         d="M10 19l-7-7m0 0l7-7m-7 7h18" 
//                       />
//                     </svg>
//                     Back to Case Studies
//                   </Link>
//                 </div>
//               </nav>
              
//               <section className="md:flex items-center">
//                 <div className="md:w-1/2 mb-8 md:mb-0">
//                   <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//                     {caseStudy.name}
//                   </h1>
//                   {caseStudy.industry && (
//                     <p className="text-white text-lg opacity-90">{caseStudy.industry}</p>
//                   )}
//                 </div>
                
//                 <div className="md:w-1/2 md:pl-12 flex justify-center md:justify-end">
//                   <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md flex items-center justify-center h-64">
//                     {renderImage(
//                       caseStudy.logoUrl, 
//                       `${caseStudy.name} Logo`,
//                       "max-h-full max-w-full object-contain"
//                     )}
//                   </div>
//                 </div>
//               </section>
//             </div>
//           </div>
          
//           {/* Main content with bento grid and description */}
//           <section className="w-full max-w-6xl mx-auto p-4 md:p-6 bg-white mt-10 rounded-md" aria-labelledby="showcase-heading">
//             <div className="flex flex-col md:flex-row gap-6">
//               {/* Bento grid section - takes full width on mobile, 2/3 on medium+ */}
//               <div className="md:w-2/3">
//                 <h2 id="showcase-heading" className="mb-4 text-2xl font-bold">{caseStudy.name} Showcase</h2>
                
//                 <div className="grid grid-cols-12 gap-3">
//                   <div className="col-span-6 rounded-lg overflow-hidden h-40 bg-blue-950">
//                     {renderImage(caseStudy.top1img, `${caseStudy.name} project showcase image 1`)}
//                   </div>
//                   <div className="col-span-6 rounded-lg overflow-hidden h-40 bg-blue-950">
//                     {renderImage(caseStudy.top2img, `${caseStudy.name} project showcase image 2`)}
//                   </div>
                  
//                   <div className="col-span-3 rounded-lg overflow-hidden h-72 bg-gray-200">
//                     {renderImage(caseStudy.bottomLeftImg, `${caseStudy.name} project detail`)}
//                   </div>
                  
//                   <div className="col-span-6">
//                     <div className="rounded-lg overflow-hidden h-32 mb-3 bg-blue-950 flex items-center justify-center">
//                       {renderImage(caseStudy.centerImg, `${caseStudy.name} project highlight`)}
//                     </div>
                    
//                     <div className="grid grid-cols-2 gap-3">
//                       <div className="rounded-lg overflow-hidden h-36" style={{ backgroundColor: 'rgb(241, 199, 0)' }}>
//                         {renderImage(caseStudy.bottomCenter1, `${caseStudy.name} design element`)}
//                       </div>
//                       <div className="rounded-lg overflow-hidden h-36 bg-blue-950 flex items-center justify-center">
//                         {renderImage(caseStudy.bottomCenter2, `${caseStudy.name} design element`)}
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="col-span-3 rounded-lg overflow-hidden h-72 bg-gray-200">
//                     {renderImage(caseStudy.bottomRightImg, `${caseStudy.name} project detail`)}
//                   </div>
//                 </div>
//               </div>
              
//               {/* Description section - takes full width on mobile, 1/3 on medium+ */}
//               {caseStudy.description && (
//                 <div className="md:w-1/3 mt-6 md:mt-0">
//                   <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
//                   <p className="text-gray-800">{caseStudy.description}</p>
//                 </div>
//               )}
//             </div>
//           </section>

//           {/* Contact button section */}
//           <section className="w-full max-w-6xl mx-auto p-6 mt-6 rounded-lg shadow flex justify-center">
//             <a 
//               href='https://superprofile.bio/brandingtactics?fbclid=PAZXh0bgNhZW0CMTEAAadatm808cqzeYJghPSCZHEXDihI0qSDc2IodHxWVjWtmlOt-e_eQlOYzn0ESw_aem_i1soeOjRWKYNTb4eaAymlg' 
//               className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg flex items-center"
//               aria-label="Contact us to discuss your project"
//             >
//               <span>Discuss Your Project</span>
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 className="h-5 w-5 ml-2" 
//                 fill="none" 
//                 viewBox="0 0 24 24" 
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M14 5l7 7m0 0l-7 7m7-7H3" 
//                 />
//               </svg>
//             </a>
//           </section>

//           {/* Video section with increased height */}
//           <section className="w-full max-w-6xl mx-auto p-6 bg-white mt-6 rounded-lg shadow" aria-labelledby="video-heading">
//             <h2 id="video-heading" className="text-2xl font-bold mb-6">Case Study Video</h2>
//             {caseStudy.videoUrl ? (
//               <div className="video-container">
//                 {renderYoutubeEmbed(caseStudy.videoUrl)}
//               </div>
//             ) : (
//               <div className="bg-gray-100 p-8 rounded-lg text-center h-64 flex items-center justify-center">
//                 <p className="text-gray-600">Video coming soon</p>
//               </div>
//             )}
//           </section>
          
//           {/* Related case studies section */}
//           {relatedCaseStudies.length > 0 && (
//             <section className="w-full max-w-6xl mx-auto p-6 bg-gray-100 mt-6 mb-6" aria-labelledby="related-heading">
//               <h2 id="related-heading" className="text-2xl font-bold mb-4">Related Projects</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {relatedCaseStudies.map(study => (
//                   <Link 
//                     to={`/caseStudy/${study.id}`} 
//                     key={study.id}
//                     className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//                     aria-label={`View case study for ${study.name}`}
//                   >
//                     <div className="p-4 h-24 flex items-center justify-center bg-gray-50">
//                       {renderImage(
//                         study.logoUrl, 
//                         `${study.name} Logo`, 
//                         "max-h-full max-w-full object-contain h-16"
//                       )}
//                     </div>
//                     <div className="p-4">
//                       <h3 className="font-bold text-lg">{study.name}</h3>
//                       <p className="text-sm text-gray-600">{study.industry}</p>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </section>
//           )}
//         </main>
//       </div>
      
//       <Suspense fallback={<div className="h-16 bg-gray-900"></div>}>
//         <Footer />
//       </Suspense>
//     </div>
//   );
// };

// export default CaseStudyDetail;


import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCaseStudyContext } from '../context/CaseStudyContext';
import bentoGrid from '/project-images/Project2.png';

// Lazy loaded component
const Footer = lazy(() => import('../Components/Footer'));

const CaseStudyDetail = () => {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const { getCaseStudyById, getRelatedCaseStudies, loading, setLoading } = useCaseStudyContext();

  useEffect(() => {
    // Track if component is mounted to prevent memory leaks
    let isMounted = true;
    
    const fetchCaseStudy = async () => {
      setLoading(true);
      try {
        const study = await getCaseStudyById(id);
        if (isMounted && study) {
          setCaseStudy(study);
          // Set document title directly instead of using Helmet
          document.title = `${study.name} - Case Study | Your Brand Agency`;
          
          // Set meta description directly
          const metaDescription = document.querySelector('meta[name="description"]');
          if (metaDescription) {
            metaDescription.setAttribute('content', 
              `Case study for ${study.name}. ${study.description?.substring(0, 155) || 'View our work and results for this project.'}`);
          } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = `Case study for ${study.name}. ${study.description?.substring(0, 155) || 'View our work and results for this project.'}`;
            document.head.appendChild(meta);
          }
        }
      } catch (error) {
        console.error("Error fetching case study:", error);
        if (isMounted) setCaseStudy(null);
      }
      if (isMounted) setLoading(false);
    };

    fetchCaseStudy();
    
    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [id, getCaseStudyById, setLoading]);

  // Memoized color classes to avoid recomputation
  const getBgColorClass = React.useMemo(() => {
    const colorClasses = [
      'bg-red-600', 'bg-[#11262c]', 'bg-black', 'bg-[#211d1d]', 
      'bg-[#2626df]', 'bg-lime-950', 'bg-[#FFFFFF]', 'bg-yellow-300', 'bg-red-950'
    ];
    return caseStudy ? colorClasses[(caseStudy.id - 1) % colorClasses.length] : 'bg-blue-700';
  }, [caseStudy?.id]);

  // Image loading optimization
  const renderImage = (imageUrl, alt, className = "w-full h-full object-cover") => {
    return (
      <img 
        src={imageUrl || "/api/placeholder/400/300"}
        alt={alt}
        className={className}
        loading="lazy" // Lazy load images
        onError={(e) => {
          e.target.src = "/api/placeholder/400/300";
          e.target.alt = "Image placeholder";
        }}
      />
    );
  };

  // YouTube embed optimization - load only when needed
  const renderYoutubeEmbed = (youtubeUrl) => {
    if (!youtubeUrl) return null;
    
    const videoId = youtubeUrl?.includes('watch?v=') 
      ? youtubeUrl.split('watch?v=')[1].split('&')[0]
      : youtubeUrl?.includes('youtu.be/') 
        ? youtubeUrl.split('youtu.be/')[1]
        : '';
    
    if (!videoId) return null;
    
    return (
      <div className="relative w-full overflow-hidden shadow-lg rounded-lg" style={{ paddingBottom: '56.25%', height: '0' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`${caseStudy?.name || 'Case Study'} Video Presentation`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          loading="lazy"
        ></iframe>
      </div>
    );
  };

  // Create and append preconnect links to YouTube for faster loading
  useEffect(() => {
    const links = [
      { rel: 'preconnect', href: 'https://www.youtube.com' },
      { rel: 'preconnect', href: 'https://i.ytimg.com' }
    ];
    
    const fragment = document.createDocumentFragment();
    links.forEach(linkData => {
      const existingLink = document.querySelector(`link[rel="${linkData.rel}"][href="${linkData.href}"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = linkData.rel;
        link.href = linkData.href;
        fragment.appendChild(link);
      }
    });
    
    document.head.appendChild(fragment);

    // Cleanup when component unmounts
    return () => {
      links.forEach(linkData => {
        const link = document.querySelector(`link[rel="${linkData.rel}"][href="${linkData.href}"]`);
        if (link) document.head.removeChild(link);
      });
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-white text-xl">Loading case study...</div>
      </div>
    );
  }

  if (!caseStudy) {
    // Set not found title
    document.title = "Case Study Not Found | Your Brand Agency";
    
    return (
      <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center p-6">
        <div className="text-white text-xl mb-6">Case study not found</div>
        <Link 
          to="/caseStudy" 
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300"
        >
          Return to Case Studies
        </Link>
      </div>
    );
  }

  // Get related case studies only when needed
  const relatedCaseStudies = getRelatedCaseStudies(caseStudy.id, caseStudy.industry);

  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <div className="flex-grow">
        <main>
          <div className={`${getBgColorClass} py-16`} id="case-study-hero">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav aria-label="Breadcrumb" className="flex items-center justify-between mb-6">
                <div className="flex space-x-3">
                  <Link
                    to="/"
                    className="flex items-center text-white bg-black bg-opacity-30 hover:bg-opacity-50 transition-colors duration-300 px-4 py-2 rounded-lg"
                    aria-label="Go to homepage"
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
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                      />
                    </svg>
                    Home
                  </Link>
                  <Link
                    to="/CaseStudy"
                    className="flex items-center text-white bg-black bg-opacity-30 hover:bg-opacity-50 transition-colors duration-300 px-4 py-2 rounded-lg"
                    aria-label="Back to all case studies"
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
                    Back to Case Studies
                  </Link>
                </div>
              </nav>
              
              <section className="md:flex items-center justify-between">
                {/* Logo on the left side */}
                <div className="md:w-1/3 flex justify-start mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md flex items-center justify-center h-64">
                    {renderImage(
                      caseStudy.logoUrl, 
                      `${caseStudy.name} Logo`,
                      "max-h-full max-w-full object-contain"
                    )}
                  </div>
                </div>
                
                {/* Empty spacer div to maintain layout */}
                <div className="md:w-1/2"></div>
              </section>
            </div>
          </div>
          
          {/* Main content with responsive single image and description */}
          <section className="w-full max-w-6xl mx-auto p-4 md:p-6 bg-white mt-10 rounded-md" aria-labelledby="showcase-heading">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Single responsive image section - takes full width on mobile, 2/3 on medium+ */}
              <div className="md:w-2/3">
                <h2 id="showcase-heading" className="mb-4 text-2xl font-bold">{caseStudy.name} Showcase</h2>
                
                <div className="rounded-lg overflow-hidden shadow-lg bg-blue-950">
                  {/* Aspect ratio container for responsive image */}
                  <div className="relative aspect-video w-full">
                    {/* Using top1img as the main image, with fallbacks */}
                    {renderImage(
                      caseStudy.projectImage, 
                      `${caseStudy.name} project showcase image`,
                      "absolute inset-0 w-full h-full object-fit"
                    )}
                  </div>
                </div>
              </div>
              
              {/* Description section - takes full width on mobile, 1/3 on medium+ */}
              {caseStudy.description && (
                <div className="md:w-1/3 mt-6 md:mt-0">
                  <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                  <p className="text-gray-800">{caseStudy.description}</p>
                </div>
              )}
            </div>
          </section>

          {/* Bento Grid Section - NEW SECTION */}
    

          {/* Contact button section */}
          <section className="w-full max-w-6xl mx-auto p-6 mt-6 rounded-lg shadow flex justify-center">
            <a 
              href='https://superprofile.bio/brandingtactics?fbclid=PAZXh0bgNhZW0CMTEAAadatm808cqzeYJghPSCZHEXDihI0qSDc2IodHxWVjWtmlOt-e_eQlOYzn0ESw_aem_i1soeOjRWKYNTb4eaAymlg' 
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg flex items-center"
              aria-label="Contact us to discuss your project"
            >
              <span>Discuss Your Project</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </a>
          </section>

          {/* Video section with increased height */}
          <section className="w-full max-w-6xl mx-auto p-6 bg-white mt-6 rounded-lg shadow" aria-labelledby="video-heading">
            <h2 id="video-heading" className="text-2xl font-bold mb-6">Case Study Video</h2>
            {caseStudy.videoUrl ? (
              <div className="video-container">
                {renderYoutubeEmbed(caseStudy.videoUrl)}
              </div>
            ) : (
              <div className="bg-gray-100 p-8 rounded-lg text-center h-64 flex items-center justify-center">
                <p className="text-gray-600">Video coming soon</p>
              </div>
            )}
          </section>
          
          {/* Related case studies section */}
          {relatedCaseStudies.length > 0 && (
            <section className="w-full max-w-6xl mx-auto p-6 bg-gray-100 mt-6 mb-6" aria-labelledby="related-heading">
              <h2 id="related-heading" className="text-2xl font-bold mb-4">Related Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedCaseStudies.map(study => (
                  <Link 
                    to={`/caseStudy/${study.id}`} 
                    key={study.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    aria-label={`View case study for ${study.name}`}
                  >
                    <div className="p-4 h-24 flex items-center justify-center bg-gray-50">
                      {renderImage(
                        study.logoUrl, 
                        `${study.name} Logo`, 
                        "max-h-full max-w-full object-contain h-16"
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{study.name}</h3>
                      <p className="text-sm text-gray-600">{study.industry}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
      
      <Suspense fallback={<div className="h-16 bg-gray-900"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default CaseStudyDetail;