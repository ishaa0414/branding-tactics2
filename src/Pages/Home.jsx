import React, { lazy, Suspense } from 'react';

// Import only the footer component eagerly as it appears on initial render
import Footer from '../Components/Footer';

// Lazy load all other components
const VisionaryBrand = lazy(() => import('../Components/VisionaryBrand'));
const Services = lazy(() => import('../Components/Services'));
const BuildingBrandGrid = lazy(() => import('../Components/BuildingBrandGrid'));
const ProjectHome = lazy(() => import('../Components/ProjectHome'));
const About = lazy(() => import('../Components/About'));
const GetInTouch = lazy(() => import('../Components/GetInTouch'));

// Create a simple loading component
const LoadingFallback = () => <div className="component-loading">Loading...</div>;

const Home = () => {
  return (
    <div>
      {/* Commented components - keeping for reference
      <Navbar/>
      <LoaderHomePage/>
      <BookCall/> 
      */}
      
      <Suspense fallback={<LoadingFallback />}>
        <VisionaryBrand />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <BuildingBrandGrid />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <ProjectHome />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <GetInTouch />
      </Suspense>
      
      <Footer />
    </div>
  );
};

export default Home;