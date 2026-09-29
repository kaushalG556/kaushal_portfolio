import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-cyber-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* =========================
              BRAND
          ========================== */}
          <div className="text-center md:text-left">
            <span className="font-display text-xl font-bold text-white">
              KAUSHAL
              <span className="text-cyber-neon neon-text">
                KUMAR
              </span>
            </span>

            <p className="mt-2 text-sm text-slate-500">
              Software Engineer • Backend Developer
            </p>
          </div>

          {/* =========================
              SOCIAL LINKS
          ========================== */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: Github,
                href: 'https://github.com/kaushalG556/',
                label: 'GitHub',
              },
              {
                icon: Linkedin,
                href: 'https://www.linkedin.com/in/kaushal-kumar-759561253/',
                label: 'LinkedIn',
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
                className="glass rounded-lg p-2.5 text-slate-400 transition-all hover:text-cyber-neon hover:shadow-neon-soft"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* =========================
              BACK TO TOP
          ========================== */}
          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyber-neon"
          >
            Back to top

            <span className="glass rounded-lg p-2">
              <ArrowUp size={16} />
            </span>
          </motion.a>

        </div>

        {/* =========================
            COPYRIGHT
        ========================== */}
        <div className="mt-8 border-t border-white/5 pt-8 text-center">
          <p className="font-mono text-xs text-slate-600">
            © {new Date().getFullYear()} Kaushal Kumar. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}