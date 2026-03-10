import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Listens for route/hash changes and smoothly scrolls to the target element.
 * Handles links like <Link to="/#features"> from any page.
 */
export default function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    // Wait for the new page to render before scrolling
    const timer = setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        // Retry once more in case render was slower
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 300)
      }
    }, 150)
    return () => clearTimeout(timer)
  }, [hash, pathname])

  return null
}
