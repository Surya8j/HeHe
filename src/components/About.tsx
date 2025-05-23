import React from 'react';
import { User, Mail, MapPin, Calendar, Shield, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

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

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-6">
              Information Security Professional & <span className="text-blue-500">Risk Management Expert</span>
            </h3>
            
            <p className="mb-6 leading-relaxed">
              I'm a dedicated information security professional with 3+ years of experience specializing in 
              risk management and security audits. My expertise focuses on implementing robust security frameworks 
              and ensuring compliance with industry standards.
            </p>
            
            <p className="mb-6 leading-relaxed">
              As a certified ISO 27001 Lead Auditor and CEH professional, I help organizations identify, 
              assess, and mitigate security risks while ensuring compliance with regulatory requirements. 
              My approach combines technical expertise with strategic planning to deliver comprehensive 
              security solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {personalInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className={`p-2 rounded-full mr-3 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <span className={`block text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{item.label}:</span>
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
      ? 'bg-blue-500 hover:bg-blue-600 text-white' 
      : 'bg-blue-600 hover:bg-blue-700 text-white'
  }`}
>
  Download CV
</a>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className={`rounded-lg overflow-hidden shadow-xl transform transition-all hover:scale-105 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`} style={{ aspectRatio: '1/1' }}>
                <img 
                  src="link.jpeg" //my photo
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute -bottom-5 -right-5 w-32 h-32 rounded-full border-4 ${
                theme === 'dark' ? 'border-gray-800 bg-gray-700' : 'border-white bg-gray-100'
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