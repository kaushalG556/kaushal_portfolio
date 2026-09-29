import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Send,
  Mail,
  User,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('loading');
    setError('');

    // Validation
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setStatus('error');
      setError('Please fill in all fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      setStatus('error');
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const { error: insertError } = await supabase
        .from('messages')
        .insert({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        });

      if (insertError) {
        throw insertError;
      }

      setStatus('success');

      setForm({
        name: '',
        email: '',
        message: '',
      });

      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    } catch (error) {
      console.error('Contact form error:', error);

      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  };

  // Social links
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/kaushalG556/',
      label: 'GitHub',
      color: 'hover:text-cyber-neon',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/kaushal-kumar-759561253/',
      label: 'LinkedIn',
      color: 'hover:text-cyber-magenta',
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="font-mono text-sm tracking-widest text-cyber-neon">
            // CONTACT
          </span>

          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Let's Build{' '}
            <span className="gradient-text">Together</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Looking for a Software Engineer, Backend Developer, or someone
            to build a modern web application? Feel free to get in touch.
          </p>
        </motion.div>

        {/* =========================
            CONTACT CARD
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >

          {/* Glow Background */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyber-neon/20 via-cyber-magenta/20 to-cyber-lime/20 blur-xl opacity-50" />

          <div className="relative glass rounded-3xl p-6 sm:p-10">

            <div className="grid gap-8 md:grid-cols-5">

              {/* =========================
                  LEFT SIDE - CONTACT INFO
              ========================== */}
              <div className="flex flex-col justify-between md:col-span-2">

                <div>
                  <h3 className="mb-3 font-display text-2xl font-semibold text-white">
                    Get in touch
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-slate-400">
                    I'm open to software development opportunities,
                    backend development projects, collaborations, and
                    interesting technical discussions.
                  </p>

                  {/* Email */}
                  <div className="space-y-3">
                    <a
                      href="mailto:mrkaushalkumar98@gmail.com"
                      className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-cyber-neon"
                    >
                      <span className="glass rounded-lg p-2">
                        <Mail size={16} />
                      </span>

                      <span className="break-all">
                        mrkaushalkumar98@gmail.com
                      </span>
                    </a>
                  </div>
                </div>

                {/* =========================
                    SOCIAL LINKS
                ========================== */}
                <div className="mt-8">
                  <p className="mb-3 font-mono text-xs tracking-widest text-slate-500">
                    CONNECT WITH ME
                  </p>

                  <div className="flex gap-3">
                    {socialLinks.map(
                      ({ icon: Icon, href, label, color }) => (
                        <motion.a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -4, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`glass rounded-xl p-3 text-slate-400 transition-all ${color} hover:shadow-neon-soft`}
                          aria-label={label}
                        >
                          <Icon size={20} />
                        </motion.a>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* =========================
                  RIGHT SIDE - FORM
              ========================== */}
              <form
                onSubmit={handleSubmit}
                className="space-y-5 md:col-span-3"
              >

                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Name
                  </label>

                  <div className="relative">
                    <User
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-cyber-neon/50 focus:bg-white/10 focus:shadow-neon-soft"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Email
                  </label>

                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-cyber-neon/50 focus:bg-white/10 focus:shadow-neon-soft"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Message
                  </label>

                  <div className="relative">
                    <MessageSquare
                      size={16}
                      className="absolute left-4 top-4 text-slate-500"
                    />

                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          message: e.target.value,
                        })
                      }
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-cyber-neon/50 focus:bg-white/10 focus:shadow-neon-soft"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                </div>

                {/* =========================
                    STATUS MESSAGES
                ========================== */}
                <AnimatePresence>

                  {/* Error */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                    >
                      <AlertCircle size={16} />
                      {error}
                    </motion.div>
                  )}

                  {/* Success */}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 rounded-lg border border-cyber-lime/20 bg-cyber-lime/10 px-4 py-3 text-sm text-cyber-lime"
                    >
                      <CheckCircle2 size={16} />
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}

                </AnimatePresence>

                {/* =========================
                    SEND BUTTON
                ========================== */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{
                    scale: status === 'loading' ? 1 : 1.02,
                  }}
                  whileTap={{
                    scale: status === 'loading' ? 1 : 0.98,
                  }}
                  className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyber-neon to-cyber-magenta px-6 py-3.5 font-semibold text-cyber-bg transition-all hover:shadow-neon disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2
                        size={18}
                        className="animate-spin"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </motion.button>

              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}