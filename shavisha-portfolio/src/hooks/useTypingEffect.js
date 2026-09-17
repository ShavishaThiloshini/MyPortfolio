import { useState, useEffect, useRef } from 'react'

const TYPING_SPEED   = 60
const DELETING_SPEED = 35
const PAUSE_AFTER    = 1800
const PAUSE_BEFORE   = 350

export default function useTypingEffect(roles) {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping]       = useState(true)
  const roleIndex = useRef(0)
  const charIndex  = useRef(0)
  const phase      = useRef('typing')

  useEffect(() => {
    if (!roles || roles.length === 0) return
    let timer

    function tick() {
      const currentRole = roles[roleIndex.current]

      if (phase.current === 'typing') {
        setIsTyping(true)
        if (charIndex.current < currentRole.length) {
          charIndex.current++
          setDisplayText(currentRole.slice(0, charIndex.current))
          timer = setTimeout(tick, TYPING_SPEED)
        } else {
          phase.current = 'pausing'
          timer = setTimeout(tick, PAUSE_AFTER)
        }
      } else if (phase.current === 'pausing') {
        setIsTyping(false)
        phase.current = 'deleting'
        timer = setTimeout(tick, DELETING_SPEED)
      } else if (phase.current === 'deleting') {
        setIsTyping(true)
        if (charIndex.current > 0) {
          charIndex.current--
          setDisplayText(currentRole.slice(0, charIndex.current))
          timer = setTimeout(tick, DELETING_SPEED)
        } else {
          phase.current = 'waiting'
          roleIndex.current = (roleIndex.current + 1) % roles.length
          timer = setTimeout(tick, PAUSE_BEFORE)
        }
      } else if (phase.current === 'waiting') {
        phase.current = 'typing'
        tick()
      }
    }

    timer = setTimeout(tick, PAUSE_BEFORE)
    return () => clearTimeout(timer)
  }, [roles])

  return { displayText, isTyping }
}
