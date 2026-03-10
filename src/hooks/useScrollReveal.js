import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to all `.reveal` elements
 * within the component's root ref, adding `.visible` when they enter the viewport.
 */
export default function useScrollReveal() {
  const rootRef = useRef(null)

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return rootRef
}
