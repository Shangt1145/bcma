import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Ledger from './pages/Ledger'
import Console from './pages/console/Console'
import Dashboard from './pages/console/Dashboard'
import Terminal from './pages/console/Terminal'
import Archives from './pages/console/Archives'
import EmailTranscript from './pages/console/EmailTranscript'
import Personnel from './pages/console/Personnel'
import AssetManagement from './pages/console/AssetManagement'

function AppRoutes() {
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
        <Route path="email" element={<EmailTranscript />} />
        <Route path="personnel" element={<Personnel />} />
        <Route path="assets" element={<AssetManagement />} />
      </Route>
      <Route path="*" element={<Ledger />} />
    </Routes>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App
