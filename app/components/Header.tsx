"use client"

import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl glass rounded-2xl ">
      <div className="flex items-center justify-between  px-6 py-4 ">

        {/* Logo */}
        {/* <h1 className="text-2xl font-bold tracking-wide">
  RJ
  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
    VR
  </span>
</h1> */}.
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={100}
          height={100}
           />

        {/* Desktop Nav */}
        <nav className="hidden list-none md:flex items-center gap-8">
          <li onClick={() => {
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth"
            })
          }} className="nav-link cursor-pointer">Home</li>
          <li onClick={() => {
            document.getElementById("about")?.scrollIntoView({
              behavior: "smooth"
            })
          }} className="nav-link cursor-pointer">About</li>
          <li onClick={() => {
            document.getElementById("projects")?.scrollIntoView({
              behavior: "smooth"
            })
          }} className="nav-link cursor-pointer">Projects</li>
          <li onClick={() => {
            document.getElementById("experience")?.scrollIntoView({
              behavior: "smooth"
            })
          }} className="nav-link cursor-pointer">Experience</li>

          <button className="btn-primary">
            Hire Me
          </button>
        </nav>
      </div>
    </header>
  )
}