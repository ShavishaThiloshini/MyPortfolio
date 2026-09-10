import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

function AbstractStructure({ mousePosition }) {
  const groupRef = useRef()

  useEffect(() => {
    if (!groupRef.current) return

    const targetRotationX = mousePosition.y * 0.3
    const targetRotationY = mousePosition.x * 0.3

    const animate = () => {
      if (groupRef.current) {
        groupRef.current.rotation.x +=
          (targetRotationX - groupRef.current.rotation.x) * 0.05
        groupRef.current.rotation.y +=
          (targetRotationY - groupRef.current.rotation.y) * 0.05
      }
      requestAnimationFrame(animate)
    }

    animate()
  }, [mousePosition])

  return (
    <group ref={groupRef}>
      <MainStructure />
      <FloatingElements />
    </group>
  )
}

function MainStructure() {
  const meshRef = useRef()

  useEffect(() => {
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.002
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#151923"
        metalness={0.3}
        roughness={0.4}
        transparent
        opacity={0.9}
      />
    </mesh>
  )
}

function FloatingElements() {
  const groupRef = useRef()

  useEffect(() => {
    const animate = () => {
      if (groupRef.current) {
        groupRef.current.rotation.y -= 0.003
        groupRef.current.rotation.x += 0.001
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <group ref={groupRef}>
      <mesh position={[1.5, 1, 0.5]}>
        <octahedronGeometry args={[0.4]} />
        <meshStandardMaterial
          color="#4FD1C5"
          metalness={0.5}
          roughness={0.3}
          emissive="#4FD1C5"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh position={[-1.2, -0.8, 0.3]}>
        <tetrahedronGeometry args={[0.3]} />
        <meshStandardMaterial
          color="#7DE7DE"
          metalness={0.4}
          roughness={0.4}
          emissive="#7DE7DE"
          emissiveIntensity={0.15}
        />
      </mesh>
      <mesh position={[0.8, -1.2, -0.4]}>
        <icosahedronGeometry args={[0.35]} />
        <meshStandardMaterial
          color="#4FD1C5"
          metalness={0.5}
          roughness={0.3}
          emissive="#4FD1C5"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  )
}

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#4FD1C5" />
      <directionalLight position={[-5, -5, -5]} intensity={0.4} color="#7DE7DE" />
      <pointLight position={[0, 3, 2]} intensity={0.5} color="#4FD1C5" />
    </>
  )
}

function CameraRig() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <group>
      <perspectiveCamera
        position={[0, 0, isMobile ? 6 : 5]}
        fov={isMobile ? 50 : 45}
        makeDefault
      />
    </group>
  )
}

function Scene({ mousePosition }) {
  return (
    <>
      <CameraRig />
      <Lighting />
      <AbstractStructure mousePosition={mousePosition} />
    </>
  )
}

export default function HeroScene({ mousePosition }) {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Scene mousePosition={mousePosition} />
        </Suspense>
      </Canvas>
    </div>
  )
}
