"use client"

import Lenis from "@studio-freight/lenis"
import { useEffect } from "react"

export const SmoothScroll = ({ children }: any) => {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      lenis.destroy() // ✅ important
      cancelAnimationFrame(rafId)
    }

  }, [])

  return children
}