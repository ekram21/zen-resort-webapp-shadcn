import{r as s,j as F,V as H,f as V,u as Y,T as z,P as D,d as R}from"./index-DykfVjGT.js";import{u as q}from"./index-DW6chHyz.js";import{u as J}from"./index-Bc08GzOQ.js";function Q(e,o=[]){let n=[];function r(m,u){const a=s.createContext(u),i=n.length;n=[...n,u];function c(I){const{scope:l,children:g,...t}=I,p=(l==null?void 0:l[e][i])||a,S=s.useMemo(()=>t,Object.values(t));return F.jsx(p.Provider,{value:S,children:g})}function C(I,l){const g=(l==null?void 0:l[e][i])||a,t=s.useContext(g);if(t)return t;if(u!==void 0)return u;throw new Error(`\`${I}\` must be used within \`${m}\``)}return c.displayName=m+"Provider",[c,C]}const d=()=>{const m=n.map(u=>s.createContext(u));return function(a){const i=(a==null?void 0:a[e])||m;return s.useMemo(()=>({[`__scope${e}`]:{...a,[e]:i}}),[a,i])}};return d.scopeName=e,[r,W(d,...o)]}function W(...e){const o=e[0];if(e.length===1)return o;const n=()=>{const r=e.map(d=>({useScope:d(),scopeName:d.scopeName}));return function(m){const u=r.reduce((a,{useScope:i,scopeName:c})=>{const I=i(m)[`__scope${c}`];return{...a,...I}},{});return s.useMemo(()=>({[`__scope${o.scopeName}`]:u}),[u])}};return n.scopeName=o.scopeName,n}var h="rovingFocusGroup.onEntryFocus",X={bubbles:!1,cancelable:!0},E="RovingFocusGroup",[P,G,Z]=H(E),[ee,de]=Q(E,[Z]),[te,oe]=ee(E),N=s.forwardRef((e,o)=>F.jsx(P.Provider,{scope:e.__scopeRovingFocusGroup,children:F.jsx(P.Slot,{scope:e.__scopeRovingFocusGroup,children:F.jsx(ne,{...e,ref:o})})}));N.displayName=E;var ne=s.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:d=!1,dir:m,currentTabStopId:u,defaultCurrentTabStopId:a,onCurrentTabStopIdChange:i,onEntryFocus:c,preventScrollOnEntryFocus:C=!1,...I}=e,l=s.useRef(null),g=V(o,l),t=J(m),[p=null,S]=Y({prop:u,defaultProp:a,onChange:i}),[v,b]=s.useState(!1),w=z(c),K=G(n),T=s.useRef(!1),[k,A]=s.useState(0);return s.useEffect(()=>{const f=l.current;if(f)return f.addEventListener(h,w),()=>f.removeEventListener(h,w)},[w]),F.jsx(te,{scope:n,orientation:r,dir:t,loop:d,currentTabStopId:p,onItemFocus:s.useCallback(f=>S(f),[S]),onItemShiftTab:s.useCallback(()=>b(!0),[]),onFocusableItemAdd:s.useCallback(()=>A(f=>f+1),[]),onFocusableItemRemove:s.useCallback(()=>A(f=>f-1),[]),children:F.jsx(D.div,{tabIndex:v||k===0?-1:0,"data-orientation":r,...I,ref:g,style:{outline:"none",...e.style},onMouseDown:R(e.onMouseDown,()=>{T.current=!0}),onFocus:R(e.onFocus,f=>{const L=!T.current;if(f.target===f.currentTarget&&L&&!v){const y=new CustomEvent(h,X);if(f.currentTarget.dispatchEvent(y),!y.defaultPrevented){const _=K().filter(x=>x.focusable),U=_.find(x=>x.active),B=_.find(x=>x.id===p),$=[U,B,..._].filter(Boolean).map(x=>x.ref.current);j($,C)}}T.current=!1}),onBlur:R(e.onBlur,()=>b(!1))})})}),O="RovingFocusGroupItem",M=s.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:d=!1,tabStopId:m,...u}=e,a=q(),i=m||a,c=oe(O,n),C=c.currentTabStopId===i,I=G(n),{onFocusableItemAdd:l,onFocusableItemRemove:g}=c;return s.useEffect(()=>{if(r)return l(),()=>g()},[r,l,g]),F.jsx(P.ItemSlot,{scope:n,id:i,focusable:r,active:d,children:F.jsx(D.span,{tabIndex:C?0:-1,"data-orientation":c.orientation,...u,ref:o,onMouseDown:R(e.onMouseDown,t=>{r?c.onItemFocus(i):t.preventDefault()}),onFocus:R(e.onFocus,()=>c.onItemFocus(i)),onKeyDown:R(e.onKeyDown,t=>{if(t.key==="Tab"&&t.shiftKey){c.onItemShiftTab();return}if(t.target!==t.currentTarget)return;const p=ce(t,c.orientation,c.dir);if(p!==void 0){if(t.metaKey||t.ctrlKey||t.altKey||t.shiftKey)return;t.preventDefault();let v=I().filter(b=>b.focusable).map(b=>b.ref.current);if(p==="last")v.reverse();else if(p==="prev"||p==="next"){p==="prev"&&v.reverse();const b=v.indexOf(t.currentTarget);v=c.loop?ue(v,b+1):v.slice(b+1)}setTimeout(()=>j(v))}})})})});M.displayName=O;var re={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function se(e,o){return o!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function ce(e,o,n){const r=se(e.key,n);if(!(o==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(o==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return re[r]}function j(e,o=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:o}),document.activeElement!==n))return}function ue(e,o){return e.map((n,r)=>e[(o+r)%e.length])}var me=N,pe=M;export{pe as I,me as R,de as c};
