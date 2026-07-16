import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import LoginModal from '../../components/LoginModal'
import './Console.css'

function Console() {
  const { user, logout } = useAuth()
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="portal">
      <header className="portal-header">
        <div className="portal-logo">BCMA</div>
        <div className="portal-title">Integrated Management System</div>
        <div className="portal-meta">
          {user ? (
            <>
              <span className="portal-user">{user.name}</span>
              <span className="portal-clearance">CLEARANCE: LEVEL {user.level}</span>
              <button className="portal-logout" onClick={logout}>登出</button>
            </>
          ) : (
            <>
              <span className="portal-clearance">GUEST</span>
              <button className="portal-login-btn" onClick={() => setShowLogin(true)}>登录</button>
            </>
          )}
        </div>
      </header>

      <div className="portal-body">
        <nav className="portal-nav">
          <NavLink to="/console" end className="nav-link">仪表盘</NavLink>
          <NavLink to="/console/terminal" className="nav-link">终端</NavLink>
          <NavLink to="/console/archives" className="nav-link">档案库</NavLink>
          <NavLink to="/console/email" className="nav-link">通讯监控</NavLink>
          <div className="nav-sep" />

          {user && user.level >= 4 ? (
            <NavLink to="/console/personnel" className="nav-link">人员管理</NavLink>
          ) : (
            <div className="nav-link disabled" onClick={() => setShowLogin(true)}>人员管理 🔒</div>
          )}
          {user && user.level >= 4 ? (
            <NavLink to="/console/assets" className="nav-link">资产管理</NavLink>
          ) : (
            <div className="nav-link disabled" onClick={() => setShowLogin(true)}>资产管理 🔒</div>
          )}
        </nav>

        <main className="portal-main">
          <Outlet />
        </main>
      </div>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </div>
  )
}

export default Console
