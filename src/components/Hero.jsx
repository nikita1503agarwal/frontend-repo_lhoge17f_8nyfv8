import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(34,211,238,0.25),rgba(0,0,0,0))]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            Hi, I’m <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">bimadev</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Full‑stack developer from Indonesia. I craft fast, delightful web apps with modern stacks, clean architecture, and immersive interactions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:shadow-cyan-500/30"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-3 text-xs text-white/60"
          >
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">React</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">TypeScript</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Node.js</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">FastAPI</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">MongoDB</span>
          </motion.div>
        </div>

        <div className="relative h-[60vh] w-full sm:h-[70vh] lg:h-[80vh]">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent" />
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-40" />
        </div>
      </div>
    </section>
  );
}
