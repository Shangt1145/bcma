import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

interface User {
  username: string
  name: string
  level: number
}

interface AuthState {
  user: User | null
  login: (username: string, password: string) => boolean
  logout: () => void
}

const ACCOUNTS: Record<string, { password: string; level: number; name: string }> = {
  'lin.yan': { password: 'ECH0-T3ST-077', level: 3, name: '林██' },
  'sys.admin': { password: 'NODE-7742-ECH0', level: 5, name: '系统管理员' },
}

const AuthContext = createContext<AuthState | null>(null)

function loadUser(): User | null {
  try {
    const stored = sessionStorage.getItem('bcma_auth')
    if (stored) return JSON.parse(stored)
  } catch { /* ignore */ }
  return null
}

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(loadUser)

  const login = useCallback((username: string, password: string): boolean => {
    const account = ACCOUNTS[username.toLowerCase()]
    if (account && account.password === password) {
      const u = { username, name: account.name, level: account.level }
      sessionStorage.setItem('bcma_auth', JSON.stringify(u))
      setUser(u)
      return true
    }
    return false
  }, [])

  const logout = useCallback(() => {
    sessionStorage.removeItem('bcma_auth')
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthState {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export { AuthProvider, useAuth }
