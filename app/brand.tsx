export function HubMark(){return <svg className="hubMark" viewBox="0 0 48 48" aria-hidden="true"><path d="M24 2 44 13v22L24 46 4 35V13Z" fill="#f0b90b"/><path d="M15 17h7v14h-7zm11 0h7v14h-7zM20 12h8v5h-8zm0 19h8v5h-8z" fill="#080a0d"/><path d="M11 24h26" stroke="#080a0d" strokeWidth="4"/></svg>}
export function Brand(){return <span className="brandLockup"><HubMark/><span className="brandWords"><b>CRYPTO BONUS</b><strong>CODE HUB</strong></span></span>}
export function ExchangeLogo({name}:{name:string}){
 if(name==="Binance")return <svg viewBox="0 0 40 40" aria-label="Binance"><g fill="#f0b90b"><path d="m20 4 6 6-6 6-6-6zM10 14l6 6-6 6-6-6-6-6zm20 0 6 6-6 6-6-6-6-6zM20 24l6 6-6 6-6-6z"/><path d="m20 14 6 6-6 6-6-6z"/></g></svg>;
 if(name==="Gate")return <svg viewBox="0 0 40 40"><path d="M20 6a14 14 0 1 0 10 24" fill="none" stroke="#2354e6" strokeWidth="5"/><path d="M21 15h13v13H21z" fill="#2354e6"/></svg>;
 if(name==="Hyperliquid")return <svg viewBox="0 0 40 40"><path d="M5 23c5-13 9-13 14 0s9 13 16-6" fill="none" stroke="#9df7dd" strokeWidth="5" strokeLinecap="round"/></svg>;
 if(name==="OKX")return <svg viewBox="0 0 40 40" fill="#fff"><path d="M5 5h12v12H5zm18 0h12v12H23zM5 23h12v12H5zm18 0h12v12H23zM14 14h12v12H14z"/></svg>;
 if(name==="MEXC")return <svg viewBox="0 0 40 40"><path d="m4 28 9-16 7 12 7-12 9 16h-9l-7-10-7 10Z" fill="#2878ff"/></svg>;
 return <svg viewBox="0 0 40 40"><path d="M7 8h16c7 0 10 9 4 12 8 2 7 13-1 13H7Z" fill="#12d6c5"/><path d="M14 14h8m-8 12h10" stroke="#071012" strokeWidth="4"/></svg>
}
