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
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          {/* Optional: Add a terminal-style separator here */}
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

        <div className="space-y-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="border-b border-green-500 pb-4 last:border-b-0" // Add a terminal-style border
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-2">{project.description}</p>
                <p className="text-sm mb-2">Technologies: {project.technologies.join(', ')}</p>
                {project.liveLink !== '#' && <a href={project.liveLink} className="text-blue-400 hover:underline mr-4">Live Demo</a>}
                {project.repoLink !== '#' && <a href={project.repoLink} className="text-blue-400 hover:underline">GitHub Repo</a>}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className={`px-8 py-3 rounded-full font-medium transform transition hover:scale-105 ${
            'border border-green-500 text-green-500 hover:bg-green-500 hover:text-black' // Terminal style button
          }`}>
            View All Projects {/* Or a terminal command like: list projects */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;