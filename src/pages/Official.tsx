import './Official.css'

interface Section {
  id: string
  title: string
  content: string[]
}

const sections: { category: string; items: Section[] }[] = [
  {
    category: '组织文件',
    items: [
      {
        id: 'mission',
        title: '使命与授权',
        content: [
          '依据第 ██-██ 号授权令，BCMA 是受命负责对异常现象进行识别、',
          '监测、分析和管理的最高级别机构。',
          '',
          'BCMA 的核心使命包括：',
          '',
          '一、建立并维护覆盖全域的观测站网络，确保对异常信号的实时监控。',
          '二、开发并部署模因防护设备，以防止异常信息在物理空间中的非受控传播。',
          '三、对所有未识别的外部通信端点进行溯源、评估与必要时的隔离。',
          '四、执行克伦威尔协议各条款所规定的响应程序。',
          '',
          'BCMA 的运作受最高安全保密条例约束。所有内部文件的发布、',
          '存档和销毁均需经过三级以上审批。',
        ],
      },
      {
        id: 'structure',
        title: '组织架构',
        content: [
          'BCMA 的指挥链自中央枢纽向下延伸至各专业部门。',
          '',
          '中央枢纽 (Central Hub)',
          '    最高决策与指挥机关，负责全局协调与战略决策。',
          '',
          '回声分析中心 (Echo Analysis Center)',
          '    负责异常信号的监测、分析与归类。',
          '    所有观测站数据均汇总至此处。',
          '',
          '通信技术部 (Communications Technology Dept.)',
          '    负责内部网络维护、加密通讯协议、外部端点安全评估。',
          '',
          '研发部 (Research & Development Dept.)',
          '    负责异常技术研究、模因设备开发与维护。',
          '',
          '后勤部 (Logistics Dept.)',
          '    负责物资采购、调拨、观测站日常运营保障。',
          '',
          '所有部门均向中央枢纽报告。部门间横向通讯须经部门负责人审批。',
        ],
      },
    ],
  },
  {
    category: '操作协议',
    items: [
      {
        id: 'cromwell',
        title: '克伦威尔协议 (Cromwell Protocol)',
        content: [
          '克伦威尔协议是 BCMA 应对高等级异常事件的标准操作程序。',
          '协议由 ██ 条执行条款构成，涵盖检测、响应、隔离与后续分析四个阶段。',
          '',
          '部分条款摘要：',
          '',
          '· 条款一 — 确认异常事件后，受影响区域立即进入 ALPHA 监控状态。',
          '· 条款四 — 外部信号渗透检测触发时，观测站级别自动提升至 ALPHA-2。',
          '· 条款七 — 如检测到数据泄漏，启动跨部门联合溯源。',
          '· 条款九 — 无法确认来源的异常数据应采用非对称加密混淆后归档。',
          '',
          '完整的协议文本存储于中央枢纽安全数据库。',
          '权限要求：Level 3+。',
        ],
      },
      {
        id: 'comm-proto',
        title: '通讯安全规范',
        content: [
          '所有 BCMA 内部通讯必须经过指定加密通道。未经授权的通讯方式',
          '（包括但不限于未注册的外部邮件服务）严格禁止。',
          '',
          '内部通讯标识格式: [部门]-[编号]-[日期]',
          '示例: EAC-7742-20240317',
          '',
          '外部通讯监控: 对经由非标准通道发出的通讯实施自动拦截与归档。',
          '拦截记录编号格式: ECM-[起始]-[结束]',
          '',
          '违规使用外部通讯渠道将触发安全审查。',
        ],
      },
    ],
  },
  {
    category: '技术参考',
    items: [
      {
        id: 'stations',
        title: '观测站网络',
        content: [
          'BCMA 目前运营 14 个观测站，编号 #1 至 #14。',
          '',
          '各观测站按优先级分列：',
          '  MONITOR — 常规监控状态 (站 #1-6, #8-12)',
          '  ALPHA   — 加强监控状态 (站 #7)',
          '  ALPHA-3 — 持续加强监控 (站 #7, 当前级别)',
          '',
          '第7号观测站因其覆盖区域内异常事件密度显著高于其他站点，',
          '于 ████ 年 ██ 月获准升级为 ALPHA-3 级别。该站点配备全套',
          '模因监测设备（型号 #4, #7, #12），并由中央枢纽直接监管。',
          '',
          '第13号采集站主要负责阈限区样本采集任务。',
          '该站点位于 BCMA 监测范围的最边缘地带。',
        ],
      },
      {
        id: 'memetics',
        title: '模因设备技术规范',
        content: [
          '模因设备是 BCMA 研发部针对异常信息污染所开发的专业防护装备。',
          '',
          '设备编号体系: 研发部为每一台设备分配唯一的型号编号。',
          '编号格式: 型号 #[数字]',
          '',
          '主要型号：',
          '  · #4  — 长期环境监控单元',
          '  · #7  — 高频信号过滤装置',
          '  · #12 — 多频段信息阻断器',
          '',
          '维护周期: 每72小时自动巡检。设备离线超过96小时将触发安全警报。',
          '',
          '2024年 ██ 月，#7 和 #12 同时报告级联故障。',
          '故障原因尚未定论。相关调查正在进行中。',
        ],
      },
      {
        id: 'external',
        title: '外部端点管理',
        content: [
          'BCMA 通信技术部负责对所有外部通信端点进行监控与评估。',
          '',
          '端点分类：',
          '  · 已知端点 — 经过认证的内部或合作方通讯节点',
          '  · 未识别端点 — 来源未知、不符合任何已有协议的通信节点',
          '  · 测试端点 — 为研究目的主动部署的外部节点',
          '',
          'α-7 测试端点 (AT-0077) 属于第三类。该端点由通信技术部部署，',
          '用于研究未识别网络的响应特性。测试文件 ECH0-T3ST-077 已上传。',
          '',
          '测试端点访问记录已归档至资产管理数据库。',
        ],
      },
    ],
  },
  {
    category: '附录',
    items: [
      {
        id: 'contacts',
        title: '部门联络信息',
        content: [
          '以下信息仅供内部参考。详情请咨询各部门负责人员。',
          '',
          '中央枢纽 — 陈██ (CL-3)',
          '回声分析中心 — 林██ (CL-3)',
          '通信技术部 — 王██ (CL-2)',
          '后勤部 — ██ ██ (CL-1)',
          '',
          '外部通讯监控负责人: 卢克 (CL-2, 状态待确认)',
        ],
      },
    ],
  },
]

