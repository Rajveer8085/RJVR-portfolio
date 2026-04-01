"use client"
import { motion } from "framer-motion"
import SolarSystem from "./SolarSystem"

export default function SkillSection() {
  return (
    <section className="relative pt-10 sm:pt-12 md:pt-16 px-4 bg-[#020412] text-white overflow-hidden min-h-screen">

      {/* Background glows */}
      <div className="absolute -top-40 -left-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-500/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-pink-500/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      {/* Heading */}
      <div className="relative max-w-6xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            My Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Universe
            </span>
          </h2>
          <div className="h-1.5 w-14 sm:w-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-4 sm:mb-6" />
          <p className="text-gray-400 mt-3 sm:mt-4 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-2 sm:px-0">
            Technologies I work with orbiting around my core skills
          </p>
        </motion.div>
      </div>

      {/* Solar System — w-full so it never bleeds outside the section */}
      <div className="w-full overflow-hidden">
        <SolarSystem />
      </div>

    </section>
  )
}