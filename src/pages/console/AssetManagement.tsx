import { useAuth } from '../../context/AuthContext'
import './AssetManagement.css'

interface Asset {
  id: string
  name: string
  qty: number
  unit: string
  location: string
  status: string
  note: string
}

const assets: Asset[] = [
  { id: 'BM-7742', name: '锚定定位器维护套件', qty: 12, unit: '套', location: '中央仓库', status: '正常', note: '—' },
  { id: 'BM-7762', name: '镜像界面稳定器 (实验)', qty: 1, unit: '台', location: '中央枢纽', status: '使用中', note: '实验型号 · 来源: 研发部' },
  { id: 'BM-5503', name: '高敏监听天线阵列组件', qty: 3, unit: '套', location: '回声分析中心', status: '正常', note: '—' },
  { id: 'BM-9907', name: '阈限区样本采集容器', qty: 8, unit: '个', location: '第13号采集站', status: '正常', note: '—' },
  { id: 'BM-4871', name: '深层信号解析专用处理器', qty: 4, unit: '台', location: '回声分析中心', status: '正常', note: '—' },
  { id: 'BM-4459', name: '异常信号屏蔽涂料', qty: 40, unit: '升', location: '第7号观测站', status: '正常', note: '—' },
  { id: 'BM-8814', name: '长距通讯中继器校准模块', qty: 2, unit: '件', location: '中央枢纽', status: '异常', note: '调拨来源缺失 · 序列004' },
  { id: 'AT-0077', name: 'α-7 外部存储端点 (测试)', qty: 1, unit: '—', location: '外网', status: '活跃', note: '访问密钥: jd9V' },
  { id: 'BM-4208', name: '共鸣场发生器', qty: 1, unit: '台', location: '中央枢纽', status: '正常', note: '—' },
  { id: 'BM-9903', name: '异常能量场检测仪', qty: 2, unit: '台', location: '第7号观测站', status: '正常', note: '—' },
  { id: 'BM-2291', name: '共鸣抑制器冷却液 (Ⅲ型)', qty: 12, unit: '桶', location: '第3号缓冲站', status: '正常', note: '—' },
  { id: 'BM-2017', name: '信号放大器备件', qty: 10, unit: '件', location: '中央仓库', status: '正常', note: '—' },
  { id: 'BM-1998', name: '电磁防护服 (Ⅳ级)', qty: 6, unit: '套', location: '第13号采集站', status: '正常', note: '—' },
  { id: 'BM-6155', name: '████████', qty: 1, unit: '—', location: '████', status: '已删除', note: '恢复失败 · 序列010 · 2024/03/28' },
  { id: 'BM-5501', name: '████████████', qty: 0, unit: '—', location: '██████████', status: '已删除', note: '不可辨识 · 序列015' },
]

function AssetManagement() {
  const { user } = useAuth()
  if (!user || user.level < 4) {
    return (
      <div className="asset">
        <div className="asset-header">
          <h2 className="asset-title">资产管理</h2>
        </div>
        <div className="asset-denied">
          需要 4级或以上安全许可。当前许可等级: {user ? user.level : 1}。
        </div>
      </div>
    )
  }

  return (
    <div className="asset">
      <div className="asset-header">
        <h2 className="asset-title">资产管理</h2>
        <span className="asset-count">{assets.length} 条记录</span>
      </div>

      <table className="asset-table">
        <thead>
          <tr>
            <th>资产编号</th>
            <th>名称</th>
            <th>数量</th>
            <th>单位</th>
            <th>当前位置</th>
            <th>状态</th>
            <th>备注</th>
          </tr>
        </thead>
        <tbody>
          {assets.map(a => (
            <tr key={a.id} className={a.status === '异常' || a.status === '已删除' ? 'row-warn' : ''}>
              <td className="cell-id">{a.id}</td>
              <td>{a.name}</td>
              <td>{a.qty}</td>
              <td>{a.unit}</td>
              <td>{a.location}</td>
              <td className={a.status === '异常' ? 'status-warn' : a.status === '已删除' ? 'status-dim' : 'status-ok'}>
                {a.status}
              </td>
              <td className="cell-note">{a.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AssetManagement
