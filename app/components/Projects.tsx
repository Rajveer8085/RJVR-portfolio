"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Sparkles, ArrowUpRight, Atom, Server, Database, 
  ShieldCheck, Zap, Layers, Code2, Globe, Layout 
} from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Quantum Nexus",
    subtitle: "Real-time Blockchain Intelligence",
    problem: "Live transaction analysis is slow for traders.",
    solution: "A 3D dashboard processing 5k+ tx/sec with AI scoring.",
    frontend: [
      { name: "React", icon: <Atom size={14} /> },
      { name: "Tailwind", icon: <Layout size={14} /> }
    ],
    backend: [
      { name: "Node.js", icon: <Server size={14} /> },
      { name: "MongoDB", icon: <Database size={14} /> }
    ],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
    stats: { perf: "99%", type: "FinTech" }
  },
  {
    id: 2,
    title: "Nova Commerce",
    subtitle: "Headless Store Engine",
    problem: "Traditional stores suffer from slow load times.",
    solution: "A sub-second engine using Edge caching & SSR.",
    frontend: [
      { name: "Next.js", icon: <Layers size={14} /> },
      { name: "Framer", icon: <Zap size={14} /> }
    ],
    backend: [
      { name: "Stripe", icon: <ShieldCheck size={14} /> },
      { name: "Payload", icon: <Database size={14} /> }
    ],
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1000&auto=format&fit=crop",
    stats: { perf: "96%", type: "E-comm" }
  },
  {
    id: 3,
    title: "Aether Social",
    subtitle: "Decentralized Protocol",
    problem: "Centralized platforms leak user metadata.",
    solution: "A P2P protocol where users own their data IDs.",
    frontend: [
      { name: "React", icon: <Atom size={14} /> },
      { name: "Web3.js", icon: <Globe size={14} /> }
    ],
    backend: [
      { name: "Solidity", icon: <Code2 size={14} /> },
      { name: "IPFS", icon: <Database size={14} /> }
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    stats: { perf: "92%", type: "Web3" }
  },
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-[#030014] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Area */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
            <Sparkles size={14} /> Engineering Showcase
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight">
            Complex <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Architectures.</span>
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col lg:flex-row gap-4 h-[600px] w-full">
          {PROJECTS.map((project, index) => {
            const isActive = hoveredIndex === index;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{ flex: isActive ? 3 : 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-3xl group cursor-pointer min-w-[120px]"
              >
                {/* Background Image & Gradient */}
                <div className="absolute inset-0 z-0">
                  <motion.img 
                    animate={{ scale: isActive ? 1 : 1.15 }}
                    transition={{ duration: 0.8 }}
                    src={project.image} 
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/80 to-transparent/20" />
                </div>

                {/* Content Wrapper */}
                <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                  
                  {/* Always Visible Title Area */}
                  <div className="mb-2">
                    <motion.p 
                      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                      className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2"
                    >
                      {project.subtitle}
                    </motion.p>
                    <h3 className="text-3xl lg:text-4xl font-black tracking-tighter whitespace-nowrap">
                      {project.title}
                    </h3>
                  </div>

                  {/* Hidden Content Revealed on Hover */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: 20 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 space-y-6">
                          
                          {/* Problem/Solution Glass Cards */}
                          <div className="grid grid-cols-2 gap-4">
                             <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                                <p className="text-[10px] uppercase font-bold text-purple-400 tracking-wider mb-2 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" /> Problem
                                </p>
                                <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
                             </div>
                             <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                                <p className="text-[10px] uppercase font-bold text-green-400 tracking-wider mb-2 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Solution
                                </p>
                                <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                             </div>
                          </div>

                          {/* Footer: Tech Stack & Button */}
                          <div className="flex items-end justify-between pt-4 border-t border-white/10">
                             <div className="flex gap-8">
                                <TechGroup label="Frontend" icons={project.frontend} />
                                <TechGroup label="Backend" icons={project.backend} />
                             </div>
                             
                             <motion.button 
                               whileHover={{ scale: 1.05 }}
                               whileTap={{ scale: 0.95 }}
                               className="h-12 px-6 rounded-xl bg-white text-black flex items-center gap-2 font-bold text-xs uppercase tracking-widest shrink-0 transition-colors hover:bg-purple-50"
                             >
                               Explore <ArrowUpRight size={16} />
                             </motion.button>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Extracted and typed TechGroup component
type TechItem = { name: string; icon: React.ReactNode };

const TechGroup = ({ label, icons }: { label: string; icons: TechItem[] }) => (
  <div className="space-y-3">
    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{label}</p>
    <div className="flex gap-2">
      {icons.map((tech, i) => (
        <div key={i} className="group/item relative">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-help">
            {tech.icon}
          </div>
          {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-xl border border-white/20 text-[10px] font-bold text-white opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);