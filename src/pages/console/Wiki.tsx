import { useState } from 'react'
import './Wiki.css'

interface Article {
  id: string
  title: string
  category: string
  content: string[]
}

const articles: Article[] = [
  {
    id: 'overview',
    title: '组织概述',
    category: '概览',
    content: [
      'BCMA（BNA 控制管理局）是一个专门负责监测、控制和管理的官方机构，',
      '其核心职责是对异常现象进行系统化的观测与响应。',
      '',
      '组织架构分为以下几个核心部门：',
      '',
      '· 中央枢纽 — 最高指挥与决策中心',
      '· 回声分析中心 — 信号监测与分析',
      '· 通信技术部 — 内部网络与通讯',
      '· 研发部 — 异常技术研究与设备开发',
      '· 后勤部 — 物资调配与观测站维护',
      '',
      'BCMA 运营着遍布各战略位置的观测站网络，其中第7号观测站具有特殊优先级。',
    ],
  },
  {
    id: 'protocol',
    title: '克伦威尔协议',
    category: '协议',
    content: [
      '克伦威尔协议是 BCMA 在面对超出常规框架的异常事件时所遵循的最高指导原则。',
      '协议全文包含 12 条执行条款，其中多条条款与信号泄漏和信息安全相关。',
      '',
      '已知条款摘要：',
      '',
      '条款4 — 检测到外部信号渗透时，立即提升受影响区域观测级别。',
      '条款7 — 当确认信息壁垒出现漏洞，启动跨部门联合响应。',
      '条款9 — 在无法确认异常来源的情况下，优先进行数据隔离。',
      '',
      '条款9备注: 非对称加密混淆处理可能触发逆向排查；如获得动态提取码，',
      '可重置访问周期。此前缀为字母串的短码，已在 BM-8814 调拨链中记录。',
      '',
      '注意: 部分条款内容需要 3级 以上许可方可查阅全文。',
    ],
  },
  {
    id: 'station7',
    title: '第7号观测站',
    category: '观测站',
    content: [
      '第7号观测站是 BCMA 观测网络中优先级最高的站点。该站点覆盖的监测区域内',
      '异常事件密度远超其他站点。',
      '',
      '近期报告（2024年3月至5月）：',
      '· 物资申请频率为同期其他站点的 4倍以上',
      '· 墙体表面出现未知来源的内容残留',
      '· 与中央枢纽的通讯出现过 3分钟完全中断',
      '· 锚定定位器维护套件的消耗率无法用标准模型解释',
      '',
      '当前状态: ALPHA-3 监控级别。',
      '负责人: 陈██。',
    ],
  },
  {
    id: 'echo',
    title: 'Echo 异常信号',
    category: '异常现象',
    content: [
      'Echo 是 BCMA 回声分析中心于 2024年3月首次检测到的异常信号。',
      '该信号的原始编码未知，未经任何系统处理即出现在监测网络中。',
      '',
      '特征：',
      '· 信号源无法通过标准溯源流程定位',
      '· 信号频率未见 BCMA 历史记录中匹配',
      '· 携带结构化数据但不符合已知通讯协议',
      '',
      '回声分析中心初步判断该信号不是来自 BCMA 现有的任何观测站。',
      '来源仍然不明。',
      '',
      '相关研究：RPT-3187（内部网络泄露评估），RPT-4502（第7号观测站异常活动）。',
    ],
  },
  {
    id: 'meme',
    title: '模因设备',
    category: '技术',
    content: [
      '模因设备是 BCMA 研发部开发的特殊监测与防护装置。这些设备用于检测和',
      '防护异常信息在物理空间中的传播。',
      '',
      '已知设备列表：',
      '· 型号 #4 — 长期监控型，已下线',
      '· 型号 #7 — 部署于第7号观测站，多次报告故障',
      '· 型号 #12 — 部署位置未公开',
      '',
      '2024年6月记录显示，#7 和 #12 同时出现级联故障。',
      '故障原因正在调查。后续维护记录未提交。',
      '',
      '安全建议: 如发现设备离线，立即联络通信技术部。',
    ],
  },
  {
    id: 'alpha7',
    title: 'α-7 外部端点',
    category: '技术',
    content: [
      'α-7 是通信技术部于2024年3月发现的未识别外部通信端点。',
      '该端点不匹配任何已知的BCMA内部网络节点。',
      '',
      '测试记录:',
      '· 初次扫描 — 检测到结构化数据存储能力',
      '· 测试部署 — 已上传测试文件（ECH0-T3ST-077）',
      '· 响应监控 — 检测到外部访问行为',
      '· 访问来源 — 无法追踪',
      '',
      '端点位置需通过 AES-256 解密。解密端点已归档至终端研究日志。',
      '',
      '状态: 持续监控中。所有访问记录保留在资产管理 AT-0077。',
    ],
  },
  {
    id: 'glossary',
    title: '术语表',
    category: '参考',
    content: [
      '锚定定位器 — 用于维持观测站空间稳定的装置。',
      '共鸣抑制器 — 消除异常信号共振的设备。',
      '镜像界面 — 一种理论上的信息传输通道。',
      '阈限区 — 物理参数异常的空间区域。',
      '信号屏蔽涂料 — 隔绝外部信号渗透的涂层。',
      '',
      '克伦威尔极限 — 指异常事件严重程度的临界阈值。',
      '超出此极限的事件需要启动克伦威尔协议。',
    ],
  },
]

const categories = [...new Set(articles.map(a => a.category))]

function Wiki() {
  const [active, setActive] = useState<string>('overview')
  const current = articles.find(a => a.id === active)

  return (
    <div className="wiki">
      <aside className="wiki-sidebar">
        <div className="wiki-sidebar-title">BCMA 知识库</div>
        {categories.map(cat => (
          <div key={cat} className="wiki-category">
            <div className="wiki-category-title">{cat}</div>
            {articles.filter(a => a.category === cat).map(a => (
              <div
                key={a.id}
                className={`wiki-link ${active === a.id ? 'active' : ''}`}
                onClick={() => setActive(a.id)}
              >
                {a.title}
              </div>
            ))}
          </div>
        ))}
      </aside>

      <main className="wiki-main">
        {current && (
          <>
            <h1 className="wiki-article-title">{current.title}</h1>
            <div className="wiki-article-content">
              {current.content.map((line, i) => (
                <p key={i} className="wiki-line">{line || '\u00A0'}</p>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default Wiki
