import{u as P,c as b,j as n,P as g,_ as w,m as B,n as L,r as I,l as k,o as A,p as C,C as T,g as S,f as D,h as G,i as H,B as O,k as W,A as E}from"./sanity-6424f615.js";var f=Object.freeze,z=Object.defineProperty,F=(o,s)=>f(z(o,"raw",{value:f(s||o.slice())})),y;const R=P.hr(y||(y=F([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function K(o){const{childItemId:s,items:t,isActive:i,layout:c,showIcons:r,title:l}=o,{collapsed:u}=B(),d=L(t==null?void 0:t.filter(e=>e.type!=="divider")),m=I.useCallback(e=>{var a;return((a=t==null?void 0:t.find((p,x)=>x===e))==null?void 0:a.type)==="divider"},[t]),h=I.useCallback(e=>{var a;const p=(a=e.displayOptions)==null?void 0:a.showIcon;return typeof p<"u"?p!==!1:r!==!1},[r]),v=I.useCallback((e,a)=>{const{virtualIndex:p}=a;if(e.type==="divider")return n.jsx(k,{marginBottom:1,children:n.jsx(R,{})},"divider-".concat(p));const x=!i&&s===e.id,_=i&&s===e.id,j=e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0;return n.jsx(A,{icon:h(e)?e.icon:!1,id:e.id,layout:c,marginBottom:1,pressed:x,schemaType:e.schemaType,selected:_,title:d(e).title,value:j},e.id)},[s,d,i,c,h]);return n.jsx(C,{overflow:u?"hidden":"auto",children:t&&t.length>0&&n.jsx(T,{activeItemDataAttr:"data-hovered",ariaLabel:l,canReceiveFocus:!0,getItemDisabled:m,itemHeight:51,items:t,onlyShowSelectionWhenActive:!0,paddingBottom:1,paddingX:3,renderItem:v,wrapAround:!1})})}const M=o=>{let{index:s,menuItems:t,menuItemGroups:i,title:c}=o;const{features:r}=S(),{collapsed:l,isLast:u}=D(),d=u&&!l?-1:0;return n.jsx(G,{actions:n.jsx(H,{menuItems:t,menuItemGroups:i}),backButton:r.backButton&&s>0&&n.jsx(O,{as:W,"data-as":"a",icon:E,mode:"bleed",tooltipProps:{content:"Back"}}),tabIndex:d,title:c})};function X(o){const{childItemId:s,index:t,isActive:i,isSelected:c,pane:r,paneKey:l}=o,{defaultLayout:u,displayOptions:d,items:m,menuItems:h,menuItemGroups:v}=r,e=(d==null?void 0:d.showIcons)!==!1,{title:a}=b(r);return n.jsxs(g,{currentMaxWidth:350,"data-testid":"structure-tool-list-pane","data-ui":"ListPane",id:l,maxWidth:640,minWidth:320,selected:c,children:[w,n.jsx(M,{index:t,menuItems:h,menuItemGroups:v,title:a}),n.jsx(K,{childItemId:s,isActive:i,items:m,layout:u,showIcons:e,title:a},l)]})}export{X as default};
