import React, { useEffect, useRef } from 'react';
import { ChevronDown, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  scrollToAbout: () => void;
}

const Hero = ({ scrollToAbout }: HeroProps) => {
  const { theme } = useTheme();
  const textRef1 = useRef<HTMLSpanElement>(null);
  const textRef2 = useRef<HTMLSpanElement>(null);
  const textRef3 = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-typing');
            // Optionally add a cursor blink to the last line of text
            if (entry.target === textRef3.current) {
              entry.target.classList.add('animate-blink-caret');
            }
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (textRef1.current) observer.observe(textRef1.current);
    if (textRef2.current) observer.observe(textRef2.current);
    if (textRef3.current) observer.observe(textRef3.current);

    return () => {
      if (textRef1.current) observer.unobserve(textRef1.current);
      if (textRef2.current) observer.unobserve(textRef2.current);
      if (textRef3.current) observer.unobserve(textRef3.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="relative z-10 max-w-full mx-auto text-left">

        {/* Removed buttons as they don't fit a pure terminal text interface */}
        {/* You might replace these with text-based prompts or instructions */}

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-20 whitespace-nowrap overflow-hidden pr-1 animate-typing animate-blink-caret">
          Intruder Detected !!!
        </h1>
        <p className="text-xl sm:text-2xl mb-20 whitespace-nowrap overflow-hidden pr-1 animate-typing animate-blink-caret" style={{ animationDelay: '2s', animationDuration: '2s' }}>
          Oh false positive, you are just a visitor, welcome visitor
        </p>
        I am Surya J, an Information Security Risk Professional
        <ChevronDown size={20} className="ml-1"/>
        </div>
    </section>
  );
}
export default Hero;