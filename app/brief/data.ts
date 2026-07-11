export type BriefItem={date:string;title:string;summary:string;points:[string,string,string];risk:string};
export const briefs:BriefItem[]=[
 {date:"2026-07-10",title:"AI 硬件从防守转向修复",summary:"存储与内存链在高成交中反弹，油价降温缓解科技估值压力。",points:["SKHX、MU、SNDK 与 DRAM 出现高成交修复","AI 资金重新集中到订单与产能可见的瓶颈环节","原油回落，为科技股估值提供喘息空间"],risk:"单日反弹不代表趋势重置，仍需营收、指引与持续成交确认。"},
 {date:"2026-07-09",title:"AI 半导体收窄到龙头",summary:"NVDA 保持强势，TSMC 在关键位下方整理，内存交易继续去拥挤。",points:["NVDA 相对强势，资金更偏向确定性龙头","TSMC 在突破位下方消化筹码","内存链波动加大，拥挤度开始下降"],risk:"龙头强势不等于板块全面扩散，注意高估值资产的回撤风险。"},
 {date:"2026-07-08",title:"AI 半导体进入验证交易",summary:"存储资产选择性修复，市场尚未形成全面风险偏好。",points:["市场从预期交易转向数据和业绩验证","存储链出现选择性反弹而非全面上行","资金继续观察现金市场与永续合约是否共振"],risk:"缺少成交量配合的反弹持续性有限。"},
 {date:"2026-07-07",title:"TSMC 测试关键位，存储永续去风险",summary:"现金市场乐观情绪与存储相关永续合约卖压形成分歧。",points:["TSMC 再次靠近重要突破位置","现金股表现与永续合约资金流出现背离","MU、SKHX 与 DRAM 相关仓位主动降杠杆"],risk:"跨市场背离扩大时，应降低杠杆并等待方向确认。"},
 {date:"2026-07-06",title:"TSM 再次测试突破，MU 防守关键区间",summary:"AI 硬件仍处于防守验证阶段，HYPE 引领加密市场 Beta。",points:["TSM 重新测试前期压力区","MU 在关键区间寻找买盘支撑","HYPE 相对强势，带动加密市场风险偏好"],risk:"硬件链与加密 Beta 尚未完全同步，避免追逐短期波动。"},
 {date:"2026-07-03",title:"硬件链继续洗盘，加密 Beta 回升",summary:"内存和存储链承压，META 商业化预期与 HYPE 推动资金轮动。",points:["内存与存储链在高成交中继续去杠杆","META 的算力商业化叙事吸引资金","HYPE 推动加密市场风险偏好回升"],risk:"资金轮动速度快，强势资产也可能出现剧烈回吐。"},
 {date:"2026-07-02",title:"AI 交易从硬件建设转向算力变现",summary:"META 的算力云计划走强，硬件供应链进入压力测试。",points:["资金从资本开支叙事转向收入兑现","META 算力云计划强化商业化预期","TSM、MU 与设备股面临估值压力测试"],risk:"商业化预期需要订单和利润率验证。"},
 {date:"2026-07-01",title:"半导体获得第二次确认",summary:"TSM、AMD 与设备股确认资本开支广度，MU 消化涨幅。",points:["TSM 与 AMD 延续强势确认","设备股同步走强，资本开支广度改善","MU 高位整理，等待下一轮催化"],risk:"板块确认后仍要观察成交是否持续，防止假突破。"},
 {date:"2026-06-29",title:"AI 内存趋势仍在，MU 等待二次确认",summary:"MU 保持高流量，台湾市场 TSM 反弹，宏观数据限制估值扩张。",points:["MU 仍是内存链主要资金焦点","台湾现金市场推动 TSM 修复","通胀数据限制科技股估值扩张"],risk:"宏观利率重新上行可能压制高估值半导体。"},
 {date:"2026-06-01",title:"AI 硬件维持强势",summary:"台湾现金市场确认 TSM，HYPE 支撑风险偏好。",points:["台湾现金市场确认 TSM 买盘","AI 硬件主线保持相对强势","HYPE 为加密风险偏好提供支撑"],risk:"高位趋势中应关注量价背离与拥挤度。"},
 {date:"2026-05-30",title:"半导体高位轮动",summary:"MU 受益于 HBM 主题，TSM 与 NVDA 降温，HYPE 维持强势。",points:["MU 继续受益于 HBM 需求叙事","TSM 与 NVDA 高位降温","HYPE 在加密资产中保持相对强势"],risk:"高位轮动不等于风险消失，注意龙头补跌。"},
 {date:"2026-05-29",title:"AI 半导体进入高位分化",summary:"TSM 与 NVDA 上涨，MU 高位换手。",points:["TSM 延续现金市场强势","NVDA 保持 AI 核心资产地位","MU 高位成交放大、筹码换手"],risk:"分化阶段追高胜率下降，应等待明确支撑位。"},
 {date:"2026-05-28",title:"资金转向确定性",summary:"TSM 与 MU 领涨，NVDA 短线降温。",points:["资金偏好订单更清晰的供应链资产","TSM 与 MU 成为当日主要强势标的","NVDA 短线降温但核心叙事未变"],risk:"确定性交易拥挤后，同样可能出现快速估值收缩。"}
];
export const getBrief=(date:string)=>briefs.find(x=>x.date===date);
