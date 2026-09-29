import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

type SkillCategory = {
  title: string;
  color: string;
  skills: { name: string; level: number }[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    color: '#00f0ff',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Django', level: 88 },
      { name: 'REST API', level: 85 },
      { name: '.NET', level: 75 },
      { name: 'C#', level: 72 },
    ],
  },
  {
    title: 'Databases',
    color: '#ff2bd6',
    skills: [
      { name: 'MySQL', level: 82 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'SQL Server', level: 78 },
      { name: 'SQLite3', level: 80 },
    ],
  },
  {
    title: 'Frontend',
    color: '#a855f7',
    skills: [
      { name: 'HTML', level: 88 },
      { name: 'CSS', level: 82 },
      { name: 'JavaScript', level: 65 },
      { name: 'Tailwind CSS', level: 70 },
      { name: 'Angular CLI', level: 60 },
    ],
  },
  {
    title: 'Programming & Tools',
    color: '#b7ff00',
    skills: [
      { name: 'C', level: 70 },
      { name: 'Java', level: 60 },
      { name: 'DSA', level: 75 },
      { name: 'OOPs', level: 78 },
      { name: 'Git & GitHub', level: 82 },
      { name: 'Postman', level: 80 },
    ],
  },
];

function ProgressBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(level), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, level, delay]);

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.2, ease: 'easeOut', delay }}
          className="h-full rounded-full"
        />
      </div>
    </div>
  );
}

function SkillCircle({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setProgress(level), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, level, delay]);

  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative">
        <svg width="100" height="100" className="-rotate-90">
          <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, ease: 'easeOut', delay }}
            style={{ filter: `drop-shadow(0 0 4px ${color}99)` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-sm font-semibold" style={{ color }}>
            {progress}%
          </span>
        </div>
      </div>
      <span className="mt-2 text-xs text-slate-400 text-center">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-cyber-neon tracking-widest">// SKILLS</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-white">
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A curated toolkit honed across years of building production-grade applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8 transition-all hover:border-cyber-neon/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="h-8 w-1 rounded-full"
                  style={{ background: category.color, boxShadow: `0 0 12px ${category.color}99` }}
                />
                <h3 className="font-display text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-1">
                {category.skills.map((skill, si) => (
                  <ProgressBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={ci * 0.1 + si * 0.05}
                  />
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, si) => (
                  <SkillCircle
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={ci * 0.1 + si * 0.05 + 0.3}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
