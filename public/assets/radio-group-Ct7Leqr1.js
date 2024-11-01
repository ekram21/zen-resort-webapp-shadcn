import{b as k,r as n,g as C,j as t,P as x,e as y,f as L,d as V,c as I,K as T}from"./index-BhYYepx0.js";import{c as E,u as U,R as z,I as B}from"./index-DGK-_Q08.js";import{u as H}from"./index-BJG12cgo.js";import{u as $}from"./index-Cm1jCCYE.js";var w="Radio",[W,P]=k(w),[X,Y]=W(w),j=n.forwardRef((o,s)=>{const{__scopeRadio:e,name:c,checked:r=!1,required:a,disabled:i,value:l="on",onCheck:u,form:f,...v}=o,[p,R]=n.useState(null),d=C(s,b=>R(b)),m=n.useRef(!1),h=p?f||!!p.closest("form"):!0;return t.jsxs(X,{scope:e,checked:r,disabled:i,children:[t.jsx(x.button,{type:"button",role:"radio","aria-checked":r,"data-state":S(r),"data-disabled":i?"":void 0,disabled:i,value:l,...v,ref:d,onClick:y(o.onClick,b=>{r||u==null||u(),h&&(m.current=b.isPropagationStopped(),m.current||b.stopPropagation())})}),h&&t.jsx(J,{control:p,bubbles:!m.current,name:c,value:l,checked:r,required:a,disabled:i,form:f,style:{transform:"translateX(-100%)"}})]})});j.displayName=w;var G="RadioIndicator",N=n.forwardRef((o,s)=>{const{__scopeRadio:e,forceMount:c,...r}=o,a=Y(G,e);return t.jsx(L,{present:c||a.checked,children:t.jsx(x.span,{"data-state":S(a.checked),"data-disabled":a.disabled?"":void 0,...r,ref:s})})});N.displayName=G;var J=o=>{const{control:s,checked:e,bubbles:c=!0,...r}=o,a=n.useRef(null),i=$(e),l=H(s);return n.useEffect(()=>{const u=a.current,f=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(f,"checked").set;if(i!==e&&p){const R=new Event("click",{bubbles:c});p.call(u,e),u.dispatchEvent(R)}},[i,e,c]),t.jsx("input",{type:"radio","aria-hidden":!0,defaultChecked:e,...r,tabIndex:-1,ref:a,style:{...o.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function S(o){return o?"checked":"unchecked"}var Q=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],g="RadioGroup",[Z,ue]=k(g,[E,P]),_=E(),A=P(),[ee,oe]=Z(g),D=n.forwardRef((o,s)=>{const{__scopeRadioGroup:e,name:c,defaultValue:r,value:a,required:i=!1,disabled:l=!1,orientation:u,dir:f,loop:v=!0,onValueChange:p,...R}=o,d=_(e),m=U(f),[h,b]=V({prop:a,defaultProp:r,onChange:p});return t.jsx(ee,{scope:e,name:c,required:i,disabled:l,value:h,onValueChange:b,children:t.jsx(z,{asChild:!0,...d,orientation:u,dir:m,loop:v,children:t.jsx(x.div,{role:"radiogroup","aria-required":i,"aria-orientation":u,"data-disabled":l?"":void 0,dir:m,...R,ref:s})})})});D.displayName=g;var M="RadioGroupItem",O=n.forwardRef((o,s)=>{const{__scopeRadioGroup:e,disabled:c,...r}=o,a=oe(M,e),i=a.disabled||c,l=_(e),u=A(e),f=n.useRef(null),v=C(s,f),p=a.value===r.value,R=n.useRef(!1);return n.useEffect(()=>{const d=h=>{Q.includes(h.key)&&(R.current=!0)},m=()=>R.current=!1;return document.addEventListener("keydown",d),document.addEventListener("keyup",m),()=>{document.removeEventListener("keydown",d),document.removeEventListener("keyup",m)}},[]),t.jsx(B,{asChild:!0,...l,focusable:!i,active:p,children:t.jsx(j,{disabled:i,required:a.required,checked:p,...u,...r,name:a.name,ref:v,onCheck:()=>a.onValueChange(r.value),onKeyDown:y(d=>{d.key==="Enter"&&d.preventDefault()}),onFocus:y(r.onFocus,()=>{var d;R.current&&((d=f.current)==null||d.click())})})})});O.displayName=M;var re="RadioGroupIndicator",F=n.forwardRef((o,s)=>{const{__scopeRadioGroup:e,...c}=o,r=A(e);return t.jsx(N,{...r,...c,ref:s})});F.displayName=re;var q=D,K=O,ae=F;const te=n.forwardRef(({className:o,...s},e)=>t.jsx(q,{className:I("grid gap-2",o),...s,ref:e}));te.displayName=q.displayName;const se=n.forwardRef(({className:o,...s},e)=>t.jsx(K,{ref:e,className:I("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",o),...s,children:t.jsx(ae,{className:"flex items-center justify-center",children:t.jsx(T,{className:"h-3.5 w-3.5 fill-primary"})})}));se.displayName=K.displayName;export{te as R,se as a};
