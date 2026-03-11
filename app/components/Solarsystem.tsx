"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars, useTexture, Line, Decal } from "@react-three/drei"
import { useRef , useEffect, useState} from "react"
import * as THREE from "three"

type Skill = {
  name: string
  icon: string
  distance: number
  speed: number
}

const skills: Skill[] = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    distance: 4,
    speed: 1
  },
  {
    name: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    distance: 5.5,
    speed: 0.9
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    distance: 7,
    speed: 0.8
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    distance: 8.5,
    speed: 0.7
  },
  {
    name: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    distance: 10,
    speed: 0.6
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    distance: 11.5,
    speed: 0.55
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    distance: 13,
    speed: 0.5
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    distance: 14.5,
    speed: 0.45
  }
]

function Sun() {
  const sunTexture = useTexture("/textures/2k_sun.jpg")
  const ref = useRef<THREE.Mesh>(null!)

  sunTexture.wrapS = THREE.RepeatWrapping
  sunTexture.wrapT = THREE.RepeatWrapping
  sunTexture.repeat.set(1, 1)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002
    }
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[3, 64, 64]} />
      <meshBasicMaterial
        map={sunTexture}
        toneMapped={false}
      />
    </mesh>
  )
}

type OrbitProps = {
  radius: number
}

function Orbit({ radius }: OrbitProps) {

  const points: THREE.Vector3[] = []

  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * Math.PI * 2
    points.push(
      new THREE.Vector3(
        Math.cos(angle) * radius,
        0,
        Math.sin(angle) * radius
      )
    )
  }

  return (
    <Line
      points={points}
      color="#888"
      lineWidth={1}
      opacity={0.4}
      transparent
    />
  )
}

type PlanetProps = {
  distance: number
  speed: number
  icon: string
  scrollSpeed: number
}

function Planet({ distance, speed, icon, scrollSpeed }: PlanetProps){   

  const ref = useRef<THREE.Mesh>(null!)
  const iconTexture = useTexture(icon)

  iconTexture.anisotropy = 16

  useFrame(({ clock }) => {

   const t = clock.getElapsedTime() * speed * scrollSpeed

    if (ref.current) {
      ref.current.position.x = Math.cos(t) * distance
      ref.current.position.z = Math.sin(t) * distance
      ref.current.rotation.y += 0.01
    }

  })

  return (
//     <mesh ref={ref}>
//       <sphereGeometry args={[0.8, 64, 64]} />

//      <meshStandardMaterial
//   color="#f8fafc"
//   roughness={0.25}
//   metalness={0.6}
//   emissive="#020617"
//   emissiveIntensity={0.3}
// />

//       <Decal
//         position={[0, 0, 0.9]}
//         rotation={[0, 0, 0]}
//         scale={1.45}
//       >
//         <meshBasicMaterial
//           map={iconTexture}
//           transparent
//           toneMapped={false}
//           polygonOffset
//           polygonOffsetFactor={-2}
//         />
//       </Decal>

//     </mesh>
<mesh ref={ref}>
  <sphereGeometry args={[0.8, 64, 64]} />

  <meshStandardMaterial
    color="#f8fafc"
    roughness={0.25}
    metalness={0.6}
    emissive="#020617"
    emissiveIntensity={0.3}
  />

  {/* FRONT ICON */}
  <Decal
    position={[0, 0, 0.95]}
    rotation={[0, 0, 0]}
    scale={1.4}
  >
    <meshBasicMaterial
      map={iconTexture}
      transparent
      toneMapped={false}
      polygonOffset
      polygonOffsetFactor={-2}
    />
  </Decal>

  {/* BACK ICON */}
  <Decal
    position={[0, 0, -0.95]}
    rotation={[0, Math.PI, 0]}
    scale={1.4}
  >
    <meshBasicMaterial
      map={iconTexture}
      transparent
      toneMapped={false}
      polygonOffset
      polygonOffsetFactor={-2}
    />
  </Decal>

</mesh>
  )
}

export default function SolarSystem() {
const [scrollSpeed, setScrollSpeed] = useState(1)

useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY
    setScrollSpeed(1 + scrollY * 0.002)
  }

  window.addEventListener("scroll", handleScroll)

  return () => window.removeEventListener("scroll", handleScroll)
}, [])
  return (
    // <div style={{ height: "100vh" }}>
    <div style={{ height: "650px", width: "100%" }}>
      {/* <Canvas camera={{ position: [0, 10, 18], fov: 60 }}> */}
      <Canvas camera={{ position: [0, 8, 14], fov: 60 }}>

        {/* Lighting */}
        <ambientLight intensity={0.4} />

        <pointLight
          position={[0, 0, 0]}
          intensity={30}
          distance={200}
          decay={2}
        />

        {/* Stars */}
        <Stars
          radius={300}
          depth={60}
          count={8000}
          factor={7}
          saturation={0}
          fade
        />

        {/* Sun */}
        <Sun />

        {/* Planets */}
        {skills.map((skill, i) => (
          <group key={i}>
            <Orbit radius={skill.distance} />
            <Planet
  distance={skill.distance}
  speed={skill.speed}
  icon={skill.icon}
  scrollSpeed={scrollSpeed}
/>
          </group>
        ))}

        <OrbitControls enableZoom={false} />

      </Canvas>
    </div>
  )
}