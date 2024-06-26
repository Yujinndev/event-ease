import LoadingPage from '@/components/LoadingPage'
import useAuthStore from '@/services/state/useAuthStore'
import { useEffect, useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true)
  const auth = useAuthStore.getState().user
  const navigate = useNavigate()

  const isFirstVisit = localStorage.getItem('isFirstVisit')

  useEffect(() => {
    if (auth === null) {
      navigate('/signin', { replace: true })
    }

    if (!isFirstVisit) {
      const timeout = setTimeout(() => {
        setLoading(false)
        localStorage.setItem('isFirstVisit', 'true')
      }, 1000)

      return () => clearTimeout(timeout)
    } else {
      setLoading(false)
    }
  }, [auth])

  return loading ? <LoadingPage /> : <Outlet />
}

export default ProtectedRoute
