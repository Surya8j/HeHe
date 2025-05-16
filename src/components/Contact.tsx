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
            <p className={`mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Feel free to get in touch with me. I am always open to discussing new projects, 
              creative ideas or opportunities to be part of your vision.
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
            
            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {['LinkedIn'].map((platform, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className={`p-3 rounded-full transition-colors ${
                      theme === 'dark' 
                        ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                        : 'bg-white hover:bg-gray-100 text-gray-700 shadow-sm'
                    }`}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <form 
              onSubmit={handleSubmit} 
              className={`p-8 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-md'}`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block mb-2 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                      theme === 'dark' 
                        ? 'bg-gray-700 text-white border-gray-600' 
                        : 'bg-gray-50 text-gray-900 border-gray-300'
                    }`}
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block mb-2 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                      theme === 'dark' 
                        ? 'bg-gray-700 text-white border-gray-600' 
                        : 'bg-gray-50 text-gray-900 border-gray-300'
                    }`}
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label 
                  htmlFor="subject" 
                  className={`block mb-2 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                    theme === 'dark' 
                      ? 'bg-gray-700 text-white border-gray-600' 
                      : 'bg-gray-50 text-gray-900 border-gray-300'
                  }`}
                />
              </div>
              
              <div className="mt-6">
                <label 
                  htmlFor="message" 
                  className={`block mb-2 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                    theme === 'dark' 
                      ? 'bg-gray-700 text-white border-gray-600' 
                      : 'bg-gray-50 text-gray-900 border-gray-300'
                  }`}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="mt-6 px-6 py-3 w-full rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium flex items-center justify-center transition-colors"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;