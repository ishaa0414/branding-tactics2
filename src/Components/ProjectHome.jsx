import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCaseStudyContext } from '../context/CaseStudyContext';
import fizmaa from '/Home/Fizmaa-home.png';
import acrements from '/Home/Acrements-home.png';

const ProjectHome = () => {
  const { clients } = useCaseStudyContext();
  const [fizmaaProject, setFizmaaProject] = useState(null);
  const [acrementsProject, setAcrementsProject] = useState(null);
  const [showMoreFizmaa, setShowMoreFizmaa] = useState(false);
  const [showMoreAcrements, setShowMoreAcrements] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the projects with IDs 6 (Acrements) and 7 (Fizmaa)
    const fizmaaData = clients.find(client => client.id === 1);
    const acrementsData = clients.find(client => client.id === 2);
    
    setFizmaaProject(fizmaaData);
    setAcrementsProject(acrementsData);
  }, [clients]);

  const handleViewAllCaseStudies = () => {
    navigate('/CaseStudy');
  };

  const navigateToCaseStudy = (id) => {
    navigate(`/CaseStudy/${id}`);
  };

  return (
    <div className="py-12 px-4 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-white mb-10 text-center">
          Our Work: <span className="font-bold">Brands We've Transformed</span>
        </h2>
        
        {/* Fizmaa Project Card (01) */}
        {fizmaaProject && (
          <div className="bg-[#1E1E1E] rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="text-teal-500 text-4xl font-bold mb-4">01</div>
                
                <h3 className="text-2xl md:text-3xl text-white mb-6">
                  Our Work: Brands We've Transformed
                </h3>
                
                <div className="text-[#AAAAAA]">
                  <p className="mb-4">
                  Fizmaa, founded by Tejas Jadhav and Manthan Chajjed, students from Oxford University, is redefining how Indians book events. Designed as a bold, intuitive, and user-friendly platform, Fizmaa simplifies event planning by connecting everyday people with trusted vendors, making the entire process seamless and stress-free.
                  </p>
                  
                  {showMoreFizmaa && (
                    <div className="mt-4">
                      <p className="mb-2">
                      We have built a unique brand identity that feels bold, exciting, and safe for their target audience. The energetic red palette conveys passion and celebration, while the minimal yet powerful design ensures clarity, ease, and confidence. Fizmaa’s friendly yet professional tone makes event planning effortless, creating a space where users feel empowered and vendors can thrive.
                      </p>
                    </div>
                  )}
                  
                  <div className="flex mt-6 space-x-4">
                    <button 
                      onClick={() => setShowMoreFizmaa(!showMoreFizmaa)}
                      className="text-teal-500 flex items-center"
                    >
                      Show {showMoreFizmaa ? 'Less' : 'More'} —
                    </button>
                    
                    <button 
                      onClick={() => navigateToCaseStudy(fizmaaProject.id)}
                      className="border border-teal-400 rounded-full px-6 py-2 text-white hover:bg-teal-400/20 transition duration-300"
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Visible Image */}
              <div className="md:w-1/2">
                <img 
                  src={fizmaa} 
                  alt={fizmaaProject.name} 
                  className="w-full h-auto rounded-lg object-fill" 
                  style={{ maxHeight: '300px' }}
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Acrements Project Card (02) */}
        {acrementsProject && (
  <div className="bg-[#1E1E1E] rounded-lg p-6 mb-8">
    <div className="flex flex-col md:flex-row gap-6">
      {/* Image Section - Now on the left */}
      <div className="md:w-1/2 order-2 md:order-1">
        <img
          src={acrements}
          alt={acrementsProject.name}
          className="w-full h-auto rounded-lg object-cover"
          style={{ maxHeight: '300px' }}
        />
      </div>
      
      {/* Content Section - Now on the right */}
      <div className="flex-1 order-1 md:order-2">
        <div className="text-teal-500 text-4xl font-bold mb-4">02</div>
        
        <h3 className="text-2xl md:text-3xl text-white mb-6">
          Our Work: Brands We've Transformed
        </h3>
        
        <div className="text-[#AAAAAA]">
          <p className="mb-4">
          Founded by Shaan Chawla from Ludhiana, Sukhmiwas Administration & Maintenance was created to redefine premium facility management. We built a bespoke plan that positioned the brand as an exclusive service for upscale property owners. 
          </p>
          
          {showMoreAcrements && (
            <div className="mt-4">
              <p className="mb-2">
              Central to this strategy was a custom Wordmark for “Sam,” designed with refined typography and distinctive elements that reflect the brand's commitment to quality and sophistication. This identity, paired with a curated color palette and comprehensive brand guidelines, ensures every touchpoint exudes exclusivity and premium care.
              </p>
            </div>
          )}
          
          <div className="flex mt-6 space-x-4">
            <button
              onClick={() => setShowMoreAcrements(!showMoreAcrements)}
              className="text-teal-500 flex items-center"
            >
              Show {showMoreAcrements ? 'Less' : 'More'} —
            </button>
            
            <button
              onClick={() => navigateToCaseStudy(acrementsProject.id)}
              className="border border-teal-400 rounded-full px-6 py-2 text-white hover:bg-teal-400/20 transition duration-300"
            >
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
        
        {/* View All Button */}
        <div className="flex justify-center mt-8">
        <button onClick={handleViewAllCaseStudies} className=" cursor-pointer border border-orange-500 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base text-white hover:bg-orange-500/20 transition duration-300">
             View More Projects
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectHome;