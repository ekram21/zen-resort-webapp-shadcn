import{r as t,j as d,c}from"./index-BhYYepx0.js";const f=t.createContext(null),l=({className:a,fixed:o=!1,...r})=>{const e=t.useRef(null),[s,y]=t.useState(0);return t.useEffect(()=>{const n=e.current;if(!n)return;const u=()=>y(n.scrollTop);return n.removeEventListener("scroll",u),n.addEventListener("scroll",u,{passive:!0}),()=>n.removeEventListener("scroll",u)},[]),d.jsx(f.Provider,{value:{offset:s,fixed:o},children:d.jsx("div",{ref:e,"data-layout":"layout",className:c("h-full overflow-auto",o&&"flex flex-col",a),...r})})};l.displayName="Layout";const i=t.forwardRef(({className:a,sticky:o,...r},e)=>{const s=t.useContext(f);if(s===null)throw new Error(`Layout.Header must be used within ${l.displayName}.`);return d.jsx("div",{ref:e,"data-layout":"header",className:c("z-10 flex h-[var(--header-height)] items-center gap-4 bg-background p-4 md:px-8",s.offset>10&&o?"shadow":"shadow-none",s.fixed&&"flex-none",o&&"sticky top-0",a),...r})});i.displayName="Header";const x=t.forwardRef(({className:a,...o},r)=>{const e=t.useContext(f);if(e===null)throw new Error(`Layout.Body must be used within ${l.displayName}.`);return d.jsx("div",{ref:r,"data-layout":"body",className:c("px-4 py-6 md:overflow-hidden md:px-8",e&&e.fixed&&"flex-1",a),...o})});x.displayName="Body";l.Header=i;l.Body=x;export{l as L};
