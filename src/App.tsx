import { Routes, Route } from 'react-router-dom'
import Ledger from './pages/Ledger'
import Console from './pages/Console'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Ledger />} />
      <Route path="/console" element={<Console />} />
      <Route path="*" element={<Ledger />} />
    </Routes>
  )
}

export default App
