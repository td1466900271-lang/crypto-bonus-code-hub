import type { Metadata } from "next"; import "./globals.css";
export const metadata:Metadata={title:"RebateOne — 透明的数字资产交易返佣",description:"比较主流交易所返佣方案、估算返佣收益，并阅读每日数字资产市场简报。",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
