import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { theme } = useTheme();
  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frameworks/Audits</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>

        {/* You removed the skill progress sections */}

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 text-center">
          {[
            'SOC 2', 'ITGC', "NIST 800-37", 'ISO/IEC 27001:2022',
            "ISO/IEC 27001:2013", 'ISO/IEC 27005:2022', "COSO",
            "RBI ITGRCAP", "SEBI CSCRF",
          ].map((cert, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg transform transition hover:scale-105 ${
                theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 shadow-sm'
              }`}
            >
              <span className="font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;