import{j as o,r}from"./index-C7_VpNE9.js";import{c}from"./helper-CaAdfMs7.js";import{F as x}from"./FloatPopover-D7Fqheg4.js";import"./spring-BiPrtYZ-.js";import"./use-event-callback-CfAhoCBv.js";import"./use-is-client-BvrDJVm2.js";import"./env-CUAg77w2.js";import"./index-CKlWRyyR.js";import"./motion-minimal-ChEqHroa.js";const h=t=>t.offsetWidth<t.scrollWidth||t.offsetHeight<t.scrollHeight,w=t=>{const{children:e,className:i,width:l,disabled:p,wrapperClassName:m}=t,[s,d]=r.useState(),[f,u]=r.useState(!1),n=()=>{s&&u(h(s))};return r.useEffect(()=>{n()},[s,e]),r.useEffect(()=>{if(!s)return;const a=new ResizeObserver(()=>{n()});return a.observe(s),()=>{a.disconnect()}},[s]),o.jsx(x,{type:"tooltip",wrapperClassName:c("w-full min-w-0 truncate",m),isDisabled:!f||p,TriggerComponent:r.useCallback(()=>o.jsx("span",{className:i,ref:d,style:l?{maxWidth:l}:void 0,children:e}),[e,i,l]),children:o.jsx("span",{className:"max-w-[30vw] break-all hover:!bg-transparent",onClick:a=>a.stopPropagation(),children:e})})},v=t=>{const{className:e,...i}=t;return o.jsx(w,{className:c("block truncate",e),...i})},T=()=>o.jsx(v,{width:"12rem",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"});T.meta={title:"文本溢出省略 + 提示",description:"如果文本溢出则省略，省略时伴随 Tooltip 提示"};const R={title:"文本溢出",description:"一个简单的处理文本溢出省略的组件"};export{T as EllipsisTextWithTooltipDemo,R as metadata};
