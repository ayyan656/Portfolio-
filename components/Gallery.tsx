
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

const Gallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 tracking-tight text-white">Personal Projects</h2>
        <div className="w-12 h-1 bg-emerald-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1 }}
            whileHover="hover"
            onClick={() => setSelectedProject(project)}
            className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/80 transition-all duration-500 glow-on-hover cursor-pointer"
          >
            <div className="aspect-video overflow-hidden relative">
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                variants={{
                  hover: {
                    scale: 1.1,
                    y: -15,
                    transition: { duration: 0.6, ease: "easeOut" }
                  }
                }}
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div 
              className="p-8"
              variants={{
                hover: {
                  y: -5,
                  transition: { duration: 0.4 }
                }
              }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-zinc-800 text-zinc-400 text-[10px] font-semibold uppercase tracking-widest rounded-full border border-zinc-700/50">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors text-white">
                {project.title}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-2">
                {project.description}
              </p>
              
              <div 
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-500 group-hover:text-emerald-400 transition-colors"
              >
                View Details <ExternalLink size={16} />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Gallery;
