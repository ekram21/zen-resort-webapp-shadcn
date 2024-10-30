import{r as s,j as b,c as T}from"./index-B8SYxqge.js";const $=s.createContext(!1),_=s.forwardRef(({className:u,children:a,...A},E)=>{const{defaultValue:o,value:h,onChange:c,onComplete:d,onIncomplete:y,placeholder:g="○",type:I="alphanumeric",name:N,form:D,otp:m=!1,mask:v=!1,disabled:F=!1,readOnly:C=!1,autoFocus:x=!1,ariaLabel:R="",...K}=A,j=M(a),f=U(a),{pins:t,pinValue:e,refMap:r,...n}=L({value:h,defaultValue:o,placeholder:g,type:I,length:f,readOnly:C});s.useEffect(()=>{c&&c(e)},[c,e]);const i=s.useRef(e.length===f);s.useEffect(()=>{e.length===f&&i.current===!1&&(i.current=!0,d&&d(e)),e.length!==f&&i.current===!0&&(i.current=!1,y&&y(e))},[f,d,y,e,t,h]),s.useEffect(()=>{if(!x)return;const w=r==null?void 0:r.get(0);w&&w.focus()},[x,r]);const P=s.useRef(0);let V=0;const B=j.map(w=>{if(w.type===k){const p=V;return V=V+1,s.cloneElement(w,{name:N,inputKey:`input-${p}`,value:f>p?t[p]:"",onChange:l=>n.handleChange(l,p),onFocus:l=>n.handleFocus(l,p),onBlur:()=>n.handleBlur(p),onKeyDown:l=>n.handleKeyDown(l,p),onPaste:l=>n.handlePaste(l),placeholder:g,type:I,mask:v,autoComplete:m?"one-time-code":"off",disabled:F,readOnly:C,"aria-label":R||`Pin input ${V} of ${f}`,ref:l=>{l?r==null||r.set(p,l):r==null||r.delete(p)}})}return P.current=P.current+1,w});return b.jsx($.Provider,{value:!0,children:b.jsxs("div",{ref:E,"aria-label":"Pin Input",className:u,...K,children:[B,b.jsx("input",{type:"hidden",name:N,form:D,value:e})]})})});_.displayName="PinInput";const G=({className:u,component:a,...A},E)=>{const{mask:o,type:h,inputKey:c,...d}=A;if(!s.useContext($))throw new Error(`PinInputField must be used within ${_.displayName}.`);const g=a||"input";return b.jsx(g,{ref:E,type:o?"password":h==="numeric"?"tel":"text",inputMode:h==="numeric"?"numeric":"text",className:T("size-10 text-center",u),...d},c)},k=s.forwardRef(G),L=({value:u,defaultValue:a,placeholder:A,type:E,length:o,readOnly:h})=>{const c=s.useMemo(()=>Array.from({length:o},(t,e)=>a?a.charAt(e):u?u.charAt(e):""),[a,o,u]),[d,y]=s.useState(c),g=d.join("").trim();s.useEffect(()=>{y(c)},[c]);const I=s.useRef(null);function N(){return I.current||(I.current=new Map),I.current}function D(t){const e=N();return e==null?void 0:e.get(t)}function m(t){const e=D(t);e&&(e.focus(),e.placeholder="")}function v(t,e){t.target.select(),m(e)}function F(t){const e=D(t);e&&(e.placeholder=A)}function C(t,e){const r=D(e);r&&(r.value=t),y(n=>n.map((i,P)=>P===e?t:i))}function x(t){return(E==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(t)}const R=s.useRef(null);function K(t,e){const r=t.target.value,n=R.current,i=n&&n.length===o?n.charAt(o-1):r.slice(-1);x(i)&&(C(i,e),R.current=null,r.length>0&&m(e+1))}function j(t){t.preventDefault();const e=t.clipboardData.getData("text/plain").replace(/[\n\r\s]+/g,""),r=e.split("").slice(0,o);if(r.every(i=>x(i))){for(let i=0;i<o;i++)i<r.length&&C(r[i],i);R.current=e,m(r.length<o?r.length:o-1)}}function f(t,e){const{ctrlKey:r,key:n,shiftKey:i,metaKey:P}=t;E==="numeric"&&(!(n==="Backspace"||n==="Tab"||n==="Control"||n==="Delete"||r&&n==="v"||P&&n==="v"||!Number.isNaN(Number(n)))||h)&&t.preventDefault(),n==="ArrowLeft"||i&&n==="Tab"?(t.preventDefault(),m(e-1)):n==="ArrowRight"||n==="Tab"||n===" "?(t.preventDefault(),m(e+1)):n==="Delete"?t.preventDefault():n==="Backspace"&&(t.preventDefault(),C("",e),t.target.value===""&&m(e-1))}return{pins:d,pinValue:g,refMap:N(),handleFocus:v,handleBlur:F,handleChange:K,handlePaste:j,handleKeyDown:f}},M=u=>s.Children.toArray(u).filter(a=>{if(s.isValidElement(a))return s.isValidElement(a);throw new Error(`${_.displayName} contains invalid children.`)}),U=u=>s.Children.toArray(u).filter(a=>{if(s.isValidElement(a)&&a.type===k)return s.isValidElement(a)}).length;export{_ as P,k as a};