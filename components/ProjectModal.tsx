
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Tag } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Disable body scroll when modal is open to prevent background movement
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      // Adding padding-right to prevent layout shift if scrollbar exists
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[60] overflow-y-auto">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm"
          />

          {/* Modal Centering Container */}
          <div className="flex min-h-full items-center justify-center p-4 md:p-8">
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl my-8"
              role="dialog"
              aria-modal="true"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 bg-zinc-950/60 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-full backdrop-blur-md transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Image Header */}
              <div className="aspect-video w-full overflow-hidden bg-zinc-950">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 md:p-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-800 text-emerald-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-zinc-700"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
                  {project.title}
                </h2>

                <div className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 font-light space-y-4">
                  <p>{project.description}</p>
                  <p>
                    This project highlights high-performance engineering and refined aesthetics. 
                    Built using cutting-edge technologies like React and Tailwind CSS, 
                    it ensures a responsive, lightning-fast experience across all devices.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-500 text-zinc-950 font-bold rounded-full hover:bg-emerald-400 transition-all transform hover:scale-[1.02] shadow-lg shadow-emerald-500/10"
                  >
                    Launch Project <ExternalLink size={18} />
                  </a>
                  <button
                    onClick={onClose}
                    className="px-8 py-3.5 bg-zinc-800 text-white font-semibold rounded-full hover:bg-zinc-700 transition-colors"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
