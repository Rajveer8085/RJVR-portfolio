"use client"

import Image from "next/image"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const LiquidEther = dynamic(
  () => import("../Animation/AnimatedBack"),
  { ssr: false }
)

export const HomeSection = () => {
  const [showBg, setShowBg] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowBg(true), 300) // delay background
  }, [])

  return (
    <>
      <section id="home" className="relative min-h-screen flex pt-24 md:pt-0 items-center overflow-hidden px-4 sm:px-6">

        {/* 🔥 BACKGROUND (delayed + lighter) */}
        <div className="absolute inset-0 -z-10">
          {showBg && (
            <LiquidEther
              colors={['#5227FF', '#FF9FFC', '#B19EEF']}
              mouseForce={15}
              cursorSize={80}
              isViscous
              viscous={25}
              resolution={0.4}
              autoDemo
            />
          )}
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <p className="text-text-muted uppercase tracking-widest text-xs md:text-sm mb-5">
              Full Stack Developer • MERN Specialist
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2]">
              I Build Scalable & Modern
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent block md:inline">
                {" "}Full Stack Applications
              </span>
            </h1>

            <p className="mt-8 text-text-muted text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0">
              I turn ideas into fast, scalable web applications using the MERN stack —
              combining modern UI, smooth animations, and robust backend architecture.
            </p>

            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-6">
              
              {/* VIEW WORK */}
              <button
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
                className="btn-primary hover:scale-105 transition"
              >
                View My Work 🚀
              </button>

              {/* CONNECT */}
              <button
                onClick={() => {
                  document.getElementById("contact-us")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
                className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/20 transition text-sm md:text-base hover:scale-105"
              >
                📩 Let’s Connect
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center lg:justify-end items-center h-[420px] md:h-[520px] order-1 md:order-2 group">
            
            {/* 🔥 SOFT GLOW (reduced) */}
            <div className="absolute w-full h-full md:w-[380px] md:h-[380px] bg-purple-600/10 rounded-full blur-[60px] -z-10 group-hover:bg-purple-500/20 transition duration-1000"></div>

            {/* MAIN CONTAINER */}
            <div className="relative w-[280px] h-[360px] md:w-[320px] md:h-[420px] flex items-end justify-center">
              
              {/* GLASS BACK */}
              <motion.div 
                animate={{ 
                  borderRadius: [
                    "40% 60% 70% 30% / 40% 40% 60% 60%",
                    "60% 40% 30% 70% / 60% 60% 40% 40%",
                    "40% 60% 70% 30% / 40% 40% 60% 60%"
                  ] 
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 w-full h-[75%] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl -z-10"
              />

              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full h-[120%] overflow-hidden rounded-b-[2.5rem]"
              >
                <Image
                  src="/images/RJVR.png"
                  alt="Raj"
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-contain object-center md:object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                />
              </motion.div>

              {/* OVERLAY */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 to-transparent rounded-b-[2.5rem] z-20"></div>
            </div>

            {/* FLOATING EFFECT */}
            <div className="absolute top-10 right-0 w-14 h-14 md:w-18 md:h-18 bg-pink-500/10 blur-2xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-0 w-18 h-18 md:w-22 md:h-22 bg-purple-500/10 blur-2xl rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </section>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30 my-6"></div>
    </>
  )
}