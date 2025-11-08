import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been sent.');
  };

  return (
    <section id="contact" className="relative pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(34,211,238,0.12),rgba(0,0,0,0))]" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Let’s build something great
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-white/70">Name</label>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none placeholder:text-white/40 focus:border-cyan-400/40"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none placeholder:text-white/40 focus:border-cyan-400/40"
                placeholder="name@email.com"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/70">Message</label>
            <textarea
              rows={5}
              required
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none placeholder:text-white/40 focus:border-cyan-400/40"
              placeholder="Tell me about your project..."
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-white/60">Prefer email? <a href="mailto:hello@bimadev.dev" className="text-cyan-400 hover:underline inline-flex items-center gap-1"><Mail className="h-4 w-4" /> hello@bimadev.dev</a></p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/30"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
          </div>
          {status && (
            <p className="pt-2 text-sm text-cyan-300">{status}</p>
          )}
        </motion.form>

        <p className="mt-10 text-center text-xs text-white/50">© {new Date().getFullYear()} bimadev — Crafted in Indonesia</p>
      </div>
    </section>
  );
}
