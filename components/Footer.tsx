
import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { TEL_LINK, CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Naveed Ayyan. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-6 text-xs font-semibold uppercase tracking-widest text-zinc-600 mr-4">
            <a 
              href={LINKEDIN_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href={GITHUB_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
