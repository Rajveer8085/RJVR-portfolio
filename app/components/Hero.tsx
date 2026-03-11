"use client"

import Image from "next/image"
import LiquidEther from "../Animation/AnimatedBack"
import {motion} from "framer-motion"

export const HomeSection = () => {
  return (
    <>
    <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
  <LiquidEther
    colors={['#5227FF', '#FF9FFC', '#B19EEF']}
    mouseForce={20}
    cursorSize={100}
    isViscous
    viscous={30}
    resolution={0.5}
    autoDemo
/>
    </div>
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div 
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{delay:0.6}}
        viewport={{once:true}}
        >
          <p className="text-text-muted uppercase tracking-widest text-sm mb-4">
  MERN Stack Developer
</p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
  I Build Modern
  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
    {" "}Full Stack Applications
  </span>
</h1>

          <p className="mt-6 text-text-muted text-lg">
  Designing and developing high-performance full stack web applications 
  using MongoDB, Express, React, and Node.js with modern UI, animations 
  and scalable backend architecture.
</p>

          <div className="mt-8 flex gap-4">
            <button className="btn-primary">
              View Projects
            </button>

            <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">
          
          {/* Glow Background */}
          <div className="absolute w-80 h-80 bg-purple-600/30 rounded-full blur-[120px]"></div>

          {/* Avatar */}
          <div className="relative animate-float">
            <Image
              src="/avatar.png"
              alt="Raj Avatar"
              width={300}
              height={300}
              className="rounded-full border border-white/10 shadow-2xl"
              />
          </div>

        </div>

      </div>
    </section>
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30 my-10"></div>
    </>
  )
}