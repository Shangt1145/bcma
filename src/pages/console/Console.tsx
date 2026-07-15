import { NavLink, Outlet } from 'react-router-dom'
import './Console.css'

function Console() {
  return (
    <div className="portal">
      <header className="portal-header">
        <div className="portal-logo">BCMA</div>
        <div className="portal-title">Integrated Management System</div>
        <div className="portal-meta">
          <span className="portal-user">SESS-7742-0317</span>
          <span className="portal-clearance">CLEARANCE: LEVEL 1</span>
        </div>
      </header>

      <div className="portal-body">
        <nav className="portal-nav">
          <NavLink to="/console" end className="nav-link">仪表盘</NavLink>
          <NavLink to="/console/terminal" className="nav-link">终端</NavLink>
          <NavLink to="/console/archives" className="nav-link">档案库</NavLink>

          <div className="nav-sep" />
          <div className="nav-link disabled">通讯中心</div>
          <div className="nav-link disabled">人员管理</div>
          <div className="nav-link disabled">资产管理</div>
        </nav>

        <main className="portal-main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Console
