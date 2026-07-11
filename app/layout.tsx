import type { Metadata } from "next"; import "./globals.css"; import "./calculator.css"; import "./brief.css"; import "./brand.css"; import "./brief-detail.css";
export const metadata:Metadata={metadataBase:new URL("https://cryptobonuscodehub.com"),title:"Crypto Bonus Code Hub — 透明的数字资产交易返佣",description:"比较主流交易所返佣码与返佣方案、估算返佣收益，并阅读每日数字资产市场简报。",alternates:{canonical:"/"},icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
