"use client"

import SolarSystem from "./Solarsystem"

export default function SkillSection(){
  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          My Tech Universe
        </h2>

        <p className="text-gray-400 mt-4">
          Technologies I work with orbiting around my core skills
        </p>
      </div>

      {/* Solar System */}
      <div className="w-full h-[700px]">
        <SolarSystem />
      </div>

    </section>
  )
}