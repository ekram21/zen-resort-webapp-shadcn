import{c as i,j as e,B as c,L as r,a as m}from"./index-DU4IaJNo.js";import{D as l,a as x,b as u,e as p}from"./dropdown-menu-cP9tqBFq.js";/**
 * @license @tabler/icons-react v3.20.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var h=i("outline","menu","IconMenu",[["path",{d:"M4 8l16 0",key:"svg-0"}],["path",{d:"M4 16l16 0",key:"svg-1"}]]);function v({className:o,links:t,...d}){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"md:hidden",children:e.jsxs(l,{children:[e.jsx(x,{asChild:!0,children:e.jsx(c,{size:"icon",variant:"outline",children:e.jsx(h,{})})}),e.jsx(u,{side:"bottom",align:"start",children:t.map(({title:n,href:s,isActive:a})=>e.jsx(p,{asChild:!0,children:e.jsx(r,{to:s,className:a?"":"text-muted-foreground",children:n})},`${n}-${s}`))})]})}),e.jsx("nav",{className:m("hidden items-center space-x-4 md:flex lg:space-x-6",o),...d,children:t.map(({title:n,href:s,isActive:a})=>e.jsx(r,{to:s,className:`text-sm font-medium transition-colors hover:text-primary ${a?"":"text-muted-foreground"}`,children:n},`${n}-${s}`))})]})}export{v as T};
