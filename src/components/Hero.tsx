import React from 'react';
import { ChevronDown, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  scrollToAbout: () => void;
}

const Hero = ({ scrollToAbout }: HeroProps) => {
  const { theme } = useTheme();
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-blue-900/20 to-gray-900/90' : 'bg-gradient-to-b from-blue-50/50 to-white/80'}`}></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <Shield size={64} className="text-blue-500" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <span className="block">Hello, I'm</span>
          <span className="text-blue-500 block mt-2">Surya J</span>
        </h1>
        
        <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-8 leading-relaxed">
          <span className="typing-animation">Information Security Professional</span>
        </h2>
        
        <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
          Protecting digital assets and securing infrastructure with advanced cybersecurity solutions and strategic security planning.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <button className={`px-8 py-3 rounded-full font-medium transform transition hover:scale-105 ${
            theme === 'dark' 
              ? 'bg-blue-500 hover:bg-blue-600 text-white' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}>
            View My Expertise
          </button>
          
          <button className={`px-8 py-3 rounded-full font-medium transform transition hover:scale-105 ${
            theme === 'dark'
              ? 'bg-transparent hover:bg-gray-800 text-white border border-gray-600'
              : 'bg-transparent hover:bg-gray-100 text-gray-900 border border-gray-300'
          }`}>
            Contact Me
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce">
        <button 
          onClick={scrollToAbout} 
          className={`p-2 rounded-full ${
            theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;