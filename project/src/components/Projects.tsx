import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Activity, ShoppingBag, Monitor, MessageSquare, Music, type LucideIcon } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Activity,
  ShoppingBag,
  Monitor,
  MessageSquare,
  Music,
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const Icon = iconMap[project.icon] ?? Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="perspective-1000"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative glass-card rounded-2xl overflow-hidden transition-all hover:border-cyber-neon/30 hover:shadow-neon"
      >
        {/* Image / gradient placeholder */}
        <div className={`relative h-44 sm:h-52 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          <div className="absolute inset-0 bg-grid-cyber bg-grid-lg opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.15, rotate: 10 }}
              className="text-cyber-neon/40"
              style={{ transform: 'translateZ(40px)' }}
            >
              <Icon size={64} />
            </motion.div>
          </div>
          {/* Scan line effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-x-0 h-px bg-cyber-neon/30 animate-scan-line" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6" style={{ transform: 'translateZ(20px)' }}>
          <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-cyber-neon transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-mono text-slate-300 transition-colors group-hover:border-cyber-neon/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyber-neon transition-colors"
            >
              <Github size={16} />
              Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyber-magenta transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          </div>
        </div>

        {/* Corner accents */}
        <div className="pointer-events-none absolute top-0 left-0 h-6 w-6 border-l border-t border-cyber-neon/30 rounded-tl-2xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-r border-b border-cyber-magenta/30 rounded-br-2xl" />
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-cyber-neon tracking-widest">// PROJECTS</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-white">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A selection of projects where technology meets imagination.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
