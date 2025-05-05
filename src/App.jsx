// import ReactDOM from "react-dom/client";
// import {  Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import ProjectList from "./Pages/ProjectList";
// import ProjectShowcase from "./Pages/ProjectShowcase";
// import Navbar from "./Components/Navbar";

// function App() {
 

//   return (
//     <>
    
//       <Routes>
//         <Route path="/" element={<Home/>}>
//           {/* <Navbar/> */}
//           <Route path="/project-list" element={<ProjectList />} />
//           <Route path="project-show" element={<ProjectShowcase />} />
        
//         </Route>
//       </Routes>
   
//     </>
//   )
// }

// export default App
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import CaseStudy from './Pages/CaseStudy'
import { Navbar } from './Components/Navbar'
import { CaseStudyProvider } from './context/CaseStudyContext'
import CaseStudyDetail from './Pages/ProjectShowcase'
import TopImageGrid from './Components/bentogrid'
import SocialCTAButtons from './Components/CTA'
import NotFound from './Pages/NotFound'  // Import the NotFound component

function App() {
  return (
    <>
      <div className="border-box bg-[#121212]">
        <SocialCTAButtons/>
        <CaseStudyProvider>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CaseStudy" element={<CaseStudy />} />
          <Route path="/CaseStudy/:id" element={<CaseStudyDetail />}/>
          <Route path="/check" element={<TopImageGrid />}/>
          <Route path="*" element={<NotFound />} />  {/* Add this catch-all route */}
        </Routes>
        </CaseStudyProvider>
      </div>
    </>
  )
}

export default App