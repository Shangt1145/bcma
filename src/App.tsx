import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Ledger from './pages/Ledger'
import Console from './pages/Console'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const redirect = sessionStorage.getItem('redirect')
    if (redirect) {
      sessionStorage.removeItem('redirect')
      const match = redirect.match(/\/bcma(\/.*)$/)
      if (match && match[1] && match[1] !== '/') {
        navigate(match[1], { replace: true })
      }
    }
  }, [navigate])

  return (
    <Routes>
      <Route path="/" element={<Ledger />} />
      <Route path="/console" element={<Console />} />
      <Route path="*" element={<Ledger />} />
    </Routes>
  )
}

export default App
