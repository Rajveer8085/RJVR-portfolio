"use client"

import SolarSystem from "./SolarSystem"

export default function SkillSection(){
  return (
    <section className="relative pt-16  bg-[#020412] text-white overflow-hidden">

      {/* Heading */}
      <div className="absolute inset-0 star-bg pointer-events-none"></div>

  {/* Heading */}
  <div className="relative max-w-6xl mx-auto text-center mb-16">
    <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
      My Tech Universe
    </h2>

    <p className="text-gray-400 mt-4">
      Technologies I work with orbiting around my core skills
    </p>
  </div>
    <SolarSystem />

    </section>
  )
}