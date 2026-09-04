import { useEffect, useState } from 'react'
import type { GetHealth } from '@checkhealth/shared'

function App() {
  const [status, setStatus] = useState<GetHealth | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getStatus = async () => {
      try {
        const res = await fetch('/api/health')
        if (!res.ok) {
          setError(true)
          return
        }

        const data = (await res.json()) as GetHealth
        if (!data.msg) {
          setError(true)
          return
        }

        setStatus(data)
      } catch (e: unknown) {
        setError(true)
      }
    }

    getStatus()
  }, [])

  return (
    <>
      <section>
        <p className="bg-red-300 text-blue-500">
          {error ? 'An error has accured' : status?.msg}
        </p>
      </section>
    </>
  )
}

export default App
