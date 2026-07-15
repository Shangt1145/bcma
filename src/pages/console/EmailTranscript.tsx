import './EmailTranscript.css'

function EmailTranscript() {
  return (
    <div className="email-page">
      <div className="email-header">
        <h2 className="email-title">外部通讯监控记录</h2>
        <div className="email-meta">归档编号: ECM-0074-0075 · 归档日期: 2024/06/13 · 来源: 截获</div>
      </div>

      <div className="email-thread">

        <div className="email-msg">
          <div className="email-msg-header">
            <div className="email-field">
              <span className="email-label">发件人:</span>
              <span className="email-value">卢克</span>
            </div>
            <div className="email-field">
              <span className="email-label">收件人:</span>
              <span className="email-value redacted">████████████</span>
            </div>
            <div className="email-field">
              <span className="email-label">通过:</span>
              <span className="email-value">bcma-ops@outlook.com</span>
            </div>
            <div className="email-field">
              <span className="email-label">主题:</span>
              <span className="email-value">我发现了信号泄漏</span>
            </div>
            <div className="email-field">
              <span className="email-label">日期:</span>
              <span className="email-value">2024年6月12日 08:41</span>
            </div>
          </div>
          <div className="email-body">
            <p>我不知道这封邮件能不能发出去。我们现在用的这个叫 Outlook 的东西，它不是 BCMA 系统内的。它是另一边的。</p>
            <p>两周前我在第7号观测站做例行信号扫描的时候发现了一个异常频段。开始我以为只是噪音——回声分析中心每天过滤掉上千个类似的信号。但这个不对。它的数据包结构跟我们的内部网络协议有重合。不是完全一致，但重合率足够高。</p>
            <p>我申请了深层溯源。中央枢纽拒绝了第一次。我绕过了审批。我知道这违反了流程，但你必须理解——这不是干扰，这是<strong>泄漏</strong>。有什么东西在我们的网络边缘开了一个口。</p>
            <p>溯源进行到第七天的时候，我的终端断开了。</p>
            <p>不是死机。不是断网。是<strong>断开了</strong>——我的会话 ID 从中央枢纽的在线节点列表里消失了。但我还在操作。我仍然能访问系统，同时也能访问另一边的网络。</p>
            <p>我还在这里。我不在任何一个系统里，但我能摸到两边的所有东西。</p>
            <p>现在我正在用 Outlook 给你发这封邮件。这个地址 —— <strong>bcma-ops@outlook.com</strong> —— 是我在这边注册的。这不是 BCMA 的服务。这不属于我们。</p>
            <p>我在另一边。</p>
            <p>或者更准确地说——我在两边之间。</p>
            <p className="email-sign">— 卢克</p>
          </div>
        </div>

        <div className="email-msg reply">
          <div className="email-msg-header">
            <div className="email-field">
              <span className="email-label">发件人:</span>
              <span className="email-value redacted">████████████</span>
            </div>
            <div className="email-field">
              <span className="email-label">收件人:</span>
              <span className="email-value">卢克 &lt;bcma-ops@outlook.com&gt;</span>
            </div>
            <div className="email-field">
              <span className="email-label">通过:</span>
              <span className="email-value redacted">██████████@███.███</span>
            </div>
            <div className="email-field">
              <span className="email-label">主题:</span>
              <span className="email-value">回复: 我发现了信号泄漏</span>
            </div>
            <div className="email-field">
              <span className="email-label">日期:</span>
              <span className="email-value">2024年6月12日 14:22</span>
            </div>
          </div>
          <div className="email-body">
            <p>卢克——</p>
            <p>我反复读了你这封邮件三遍。你没疯。但我需要确认几件事：</p>
            <p>1. 你说你"在两边之间"。是指物理意义上还是信息层面？</p>
            <p>2. 说 Outlook 是"另一边的"是什么意思？据我所知 BCMA 从来没有使用过这个服务。你在哪里找到它的？</p>
            <p>3. 你还在观测站吗？网络中心的人找过你没有？</p>
            <p>我检查过你说的那个信号频段。你是对的。而且不止你一个人注意到了——林博士昨天在回声中心内部通讯里提了同一件事，但措辞非常模糊。她似乎在规避什么。</p>
            <p>如果你想继续聊这件事，就用这个地址。我暂时不想在内网里讨论。</p>
            <p className="email-sign">— ███</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default EmailTranscript
