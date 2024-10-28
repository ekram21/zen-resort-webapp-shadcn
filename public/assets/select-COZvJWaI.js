import{V as pt,b as ft,r as o,f as k,j as r,P as j,d as P,g as z,a0 as Pe,X as mt,D as ht,a1 as gt,T as vt,u as be,Z as xt,a as G,H as St,a2 as wt,a3 as yt,F as Ct}from"./index-DU4IaJNo.js";import{u as It}from"./index-BZ_N6seG.js";import{c as Re,A as Tt,h as bt,u as Nt,b as Pt,F as Rt,C as Et,a as _t,R as jt}from"./Combination-SRZM3x4-.js";import{u as Ie}from"./index-CpfKMVEk.js";import{u as Mt}from"./index-BzYGvZ0f.js";function Ne(t,[n,e]){return Math.min(e,Math.max(n,t))}var At=[" ","Enter","ArrowUp","ArrowDown"],Ot=[" ","Enter"],se="Select",[ie,de,Dt]=pt(se),[te,go]=ft(se,[Dt,Re]),ue=Re(),[Lt,Y]=te(se),[kt,Vt]=te(se),Ee=t=>{const{__scopeSelect:n,children:e,open:a,defaultOpen:c,onOpenChange:p,value:l,defaultValue:i,onValueChange:s,dir:f,name:v,autoComplete:w,disabled:b,required:N,form:T}=t,d=ue(n),[g,y]=o.useState(null),[u,h]=o.useState(null),[M,A]=o.useState(!1),oe=It(f),[R=!1,D]=be({prop:a,defaultProp:c,onChange:p}),[U,X]=be({prop:l,defaultProp:i,onChange:s}),V=o.useRef(null),B=g?T||!!g.closest("form"):!0,[K,H]=o.useState(new Set),F=Array.from(K).map(E=>E.props.value).join(";");return r.jsx(jt,{...d,children:r.jsxs(Lt,{required:N,scope:n,trigger:g,onTriggerChange:y,valueNode:u,onValueNodeChange:h,valueNodeHasChildren:M,onValueNodeHasChildrenChange:A,contentId:Ie(),value:U,onValueChange:X,open:R,onOpenChange:D,dir:oe,triggerPointerDownPosRef:V,disabled:b,children:[r.jsx(ie.Provider,{scope:n,children:r.jsx(kt,{scope:t.__scopeSelect,onNativeOptionAdd:o.useCallback(E=>{H(L=>new Set(L).add(E))},[]),onNativeOptionRemove:o.useCallback(E=>{H(L=>{const W=new Set(L);return W.delete(E),W})},[]),children:e})}),B?r.jsxs(et,{"aria-hidden":!0,required:N,tabIndex:-1,name:v,autoComplete:w,value:U,onChange:E=>X(E.target.value),disabled:b,form:T,children:[U===void 0?r.jsx("option",{value:""}):null,Array.from(K)]},F):null]})})};Ee.displayName=se;var _e="SelectTrigger",je=o.forwardRef((t,n)=>{const{__scopeSelect:e,disabled:a=!1,...c}=t,p=ue(e),l=Y(_e,e),i=l.disabled||a,s=k(n,l.onTriggerChange),f=de(e),v=o.useRef("touch"),[w,b,N]=tt(d=>{const g=f().filter(h=>!h.disabled),y=g.find(h=>h.value===l.value),u=ot(g,d,y);u!==void 0&&l.onValueChange(u.value)}),T=d=>{i||(l.onOpenChange(!0),N()),d&&(l.triggerPointerDownPosRef.current={x:Math.round(d.pageX),y:Math.round(d.pageY)})};return r.jsx(Tt,{asChild:!0,...p,children:r.jsx(j.button,{type:"button",role:"combobox","aria-controls":l.contentId,"aria-expanded":l.open,"aria-required":l.required,"aria-autocomplete":"none",dir:l.dir,"data-state":l.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":Qe(l.value)?"":void 0,...c,ref:s,onClick:P(c.onClick,d=>{d.currentTarget.focus(),v.current!=="mouse"&&T(d)}),onPointerDown:P(c.onPointerDown,d=>{v.current=d.pointerType;const g=d.target;g.hasPointerCapture(d.pointerId)&&g.releasePointerCapture(d.pointerId),d.button===0&&d.ctrlKey===!1&&d.pointerType==="mouse"&&(T(d),d.preventDefault())}),onKeyDown:P(c.onKeyDown,d=>{const g=w.current!=="";!(d.ctrlKey||d.altKey||d.metaKey)&&d.key.length===1&&b(d.key),!(g&&d.key===" ")&&At.includes(d.key)&&(T(),d.preventDefault())})})})});je.displayName=_e;var Me="SelectValue",Ae=o.forwardRef((t,n)=>{const{__scopeSelect:e,className:a,style:c,children:p,placeholder:l="",...i}=t,s=Y(Me,e),{onValueNodeHasChildrenChange:f}=s,v=p!==void 0,w=k(n,s.onValueNodeChange);return z(()=>{f(v)},[f,v]),r.jsx(j.span,{...i,ref:w,style:{pointerEvents:"none"},children:Qe(s.value)?r.jsx(r.Fragment,{children:l}):p})});Ae.displayName=Me;var Bt="SelectIcon",Oe=o.forwardRef((t,n)=>{const{__scopeSelect:e,children:a,...c}=t;return r.jsx(j.span,{"aria-hidden":!0,...c,ref:n,children:a||"▼"})});Oe.displayName=Bt;var Ht="SelectPortal",De=t=>r.jsx(xt,{asChild:!0,...t});De.displayName=Ht;var Q="SelectContent",Le=o.forwardRef((t,n)=>{const e=Y(Q,t.__scopeSelect),[a,c]=o.useState();if(z(()=>{c(new DocumentFragment)},[]),!e.open){const p=a;return p?Pe.createPortal(r.jsx(ke,{scope:t.__scopeSelect,children:r.jsx(ie.Slot,{scope:t.__scopeSelect,children:r.jsx("div",{children:t.children})})}),p):null}return r.jsx(Ve,{...t,ref:n})});Le.displayName=Q;var O=10,[ke,q]=te(Q),Ft="SelectContentImpl",Ve=o.forwardRef((t,n)=>{const{__scopeSelect:e,position:a="item-aligned",onCloseAutoFocus:c,onEscapeKeyDown:p,onPointerDownOutside:l,side:i,sideOffset:s,align:f,alignOffset:v,arrowPadding:w,collisionBoundary:b,collisionPadding:N,sticky:T,hideWhenDetached:d,avoidCollisions:g,...y}=t,u=Y(Q,e),[h,M]=o.useState(null),[A,oe]=o.useState(null),R=k(n,m=>M(m)),[D,U]=o.useState(null),[X,V]=o.useState(null),B=de(e),[K,H]=o.useState(!1),F=o.useRef(!1);o.useEffect(()=>{if(h)return bt(h)},[h]),Nt();const E=o.useCallback(m=>{const[I,..._]=B().map(S=>S.ref.current),[C]=_.slice(-1),x=document.activeElement;for(const S of m)if(S===x||(S==null||S.scrollIntoView({block:"nearest"}),S===I&&A&&(A.scrollTop=0),S===C&&A&&(A.scrollTop=A.scrollHeight),S==null||S.focus(),document.activeElement!==x))return},[B,A]),L=o.useCallback(()=>E([D,h]),[E,D,h]);o.useEffect(()=>{K&&L()},[K,L]);const{onOpenChange:W,triggerPointerDownPosRef:$}=u;o.useEffect(()=>{if(h){let m={x:0,y:0};const I=C=>{var x,S;m={x:Math.abs(Math.round(C.pageX)-(((x=$.current)==null?void 0:x.x)??0)),y:Math.abs(Math.round(C.pageY)-(((S=$.current)==null?void 0:S.y)??0))}},_=C=>{m.x<=10&&m.y<=10?C.preventDefault():h.contains(C.target)||W(!1),document.removeEventListener("pointermove",I),$.current=null};return $.current!==null&&(document.addEventListener("pointermove",I),document.addEventListener("pointerup",_,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",I),document.removeEventListener("pointerup",_,{capture:!0})}}},[h,W,$]),o.useEffect(()=>{const m=()=>W(!1);return window.addEventListener("blur",m),window.addEventListener("resize",m),()=>{window.removeEventListener("blur",m),window.removeEventListener("resize",m)}},[W]);const[pe,ae]=tt(m=>{const I=B().filter(x=>!x.disabled),_=I.find(x=>x.ref.current===document.activeElement),C=ot(I,m,_);C&&setTimeout(()=>C.ref.current.focus())}),fe=o.useCallback((m,I,_)=>{const C=!F.current&&!_;(u.value!==void 0&&u.value===I||C)&&(U(m),C&&(F.current=!0))},[u.value]),me=o.useCallback(()=>h==null?void 0:h.focus(),[h]),ee=o.useCallback((m,I,_)=>{const C=!F.current&&!_;(u.value!==void 0&&u.value===I||C)&&V(m)},[u.value]),le=a==="popper"?xe:Be,ne=le===xe?{side:i,sideOffset:s,align:f,alignOffset:v,arrowPadding:w,collisionBoundary:b,collisionPadding:N,sticky:T,hideWhenDetached:d,avoidCollisions:g}:{};return r.jsx(ke,{scope:e,content:h,viewport:A,onViewportChange:oe,itemRefCallback:fe,selectedItem:D,onItemLeave:me,itemTextRefCallback:ee,focusSelectedItem:L,selectedItemText:X,position:a,isPositioned:K,searchRef:pe,children:r.jsx(Pt,{as:mt,allowPinchZoom:!0,children:r.jsx(Rt,{asChild:!0,trapped:u.open,onMountAutoFocus:m=>{m.preventDefault()},onUnmountAutoFocus:P(c,m=>{var I;(I=u.trigger)==null||I.focus({preventScroll:!0}),m.preventDefault()}),children:r.jsx(ht,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:p,onPointerDownOutside:l,onFocusOutside:m=>m.preventDefault(),onDismiss:()=>u.onOpenChange(!1),children:r.jsx(le,{role:"listbox",id:u.contentId,"data-state":u.open?"open":"closed",dir:u.dir,onContextMenu:m=>m.preventDefault(),...y,...ne,onPlaced:()=>H(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...y.style},onKeyDown:P(y.onKeyDown,m=>{const I=m.ctrlKey||m.altKey||m.metaKey;if(m.key==="Tab"&&m.preventDefault(),!I&&m.key.length===1&&ae(m.key),["ArrowUp","ArrowDown","Home","End"].includes(m.key)){let C=B().filter(x=>!x.disabled).map(x=>x.ref.current);if(["ArrowUp","End"].includes(m.key)&&(C=C.slice().reverse()),["ArrowUp","ArrowDown"].includes(m.key)){const x=m.target,S=C.indexOf(x);C=C.slice(S+1)}setTimeout(()=>E(C)),m.preventDefault()}})})})})})})});Ve.displayName=Ft;var Wt="SelectItemAlignedPosition",Be=o.forwardRef((t,n)=>{const{__scopeSelect:e,onPlaced:a,...c}=t,p=Y(Q,e),l=q(Q,e),[i,s]=o.useState(null),[f,v]=o.useState(null),w=k(n,R=>v(R)),b=de(e),N=o.useRef(!1),T=o.useRef(!0),{viewport:d,selectedItem:g,selectedItemText:y,focusSelectedItem:u}=l,h=o.useCallback(()=>{if(p.trigger&&p.valueNode&&i&&f&&d&&g&&y){const R=p.trigger.getBoundingClientRect(),D=f.getBoundingClientRect(),U=p.valueNode.getBoundingClientRect(),X=y.getBoundingClientRect();if(p.dir!=="rtl"){const x=X.left-D.left,S=U.left-x,Z=R.left-S,J=R.width+Z,he=Math.max(J,D.width),ge=window.innerWidth-O,ve=Ne(S,[O,Math.max(O,ge-he)]);i.style.minWidth=J+"px",i.style.left=ve+"px"}else{const x=D.right-X.right,S=window.innerWidth-U.right-x,Z=window.innerWidth-R.right-S,J=R.width+Z,he=Math.max(J,D.width),ge=window.innerWidth-O,ve=Ne(S,[O,Math.max(O,ge-he)]);i.style.minWidth=J+"px",i.style.right=ve+"px"}const V=b(),B=window.innerHeight-O*2,K=d.scrollHeight,H=window.getComputedStyle(f),F=parseInt(H.borderTopWidth,10),E=parseInt(H.paddingTop,10),L=parseInt(H.borderBottomWidth,10),W=parseInt(H.paddingBottom,10),$=F+E+K+W+L,pe=Math.min(g.offsetHeight*5,$),ae=window.getComputedStyle(d),fe=parseInt(ae.paddingTop,10),me=parseInt(ae.paddingBottom,10),ee=R.top+R.height/2-O,le=B-ee,ne=g.offsetHeight/2,m=g.offsetTop+ne,I=F+E+m,_=$-I;if(I<=ee){const x=V.length>0&&g===V[V.length-1].ref.current;i.style.bottom="0px";const S=f.clientHeight-d.offsetTop-d.offsetHeight,Z=Math.max(le,ne+(x?me:0)+S+L),J=I+Z;i.style.height=J+"px"}else{const x=V.length>0&&g===V[0].ref.current;i.style.top="0px";const Z=Math.max(ee,F+d.offsetTop+(x?fe:0)+ne)+_;i.style.height=Z+"px",d.scrollTop=I-ee+d.offsetTop}i.style.margin=`${O}px 0`,i.style.minHeight=pe+"px",i.style.maxHeight=B+"px",a==null||a(),requestAnimationFrame(()=>N.current=!0)}},[b,p.trigger,p.valueNode,i,f,d,g,y,p.dir,a]);z(()=>h(),[h]);const[M,A]=o.useState();z(()=>{f&&A(window.getComputedStyle(f).zIndex)},[f]);const oe=o.useCallback(R=>{R&&T.current===!0&&(h(),u==null||u(),T.current=!1)},[h,u]);return r.jsx(Kt,{scope:e,contentWrapper:i,shouldExpandOnScrollRef:N,onScrollButtonChange:oe,children:r.jsx("div",{ref:s,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:M},children:r.jsx(j.div,{...c,ref:w,style:{boxSizing:"border-box",maxHeight:"100%",...c.style}})})})});Be.displayName=Wt;var Ut="SelectPopperPosition",xe=o.forwardRef((t,n)=>{const{__scopeSelect:e,align:a="start",collisionPadding:c=O,...p}=t,l=ue(e);return r.jsx(Et,{...l,...p,ref:n,align:a,collisionPadding:c,style:{boxSizing:"border-box",...p.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});xe.displayName=Ut;var[Kt,Te]=te(Q,{}),Se="SelectViewport",He=o.forwardRef((t,n)=>{const{__scopeSelect:e,nonce:a,...c}=t,p=q(Se,e),l=Te(Se,e),i=k(n,p.onViewportChange),s=o.useRef(0);return r.jsxs(r.Fragment,{children:[r.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),r.jsx(ie.Slot,{scope:e,children:r.jsx(j.div,{"data-radix-select-viewport":"",role:"presentation",...c,ref:i,style:{position:"relative",flex:1,overflow:"hidden auto",...c.style},onScroll:P(c.onScroll,f=>{const v=f.currentTarget,{contentWrapper:w,shouldExpandOnScrollRef:b}=l;if(b!=null&&b.current&&w){const N=Math.abs(s.current-v.scrollTop);if(N>0){const T=window.innerHeight-O*2,d=parseFloat(w.style.minHeight),g=parseFloat(w.style.height),y=Math.max(d,g);if(y<T){const u=y+N,h=Math.min(T,u),M=u-h;w.style.height=h+"px",w.style.bottom==="0px"&&(v.scrollTop=M>0?M:0,w.style.justifyContent="flex-end")}}}s.current=v.scrollTop})})})]})});He.displayName=Se;var Fe="SelectGroup",[$t,zt]=te(Fe),Gt=o.forwardRef((t,n)=>{const{__scopeSelect:e,...a}=t,c=Ie();return r.jsx($t,{scope:e,id:c,children:r.jsx(j.div,{role:"group","aria-labelledby":c,...a,ref:n})})});Gt.displayName=Fe;var We="SelectLabel",Ue=o.forwardRef((t,n)=>{const{__scopeSelect:e,...a}=t,c=zt(We,e);return r.jsx(j.div,{id:c.id,...a,ref:n})});Ue.displayName=We;var ce="SelectItem",[Yt,Ke]=te(ce),$e=o.forwardRef((t,n)=>{const{__scopeSelect:e,value:a,disabled:c=!1,textValue:p,...l}=t,i=Y(ce,e),s=q(ce,e),f=i.value===a,[v,w]=o.useState(p??""),[b,N]=o.useState(!1),T=k(n,u=>{var h;return(h=s.itemRefCallback)==null?void 0:h.call(s,u,a,c)}),d=Ie(),g=o.useRef("touch"),y=()=>{c||(i.onValueChange(a),i.onOpenChange(!1))};if(a==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return r.jsx(Yt,{scope:e,value:a,disabled:c,textId:d,isSelected:f,onItemTextChange:o.useCallback(u=>{w(h=>h||((u==null?void 0:u.textContent)??"").trim())},[]),children:r.jsx(ie.ItemSlot,{scope:e,value:a,disabled:c,textValue:v,children:r.jsx(j.div,{role:"option","aria-labelledby":d,"data-highlighted":b?"":void 0,"aria-selected":f&&b,"data-state":f?"checked":"unchecked","aria-disabled":c||void 0,"data-disabled":c?"":void 0,tabIndex:c?void 0:-1,...l,ref:T,onFocus:P(l.onFocus,()=>N(!0)),onBlur:P(l.onBlur,()=>N(!1)),onClick:P(l.onClick,()=>{g.current!=="mouse"&&y()}),onPointerUp:P(l.onPointerUp,()=>{g.current==="mouse"&&y()}),onPointerDown:P(l.onPointerDown,u=>{g.current=u.pointerType}),onPointerMove:P(l.onPointerMove,u=>{var h;g.current=u.pointerType,c?(h=s.onItemLeave)==null||h.call(s):g.current==="mouse"&&u.currentTarget.focus({preventScroll:!0})}),onPointerLeave:P(l.onPointerLeave,u=>{var h;u.currentTarget===document.activeElement&&((h=s.onItemLeave)==null||h.call(s))}),onKeyDown:P(l.onKeyDown,u=>{var M;((M=s.searchRef)==null?void 0:M.current)!==""&&u.key===" "||(Ot.includes(u.key)&&y(),u.key===" "&&u.preventDefault())})})})})});$e.displayName=ce;var re="SelectItemText",ze=o.forwardRef((t,n)=>{const{__scopeSelect:e,className:a,style:c,...p}=t,l=Y(re,e),i=q(re,e),s=Ke(re,e),f=Vt(re,e),[v,w]=o.useState(null),b=k(n,y=>w(y),s.onItemTextChange,y=>{var u;return(u=i.itemTextRefCallback)==null?void 0:u.call(i,y,s.value,s.disabled)}),N=v==null?void 0:v.textContent,T=o.useMemo(()=>r.jsx("option",{value:s.value,disabled:s.disabled,children:N},s.value),[s.disabled,s.value,N]),{onNativeOptionAdd:d,onNativeOptionRemove:g}=f;return z(()=>(d(T),()=>g(T)),[d,g,T]),r.jsxs(r.Fragment,{children:[r.jsx(j.span,{id:s.textId,...p,ref:b}),s.isSelected&&l.valueNode&&!l.valueNodeHasChildren?Pe.createPortal(p.children,l.valueNode):null]})});ze.displayName=re;var Ge="SelectItemIndicator",Ye=o.forwardRef((t,n)=>{const{__scopeSelect:e,...a}=t;return Ke(Ge,e).isSelected?r.jsx(j.span,{"aria-hidden":!0,...a,ref:n}):null});Ye.displayName=Ge;var we="SelectScrollUpButton",qe=o.forwardRef((t,n)=>{const e=q(we,t.__scopeSelect),a=Te(we,t.__scopeSelect),[c,p]=o.useState(!1),l=k(n,a.onScrollButtonChange);return z(()=>{if(e.viewport&&e.isPositioned){let i=function(){const f=s.scrollTop>0;p(f)};const s=e.viewport;return i(),s.addEventListener("scroll",i),()=>s.removeEventListener("scroll",i)}},[e.viewport,e.isPositioned]),c?r.jsx(Ze,{...t,ref:l,onAutoScroll:()=>{const{viewport:i,selectedItem:s}=e;i&&s&&(i.scrollTop=i.scrollTop-s.offsetHeight)}}):null});qe.displayName=we;var ye="SelectScrollDownButton",Xe=o.forwardRef((t,n)=>{const e=q(ye,t.__scopeSelect),a=Te(ye,t.__scopeSelect),[c,p]=o.useState(!1),l=k(n,a.onScrollButtonChange);return z(()=>{if(e.viewport&&e.isPositioned){let i=function(){const f=s.scrollHeight-s.clientHeight,v=Math.ceil(s.scrollTop)<f;p(v)};const s=e.viewport;return i(),s.addEventListener("scroll",i),()=>s.removeEventListener("scroll",i)}},[e.viewport,e.isPositioned]),c?r.jsx(Ze,{...t,ref:l,onAutoScroll:()=>{const{viewport:i,selectedItem:s}=e;i&&s&&(i.scrollTop=i.scrollTop+s.offsetHeight)}}):null});Xe.displayName=ye;var Ze=o.forwardRef((t,n)=>{const{__scopeSelect:e,onAutoScroll:a,...c}=t,p=q("SelectScrollButton",e),l=o.useRef(null),i=de(e),s=o.useCallback(()=>{l.current!==null&&(window.clearInterval(l.current),l.current=null)},[]);return o.useEffect(()=>()=>s(),[s]),z(()=>{var v;const f=i().find(w=>w.ref.current===document.activeElement);(v=f==null?void 0:f.ref.current)==null||v.scrollIntoView({block:"nearest"})},[i]),r.jsx(j.div,{"aria-hidden":!0,...c,ref:n,style:{flexShrink:0,...c.style},onPointerDown:P(c.onPointerDown,()=>{l.current===null&&(l.current=window.setInterval(a,50))}),onPointerMove:P(c.onPointerMove,()=>{var f;(f=p.onItemLeave)==null||f.call(p),l.current===null&&(l.current=window.setInterval(a,50))}),onPointerLeave:P(c.onPointerLeave,()=>{s()})})}),qt="SelectSeparator",Je=o.forwardRef((t,n)=>{const{__scopeSelect:e,...a}=t;return r.jsx(j.div,{"aria-hidden":!0,...a,ref:n})});Je.displayName=qt;var Ce="SelectArrow",Xt=o.forwardRef((t,n)=>{const{__scopeSelect:e,...a}=t,c=ue(e),p=Y(Ce,e),l=q(Ce,e);return p.open&&l.position==="popper"?r.jsx(_t,{...c,...a,ref:n}):null});Xt.displayName=Ce;function Qe(t){return t===""||t===void 0}var et=o.forwardRef((t,n)=>{const{value:e,...a}=t,c=o.useRef(null),p=k(n,c),l=Mt(e);return o.useEffect(()=>{const i=c.current,s=window.HTMLSelectElement.prototype,v=Object.getOwnPropertyDescriptor(s,"value").set;if(l!==e&&v){const w=new Event("change",{bubbles:!0});v.call(i,e),i.dispatchEvent(w)}},[l,e]),r.jsx(gt,{asChild:!0,children:r.jsx("select",{...a,ref:p,defaultValue:e})})});et.displayName="BubbleSelect";function tt(t){const n=vt(t),e=o.useRef(""),a=o.useRef(0),c=o.useCallback(l=>{const i=e.current+l;n(i),function s(f){e.current=f,window.clearTimeout(a.current),f!==""&&(a.current=window.setTimeout(()=>s(""),1e3))}(i)},[n]),p=o.useCallback(()=>{e.current="",window.clearTimeout(a.current)},[]);return o.useEffect(()=>()=>window.clearTimeout(a.current),[]),[e,c,p]}function ot(t,n,e){const c=n.length>1&&Array.from(n).every(f=>f===n[0])?n[0]:n,p=e?t.indexOf(e):-1;let l=Zt(t,Math.max(p,0));c.length===1&&(l=l.filter(f=>f!==e));const s=l.find(f=>f.textValue.toLowerCase().startsWith(c.toLowerCase()));return s!==e?s:void 0}function Zt(t,n){return t.map((e,a)=>t[(n+a)%t.length])}var Jt=Ee,nt=je,Qt=Ae,eo=Oe,to=De,rt=Le,oo=He,st=Ue,at=$e,no=ze,ro=Ye,lt=qe,ct=Xe,it=Je;const vo=Jt,xo=Qt,so=o.forwardRef(({className:t,children:n,...e},a)=>r.jsxs(nt,{ref:a,className:G("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t),...e,children:[n,r.jsx(eo,{asChild:!0,children:r.jsx(St,{className:"h-4 w-4 opacity-50"})})]}));so.displayName=nt.displayName;const dt=o.forwardRef(({className:t,...n},e)=>r.jsx(lt,{ref:e,className:G("flex cursor-default items-center justify-center py-1",t),...n,children:r.jsx(wt,{})}));dt.displayName=lt.displayName;const ut=o.forwardRef(({className:t,...n},e)=>r.jsx(ct,{ref:e,className:G("flex cursor-default items-center justify-center py-1",t),...n,children:r.jsx(yt,{})}));ut.displayName=ct.displayName;const ao=o.forwardRef(({className:t,children:n,position:e="popper",...a},c)=>r.jsx(to,{children:r.jsxs(rt,{ref:c,className:G("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:e,...a,children:[r.jsx(dt,{}),r.jsx(oo,{className:G("p-1",e==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n}),r.jsx(ut,{})]})}));ao.displayName=rt.displayName;const lo=o.forwardRef(({className:t,...n},e)=>r.jsx(st,{ref:e,className:G("px-2 py-1.5 text-sm font-semibold",t),...n}));lo.displayName=st.displayName;const co=o.forwardRef(({className:t,children:n,...e},a)=>r.jsxs(at,{ref:a,className:G("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...e,children:[r.jsx("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:r.jsx(ro,{children:r.jsx(Ct,{className:"h-4 w-4"})})}),r.jsx(no,{children:n})]}));co.displayName=at.displayName;const io=o.forwardRef(({className:t,...n},e)=>r.jsx(it,{ref:e,className:G("-mx-1 my-1 h-px bg-muted",t),...n}));io.displayName=it.displayName;export{vo as S,so as a,xo as b,ao as c,co as d};