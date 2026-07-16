import { useAuth } from '../../context/AuthContext'
import './Personnel.css'

interface Staff {
  id: string
  name: string
  dept: string
  status: string
  clearance: number
  notes: string
}

const staff: Staff[] = [
  { id: 'B-001', name: '███████', dept: '中央枢纽', status: '活跃', clearance: 5, notes: '—' },
  { id: 'B-002', name: '林██', dept: '回声分析中心', status: '活跃', clearance: 3, notes: 'α-7 测试负责' },
  { id: 'B-003', name: '陈██', dept: '中央枢纽', status: '活跃', clearance: 3, notes: '第7号观测站主管' },
  { id: 'B-004', name: '王██', dept: '通信技术部', status: '活跃', clearance: 2, notes: '—' },
  { id: 'B-007', name: '卢克', dept: '通信技术部', status: '异常', clearance: 2, notes: '警告: 会话ID已脱离系统节点列表' },
  { id: 'B-011', name: '████', dept: '研发部', status: '停用', clearance: 1, notes: '注销日期: 2024/03/28' },
  { id: 'B-012', name: '██████', dept: '后勤部', status: '停用', clearance: 1, notes: '注销日期: 2024/03/28' },
]

function Personnel() {
  const { user } = useAuth()
  if (!user || user.level < 4) {
    return (
      <div className="personnel">
        <div className="personnel-header">
          <h2 className="personnel-title">人员管理</h2>
        </div>
        <div className="personnel-denied">
          需要 4级或以上安全许可。当前许可等级: {user ? user.level : 1}。
        </div>
      </div>
    )
  }

  return (
    <div className="personnel">
      <div className="personnel-header">
        <h2 className="personnel-title">人员管理</h2>
        <span className="personnel-count">{staff.length} 条记录</span>
      </div>

      <table className="personnel-table">
        <thead>
          <tr>
            <th>编号</th>
            <th>姓名</th>
            <th>部门</th>
            <th>状态</th>
            <th>许可</th>
            <th>备注</th>
          </tr>
        </thead>
        <tbody>
          {staff.map(s => (
            <tr key={s.id} className={s.status === '异常' ? 'row-warn' : s.status === '停用' ? 'row-dim' : ''}>
              <td className="cell-id">{s.id}</td>
              <td>{s.name}</td>
              <td>{s.dept}</td>
              <td className={s.status === '异常' ? 'status-warn' : s.status === '停用' ? 'status-dim' : 'status-ok'}>
                {s.status}
              </td>
              <td>CL-{s.clearance}</td>
              <td className="cell-notes">{s.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Personnel
