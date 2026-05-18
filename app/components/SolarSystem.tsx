"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

export default function SolarSystem() {
  const icons = useRef<any[]>([])
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current!

    // ── Camera Z distance based on screen width ───────────────────────────────
    // The outermost orbit has radius 30, so we need to be far enough back to
    // see the full diameter (60 units) at the given FOV. These values are tuned:
    const getCameraZ = (w: number) => {
      if (w < 400) return 85
      if (w < 600) return 72
      if (w < 900) return 60   // ← fixes the 793px overflow you saw
      if (w < 1200) return 50
      return 42
    }

    // ── Scene ─────────────────────────────────────────────────────────────────
    const scene = new THREE.Scene()

    const w0 = mount.clientWidth
    const h0 = mount.clientHeight

    const camera = new THREE.PerspectiveCamera(60, w0 / h0, 0.1, 1000)
    camera.position.set(0, 10, getCameraZ(w0))
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(w0, h0)
    renderer.setClearColor(0x000000, 0)
    renderer.domElement.style.touchAction = "pan-y"
    mount.appendChild(renderer.domElement)

    // ── Controls ──────────────────────────────────────────────────────────────
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.target.set(0, 0, 0)  // ← centred on world origin (was offset to y=3 before)
    controls.update()
    controls.enableDamping = true

    const isMobile = window.innerWidth < 768

    if (isMobile) {
      controls.enabled = false
    } else {
      controls.enableDamping = true
      controls.enableRotate = true
      controls.enablePan = false
      controls.enableZoom = false
    }
    controls.enableZoom = false
    controls.minDistance = 26
    controls.maxDistance = 100

    // ── Sun ───────────────────────────────────────────────────────────────────
    const loader = new THREE.TextureLoader()
    const sunTexture = loader.load("/textures/2k_sun.jpg")
    sunTexture.colorSpace = THREE.SRGBColorSpace
    sunTexture.wrapS = THREE.RepeatWrapping
    sunTexture.wrapT = THREE.ClampToEdgeWrapping

    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(4, 32, 32),
      new THREE.MeshBasicMaterial({ map: sunTexture })
    )
    scene.add(sun)

    // ── Stars ─────────────────────────────────────────────────────────────────
    const starVerts: number[] = []
    for (let i = 0; i < 1200; i++) {
      starVerts.push(
        (Math.random() - 0.5) * 600,
        (Math.random() - 0.5) * 600,
        (Math.random() - 0.5) * 600
      )
    }
    const starGeo = new THREE.BufferGeometry()
    starGeo.setAttribute("position", new THREE.Float32BufferAttribute(starVerts, 3))
    scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.7, sizeAttenuation: true })))

    // ── Planet data ───────────────────────────────────────────────────────────
    const planetData = [
      { name: "React", icon: "/icons/logos--react.png", radius: 1.2, distance: 10, speed: 0.020 },
      { name: "NextJS", icon: "/icons/next.png", radius: 1.2, distance: 15, speed: 0.018 },
      { name: "TypeScript", icon: "/icons/typescript.png", radius: 1.2, distance: 20, speed: 0.015 },
      { name: "NodeJS", icon: "/icons/node.png", radius: 1.2, distance: 25, speed: 0.012 },
      { name: "MongoDB", icon: "/icons/mongo.png", radius: 1.2, distance: 30, speed: 0.010 },
    ]

    // ── Orbit rings ───────────────────────────────────────────────────────────
    function createOrbit(radius: number) {
      const pts = Array.from({ length: 129 }, (_, i) => {
        const a = (i / 128) * Math.PI * 2
        return new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius)
      })
      scene.add(new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.4 })
      ))
    }

    // ── Planets + icons ───────────────────────────────────────────────────────
    const planets: any[] = []
    icons.current = []

    planetData.forEach(data => {
      createOrbit(data.distance)

      const texture = loader.load(data.icon)
      texture.colorSpace = THREE.SRGBColorSpace
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy()

      const planet = new THREE.Mesh(
        new THREE.SphereGeometry(data.radius * 1.6, 12, 12),
        new THREE.MeshStandardMaterial({ color: 0xffffff })
      )

      const frontIcon = new THREE.Mesh(
        new THREE.PlaneGeometry(2.5, 2.5),
        new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
      scene.add(frontIcon)
      icons.current.push(frontIcon)

      planet.userData = {
        distance: data.distance,
        speed: data.speed,
        angle: Math.random() * Math.PI * 2,
      }
      scene.add(planet)
      planets.push(planet)
    })

    // ── Lighting ──────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.5))
    scene.add(new THREE.PointLight(0xffffff, 2))

    // ── Resize ────────────────────────────────────────────────────────────────
    const handleResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
      camera.position.set(0, 20, getCameraZ(w))
      controls.update()
    }
    window.addEventListener("resize", handleResize)

    // ── Animation ─────────────────────────────────────────────────────────────
    let rafId: number
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      sun.rotation.y += 0.002

      planets.forEach((planet, i) => {
        planet.userData.angle += planet.userData.speed
        const x = Math.cos(planet.userData.angle) * planet.userData.distance
        const z = Math.sin(planet.userData.angle) * planet.userData.distance

        planet.position.set(x, 0, z)

        const icon = icons.current[i]
        icon.position.set(x, 0, z)
        icon.translateZ(2.2)
        icon.lookAt(camera.position)
      })

      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", handleResize)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "clamp(360px, 70vh, 820px)" }}
    />
  )
}
