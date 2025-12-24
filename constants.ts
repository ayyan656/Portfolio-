
import { Project, NavItem } from './types';

export const RAW_PHONE_NUMBER = "923188866304";
export const WHATSAPP_LINK = `https://wa.me/${RAW_PHONE_NUMBER}`;
export const CONTACT_EMAIL = "naveedayyan89@gmail.com";
export const TEL_LINK = `tel:+${RAW_PHONE_NUMBER}`;
export const GITHUB_URL = "https://github.com/ayyan656/";
export const LINKEDIN_URL = "https://www.linkedin.com/in/syed-ayyan-789464396/";

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Connect', href: '#connect' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Nexus',
    description: 'A full-featured headless commerce platform built with React and Node.js.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    imageUrl: 'https://picsum.photos/seed/shop/800/600',
    link: 'https://github.com/ayyan656/ecommerce-nexus'
  },
  {
    id: '2',
    title: 'Fintech Dashboard',
    description: 'Real-time financial analytics dashboard with complex data visualization.',
    tags: ['Next.js', 'D3.js', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/dashboard/800/600',
    link: 'https://github.com/ayyan656/fintech-dashboard'
  },
  {
    id: '3',
    title: 'AI Content Engine',
    description: 'Leveraging large language models to automate enterprise content workflows.',
    tags: ['Python', 'FastAPI', 'React'],
    imageUrl: 'https://picsum.photos/seed/ai/800/600',
    link: 'https://github.com/ayyan656/ai-engine'
  },
  {
    id: '4',
    title: 'Pulse Social',
    description: 'High-performance social networking platform optimized for mobile.',
    tags: ['React Native', 'Firebase', 'Redux'],
    imageUrl: 'https://picsum.photos/seed/social/800/600',
    link: 'https://github.com/ayyan656/pulse-social'
  }
];
