"use client";

import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

type ExperienceType = {
  company: string;
  role: string;
  duration: string;
  desc: string;
};

const experiences: ExperienceType[] = [
  {
    company: "TCQ IT Solution",
    role: "Senior MERN Developer",
    duration: "Oct 2025 - Present",
    desc: "Architecting high-scale applications using Next.js 14 and Node.js. Optimized database queries reducing latency by 40%.",
  },
  {
    company: "It Geeks",
    role: "Full Stack Engineer",
    duration: "Jan 2025 - Sep 2025",
    desc: "Led the development of real-time collaboration tools and integrated complex WebRTC features for video streaming.",
  },
  {
    company: "Future Tech",
    role: "Frontend Specialist",
    duration: "Jun 2024 - Dec 2024",
    desc: "Focused on high-performance UI components and framer-motion animations to create immersive user experiences.",
  },
];

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" ref={containerRef} className="relative py-14 bg-transparent text-white">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[80px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/5 rounded-full blur-[80px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-purple-400 font-mono tracking-[0.3em] text-sm uppercase mb-4"
          >
            My Journey
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center tracking-tight">
            Professional <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">Path.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Central Progress Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 w-[1px] h-full bg-white/5" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-purple-500 via-pink-500 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          />

          <div className="space-y-10 md:space-y-32">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp, index }: { exp: ExperienceType, index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { margin: "-100px", once: false });
  const isEven = index % 2 === 0;

  return (
    <div ref={cardRef} className="relative flex flex-col md:flex-row items-center justify-between w-full">
      {/* Floating Index Number */}
      <motion.span 
        animate={{ opacity: isInView ? 0.1 : 0 }}
        className="absolute hidden md:block text-[6rem] md:text-[10rem] font-black pointer-events-none -z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
      >
        0{index + 1}
      </motion.span>

      {/* The Glow Dot */}
      <motion.div 
        animate={{ 
          scale: isInView ? [1, 1.5, 1] : 1,
          boxShadow: isInView ? "0 0 15px #d946ef": "none"
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute left-7 md:left-[49.6%] md:-translate-x-1/2 w-3 h-3 rounded-full bg-pink-500 z-20 border-4 border-slate-950"
      />

      {/* Card Content */}
      <div className={`w-full md:w-[42%] pl-14 sm:pl-16 md:pl-0 md:pl-0 ${isEven ? "md:mr-auto" : "md:ml-auto"}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -100 : 100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group relative"
        >
          {/* Glass Card */}
          <div className="relative z-10 p-8 rounded-[2rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:bg-white/[0.07] group-hover:border-purple-500/50">
            
            {/* Animated Gradient Background on Hover */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex justify-between items-start mb-6">
               <div className="px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold tracking-widest uppercase">
                {exp.duration}
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-1 tracking-tight group-hover:text-purple-300 transition-colors">
              {exp.role}
            </h3>
            
            <p className="text-pink-500 font-semibold mb-4 text-sm flex items-center gap-2">
              <span className="w-4 h-[1px] bg-pink-500"></span>
              {exp.company}
            </p>

            <p className="text-gray-400 leading-relaxed text-sm">
              {exp.desc}
            </p>
          </div>

          {/* Holographic "Shadow" Layer */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-[2rem] opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />
        </motion.div>
        
      </div>
    </div>
  );
};