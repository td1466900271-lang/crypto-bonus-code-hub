import type { MetadataRoute } from "next";
import { briefs } from "./brief/data";
export default function sitemap():MetadataRoute.Sitemap{const base="https://cryptobonuscodehub.com";return [{url:base,lastModified:new Date(),changeFrequency:"weekly",priority:1},{url:`${base}/brief`,lastModified:new Date(briefs[0].date),changeFrequency:"daily",priority:.9},...briefs.map((x,i)=>({url:`${base}/brief/${x.date}`,lastModified:new Date(x.date),changeFrequency:"monthly" as const,priority:i===0?.85:.65}))]}
