import{j as a,u as o,o as c,B as r,t as d}from"./index-D-v0RGVJ.js";import{I as l}from"./input-q4i4jPww.js";import{A as m,a as u,b as h}from"./avatar-DnZVRS6c.js";import{D as p,a as x,b as g,d as j,e as t,c as v}from"./theme-switch-CRZ_HEbF.js";import{h as w,b as N}from"./firebase-Bu969cej.js";function k(){return a.jsx("div",{children:a.jsx(l,{type:"search",placeholder:"Search...",className:"md:w-[100px] lg:w-[300px]"})})}function B(){const n=o(),e=c(s=>s.database.SelfInfo),i=async()=>{try{await w(N),d({title:"You have been logged out successfully",description:"You will be redirected to the sign-in page"}),n("/sign-in",{replace:!0})}catch(s){console.error("Error signing out:",s)}};return a.jsxs(p,{children:[a.jsx(x,{asChild:!0,children:a.jsx(r,{variant:"ghost",className:"relative h-8 w-8 rounded-full",children:a.jsxs(m,{className:"h-8 w-8",children:[a.jsx(u,{src:"/avatars/01.png",alt:"@shadcn"}),a.jsx(h,{children:e!=null&&e.name?e.name.split(" ").length===1?e.name.substring(0,2):e.name.split(" ").slice(0,2).map(s=>s[0]).join(""):".."})]})})}),a.jsxs(g,{className:"w-56",align:"end",forceMount:!0,children:[a.jsx(j,{className:"font-normal",children:a.jsxs("div",{className:"flex flex-col space-y-1",children:[a.jsx("p",{className:"text-sm font-medium leading-none",children:e!=null&&e.name?e==null?void 0:e.name:"..."}),a.jsx("p",{className:"text-xs leading-none text-muted-foreground",children:e!=null&&e.email?e==null?void 0:e.email:"..."})]})}),a.jsx(t,{}),a.jsx(t,{}),a.jsx(v,{children:a.jsx(r,{variant:"ghost",onClick:i,children:"Log out"})})]})]})}export{k as S,B as U};