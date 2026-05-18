// "use client"

// import { useEffect, useRef, useState } from "react"
// import Image from "next/image"

// export default function TechStack() {
//   const pages = [
//     [
//       { name: "HTML", icon: "/icons/html5-original.svg" },
//       { name: "CSS", icon: "/icons/css3-original.svg" },
//       { name: "Bootstrap", icon: "/icons/bootstrap-original.svg" },
//       { name: "JavaScript", icon: "/icons/javascript-original.svg" },
//       { name: "React", icon: "/icons/react-original.svg" },
//       { name: "Node", icon: "/icons/node.svg" },
//       { name: "PostgreSql", icon: "/icons/postgresql-original.svg" },
//       { name: "MongoDB", icon: "/icons/mongo.svg" },
//       { name: "GitHub", icon: "/icons/github-original.svg" },
//       { name: "Postman", icon: "/icons/postman-original.svg" },
//     ],
//     [
//       { name: "Vercel", icon: "/icons/vercel-original.svg" },
//       { name: "Next JS", icon: "/icons/nextjs-original.svg" },
//       { name: "TypeScript", icon: "/icons/typescript-original.svg" },
//       { name: "Redux", icon: "/icons/redux-original.svg" },
//       { name: "Tailwind", icon: "/icons/tailwindcss-original.svg" },
//       { name: "Express", icon: "/icons/express-original.svg" },
//     ]
//   ]

//   const [page, setPage] = useState(0)
//   const ref = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setPage(0)
//         }
//       },
//       { threshold: 0.6 }
//     )
//     if (ref.current) observer.observe(ref.current)
//     return () => observer.disconnect()
//   }, [])

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!ref.current) return
//       const rect = ref.current.getBoundingClientRect()
//       const windowHeight = window.innerHeight
//       const start = windowHeight * 0.2
//       const end = windowHeight * 0.8
//       if (rect.top > end || rect.bottom < start) return
//       const progress = (end - rect.top) / (end - start)
//       if (progress < 1.3) {
//         setPage(0)
//       } else {
//         setPage(1)
//       }
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <section ref={ref} className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
//       <div className="min-h-screen relative">
//         <div className="sticky top-0 min-h-screen flex items-center overflow-hidden">

//           {/* BACKGROUND TEXT DECORATION */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] transition-transform duration-1000 group-hover:scale-110">
//             <h1 className="text-[25vw] font-black leading-none uppercase">Skills</h1>
//           </div>

//           <div className="max-w-7xl mx-auto w-full px-8 flex items-center justify-between relative z-10">

//             {/* LEFT SIDE: BOLD VERTICAL BAR */}
//             <div className="flex flex-col items-start gap-4">
//               <div className="overflow-hidden h-32 w-[4px] bg-white/10 relative">
//                 <div
//                   className="absolute top-0 left-0 w-full bg-yellow-400 transition-all duration-700 ease-out shadow-[0_0_15px_#facc15]"
//                   style={{ height: page === 0 ? '50%' : '100%' }}
//                 />
//               </div>
//               <div className="flex flex-col -ml-2">
//                 <p className="text-yellow-400 font-mono text-xs tracking-widest mb-1 opacity-60">0{page + 1}</p>
//                 <h2 className="text-4xl font-black uppercase tracking-tighter leading-none [writing-mode:vertical-lr] rotate-180">
//                   Capabilities
//                 </h2>
//               </div>
//             </div>

//             {/* CENTER GRID: REFINED CARDS */}
//             <div className="flex-1 px-12 lg:px-20">
//               <div
//                 key={page}
//                 className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-5 animate-in fade-in slide-in-from-bottom-12 duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
//               >
//                 {pages[page].map((skill, i) => (
//                   <div
//                     key={skill.name}
//                     className="group relative flex flex-col items-center justify-center aspect-square bg-[#0e0e0e] border border-white/[0.03] rounded-2xl transition-all duration-500 hover:border-yellow-400/40 hover:bg-[#121212] overflow-hidden"
//                   >
//                     {/* Interior Glow Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                     <div className="relative z-10 transform transition-all duration-500 group-hover:-translate-y-1">
//                       <Image
//                         src={skill.icon}
//                         alt={skill.name}
//                         width={40}
//                         height={40}
//                         className={`mb-3 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] ${["GitHub", "Vercel", "Next JS"].includes(skill.name) ? "invert" : ""
//                           }`}
//                       />
//                     </div>

//                     <p className="relative z-10 text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 group-hover:text-white transition-colors">
//                       {skill.name}
//                     </p>

