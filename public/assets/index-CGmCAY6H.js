import{b as z,r as c,g as A,d as D,j as e,P,e as O,c as R,L as U,B as V,t as Y}from"./index-BhYYepx0.js";import{u as G,t as J,F as W,a as u,b as o,e as n,c as r,d as X,f as p}from"./form-BWX4FfYW.js";import{z as i}from"./index-DXqQCM1T.js";import{C as $}from"./checkbox-DlWbQ79f.js";import{R as K,a as w}from"./radio-group-Ct7Leqr1.js";import{u as Q}from"./index-Cm1jCCYE.js";import{u as Z}from"./index-BJG12cgo.js";import{C as ee}from"./content-section--lgmOM0Z.js";import"./index-DGK-_Q08.js";import"./index-Cn4qTzT2.js";import"./separator-BsIISvc0.js";var S="Switch",[se,ve]=z(S),[te,ae]=se(S),F=c.forwardRef((t,a)=>{const{__scopeSwitch:s,name:l,checked:d,defaultChecked:b,required:h,disabled:m,value:x="on",onCheckedChange:k,form:N,...g}=t,[f,B]=c.useState(null),q=A(a,y=>B(y)),C=c.useRef(!1),_=f?N||!!f.closest("form"):!0,[v=!1,H]=D({prop:d,defaultProp:b,onChange:k});return e.jsxs(te,{scope:s,checked:v,disabled:m,children:[e.jsx(P.button,{type:"button",role:"switch","aria-checked":v,"aria-required":h,"data-state":M(v),"data-disabled":m?"":void 0,disabled:m,value:x,...g,ref:q,onClick:O(t.onClick,y=>{H(L=>!L),_&&(C.current=y.isPropagationStopped(),C.current||y.stopPropagation())})}),_&&e.jsx(oe,{control:f,bubbles:!C.current,name:l,value:x,checked:v,required:h,disabled:m,form:N,style:{transform:"translateX(-100%)"}})]})});F.displayName=S;var E="SwitchThumb",I=c.forwardRef((t,a)=>{const{__scopeSwitch:s,...l}=t,d=ae(E,s);return e.jsx(P.span,{"data-state":M(d.checked),"data-disabled":d.disabled?"":void 0,...l,ref:a})});I.displayName=E;var oe=t=>{const{control:a,checked:s,bubbles:l=!0,...d}=t,b=c.useRef(null),h=Q(s),m=Z(a);return c.useEffect(()=>{const x=b.current,k=window.HTMLInputElement.prototype,g=Object.getOwnPropertyDescriptor(k,"checked").set;if(h!==s&&g){const f=new Event("click",{bubbles:l});g.call(x,s),x.dispatchEvent(f)}},[h,s,l]),e.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:s,...d,tabIndex:-1,ref:b,style:{...t.style,...m,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function M(t){return t?"checked":"unchecked"}var T=F,ne=I;const j=c.forwardRef(({className:t,...a},s)=>e.jsx(T,{className:R("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",t),...a,ref:s,children:e.jsx(ne,{className:R("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})}));j.displayName=T.displayName;const re=i.object({type:i.enum(["all","mentions","none"],{required_error:"You need to select a notification type."}),mobile:i.boolean().default(!1).optional(),communication_emails:i.boolean().default(!1).optional(),social_emails:i.boolean().default(!1).optional(),marketing_emails:i.boolean().default(!1).optional(),security_emails:i.boolean()}),ie={communication_emails:!1,marketing_emails:!1,social_emails:!0,security_emails:!0};function ce(){const t=G({resolver:J(re),defaultValues:ie});function a(s){Y({title:"You submitted the following values:",description:e.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(s,null,2)})})})}return e.jsx(W,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(a),className:"space-y-8",children:[e.jsx(u,{control:t.control,name:"type",render:({field:s})=>e.jsxs(o,{className:"space-y-3",children:[e.jsx(n,{children:"Notify me about..."}),e.jsx(r,{children:e.jsxs(K,{onValueChange:s.onChange,defaultValue:s.value,className:"flex flex-col space-y-1",children:[e.jsxs(o,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(w,{value:"all"})}),e.jsx(n,{className:"font-normal",children:"All new messages"})]}),e.jsxs(o,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(w,{value:"mentions"})}),e.jsx(n,{className:"font-normal",children:"Direct messages and mentions"})]}),e.jsxs(o,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx(w,{value:"none"})}),e.jsx(n,{className:"font-normal",children:"Nothing"})]})]})}),e.jsx(X,{})]})}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-medium",children:"Email Notifications"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(u,{control:t.control,name:"communication_emails",render:({field:s})=>e.jsxs(o,{className:"flex flex-row items-center justify-between rounded-lg border p-4",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(n,{className:"text-base",children:"Communication emails"}),e.jsx(p,{children:"Receive emails about your account activity."})]}),e.jsx(r,{children:e.jsx(j,{checked:s.value,onCheckedChange:s.onChange})})]})}),e.jsx(u,{control:t.control,name:"marketing_emails",render:({field:s})=>e.jsxs(o,{className:"flex flex-row items-center justify-between rounded-lg border p-4",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(n,{className:"text-base",children:"Marketing emails"}),e.jsx(p,{children:"Receive emails about new products, features, and more."})]}),e.jsx(r,{children:e.jsx(j,{checked:s.value,onCheckedChange:s.onChange})})]})}),e.jsx(u,{control:t.control,name:"social_emails",render:({field:s})=>e.jsxs(o,{className:"flex flex-row items-center justify-between rounded-lg border p-4",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(n,{className:"text-base",children:"Social emails"}),e.jsx(p,{children:"Receive emails for friend requests, follows, and more."})]}),e.jsx(r,{children:e.jsx(j,{checked:s.value,onCheckedChange:s.onChange})})]})}),e.jsx(u,{control:t.control,name:"security_emails",render:({field:s})=>e.jsxs(o,{className:"flex flex-row items-center justify-between rounded-lg border p-4",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(n,{className:"text-base",children:"Security emails"}),e.jsx(p,{children:"Receive emails about your account activity and security."})]}),e.jsx(r,{children:e.jsx(j,{checked:s.value,onCheckedChange:s.onChange,disabled:!0,"aria-readonly":!0})})]})})]})]}),e.jsx(u,{control:t.control,name:"mobile",render:({field:s})=>e.jsxs(o,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(r,{children:e.jsx($,{checked:s.value,onCheckedChange:s.onChange})}),e.jsxs("div",{className:"space-y-1 leading-none",children:[e.jsx(n,{children:"Use different settings for my mobile devices"}),e.jsxs(p,{children:["You can manage your mobile notifications in the"," ",e.jsx(U,{to:"/settings",className:"underline decoration-dashed underline-offset-4 hover:decoration-solid",children:"mobile settings"})," ","page."]})]})]})}),e.jsx(V,{type:"submit",children:"Update notifications"})]})})}function ye(){return e.jsx(ee,{title:"Notifications",desc:"Configure how you receive notifications.",children:e.jsx(ce,{})})}export{ye as default};