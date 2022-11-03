import axios from 'axios'
import { useState, useEffect } from 'react'

export function useFetch() {
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<{
    state: boolean
    error: any
  }>({
    state: false,
    error: null,
  })

  useEffect(() => {
    fetchData()

    async function fetchData() {
      try {
        const { data } = await axios.get(import.meta.env.VITE_API)
        setData(data)
        setError({
          state: false,
          error: null,
        })
      } catch (error) {
        setError({
          state: true,
          error,
        })
      } finally {
        setLoading(false)
      }
    }
  }, [])

  return { loading, error, data: data.cards }
}
