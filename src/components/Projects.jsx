import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Next‑Gen Dashboard',
    description: 'Analytics platform with real‑time charts, role‑based access, and blazing‑fast UX.',
    tags: ['React', 'Tailwind', 'FastAPI'],
    icon: Code,
    link: '#',
  },
  {
    title: 'E‑Commerce Experience',
    description: 'Headless storefront with secure checkout, search, and smart recommendations.',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    icon: Globe,
    link: '#',
  },
  {
    title: 'Mobile Companion App',
    description: 'Cross‑platform app with offline‑first sync and delightful interactions.',
    tags: ['React Native', 'Expo'],
    icon: Smartphone,
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.15),rgba(0,0,0,0))]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Featured Projects
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(34,211,238,0.15), transparent 40%)' }} />
              <div className="relative">
                <p.icon className="h-6 w-6 text-cyan-400" />
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
