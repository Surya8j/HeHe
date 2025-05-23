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
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Me</h3>
            <p className={` ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Please, even without mistake don't contact the below mentioned,
            </p>
            <p className={`mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Contacts are give so that you won't call me mistakenly.
            </p>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-sm'}`}>
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
          <div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;