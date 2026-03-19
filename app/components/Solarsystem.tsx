"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"


export default function SolarSystem() {

  const icons = useRef<any[]>([])
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const width = mountRef.current!.clientWidth
    const height = mountRef.current!.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )

    camera.position.set(0, 15, 40)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(width, height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    mountRef.current!.appendChild(renderer.domElement)

   const controls = new OrbitControls(camera, renderer.domElement)

   controls.target.set(0,3,0)
controls.update()
controls.enableDamping = true
controls.enableRotate = true

controls.enableZoom = false
controls.minDistance = 26
controls.maxDistance = 80

// in future if need scroll to zoom then remove comment
// renderer.domElement.addEventListener(
//   "wheel",
//   (event) => {

//     const zoomStep = 0.9
//     const distance = camera.position.distanceTo(controls.target)

//    if (event.deltaY > 0) {

//   // zoom in
//   if (distance <= controls.minDistance) return

//   camera.position.z -= zoomStep
//   event.preventDefault()

// } else {

//   // zoom out
//   if (distance >= controls.maxDistance) return

//   camera.position.z += zoomStep
//   event.preventDefault()

// }

//   },
//   { passive: false }   // ⭐ THIS IS THE KEY FIX
// )

    // texture loader
    const loader = new THREE.TextureLoader()
    const sunTexture = loader.load("/textures/2k_sun.jpg")
sunTexture.colorSpace = THREE.SRGBColorSpace
sunTexture.wrapS = THREE.RepeatWrapping
sunTexture.wrapT = THREE.ClampToEdgeWrapping
    // sun
    const sunGeometry = new THREE.SphereGeometry(4, 12, 12)
    const sunMaterial = new THREE.MeshBasicMaterial({
  map: sunTexture
})
    const sun = new THREE.Mesh(sunGeometry, sunMaterial)

    scene.add(sun)

    // start 
    const starGeometry = new THREE.BufferGeometry()
const starVertices = []

for (let i = 0; i < 1200; i++) {
  const x = (Math.random() - 0.5) * 600
  const y = (Math.random() - 0.5) * 600
  const z = (Math.random() - 0.5) * 600
  starVertices.push(x, y, z)
}

starGeometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(starVertices, 3)
)

const starMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.7,
  sizeAttenuation: true
})

const stars = new THREE.Points(starGeometry, starMaterial)
scene.add(stars)
    // skills planets
    const planetData = [
  { name: "React", icon: "/icons/logos--react.png", radius: 1.2, distance: 10, speed: 0.02 },
  { name: "NextJS", icon: "/icons/next.png", radius: 1.2, distance: 15, speed: 0.018 },
  { name: "TypeScript", icon: "/icons/typescript.png", radius: 1.2, distance: 20, speed: 0.015 },
  { name: "NodeJS", icon: "/icons/node.png", radius: 1.2, distance: 25, speed: 0.012 },
  { name: "MongoDB", icon: "/icons/mongo.png", radius: 1.2, distance: 30, speed: 0.010 }
]
function createOrbit(radius: number) {
  const points = []

  for (let i = 0; i <= 128; i++) {
    const angle = (i / 128) * Math.PI * 2

    points.push(
      new THREE.Vector3(
        Math.cos(angle) * radius,
        0,
        Math.sin(angle) * radius
      )
    )
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points)

  const material = new THREE.LineBasicMaterial({
  color: 0xffffff,
  transparent: true,
  opacity: 0.6
})
  const orbit = new THREE.LineLoop(geometry, material)

  scene.add(orbit)
}

    const planets:any[] = []

   planetData.forEach(data => {
    createOrbit(data.distance)
  const geometry = new THREE.SphereGeometry(data.radius * 1.6, 12, 12)

  const texture = loader.load(data.icon)
texture.colorSpace = THREE.SRGBColorSpace
texture.anisotropy = renderer.capabilities.getMaxAnisotropy()

  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff
  })

  const planet = new THREE.Mesh(geometry, material)

  // icon plane
  const planeGeometry = new THREE.PlaneGeometry(2.5, 2.5)

  const planeMaterial = new THREE.MeshBasicMaterial({
    side:THREE.DoubleSide,
    map: texture,
    transparent: true,
  depthWrite:false
  })

  // front icon
  const frontIcon = new THREE.Mesh(planeGeometry, planeMaterial)
 frontIcon.position.set(0,0,2.2)
  scene.add(frontIcon)
  icons.current.push(frontIcon)

  planet.userData = {
    distance: data.distance,
    speed: data.speed,
    angle: Math.random() * Math.PI * 2
  }

  scene.add(planet)
  planets.push(planet)

})

    // lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambient)

    const light = new THREE.PointLight(0xffffff, 2)
    scene.add(light)

    // animation
    const animate = () => {

      requestAnimationFrame(animate)
  sun.rotation.y += 0.002
      planets.forEach((planet,i) => {

  planet.userData.angle += planet.userData.speed

  const x = Math.cos(planet.userData.angle) * planet.userData.distance
  const z = Math.sin(planet.userData.angle) * planet.userData.distance

 planet.position.set(x, 3, z)
      const icon = icons.current[i]
      icon.position.set(x,3,z)
icon.translateZ(2)
  icon.lookAt(camera.position)

  

})

      controls.update()
      renderer.render(scene, camera)

    }

    animate()

    return () => {
      mountRef.current?.removeChild(renderer.domElement)
    }

  }, [])

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "70vh" }}
    />
  )
}