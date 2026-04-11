import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import { About, Contact, FreelanceSection, Experience, Hero, LoadingScreen, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <AnimatePresence mode='wait'>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div
        className='relative z-0 bg-primary'
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 1s ease-out",
        }}
      >
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <FreelanceSection />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
