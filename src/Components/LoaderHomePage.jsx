import React, { useState, useEffect } from 'react'
import logo from '../assets/icon.png'
import BrandingPopup from './BrandingPopup.jsx';

const LoaderHomePage = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    years: 0
  });
  const [showPopup, setShowPopup] = useState(true);
  
  useEffect(() => {
    const duration = 2000;
    const targets = {
      clients: 100,
      projects: 250,
      years: 15
    };
    
    const intervals = {
      clients: duration / targets.clients,
      projects: duration / targets.projects,
      years: duration / targets.years
    };
    
    const timers = [];
    
    if (counts.clients < targets.clients) {
      timers.push(setTimeout(() => {
        setCounts(prev => ({ ...prev, clients: prev.clients + 1 }));
      }, intervals.clients));
    }
    
    if (counts.projects < targets.projects) {
      timers.push(setTimeout(() => {
        setCounts(prev => ({ ...prev, projects: prev.projects + 1 }));
      }, intervals.projects));
    }
    
    if (counts.years < targets.years) {
      timers.push(setTimeout(() => {
        setCounts(prev => ({ ...prev, years: prev.years + 1 }));
      }, intervals.years));
    }
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, [counts]);
  
  return (
    <>
      <BrandingPopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
      <div className="w-full h-[calc(100vh-4rem)] flex bg-black">
        <div className="w-1/2 h-full flex items-center justify-center">
          <img
            src={logo}
            alt="Branding Tactics Logo"
            className="h-full w-full object-contain"
          />
        </div>
        
        <div className="w-1/2 h-full flex flex-col justify-center px-8">
          <div className="mb-8 grid grid-cols-3 gap-6">
            <div className="flex flex-col">
              <div className="text-4xl font-bold text-orange-500 mb-1">
                {counts.clients}+
              </div>
              <div className="text-xl font-medium text-white">
                Satisfied Clients
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="text-4xl font-bold text-orange-500 mb-1">
                {counts.projects}+
              </div>
              <div className="text-xl font-medium text-white">
                Instagram Followers
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="text-4xl font-bold text-orange-500 mb-1">
                {counts.years}+
              </div>
              <div className="text-xl font-medium text-white">
                Years Experience
              </div>
            </div>
          </div>
          
          <div className="text-3xl font-bold text-white">
            Serious Branding for Serious Entrepreneurs
          </div>
        </div>
      </div>
    </>
  );
}

export default LoaderHomePage