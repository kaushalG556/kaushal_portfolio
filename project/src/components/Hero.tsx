import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';
import {
  ArrowDown,
  Github,
  Linkedin,
} from 'lucide-react';

// ============================================================
// TYPING ROLES
// ============================================================

const roles = [
  'Software Engineer',
  'Backend Developer',
  'Python & Django Developer',
  'REST API Developer',
];

// ============================================================
// TYPING EFFECT
// ============================================================

function useTypingEffect(
  words: string[],
  typeSpeed = 80,
  deleteSpeed = 40,
  pause = 1600
) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === word) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);

      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            isDeleting
              ? word.substring(0, prev.length - 1)
              : word.substring(0, prev.length + 1)
          );
        },
        isDeleting ? deleteSpeed : typeSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    pause,
  ]);

  return text;
}

// ============================================================
// INTERACTIVE 3D HERO SHAPE
// ============================================================

function HeroShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const hovered = useRef(false);

  useFrame((state) => {
    if (!meshRef.current) return;

    const t = state.clock.elapsedTime;

    meshRef.current.rotation.x = t * 0.2;
    meshRef.current.rotation.y = t * 0.3;

    const target = hovered.current ? 1.15 : 1;

    meshRef.current.scale.lerp(
      new THREE.Vector3(target, target, target),
      0.1
    );
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.4}
      floatIntensity={1.2}
    >
      <mesh
        ref={meshRef}
        onPointerOver={() => {
          hovered.current = true;
        }}
        onPointerOut={() => {
          hovered.current = false;
        }}
      >
        <icosahedronGeometry args={[1.4, 4]} />

        <MeshDistortMaterial
          color="#00f0ff"
          emissive="#ff2bd6"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
          distort={0.35}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

// ============================================================
// HERO
// ============================================================

export default function Hero() {
  const typed = useTypingEffect(roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-8 lg:grid-cols-2">

          {/* ==================================================
              TEXT SIDE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="z-10 text-center lg:text-left"
          >

            {/* Availability Badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5"
            >
              <span className="h-2 w-2 animate-pulse-glow rounded-full bg-cyber-lime" />

              <span className="font-mono text-sm text-slate-300">
                Open to Software Engineering Opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

              <span className="block text-white">
                Hi, I'm
              </span>

              <span className="block animate-gradient-shift gradient-text">
                Kaushal Kumar
              </span>

            </h1>

            {/* Typing Role */}
            <div className="mt-4 flex h-10 items-center justify-center lg:justify-start">

              <span className="font-mono text-xl text-cyber-neon neon-text sm:text-2xl">
                {typed}

                <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-cyber-neon" />
              </span>

            </div>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0">
              I build scalable backend applications, REST APIs, and
              database-driven solutions using Python, Django, C#,
              .NET, and SQL — with a focus on clean architecture,
              performance, and reliable software.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

              {/* View Projects */}
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-cyber-neon px-7 py-3.5 font-semibold text-cyber-bg transition-all hover:shadow-neon"
              >
                View My Work

                <ArrowDown
                  size={18}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </motion.a>

              {/* Contact */}
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl glass px-7 py-3.5 font-semibold text-white transition-all hover:border-cyber-neon/40 hover:shadow-neon-soft"
              >
                Get In Touch
              </motion.a>

            </div>

            {/* ==================================================
                SOCIAL LINKS
            ================================================== */}

            <div className="mt-8 flex justify-center gap-4 lg:justify-start">

              {/* GitHub */}
              <motion.a
                href="https://github.com/kaushalG556/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{
                  y: -3,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="rounded-lg glass p-2.5 text-slate-400 transition-all hover:text-cyber-neon hover:shadow-neon-soft"
              >
                <Github size={20} />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/kaushal-kumar-759561253/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{
                  y: -3,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="rounded-lg glass p-2.5 text-slate-400 transition-all hover:text-cyber-magenta hover:shadow-neon-soft"
              >
                <Linkedin size={20} />
              </motion.a>

            </div>

          </motion.div>

          {/* ==================================================
              3D SHAPE SIDE
          ================================================== */}

          {/* ==================================================
    PROFILE IMAGE SIDE
================================================== */}

<motion.div
  initial={{
    opacity: 0,
    scale: 0.8,
  }}
  animate={{
    opacity: 1,
    scale: 1,
  }}
  transition={{
    duration: 1,
    delay: 0.3,
  }}
  className="relative flex h-[300px] items-center justify-center sm:h-[400px] lg:h-[500px]"
>
  <motion.div
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="relative"
  >
    {/* Neon glow */}
    <div className="absolute -inset-5 rounded-full bg-cyber-magenta/20 blur-3xl" />

    {/* Profile image */}
    <div className="relative h-[320px] w-[320px] overflow-hidden rounded-3xl border-2 border-cyber-neon shadow-neon sm:h-[360px] sm:w-[360px] lg:h-[400px] lg:w-[400px]">
      <img
        src="/images/kaushal.jpg"
        alt="Kaushal Kumar"
        className="h-full w-full object-cover"
      />
    </div>
  </motion.div>
</motion.div>

        </div>
      </div>

      {/* ======================================================
          SCROLL INDICATOR
      ======================================================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >

        <div className="flex flex-col items-center gap-2">

          <span className="font-mono text-xs tracking-widest text-slate-500">
            SCROLL
          </span>

          <div className="flex h-10 w-6 justify-center rounded-full border border-cyber-border pt-1.5">

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="h-2 w-1 rounded-full bg-cyber-neon"
            />

          </div>
        </div>

      </motion.div>

    </section>
  );
}