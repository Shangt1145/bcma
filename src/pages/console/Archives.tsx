import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import './Archives.css'

interface Report {
  id: string
  title: string
  date: string
  author: string
  clearance: number
  content: string[]
}

const reports: Report[] = [
  {
    id: 'RPT-3187',
    title: '内部网络泄露初步评估',
    date: '2024/03/17',
    author: '林██',
    clearance: 1,
    content: [
      '回声分析中心在例行信号扫描中，在第7号观测站覆盖范围内检测到异常信号模式。',
      '',
      '经分析，信号携带结构化数据，数据格式与BCMA内部网络结构高度吻合。这意味着我们的内部网络被泄露了。',
      '',
      '建议立即提高第7号观测站监测级别，并启动克伦威尔协议第4条。',
    ],
  },
  {
    id: 'RPT-4502',
    title: '第7号观测站异常活动报告',
    date: '2024/04/15',
    author: '陈██',
    clearance: 1,
    content: [
      '第7号观测站附近建筑结构在过去两周内出现不明原因的物理变化。墙体表面呈现出未知页面的视觉残留。',
      '',
      '初步判断为克伦威尔极限以下的事件，但频率正在增加。目前已三次观测到未知来源的文字在实体表面短暂浮现。',
      '',
      '建议: 提高观测站级别至 ALPHA-3。',
    ],
  },
  {
    id: 'RPT-7742',
    title: '异常端点通讯记录分析',
    date: '2024/04/28',
    author: '林██',
    clearance: 3,
    content: [
      '回声分析中心对 α-7 测试中发现的外部通信端点进行了为期四周的监控。以下是关键发现：',
      '',
      '1. 端点返回了结构化响应。数据格式与 BCMA 内部协议标准不兼容，但包含可识别的报头信息。',
      '2. 响应延迟与距离呈非线性关系，排除常规网络延迟解释。',
      '3. 响应数据包中包含无法解码的二进制片段。经分析，该片段为完整文件的碎片。',
      '',
      '初步结论: 该通信端点可能处于与 BCMA 网络不同的物理/拓扑空间。此结论与镜像界面稳定器（BM-7762）实验数据高度吻合。',
      '',
      '建议: 将端点监测级别提升至 ALPHA-4，并与镜像界面研究组合并数据。',
    ],
  },
  {
    id: 'LOG-0317',
    title: '后勤部物资调拨记录',
    date: '2024/03 — 2024/05',
    author: '王██',
    clearance: 0,
    content: [
      '此档案为原始记录。',
      '已检测到多处数据异常 — 包括未经授权的修改痕迹和强制删除的记录条目。',
      '',
      '特别标记:',
      '• 序列 010 (3/28) — 整条记录被覆盖，恢复失败',
      '• 序列 004 — 调拨来源被涂黑，违反操作流程',
      '• 第7号观测站物资申请频率异常（同期400%）',
      '',
      '完整记录请查阅: HQ-LOG-2024-0317',
    ],
  },
  {
    id: 'MSG-0029',
    title: '内部通讯 — 镜像界面测试结果',
    date: '2024/05/02',
    author: '系统自动记录',
    clearance: 2,
    content: [
      '主题: 镜像界面稳定器初步测试结果',
      '',
      '发件: 研发部',
      '收件: 中央枢纽 · 所有部门',
      '',
      '测试结论: 镜像界面稳定器（实验型号 BM-7762）在中央枢纽完成首次激活。',
      '激活期间，枢纽主控室操作终端上短暂显示了来源不明的外部数据流。',
      '',
      '经初步分析，数据流包含的信息结构超出了当前 BCMA 已知的任何协议标准。研发部正在进行逆向解析。',
      '',
      '此事已被标记为最高安全优先级。所有相关人员请等待进一步指示。',
    ],
  },
  {
    id: 'CN-711',
    title: '████████████████',
    date: '—',
    author: '—',
    clearance: 0,
    content: [
      'aHR0cHM6Ly93d3cuYmlsaWJpbGkuY29tL3ZpZGVvL0JWMTAwMDAwMDAwMDAw',
    ],
  },
]

function Archives() {
  const { user } = useAuth()
  const level = user ? user.level : 1
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div className="arch">
      <div className="arch-header">
        <h2 className="arch-title">档案查询</h2>
        <div className="arch-search">
          <input className="arch-search-input" placeholder="输入档案编号..." disabled />
        </div>
      </div>

      <div className="arch-list">
        {reports.map(r => {
          const isOpen = expanded === r.id
          const isLocked = r.clearance > level

          return (
            <div key={r.id} className={`arch-item ${isOpen ? 'open' : ''} ${isLocked ? 'locked' : ''}`}>
              <div className="arch-item-header" onClick={() => setExpanded(isOpen ? null : r.id)}>
                <span className="arch-item-id">{r.id}</span>
                <span className="arch-item-title">
                  {isLocked ? '████████████' : r.title}
                  {isLocked && <span className="arch-item-lock"> CL-{r.clearance}</span>}
                </span>
                <span className="arch-item-meta">{isLocked ? '—' : `${r.date} · ${r.author}`}</span>
                <span className="arch-item-clearance">CL-{r.clearance}</span>
              </div>

              {isOpen && (
                <div className="arch-item-body">
                  {isLocked ? (
                    <p className="arch-item-line" style={{ color: '#f0883e' }}>
                      需要 {r.clearance} 级安全许可。当前许可等级: {level}。
                    </p>
                  ) : (
                    r.content.map((line, i) => (
                      <p key={i} className="arch-item-line">{line || '\u00A0'}</p>
                    ))
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Archives
