"use client"

import { useEffect, useRef, useState } from "react"

export default function TechStack() {

  const pages = [
  [
  {name:"HTML",icon:"/icons/html5-original.svg"},
  {name:"CSS",icon:"/icons/css3-original.svg"},
  {name:"Bootstrap",icon:"/icons/bootstrap-original.svg"},
  {name:"JavaScript",icon:"/icons/javascript-original.svg"},
  {name:"React",icon:"/icons/react-original.svg"},
  {name:"Node",icon:"/icons/node.svg"},
  {name:"PostgreSql",icon:"/icons/postgresql-original.svg"},
  {name:"MongoDB",icon:"/icons/mongo.svg"},
  {name:"GitHub",icon:"/icons/github-original.svg"},
  {name:"Postman",icon:"/icons/postman-original.svg"},
  ],
  [
      {name:"Vercel",icon:"/icons/vercel-original.svg"},
  {name:"Next JS",icon:"/icons/nextjs-original.svg"},
  {name:"TypeScript",icon:"/icons/typescript-original.svg"},
  {name:"Redux",icon:"/icons/redux-original.svg"},
  {name:"Tailwind",icon:"/icons/tailwindcss-original.svg"},
  {name:"Express",icon:"/icons/express-original.svg"},
  ]
  ]
  
  const [page, setPage] = useState(0)
const isScrolling = useRef(false)

const ref = useRef<HTMLDivElement>(null)

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setPage(0) // ya reset / trigger
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

  // section kab start hua
  const start = windowHeight * 0.2   // 20% viewport
  const end = windowHeight * 0.8     // 80% viewport

  // agar section properly view me nahi hai to kuch mat karo
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

<section ref={ref} className="bg-[#0b0b0b] text-white">
   {/* ye outer scroll area hai */}
  <div className="h-[150vh] relative">

    {/* ye screen pe chipak ke rahega */}
    <div className="sticky top-0 h-screen flex items-center">

<div className="max-w-5xl mx-auto w-full flex items-center justify-between ">

{/* LEFT SIDE */}

<div className="flex items-center gap-4">

<div className="w-[3px] h-24 bg-yellow-400"></div>

<h2 className="rotate-[-90deg] text-3xl tracking-widest">
Skills
</h2>

</div>


{/* CENTER GRID */}


<div className="w-full">
  <div
    key={page}
    className="grid grid-cols-5 gap-10 py-6 transition-all duration-500 ease-in-out animate-slide"
    >
    {pages[page].map((skill, i) => (
<div
key={skill.name}
className="bg-[#151515] p-10 rounded-xl text-center
transition-all duration-300
hover:scale-110 hover:shadow-[0_0_25px_rgba(255,215,0,0.3)]"
>

<img
  src={skill.icon}
  className={`w-16 mx-auto mb-4 ${
    ["GitHub","Vercel","Next JS"].includes(skill.name) ? "invert" : ""
  }`}
/>

<p className="text-sm tracking-wide text-gray-300">
{skill.name}
</p>

</div>

))}
</div>
</div>

</div>


{/* RIGHT INDICATOR */}

<div className="flex flex-col gap-4">

{pages.map((_, i) => (

<div
key={i}
onClick={() => setPage(i)}
className={`w-2 rounded-full cursor-pointer transition-all duration-300
${page === i ? "h-10 bg-yellow-400" : "h-6 bg-gray-600"}
`}
></div>

))}
</div>

</div>
</div>

</section>

)

}


