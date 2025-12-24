
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import { WHATSAPP_LINK, CONTACT_EMAIL, TEL_LINK } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="connect" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden"
        >
          {/* Subtle decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px]" />

          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let's Connect</h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto font-light">
            I'm currently open for new opportunities and collaborations. 
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Pulsing WhatsApp Button */}
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.2, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-emerald-500 rounded-full blur-xl"
              />
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center gap-3 px-10 py-5 bg-emerald-500 text-zinc-950 font-bold rounded-full transition-all shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle size={22} fill="currentColor" />
                WhatsApp Me
              </motion.a>
            </div>

            <div className="flex gap-4">
              <a 
                href={`mailto:${CONTACT_EMAIL}`}
                className="p-5 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-colors"
                title="Email Me"
              >
                <Mail size={22} />
              </a>
              <a 
                href={TEL_LINK}
                className="p-5 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-colors"
                title="Call Me Now"
              >
                <Phone size={22} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
