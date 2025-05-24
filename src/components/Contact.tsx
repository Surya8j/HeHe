import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  
  const contactInfo = [
    { 
      icon: <Mail className="text-blue-500" size={24} />, 
      title: 'Email', 
      value: 'naveensurya888@gmail.com',
      link: 'mailto:john@example.com' 
    },
 
    { 
      icon: <MapPin className="text-blue-500" size={24} />, 
      title: 'Location', 
      value: 'Bengaluru, IN',
      link: 'https://maps.google.com' 
    },
  ];
  
  return (
    <section className="py-20 terminal-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>
            <p>Connection established.</p>
            <p className="mb-8">Leave a message. I'll be in touch... maybe.</p>
            <div className="space-y-6 terminal-info">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-3 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <a 
                      href={item.link} 
                      className={`hover:text-blue-500 transition-colors ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;