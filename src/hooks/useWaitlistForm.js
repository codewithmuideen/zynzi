import { useState } from 'react'

export default function useWaitlistForm() {
  const [email,    setEmail]    = useState('')
  const [userType, setUserType] = useState('')
  const [status,   setStatus]   = useState('idle') // 'idle' | 'loading' | 'success' | 'error'

  const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)

  const handleSubmit = async (e) => {
    e?.preventDefault()

    if (!isValidEmail(email)) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/waitlist.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, userType }),
      })
      if (!res.ok) throw new Error('Submission failed')

      setStatus('success')
      setEmail('')
      setUserType('')
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return { email, setEmail, userType, setUserType, status, handleSubmit }
}