//                     {/* Corner Accent for next-level feel */}
//                     <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-400/10 rounded-bl-3xl translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* RIGHT SIDE: INTERACTIVE INDICATOR */}
//             <div className="flex flex-col items-center gap-8">
//               <div className="flex flex-col gap-4">
//                 {pages.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setPage(i)}
//                     className="relative p-2 group outline-none"
//                   >
//                     <div className={`w-1 transition-all duration-500 ease-in-out ${page === i ? "h-12 bg-yellow-400" : "h-6 bg-white/20 group-hover:bg-white/40"
//                       }`} />
//                     {page === i && (
//                       <div className="absolute top-2 -left-1 w-3 h-12 bg-yellow-400/20 blur-md" />
//                     )}
//                   </button>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function TechStack() {
  const pages = [
    [
      { name: "HTML", icon: "/icons/html5-original.svg" },
      { name: "CSS", icon: "/icons/css3-original.svg" },
      { name: "Bootstrap", icon: "/icons/bootstrap-original.svg" },
      { name: "JavaScript", icon: "/icons/javascript-original.svg" },
      { name: "React", icon: "/icons/react-original.svg" },
      { name: "Node", icon: "/icons/node.svg" },
      { name: "PostgreSql", icon: "/icons/postgresql-original.svg" },
      { name: "MongoDB", icon: "/icons/mongo.svg" },
      { name: "GitHub", icon: "/icons/github-original.svg" },
      { name: "Postman", icon: "/icons/postman-original.svg" },
    ],
    [
      { name: "Vercel", icon: "/icons/vercel-original.svg" },
      { name: "Next JS", icon: "/icons/nextjs-original.svg" },
      { name: "TypeScript", icon: "/icons/typescript-original.svg" },
      { name: "Redux", icon: "/icons/redux-original.svg" },
      { name: "Tailwind", icon: "/icons/tailwindcss-original.svg" },
      { name: "Express", icon: "/icons/express-original.svg" },
    ],
  ]

  const [page, setPage] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPage(0)
        }
      },
      { threshold: 0.6 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const start = windowHeight * 0.2
      const end = windowHeight * 0.8
      if (rect.top > end || rect.bottom < start) return
      const progress = (end - rect.top) / (end - start)
      if (progress < 1.3) {
        setPage(0)
      } else {
        setPage(1)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={ref} className="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
      <div className="md:min-h-screen relative">
        <div className="md:sticky md:top-0 min-h-screen flex items-center overflow-hidden">

          {/* BACKGROUND TEXT DECORATION */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02]">
            <h1 className="text-[25vw] font-black leading-none uppercase whitespace-nowrap">Skills</h1>
          </div>

          {/* MOBILE LAYOUT */}
          <div className="flex flex-col w-full px-4 py-6 relative z-10 md:hidden">

            {/* Mobile Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-[3px] bg-white/10 relative flex-shrink-0">
                <div
                  className="absolute top-0 left-0 w-full bg-yellow-400 transition-all duration-700 ease-out"
                  style={{ height: page === 0 ? "50%" : "100%" }}
                />
              </div>
              <div>
                <p className="text-yellow-400 font-mono text-[10px] tracking-widest opacity-60">
                  0{page + 1} / 0{pages.length}
                </p>
                <h2 className="text-xl font-black uppercase tracking-tighter leading-none">Capabilities</h2>
              </div>
            </div>

            {/* Mobile Grid */}
            <div
              key={page}
              className="grid grid-cols-4 gap-3 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              {pages[page].map((skill) => (
                <div
                  key={skill.name}
                  className="group relative flex flex-col items-center justify-center aspect-square bg-[#0e0e0e] border border-white/[0.03] rounded-xl transition-all duration-500 hover:border-yellow-400/40 hover:bg-[#121212] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex flex-col items-center">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={28}
                      height={28}
                      className={`mb-1.5 transition-all duration-500 ${["GitHub", "Vercel", "Next JS"].includes(skill.name) ? "invert" : ""
                        }`}
                    />
                    <p className="text-[8px] font-bold tracking-[0.1em] uppercase text-gray-500 group-hover:text-white transition-colors text-center leading-tight">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Page Dots */}
            <div className="flex items-center justify-center gap-3 mt-6">
              {pages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className="relative outline-none"
                  aria-label={`Page ${i + 1}`}
                >
                  <div
                    className={`h-1 transition-all duration-500 ease-in-out rounded-full ${page === i ? "w-8 bg-yellow-400" : "w-4 bg-white/20"
                      }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* DESKTOP / TABLET LAYOUT */}
          <div className="hidden md:flex max-w-7xl mx-auto w-full px-8 items-center justify-between relative z-10">

            {/* LEFT SIDE: BOLD VERTICAL BAR */}
            <div className="flex flex-col items-start gap-4 flex-shrink-0">
              <div className="overflow-hidden h-32 w-[4px] bg-white/10 relative">
                <div
                  className="absolute top-0 left-0 w-full bg-yellow-400 transition-all duration-700 ease-out shadow-[0_0_15px_#facc15]"
                  style={{ height: page === 0 ? "50%" : "100%" }}
                />
              </div>
              <div className="flex flex-col -ml-2">
                <p className="text-yellow-400 font-mono text-xs tracking-widest mb-1 opacity-60">
                  0{page + 1}
                </p>
                <h2 className="text-4xl font-black uppercase tracking-tighter leading-none [writing-mode:vertical-lr] rotate-180">
                  Capabilities
                </h2>
              </div>
            </div>

            {/* CENTER GRID */}
            <div className="flex-1 px-8 lg:px-16 xl:px-20">
              <div
                key={page}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 animate-in fade-in slide-in-from-bottom-12 duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
              >
                {pages[page].map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex flex-col items-center justify-center aspect-square bg-[#0e0e0e] border border-white/[0.03] rounded-2xl transition-all duration-500 hover:border-yellow-400/40 hover:bg-[#121212] overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 transform transition-all duration-500 group-hover:-translate-y-1 flex flex-col items-center">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={40}
                        height={40}
                        className={`mb-3 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] ${["GitHub", "Vercel", "Next JS"].includes(skill.name) ? "invert" : ""
                          }`}
                      />
                      <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 group-hover:text-white transition-colors text-center">
                        {skill.name}
                      </p>
                    </div>

                    <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-400/10 rounded-bl-3xl translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: INTERACTIVE INDICATOR */}
            <div className="flex flex-col items-center gap-8 flex-shrink-0">
              <div className="flex flex-col gap-4">
                {pages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className="relative p-2 group outline-none"
                    aria-label={`Page ${i + 1}`}
                  >
                    <div
                      className={`w-1 transition-all duration-500 ease-in-out ${page === i
                          ? "h-12 bg-yellow-400"
                          : "h-6 bg-white/20 group-hover:bg-white/40"
                        }`}
                    />
                    {page === i && (
                      <div className="absolute top-2 -left-1 w-3 h-12 bg-yellow-400/20 blur-md" />
                    )}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}