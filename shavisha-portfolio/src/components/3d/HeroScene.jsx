import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef, useState, useEffect } from 'react'

/**
 * Returns whether the media query currently matches.
 * Uses a stable effect (no match in deps) to avoid double-firing.
 */
function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = (e) => setMatches(e.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}

/**
 * Wraps child mesh/group: applies mouse-position tilt via R3F useFrame.
 * useFrame is the correct way to animate inside React Three Fiber —
 * it hooks into the renderer's RAF loop and is automatically cleaned up.
 */
function AbstractStructure({ mousePosition }) {
  const groupRef = useRef()

  useFrame(() => {
    if (!groupRef.current) return
    const targetX = mousePosition.y * 0.3
    const targetY = mousePosition.x * 0.3
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05
  })

  return (
    <group ref={groupRef}>
      <MainStructure />
      <FloatingElements />
    </group>
  )
}

function MainStructure() {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
    }
  })

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

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= 0.003
      groupRef.current.rotation.x += 0.001
    }
  })

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
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Scene mousePosition={mousePosition} />
        </Suspense>
      </Canvas>
    </div>
  )
}
