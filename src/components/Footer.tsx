import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-8 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
              © {currentYear} Surya J. All Rights Reserved
            </p>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            {['LinkedIn'].map((platform, index) => (
              <a 
                key={index} 
                href="https://www.linkedin.com/in/surya-j-35984424a/"
                target="_blank" 
                className="hover:text-blue-500 transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;