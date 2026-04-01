"use client"

import Image from "next/image"
import LiquidEther from "../Animation/AnimatedBack"
import { motion } from "framer-motion"

export const HomeSection = () => {
  return (
    <>
      <section className="relative min-h-screen flex pt-24 md:pt-0 items-center overflow-hidden">
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
        
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <p className="text-text-muted uppercase tracking-widest text-xs md:text-sm mb-4">
              Full Stack Developer • MERN Specialist
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              I Build Scalable & Modern
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent block md:inline">
                {" "}Full Stack Applications
              </span>
            </h1>

            <p className="mt-6 text-text-muted text-base md:text-lg max-w-lg mx-auto md:mx-0">
              I turn ideas into fast, scalable web applications using the MERN stack —
              combining modern UI, smooth animations, and robust backend architecture.
            </p>

            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <button className="btn-primary">
                View My Work 🚀
              </button>

              <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition text-sm md:text-base">
                Let’s Connect
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center lg:justify-end items-center h-[400px] md:h-[500px] order-1 md:order-2 group">
            
            {/* 1. THE BACK GLOW */}
            <div className="absolute w-[100%] h-[100%] md:w-[400px] md:h-[400px] bg-purple-600/20 rounded-full blur-[80px] md:blur-[100px] -z-10 group-hover:bg-purple-500/30 transition-colors duration-1000"></div>

            {/* 2. THE MAIN CONTAINER */}
            <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] flex items-end justify-center">
              
              {/* 3. THE "PORTAL" (Glass Background) */}
              <motion.div 
                animate={{ 
                  borderRadius: ["40% 60% 70% 30% / 40% 40% 60% 60%", "60% 40% 30% 70% / 60% 60% 40% 40%", "40% 60% 70% 30% / 40% 40% 60% 60%"] 
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 w-full h-[75%] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl -z-10"
              ></motion.div>

              {/* 4. THE IMAGE (Fixed Overflow & Responsive) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full h-[115%] overflow-hidden rounded-b-[2.5rem]" 
              >
                <Image
                  src="/images/RJVR.png" 
                  alt="Raj"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </motion.div>

              {/* 5. SOFT LIGHT OVERLAY */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent rounded-b-[2.5rem] z-20 h-[100%] bottom-0"></div>
            </div>

            {/* 6. FLOATING BOKEH */}
            <div className="absolute top-10 right-0 w-16 h-16 md:w-20 md:h-20 bg-pink-500/10 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-0 w-20 h-20 md:w-24 md:h-24 bg-purple-500/10 blur-3xl rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </section>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30 my-5"></div>
    </>
  )
}