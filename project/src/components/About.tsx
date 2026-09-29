import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats, timeline, education } from '@/data/portfolio';

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(end * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-sm tracking-widest text-cyber-neon">
            // ABOUT ME
          </span>

          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            The <span className="gradient-text">Story</span> So Far
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Software Engineer focused on backend development, scalable APIs,
            databases, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* =========================
              BIO + STATS
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4 font-display text-2xl font-semibold text-white">
              Building scalable backend solutions with modern technologies
            </h3>

            <p className="mb-4 leading-relaxed text-slate-400">
              I'm Kaushal Kumar, a Software Engineer specializing in backend
              development with Python, Django, C#, .NET, REST APIs, and SQL.
              I enjoy building scalable backend services, developing reliable
              APIs, and solving real-world business problems through clean and
              efficient code.
            </p>

            <p className="mb-8 leading-relaxed text-slate-400">
              I have hands-on experience working on Python and Django-based
              applications, REST APIs, database integration, SQL optimization,
              and modular backend services. I also have experience with
              microservices, Data Structures & Algorithms, and modern
              development tools such as Git, GitHub, Postman, and Visual Studio.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-5 transition-all hover:border-cyber-neon/30 hover:shadow-neon-soft"
                >
                  <div className="font-display text-3xl font-bold text-cyber-neon neon-text sm:text-4xl">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>

                  <div className="mt-1 text-sm text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =========================
              PROFESSIONAL JOURNEY
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h3 className="mb-8 font-display text-2xl font-semibold text-white">
              Professional Journey
            </h3>

            <div className="relative pl-8">

              {/* Vertical Timeline Line */}
              <div className="absolute bottom-2 left-2.5 top-2 w-px bg-gradient-to-b from-cyber-neon via-cyber-magenta to-cyber-violet" />

              {timeline.map((item, i) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.5,
                  }}
                  className="relative mb-8 last:mb-0"
                >

                  {/* Timeline Node */}
                  <div className="absolute -left-[1.45rem] top-1.5 h-3 w-3 rounded-full bg-cyber-neon shadow-neon-soft ring-4 ring-cyber-bg" />

                  {/* Timeline Card */}
                  <div className="glass-card rounded-xl p-5 transition-all hover:border-cyber-neon/30 hover:shadow-neon-soft">

                    <div className="mb-2 flex items-center gap-3">
                      <span className="font-mono text-sm font-semibold text-cyber-neon">
                        {item.year}
                      </span>

                      <span className="h-px flex-1 bg-cyber-border" />
                    </div>

                    <h4 className="font-display text-lg font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="font-medium text-cyber-magenta">
                      {item.org}
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* =========================
            EDUCATION
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="mb-8 text-center font-display text-2xl font-semibold text-white">
            Education
          </h3>

          <div className="relative mx-auto max-w-2xl pl-8">
            <div className="absolute bottom-2 left-2.5 top-2 w-px bg-gradient-to-b from-cyber-lime via-cyber-neon to-cyber-magenta" />

            {education.map((item, i) => (
              <motion.div
                key={`${item.degree}-${item.year}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative mb-8 last:mb-0"
              >
                <div className="absolute -left-[1.45rem] top-1.5 h-3 w-3 rounded-full bg-cyber-lime shadow-neon-soft ring-4 ring-cyber-bg" />

                <div className="glass-card rounded-xl p-5 transition-all hover:border-cyber-neon/30 hover:shadow-neon-soft">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-mono text-sm font-semibold text-cyber-lime">
                      {item.year}
                    </span>
                    <span className="h-px flex-1 bg-cyber-border" />
                  </div>

                  <h4 className="font-display text-lg font-semibold text-white">
                    {item.degree}
                  </h4>

                  <p className="font-medium text-cyber-magenta">
                    {item.university}
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}