import { useEffect, useState } from 'react'

export default function useWebGL() {
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(false)

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      setIsWebGLAvailable(!!gl)
    } catch (e) {
      setIsWebGLAvailable(false)
    }
  }, [])

  return isWebGLAvailable
}
