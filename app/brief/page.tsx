import { Brand } from "../brand";
const highlights=[
 {tag:"核心观点",title:"存储与内存链领涨修复，但仍需业绩确认",text:"SK Hynix、Micron、SanDisk 与 DRAM 相关资产在高成交中反弹。行情由防守转向修复，下一阶段要看营收、指引和订单能否继续验证。"},
 {tag:"资金流",title:"AI 硬件资金重新集中到稀缺环节",text:"市场更偏好拥有真实订单、资本开支与供应瓶颈的资产。单日反弹并不等于趋势重置，持续放量和现金市场确认更重要。"},
 {tag:"宏观",title:"油价回落，暂时缓解科技股估值压力",text:"原油与布伦特回落有利于降低通胀和利率担忧，但仍需观察能源价格能否保持温和，以及风险偏好是否扩散。"}
];
const archive=[
 ["2026-07-10","AI 硬件从防守转向修复","存储与内存链在高成交中反弹，油价降温缓解科技估值压力。"],
 ["2026-07-09","AI 半导体收窄到龙头","NVDA 保持强势，TSMC 在关键位下方整理，内存交易继续去拥挤。"],
 ["2026-07-08","AI 半导体进入验证交易","存储资产选择性修复，市场尚未形成全面风险偏好。"],
 ["2026-07-07","TSMC 测试关键位，存储永续去风险","现金市场乐观情绪与存储相关永续合约卖压形成分歧。"],
 ["2026-07-06","TSM 再次测试突破，MU 防守关键区间","AI 硬件仍处于防守验证阶段，HYPE 引领加密市场 Beta。"],
 ["2026-07-03","硬件链继续洗盘，加密 Beta 回升","内存和存储链承压，META 商业化预期与 HYPE 推动资金轮动。"],
 ["2026-07-02","AI 交易从硬件建设转向算力变现","META 的算力云计划走强，硬件供应链进入压力测试。"],
 ["2026-07-01","半导体获得第二次确认","TSM、AMD 与设备股确认资本开支广度，MU 消化涨幅。"],
 ["2026-06-29","AI 内存趋势仍在，MU 等待二次确认","MU 保持高流量，台湾市场 TSM 反弹，宏观数据限制估值扩张。"],
 ["2026-06-01","AI 硬件维持强势","台湾现金市场确认 TSM，HYPE 支撑风险偏好。"],
 ["2026-05-30","半导体高位轮动","MU 受益于 HBM 主题，TSM 与 NVDA 降温，HYPE 维持强势。"],
 ["2026-05-29","AI 半导体进入高位分化","TSM 与 NVDA 上涨，MU 高位换手。"],
 ["2026-05-28","资金转向确定性","TSM 与 MU 领涨，NVDA 短线降温。"]
];
export default function Brief(){return <main><header><a className="brand" href="/"><Brand/></a><nav><a href="/">首页</a><a href="/brief">市场简报</a></nav><a href="/">← 返回首页</a></header><section className="section"><p className="eyebrow">DAILY MARKET BRIEF · 10 JUL 2026</p><h1 style={{fontSize:"56px",maxWidth:"900px",letterSpacing:"-2px"}}>AI 硬件重回修复，<br/>内存链与油价成为主线。</h1><p className="lead">资本重新流向有订单、产能与数据支撑的 AI 瓶颈资产；油价回落为科技估值提供喘息空间。</p><img className="briefHero" src="/briefs/ai-hardware-recovery.png" alt="AI 半导体、内存芯片与市场走势主题图"/><div className="cards">{highlights.map(x=><article key={x.title}><p className="eyebrow">{x.tag}</p><h2 style={{fontSize:"23px"}}>{x.title}</h2><p style={{lineHeight:1.8,color:"#a0a8b2"}}>{x.text}</p></article>)}</div><article style={{marginTop:"36px",padding:"32px",border:"1px solid #544510",borderRadius:"10px",background:"linear-gradient(120deg,#201c0b,#11151a)"}}><p className="eyebrow">TRADER WATCHLIST</p><h2>今天重点观察</h2><div className="steps">{["TSMC 后续营收与关键价位能否确认突破","MU、SNDK 与 DRAM 能否出现第二日放量","原油能否维持弱势，继续缓解估值压力"].map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></article><section style={{marginTop:"72px"}}><p className="eyebrow">BRIEF ARCHIVE</p><h2>历史市场简报</h2><div className="briefArchive">{archive.map((x,i)=><article key={x[0]}><div className="briefThumb" style={{backgroundPosition:`${20+(i%4)*20}% ${30+(i%3)*20}%`}}><time>{x[0]}</time></div><div><h3>{x[1]}</h3><p>{x[2]}</p></div><span>{i===0?"最新":"归档"}</span></article>)}</div></section></section><footer><a className="brand" href="/"><Brand/></a><p>基于公开市场资料重新整理，仅供信息参考，不构成投资建议。</p><span>每日更新</span></footer></main>}
