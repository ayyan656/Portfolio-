
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { icon: <Layout size={20} />, title: "Frontend", desc: "React, Next.js, Tailwind CSS" },
    { icon: <Server size={20} />, title: "Backend", desc: "Node.js, Express, REST APIs" },
    { icon: <Database size={20} />, title: "Database", desc: "MongoDB, PostgreSQL, Redis" },
    { icon: <Code2 size={20} />, title: "Languages", desc: "JavaScript, TypeScript, Python" },
  ];

  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Photo Container */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Decorative glow behind the image */}
          <div className="absolute -inset-4 bg-emerald-500/20 rounded-3xl blur-2xl group-hover:bg-emerald-500/30 transition-all duration-500" />
          
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
            <img 
              // Requesting maximum available resolution (s=2000) to ensure crystal clarity on 4K/Retina displays
              src="https://avatars.githubusercontent.com/u/124901068?v=4&s=2000" 
              alt="Naveed Ayyan - MERN Stack Developer"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              style={{ 
                imageRendering: 'auto',
                WebkitBackfaceVisibility: 'hidden', // Prevents flickering during transform
                transform: 'translateZ(0)' // Hardware acceleration
              }}
              // fetchpriority="high" is used for LCP images to prioritize loading
              // @ts-ignore - fetchpriority is a valid attribute but not always in React types
              fetchpriority="high"
              loading="eager"
            />
            
            {/* Subtle grain overlay to add texture and hide minor compression artifacts */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            {/* Sophisticated overlay gradient to blend the photo into the dark UI */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-40 pointer-events-none" />
            <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
          </div>
        </motion.div>

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 tracking-tight text-white">About Me</h2>
            <div className="w-12 h-1 bg-emerald-500 rounded-full" />
          </div>
          
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light">
            <p>
              I am a dedicated MERN Stack Developer with a passion for building 
              high-impact web applications that solve real-world problems. With a 
              strong foundation in both frontend and backend technologies, I bridge 
              the gap between complex logic and beautiful user interfaces.
            </p>
            <p>
              My journey in tech is driven by curiosity and a commitment to excellence. 
              Whether it's architecting a scalable database structure or crafting 
              a fluid animation with Framer Motion, I strive for precision and 
              performance in every line of code I write.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-emerald-500/30 transition-colors group/skill"
              >
                <div className="text-emerald-500 mb-3 group-hover/skill:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h4 className="text-white font-semibold mb-1">{skill.title}</h4>
                <p className="text-zinc-500 text-sm">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
