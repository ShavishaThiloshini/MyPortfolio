import { useState } from 'react'

/**
 * Checks WebGL availability synchronously on mount.
 * Initializing in useState avoids an extra render cycle and the
 * set-state-in-effect lint warning.
 */
export default function useWebGL() {
  const [isWebGLAvailable] = useState(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      return !!gl
    } catch {
      return false
    }
  })

  return isWebGLAvailable
}
