import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Ledger from './pages/Ledger'
import Console from './pages/console/Console'
import Dashboard from './pages/console/Dashboard'
import Terminal from './pages/console/Terminal'
import Archives from './pages/console/Archives'


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
      <Route path="/console" element={<Console />}>
        <Route index element={<Dashboard />} />
        <Route path="terminal" element={<Terminal />} />
        <Route path="archives" element={<Archives />} />

      </Route>
      <Route path="*" element={<Ledger />} />
    </Routes>
  )
}

export default App
