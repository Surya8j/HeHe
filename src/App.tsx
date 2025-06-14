import React, { useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen transition-colors duration-300 text-green-400 bg-black">
      <Header
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <main>
        <Hero scrollToAbout={() => scrollToSection(aboutRef)} />


            <div ref={aboutRef}>
              <About />
            </div>
            <div ref={skillsRef}>
              <Skills />
            </div>
          </main>
          <Footer />
    </div>
  );
}

export default App