"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

type Props = {
icon: string
}

export default function SkillBall({ icon }: Props) {

const mountRef = useRef<HTMLDivElement | null>(null)

useEffect(() => {

if (!mountRef.current) return

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
camera.position.z = 4

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
renderer.setSize(160, 160)

mountRef.current.appendChild(renderer.domElement)

/* sphere */
const group = new THREE.Group();
scene.add(group)

const loader = new THREE.TextureLoader()

const geometry = new THREE.SphereGeometry(1.2, 64, 64)

const material = new THREE.MeshStandardMaterial({
  color: 0x1e293b,
  roughness: 0.4,
  metalness: 0.2
})

const sphere = new THREE.Mesh(geometry, material)

group.add(sphere)

const texture = loader.load(icon)

const planeGeo = new THREE.PlaneGeometry(0.9, 0.9)

// const planeMat = new THREE.MeshBasicMaterial({
//   map: texture,
//   transparent: true,
//   side: THREE.DoubleSide
// })
const planeMat = new THREE.MeshStandardMaterial({
  map: texture,
  transparent: true,
  side: THREE.DoubleSide,
  roughness: 0.4,
  metalness: 0.1
})

const iconFront = new THREE.Mesh(planeGeo, planeMat)
iconFront.position.z = 1.25

const iconBack = new THREE.Mesh(planeGeo, planeMat)
iconBack.position.z = -1.25
iconBack.rotation.y = Math.PI

group.add(iconFront)
group.add(iconBack)
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(5,5,5)
scene.add(light)

const ambient = new THREE.AmbientLight(0xffffff,0.6)
scene.add(ambient)
/* icon plane */

// scene.add(iconPlane)

/* drag rotation */

let dragging = false

const onDown = () => (dragging = true)
const onUp = () => (dragging = false)

const onMove = (e: MouseEvent) => {

if (!dragging) return

group.rotation.y += e.movementX * 0.01
group.rotation.x += e.movementY * 0.01

}
renderer.domElement.addEventListener("mousedown", onDown)
window.addEventListener("mouseup", onUp)
window.addEventListener("mousemove", onMove)

/* animation */

const animate = () => {

requestAnimationFrame(animate)

// iconFront.lookAt(camera.position)
// iconBack.lookAt(camera.position)
renderer.render(scene, camera)

}

animate()

return () => {

renderer.dispose()

renderer.domElement.removeEventListener("mousedown", onDown)
window.removeEventListener("mouseup", onUp)
window.removeEventListener("mousemove", onMove)

}

}, [icon])

return <div ref={mountRef} />

}