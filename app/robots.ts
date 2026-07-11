import type { MetadataRoute } from "next";
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:"*",allow:"/",disallow:["/brief-card/","/brief-image/"]},sitemap:"https://cryptobonuscodehub.com/sitemap.xml",host:"https://cryptobonuscodehub.com"}}
