import{a as m,n as p,u as h,r as f,j as e,c as r,L as j,Y as u,O as g}from"./index-D-v0RGVJ.js";import{L as a}from"./layout-CYYwhQ1p.js";import{S as v,U as N}from"./user-nav-C89YtuHt.js";import{S as y}from"./separator-DnarkMef.js";import{T as S}from"./theme-switch-CRZ_HEbF.js";import{S as b,a as w,b as k,c as T,d as L}from"./select-Dj7c-G3l.js";import"./input-q4i4jPww.js";import"./avatar-DnZVRS6c.js";import"./firebase-Bu969cej.js";import"./tslib.es6-CDuPK5Eb.js";import"./index-BUcss_Cc.js";import"./index-Bj-gm62b.js";import"./Combination-CKjHqv8T.js";import"./index-BOJt0QhU.js";import"./index-CWMGCn1T.js";/**
 * @license @tabler/icons-react v3.20.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var I=m("outline","tool","IconTool",[["path",{d:"M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5",key:"svg-0"}]]);function V({className:c,items:l,...n}){const{pathname:t}=p(),o=h(),[i,d]=f.useState(t??"/settings"),x=s=>{d(s),o(s)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"p-1 md:hidden",children:e.jsxs(b,{value:i,onValueChange:x,children:[e.jsx(w,{className:"h-12 sm:w-48",children:e.jsx(k,{placeholder:"Theme"})}),e.jsx(T,{children:l.map(s=>e.jsx(L,{value:s.href,children:e.jsxs("div",{className:"flex gap-x-4 px-2 py-1",children:[e.jsx("span",{className:"scale-125",children:s.icon}),e.jsx("span",{className:"text-md",children:s.title})]})},s.href))})]})}),e.jsx("div",{className:"hidden w-full overflow-x-auto bg-background px-1 py-2 md:block",children:e.jsx("nav",{className:r("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",c),...n,children:l.map(s=>e.jsxs(j,{to:s.href,className:r(u({variant:"ghost"}),t===s.href?"bg-muted hover:bg-muted":"hover:bg-transparent hover:underline","justify-start"),children:[e.jsx("span",{className:"mr-2",children:s.icon}),s.title]},s.href))})})]})}function K(){return e.jsxs(a,{fixed:!0,children:[e.jsxs(a.Header,{children:[e.jsx(v,{}),e.jsxs("div",{className:"ml-auto flex items-center space-x-4",children:[e.jsx(S,{}),e.jsx(N,{})]})]}),e.jsxs(a.Body,{className:"flex flex-col",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx("h1",{className:"text-2xl font-bold tracking-tight md:text-3xl",children:"Settings"}),e.jsx("p",{className:"text-muted-foreground",children:"Manage your account settings and set preferences"})]}),e.jsx(y,{className:"my-4 lg:my-6"}),e.jsxs("div",{className:"flex flex-1 flex-col space-y-8 md:space-y-2 md:overflow-hidden lg:flex-row lg:space-x-12 lg:space-y-0",children:[e.jsx("aside",{className:"top-0 lg:sticky lg:w-1/5",children:e.jsx(V,{items:C})}),e.jsx("div",{className:"flex w-full p-1 pr-4 md:overflow-y-hidden",children:e.jsx(g,{})})]})]})]})}const C=[{title:"Account",icon:e.jsx(I,{size:18}),href:"/app/settings"}];export{K as default};