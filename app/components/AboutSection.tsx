"use client"
import { motion } from "framer-motion"
// import SpotlightCard from "@/components/SpotlightCard"
import SpotlightCard from "../Animation/SpotlightCard"

export const AboutSection = () => {
    return (
        <section className="relative py-28 overflow-hidden">

            {/* 🔵 Background Glow */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[160px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[160px]" />

            <div className="relative max-w-6xl mx-auto px-6">

                {/* Heading Area */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About Me
                    </h2>

                    {/* Accent Line */}
                    <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mb-6" />

                    <p className="text-text-muted leading-relaxed text-lg">
                        I am a MERN full stack developer passionate about building
                        complete web applications — from interactive frontend interfaces
                        to scalable backend systems. I focus on performance, modern UI,
                        smooth animations, and clean architecture.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-10">

                    {[
                        {
                            title: "Frontend Engineering",
                            desc: "React, Next.js, TailwindCSS, modern animation libraries and performance-focused UI systems."
                        },
                        {
                            title: "Backend Development",
                            desc: "Node.js, Express, MongoDB, REST APIs, authentication systems and scalable architecture."
                        },
                        {
                            title: "Modern Tech & Learning",
                            desc: "Exploring new tools, packages and development trends to stay ahead in modern web engineering."
                        }
                    ].map((item, index) => (
                          <motion.div
        key={index}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 200 }}
    >
        <SpotlightCard
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
            spotlightColor="rgba(168, 85, 247, 0.25)"
        >
            <h3 className="text-xl font-semibold mb-4">
                {item.title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
                {item.desc}
            </p>
        </SpotlightCard>
    </motion.div>
                    ))}

                </div>
            </div>
        </section>
    )
}