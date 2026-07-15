import './Ledger.css'

function Ledger() {
  return (
    <div className="ledger-container">
      <div className="ledger-page">
        <header className="ledger-header">
          <div className="classification">内部文件 — 限制分发</div>
          <div className="org-name">BCMA · 后勤部物资调拨与消耗登记</div>
          <div className="doc-meta">
            <span>登记编号: HQ-LOG-2024-0317</span>
            <span>登记周期: 2075年3月 — 2075年5月</span>
            <span>登记员: 王██</span>
            <span>核签: 陈██</span>
          </div>
        </header>

        <table className="ledger-table">
          <thead>
            <tr>
              <th>序号</th>
              <th>日期</th>
              <th>物资编号</th>
              <th>物资名称</th>
              <th>数量</th>
              <th>单位</th>
              <th>调拨来源</th>
              <th>调拨去向</th>
              <th>备注</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>2024/03/01</td>
              <td>BM-7742</td>
              <td>锚定定位器维护套件</td>
              <td>3</td>
              <td>套</td>
              <td>中央仓库</td>
              <td>第7号观测站</td>
              <td></td>
            </tr>
            <tr className="annotated">
              <td>002</td>
              <td>2024/03/03</td>
              <td>BM-2291</td>
              <td>共鸣抑制器冷却液 (Ⅲ型)</td>
              <td>12</td>
              <td>桶</td>
              <td>外部采购</td>
              <td>第3号缓冲站</td>
              <td></td>
            </tr>
            <tr>
              <td>003</td>
              <td>2024/03/05</td>
              <td>BM-5503</td>
              <td>高敏监听天线阵列组件</td>
              <td>1</td>
              <td>套</td>
              <td>中央仓库</td>
              <td>回声分析中心</td>
              <td></td>
            </tr>
            <tr className="redacted">
              <td>004</td>
              <td>2024/03/08</td>
              <td>BM-8814</td>
              <td>跨维通讯中继器校准模块</td>
              <td>2</td>
              <td>件</td>
              <td><span className="black-bar" /></td>
              <td>中央枢纽</td>
              <td className="annotation">← 来源被涂黑</td>
            </tr>
            <tr>
              <td>005</td>
              <td>2024/03/12</td>
              <td>BM-1024</td>
              <td>标准办公耗材包 (A类)</td>
              <td>50</td>
              <td>箱</td>
              <td>外部采购</td>
              <td>各科室</td>
              <td></td>
            </tr>
            <tr>
              <td>006</td>
              <td>2024/03/15</td>
              <td>BM-9907</td>
              <td>阈限区样本采集容器</td>
              <td>8</td>
              <td>个</td>
              <td>订制生产</td>
              <td>第13号采集站</td>
              <td></td>
            </tr>
            <tr className="annotated">
              <td>007</td>
              <td>2024/03/18</td>
              <td>BM-4459</td>
              <td>异常信号屏蔽涂料</td>
              <td>40</td>
              <td>升</td>
              <td>外部采购</td>
              <td>第7号观测站</td>
              <td className="annotation">← 紧急调配</td>
            </tr>
            <tr className="annotated">
              <td>008</td>
              <td>2024/03/20</td>
              <td>BM-7762</td>
              <td>镜像界面稳定器 (实验型号)</td>
              <td>1</td>
              <td>台</td>
              <td>研发部</td>
              <td>中央枢纽</td>
            </tr>
            <tr>
              <td>009</td>
              <td>2024/03/25</td>
              <td>BM-3381</td>
              <td>常规医疗补给</td>
              <td>20</td>
              <td>箱</td>
              <td>外部采购</td>
              <td>各观测站</td>
              <td></td>
            </tr>
            <tr className="redacted-heavy">
              <td>010</td>
              <td>2024/03/28</td>
              <td className="full-black" colSpan={2} />
              <td className="full-black" colSpan={2} />
              <td className="full-black" />
              <td className="full-black" />
              <td className="full-black" />
              <td className="annotation">← 全部涂黑。3/28 发生了什么？</td>
            </tr>
            <tr>
              <td>011</td>
              <td>2024/04/02</td>
              <td>BM-0912</td>
              <td>B类标准燃料</td>
              <td>200</td>
              <td>升</td>
              <td>中央仓库</td>
              <td>第7号观测站</td>
              <td></td>
            </tr>
            <tr>
              <td>012</td>
              <td>2024/04/05</td>
              <td>BM-4871</td>
              <td>跨维信号解析专用处理器</td>
              <td>4</td>
              <td>台</td>
              <td>研发部</td>
              <td>回声分析中心</td>
              <td></td>
            </tr>
            <tr className="annotated">
              <td>013</td>
              <td>2024/04/09</td>
              <td>BM-7742</td>
              <td>锚定定位器维护套件 (补充)</td>
              <td>2</td>
              <td>套</td>
              <td>中央仓库</td>
              <td>第7号观测站</td>
              <td className="annotation">← 又是7号站</td>
            </tr>
            <tr>
              <td>014</td>
              <td>2024/04/12</td>
              <td>BM-1998</td>
              <td>电磁防护服 (Ⅳ级)</td>
              <td>6</td>
              <td>套</td>
              <td>中央仓库</td>
              <td>第13号采集站</td>
              <td></td>
            </tr>
            <tr className="annotated">
              <td>015</td>
              <td>2024/04/15</td>
              <td>BM-5501</td>
              <td>████████████</td>
              <td>██</td>
              <td>██</td>
              <td>████████</td>
              <td>██████████</td>
              <td className="annotation">← 不可辨识</td>
            </tr>
            <tr>
              <td>016</td>
              <td>2024/04/18</td>
              <td>BM-2017</td>
              <td>信号放大器备件</td>
              <td>10</td>
              <td>件</td>
              <td>中央仓库</td>
              <td>中央枢纽</td>
              <td></td>
            </tr>
            <tr>
              <td>017</td>
              <td>2024/04/22</td>
              <td>BM-7742</td>
              <td>锚定定位器维护套件</td>
              <td>4</td>
              <td>套</td>
              <td>中央仓库</td>
              <td>第7号观测站</td>
              <td></td>
            </tr>
            <tr className="annotated">
              <td>018</td>
              <td>2024/04/27</td>
              <td>BM-9903</td>
              <td>异常能量场检测仪</td>
              <td>2</td>
              <td>台</td>
              <td>订制生产</td>
              <td>第7号观测站</td>
              <td className="annotation">← 7号站装备激增</td>
            </tr>
            <tr>
              <td>019</td>
              <td>2024/05/01</td>
              <td>BM-4208</td>
              <td>共鸣场发生器</td>
              <td>1</td>
              <td>台</td>
              <td>研发部</td>
              <td>中央枢纽</td>
              <td></td>
            </tr>
            <tr className="annotated">
              <td>020</td>
              <td>2024/05/05</td>
              <td>BM-7742</td>
              <td>锚定定位器维护套件</td>
              <td>3</td>
              <td>套</td>
              <td>紧急调配</td>
              <td>第7号观测站</td>
              <td className="annotation">← 五月还在领</td>
            </tr>
          </tbody>
        </table>

        <div className="ledger-footer">
          <div className="footer-note">本文件含有机密信息，未经授权禁止复制或传播。</div>
          <div className="footer-stamp">HQ-LOG-2024-0317 · 页 1/1</div>
        </div>

        <div className="hidden-text">
          如需核查原始数据，访问内部系统: /console
        </div>
      </div>
    </div>
  )
}

export default Ledger
