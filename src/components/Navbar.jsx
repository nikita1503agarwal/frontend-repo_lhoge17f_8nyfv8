import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Github, Linkedin } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md"
        >
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <Rocket className="h-5 w-5 text-cyan-400" />
            <span className="text-white">bimadev</span>
            <span className="hidden text-white/60 sm:inline">— Full‑Stack</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}
