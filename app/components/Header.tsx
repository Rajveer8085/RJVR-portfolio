"use client"

import Link from "next/link"

export const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl glass rounded-2xl ">
      <div className="flex items-center justify-between  px-6 py-4 ">
        
        {/* Logo */}
       <h1 className="text-2xl font-bold tracking-wide">
  RJ
  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
    VR
  </span>
</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/projects" className="nav-link">Projects</Link>
          <Link href="/experience" className="nav-link">Experience</Link>

          <button className="btn-primary">
            Hire Me
          </button>
        </nav>
      </div>
    </header>
  )
}