function Official() {
  return (
    <div className="official">
      <header className="official-header">
        <div className="official-seal">BCMA</div>
        <div className="official-header-title">
          <h1 className="official-title">BNA Control Management Authority</h1>
          <p className="official-subtitle">内部知识库 · INTERNAL KNOWLEDGE BASE · 授权访问</p>
        </div>
        <div className="official-stamp">RESTRICTED</div>
      </header>

      <div className="official-body">
        <nav className="official-nav">
          <div className="official-nav-title">文档目录</div>
          {sections.map(sec => (
            <div key={sec.category} className="official-nav-group">
              <div className="official-nav-cat">{sec.category}</div>
              {sec.items.map(item => (
                <a key={item.id} href={`#${item.id}`} className="official-nav-link">
                  {item.title}
                </a>
              ))}
            </div>
          ))}
        </nav>

        <main className="official-main">
          {sections.map(sec => (
            <div key={sec.category}>
              <div className="official-section-header">{sec.category}</div>
              {sec.items.map(item => (
                <section key={item.id} id={item.id} className="official-article">
                  <h2 className="official-article-title">{item.title}</h2>
                  {item.content.map((line, i) => (
                    <p key={i} className="official-line">{line || '\u00A0'}</p>
                  ))}
                </section>
              ))}
            </div>
          ))}
        </main>
      </div>

      <footer className="official-footer">
        BCMA · ALL RIGHTS RESERVED · UNAUTHORIZED ACCESS PROHIBITED
      </footer>
    </div>
  )
}

export default Official
