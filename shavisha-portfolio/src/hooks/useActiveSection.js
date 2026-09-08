import { useEffect, useState } from 'react'

export default function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)

        if (visibleEntries.length === 0) {
          return
        }

        const mostVisible = visibleEntries.reduce((current, entry) =>
          entry.intersectionRatio > current.intersectionRatio ? entry : current,
        )

        setActiveId(mostVisible.target.id)
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.15, 0.35, 0.55, 0.75],
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
