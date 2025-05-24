import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = ['all', 'web', 'design', 'app'];
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      category: 'web',
      image: 'https://images.pexels.com/photos/6956043/pexels-photo-6956043.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A modern e-commerce admin dashboard with analytics and inventory management.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      liveLink: '#',
      repoLink: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'app',
      image: 'https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A productivity app for managing tasks, projects, and team collaboration.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      liveLink: '#',
      repoLink: '#',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'design',
      image: 'https://images.pexels.com/photos/5240544/pexels-photo-5240544.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A creative portfolio for a digital artist with gallery and contact features.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      liveLink: '#',
      repoLink: '#',
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      category: 'app',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A weather application showing current conditions and 5-day forecast.',
      technologies: ['React', 'Weather API', 'CSS Modules'],
      liveLink: '#',
      repoLink: '#',
    },
    {
      id: 5,
      title: 'Corporate Website',
      category: 'web',
      image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A professional website for a marketing agency with service pages and blog.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      liveLink: '#',
      repoLink: '#',
    },
    {
      id: 6,
      title: 'Mobile App UI Kit',
      category: 'design',
      image: 'https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A comprehensive UI kit for mobile applications with over 200 components.',
      technologies: ['Figma', 'Sketch', 'Adobe XD'],
      liveLink: '#',
      repoLink: '#',
    },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === category
                  ? 'bg-blue-500 text-white'
                  : theme === 'dark'
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 shadow-lg"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex gap-3 mb-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-blue-500/80 text-white rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-end space-x-2">
                      <a href={project.liveLink} className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors">
                        <ExternalLink size={18} />
                      </a>
                      <a href={project.repoLink} className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors">
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className={`px-8 py-3 rounded-full font-medium transform transition hover:scale-105 ${
            theme === 'dark' 
              ? 'bg-blue-500 hover:bg-blue-600 text-white' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}>
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;