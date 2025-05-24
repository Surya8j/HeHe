import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { theme } = useTheme();
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Frameworks/Audits</h2>

        {/* You removed the skill progress sections */}

        <ul className="space-y-2">
          {['SOC 2', 'ITGC', "NIST 800-37", 'ISO/IEC 27001:2022', "ISO/IEC 27001:2013", 'ISO/IEC 27005:2022', "COSO", "RBI ITGRCAP", "SEBI CSCRF", 'COBIT', 'DPDPA', 'CCPA'].map((cert, index) => (
            <li key={index}>
              <span className="font-medium">{cert}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}    
export default Skills;