import { useState, type KeyboardEvent } from 'react'
import './Terminal.css'

function Terminal() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState<string[]>([
    'BCMA Integrated Management System v3.7.1',
    'Connection established: CENTRAL-HUB-01',
    'Session ID: SESS-7742-0317',
    '',
    'Available modules:',
    '  [1] 系统状态   [2] 档案查询   [3] 研究日志',
    '  [4] 通讯记录   [5] 人员目录   [6] 资产管理',
    '',
    '输入模块编号或命令。输入 "help" 查看可用命令。',
    '',
  ])

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    setOutput(prev => [...prev, `> ${cmd}`])

    switch (trimmed) {
      case 'help':
        setOutput(prev => [...prev, '', '可用命令:', '  help     - 显示此帮助信息', '  1        - 系统状态', '  2        - 档案查询', '  3        - 研究日志', '  4        - 通讯记录', '  clear    - 清屏', ''])
        break
      case '1':
        setOutput(prev => [...prev, '', '═══════════════════════════════════════', '  系统状态', '═══════════════════════════════════════', '', '核心枢纽:    在线', '观测站网络:  在线 (12/14)', '回声分析中心: 在线', '外部通讯:    受限', '', '系统运行时间: 2174天14小时', '最后维护:    2024/05/15 03:42', ''])
        break
      case '2':
        setOutput(prev => [...prev, '', '═══════════════════════════════════════', '  档案查询', '═══════════════════════════════════════', '', '输入档案编号查询。', '已知档案: RPT-3187, RPT-4502, LOG-0317', '', '提示: 部分档案需要授权码。', ''])
        break
      case 'rpt-3187':
        setOutput(prev => [...prev, '', '档案 RPT-3187 [已解密]', '──────────────────────────────────', '标题: 内部网络泄露初步评估', '日期: 2024/03/17', '作者: 林██', '', '摘要: 回声分析中心在例行信号扫描中，', '在第7号观测站覆盖范围内检测到异常信号模式。', '经分析，信号携带结构化数据，数据格式与', 'BCMA内部网络结构有显著重合。', '', '这意味着我们的内部网络正在向外泄露。', '泄露途径未知，速率正在增加。', '', '附件: [需要授权码]', ''])
        break
      case 'rpt-4502':
        setOutput(prev => [...prev, '', '档案 RPT-4502 [已解密]', '──────────────────────────────────', '标题: 第7号观测站异常活动报告', '日期: 2024/04/15', '作者: 陈██', '', '摘要: 第7号观测站附近建筑结构在过去两周内', '出现不明原因的物理变化。墙体表面呈现出未知', '来源的页面内容残留。', '', '初步判断为克伦威尔极限以下的事件，', '但频率正在增加。', '', '建议: 提高观测站级别至 ALPHA-3。', ''])
        break
      case '3':
        setOutput(prev => [...prev, '', '═══════════════════════════════════════', '  研究日志', '═══════════════════════════════════════', '', '[2024/03/20] 通信异常检测 α-7', '回声分析中心在日常扫描中检测到一个', '未识别的外部通信端点。初步分析显示', '该端点具备数据存储与传输功能。', '端点来源未知，正在溯源分析。', '', '已向该端点部署测试文件以评估其响应。', '测试签名: ECH0-T3ST-077', '', '─── 以下为系统自动记录 ───', '端点位置: aHR0cHM6Ly9wYW4ucXVhcmsuY24vcy9hMGRkMGMyNzI2N2Q=', '部署密钥: 需查阅内部资产管理系统', '状态: 等待响应', '─── 记录结束 ───', '', '⚠ 注意: 测试文件包含主动频谱信号。', '仅限授权人员访问此日志。', ''])
        break
      case '4':
        setOutput(prev => [...prev, '', '═══════════════════════════════════════', '  通讯记录', '═══════════════════════════════════════', '', '[访问受限]', '此模块需要 2级或以上安全许可。', '', '请联络系统管理员获取访问权限。', ''])
        break
      case 'clear':
        setOutput([])
        break
      default:
        setOutput(prev => [...prev, `未知命令: ${trimmed}`, '输入 "help" 查看可用命令。', ''])
    }
    setInput('')
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input)
    }
  }

  return (
    <div className="console-container">
      <div className="console-screen">
        <div className="console-output">
          {output.map((line, i) => (
            <div key={i} className="console-line">
              {line || '\u00A0'}
            </div>
          ))}
        </div>
        <div className="console-input-line">
          <span className="console-prompt">{'>'}</span>
          <input
            className="console-input"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            spellCheck={false}
          />
          <span className="console-cursor" />
        </div>
      </div>
    </div>
  )
}

export default Terminal
