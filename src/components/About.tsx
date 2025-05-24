import React from 'react';
import { User, Mail, MapPin, Calendar, Shield, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useEffect, useRef } from 'react';

const About = () => {
  const { theme } = useTheme();
  
  const personalInfo = [
    { icon: <User size={20} />, label: 'Name', value: 'Surya J' },
    { icon: <Mail size={20} />, label: 'Email', value: 'naveensurya888@gmail.com' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'India' },
    { icon: <Calendar size={20} />, label: 'Experience', value: '3+ Years' },
    { icon: <Shield size={20} />, label: 'Specialization', value: 'Risk Management & Audits' },
    { icon: <Award size={20} />, label: 'Certifications', value: 'CEH, CC, ISO/IEC 27001:2022 LA' },
  ];

  const imageContainerRef = useRef(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
 <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="mb-16"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-6">
              Information Security Professional & <span className="text-green-400">Risk Management Expert</span>
            </h3>
            
            <p className="mb-6 leading-relaxed">
              [+] Initializing Security Protocol... [OK]<br />
              [+] Scanning for vulnerabilities... [Results: 3+ Years Experience]<br />
              [+] Specializing in Risk Management & Security Audits. Frameworks implemented. Compliance achieved.
            </p>
            
            <p className="mb-6 leading-relaxed">
              [+] Identity confirmed: ISO 27001 LA, CEH.<br />
              [+] Executing risk assessment algorithms... [Identifying Threats]<br />
              [+] Deploying mitigation strategies. Regulatory compliance verified.<br />
              [+] Output: Comprehensive Security Solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {personalInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="p-2 mr-3">
 {item.icon}
                  </div>
                  <div>
 <span className={`block text-sm ${theme === 'dark' ? '' : ''}`}>{item.label}:</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="CV-SuryaJ3.0.pdf" // Place your CV file in the public folder or update the path
              download
              className={`px-6 py-3 mt-4 rounded-full font-medium transform transition hover:scale-105 ${
                theme === 'dark'
                  ? ' text-white'
                  : ' text-white'
              }`}
            >
              Download CV
            </a>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative" ref={imageContainerRef}>
              <div className="rounded-lg overflow-hidden transform transition-all hover:scale-105" style={{ aspectRatio: '1/1' }}>
                <img 
                  src="link.jpeg" //my photo
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
 </div>
              <div className={`absolute -bottom-5 -right-5 w-32 h-32 rounded-full border-4 ${
                theme === 'dark' ? 'border-gray-800' : 'border-black'
              }`}>
                <div className="relative w-full h-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-blue-500">3+</span>
                  <span className={`absolute bottom-3 text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
 YEARS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;