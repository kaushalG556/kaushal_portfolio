import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Calendar, BadgeCheck, Clock, X, BookOpen, Maximize2 } from 'lucide-react';
import { certifications, type Certification } from '@/data/portfolio';

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [lightbox, setLightbox] = useState<Certification | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, closeLightbox]);

  return (
    <section id="certifications" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-cyber-neon tracking-widest">// CERTIFICATIONS</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-white">
            Certified <span className="gradient-text">Credentials</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Industry-recognized certifications that validate my expertise across the stack.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative glass-card rounded-2xl overflow-hidden transition-all hover:border-cyber-neon/30 hover:shadow-neon"
            >
              {/* Certificate image — click to open full */}
              {cert.image && (
  <button
    onClick={() => setLightbox(cert)}
    className="relative block w-full h-44 overflow-hidden cursor-zoom-in"
    aria-label={`View ${cert.title} certificate`}
  >
    {cert.image.toLowerCase().endsWith('.pdf') ? (
      <iframe
        src={`${cert.image}#toolbar=0&navpanes=0&scrollbar=0`}
        title={`${cert.title} certificate`}
        className="w-full h-full bg-white pointer-events-none"
      />
    ) : (
      <img
        src={cert.image}
        alt={`${cert.title} certificate`}
        loading="lazy"
        className="w-full h-full object-contain bg-white transition-transform duration-500 group-hover:scale-105"
      />
    )}

    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/90 via-cyber-dark/20 to-transparent" />

    <div className="absolute top-3 right-3 glass rounded-lg p-1.5 text-cyber-neon opacity-0 group-hover:opacity-100 transition-opacity">
      <Maximize2 size={14} />
    </div>

    <div className="absolute bottom-3 left-3 glass rounded-lg p-2 text-cyber-neon">
      <Award size={18} />
    </div>
  </button>
)}

              {/* Body */}
              <div className="p-6">
                {/* Date + Duration row */}
                <div className="flex items-center gap-4 mb-3 text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {cert.date}
                  </span>
                  {cert.duration && (
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} />
                      {cert.duration}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-white leading-snug mb-2 group-hover:text-cyber-neon transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-1.5 text-sm text-cyber-magenta mb-4">
                  <BadgeCheck size={15} />
                  {cert.issuer}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-xs font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4 border-t border-white/5 pt-4">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyber-neon transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span className="font-mono text-xs">{cert.credentialId}</span>
                  </a>
                  {cert.courseUrl && (
                    <a
                      href={cert.courseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyber-magenta transition-colors ml-auto"
                    >
                      <BookOpen size={14} />
                      <span className="text-xs">Course</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Corner accent */}
              <div className="pointer-events-none absolute top-0 right-0 h-5 w-5 border-r border-t border-cyber-neon/20 rounded-tr-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-center"
        >
          <div className="glass-card rounded-xl px-6 py-4">
            <div className="font-display text-2xl font-bold text-cyber-neon neon-text">
              {certifications.length}+
            </div>
            <div className="text-xs text-slate-400 mt-1">Certifications Earned</div>
          </div>
          <div className="glass-card rounded-xl px-6 py-4">
            <div className="font-display text-2xl font-bold text-cyber-magenta neon-text-magenta">
              4
            </div>
            <div className="text-xs text-slate-400 mt-1">Industry Platforms</div>
          </div>
          <div className="glass-card rounded-xl px-6 py-4">
            <div className="font-display text-2xl font-bold text-cyber-lime">
              2021–Present
            </div>
            <div className="text-xs text-slate-400 mt-1">Active Learning</div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox — click image to view full */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass-card rounded-2xl overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 glass rounded-lg p-2 text-white hover:text-cyber-neon transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Full image */}
             {lightbox.image && (
  <div className="w-full max-h-[60vh] overflow-auto bg-black/40">
    {lightbox.image.toLowerCase().endsWith('.pdf') ? (
      <iframe
        src={lightbox.image}
        title={`${lightbox.title} certificate full view`}
        className="w-full h-[60vh] bg-white"
      />
    ) : (
      <img
        src={lightbox.image}
        alt={`${lightbox.title} certificate full view`}
        className="w-full max-h-[60vh] object-contain"
      />
    )}
  </div>
)}

              {/* Details panel */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="glass rounded-xl p-2.5 text-cyber-neon">
                    <Award size={22} />
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-cyber-magenta">
                    <BadgeCheck size={15} />
                    {lightbox.issuer}
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                  {lightbox.title}
                </h3>

                <div className="flex flex-wrap gap-5 mb-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={15} className="text-cyber-neon" />
                    {lightbox.date}
                  </span>
                  {lightbox.duration && (
                    <span className="flex items-center gap-1.5">
                      <Clock size={15} className="text-cyber-neon" />
                      {lightbox.duration}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {lightbox.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={lightbox.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-border rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-neon inline-flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Verify Credential
                  </a>
                  {lightbox.courseUrl && (
                    <a
                      href={lightbox.courseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass rounded-lg px-5 py-2.5 text-sm font-semibold text-slate-200 hover:text-cyber-magenta transition-colors inline-flex items-center gap-2"
                    >
                      <BookOpen size={16} />
                      View Course
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
