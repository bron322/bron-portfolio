import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
  About,
  Contact,
  FreelanceSection,
  LearningBlogs,
  Experience,
  Hero,
  LoadingScreen,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import BlogDetailPage from "./components/blog/BlogDetailPage";

const HomePage = () => (
  <>
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <LearningBlogs />
    <FreelanceSection />
    <Tech />
    <Works />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  </>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div
        className="relative z-0 bg-primary"
        style={{
          opacity: isLoading ? 0 : 1,
          visibility: isLoading ? "hidden" : "visible",
          transition: "opacity 1s ease-out, visibility 0s linear " + (isLoading ? "0s" : "0s"),
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
