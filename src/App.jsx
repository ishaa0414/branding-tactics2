import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import CaseStudy from './Pages/CaseStudy'
import { Navbar } from './Components/Navbar'
import { CaseStudyProvider } from './context/CaseStudyContext'
import CaseStudyDetail from './Pages/ProjectShowcase'
import TopImageGrid from './Components/bentogrid'
import SocialCTAButtons from './Components/CTA'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <>
      <div className="border-box bg-[#121212]">
        <SocialCTAButtons />
        <CaseStudyProvider>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CaseStudy" element={<CaseStudy />} />
            <Route path="/CaseStudy/:slug" element={<CaseStudyDetail />} />
            {/* <Route path="/check" element={<TopImageGrid />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CaseStudyProvider>
      </div>
    </>
  )
}

export default App
