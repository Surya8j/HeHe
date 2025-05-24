import React, { useEffect, useRef, useState } from 'react';
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
  const [userIpAddress, setUserIpAddress] = useState('');
  const [showIntruderText, setShowIntruderText] = useState(true);
  const [intruderTextAnimating, setIntruderTextAnimating] = useState(false);

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

  // Effect to fetch user's IP address
  useEffect(() => {
    // Replace with your actual API call to get the IP address
 fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setUserIpAddress(data.ip))
      .catch(error => console.error('Error fetching IP address:', error));
  }, []); // The empty dependency array ensures this effect runs only once on mount



  useEffect(() => {
    if (showIntruderText) {
      const animationTimeout = setTimeout(() => {
        setIntruderTextAnimating(true);
      }, 100); // Small delay to ensure the component is rendered before adding the class
      const disappearTimeout = setTimeout(() => {
        setShowIntruderText(false);
      }, 5000); // Disappear after 5 seconds
      return () => { clearTimeout(animationTimeout); clearTimeout(disappearTimeout); };
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="relative z-10 max-w-full mx-auto text-left">

        {/* Removed buttons as they don't fit a pure terminal text interface */}
        {/* You might replace these with text-based prompts or instructions */}

        {/* "Intruder Detected !!!" text and its animation */}
        {showIntruderText && (
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-20 whitespace-nowrap overflow-hidden pr-1`}
            style={{
              animation: 'blink-color 5s linear forwards',
            }}
          >
          Intruder Detected
          </h1>
        )}

        {/* Other content that appears after "Intruder Detected !!!" disappears */}
        {!showIntruderText && ( // Only show this content when showIntruderText is false
          <>
            <p className="text-xl sm:text-2xl mb-20 whitespace-nowrap overflow-hidden pr-1 animate-typing animate-blink-caret" style={{ animationDelay: '0s', animationDuration: '2s' }}>
              OH... false positive, you are ipaddr=={userIpAddress}            </p>

            <p className="text-xl sm:text-2xl mb-20 whitespace-nowrap overflow-hidden pr-1 animate-typing animate-blink-caret" style={{ animationDelay: '0s', animationDuration: '2s' }}>
              Welcome ipaddr=={userIpAddress}
            </p>
            <p className="text-xl sm:text-2xl mb-8 whitespace-nowrap overflow-hidden pr-1 animate-typing animate-blink-caret" style={{ animationDelay: '2s', animationDuration: '2s' }}>
              I am Surya J, an Information Security Risk Professional
            </p>
            {/* Removed ChevronDown as it was part of the old button */}
          </>
        )}      </div>
    </section>
  );
}
export default Hero;