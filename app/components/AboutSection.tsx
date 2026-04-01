"use client"
import { motion } from "framer-motion"
import SpotlightCard from "../Animation/SpotlightCard"

export const AboutSection = () => {
    return (
        <section className="relative  md:py-32 pb-5 overflow-hidden bg-black">
            
            {/* --- Ambient Background Elements --- */}
            {/* Top Left Glow */}
            <div className="absolute -top-24 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
            
            {/* Bottom Right Glow */}
            <div className="absolute -bottom-24 -right-20 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
            
            {/* Subtle Grid Overlay (Optional - adds tech texture) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    
                    {/* --- Left Column: Content Area --- */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="lg:w-2/5 sticky top-10 md:top-32"
                    >
                        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-purple-400 uppercase bg-purple-400/10 border border-purple-400/20 rounded-full">
                            Professional Overview
                        </div>
                        
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-8">
                            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Digital</span> Excellence.
                        </h2>

                        <p className="text-gray-400 leading-relaxed text-lg mb-10">
                            I specialize in bridging the gap between complex backend logic and 
                            high-end frontend experiences. With a focus on <span className="text-white">clean architecture</span> 
                            and <span className="text-white">fluid motion</span>, I build applications that are as 
                            performant as they are beautiful.
                        </p>

                        {/* Stats or Mini-Tags */}
                        <div className="flex flex-wrap gap-4">
                            {['Scalable Architecture', 'Interactive UI', 'Performance First'].map((tag) => (
                                <span key={tag} className="text-sm text-gray-500 border-l-2 border-purple-500/50 pl-3">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* --- Right Column: Feature Cards --- */}
                    <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {[
                            {
                                title: "Frontend Engineering",
                                desc: "Mastering React, Next.js, and Framer Motion to create interfaces that feel alive and responsive.",
                                icon: "⚡",
                                delay: 0.1
                            },
                            {
                                title: "Backend Systems",
                                desc: "Architecting robust server-side logic with Node.js and scalable databases for heavy workloads.",
                                icon: "🌐",
                                delay: 0.2
                            },
                            {
                                title: "UI/UX Strategy",
                                desc: "Applying modern design principles—glassmorphism, dark mode, and accessibility—at the core.",
                                icon: "🎨",
                                delay: 0.3
                            },
                            {
                                title: "Clean Code",
                                desc: "Writing maintainable, well-documented code with Sequelize and modern design patterns.",
                                icon: "🛠️",
                                delay: 0.4
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: item.delay }}
                                viewport={{ once: true }}
                                className={index === 0 ? "sm:col-span-2" : "col-span-1"}
                            >
                                <SpotlightCard
                                    className="h-full p-8 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-purple-500/30 transition-colors"
                                    spotlightColor="rgba(168, 85, 247, 0.15)"
                                >
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}