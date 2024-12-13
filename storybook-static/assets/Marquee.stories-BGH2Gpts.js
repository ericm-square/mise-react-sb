import{j as t}from"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";const o={"ui-marquee-container":"_ui-marquee-container_mqbro_1","ui-marquee":"_ui-marquee_mqbro_1","ui-marquee--direction-right":"_ui-marquee--direction-right_mqbro_39","scroll-right":"_scroll-right_mqbro_1","ui-marquee--direction-left":"_ui-marquee--direction-left_mqbro_43","scroll-left":"_scroll-left_mqbro_1"};function m(d){const{direction:p,content:i}=d;return t.jsx("div",{className:o["ui-marquee-container"],children:[...Array(5)].map((q,_)=>t.jsx("div",{className:`${o["ui-marquee"]} ${o[`ui-marquee--direction-${p}`]}`,"data-text":i,children:t.jsx("span",{children:i})},_))})}m.__docgenInfo={description:"",methods:[],displayName:"Marquee",props:{direction:{required:!0,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},content:{required:!0,tsType:{name:"string"},description:""}}};const h={title:"partials/ui/Marquee",component:m},e={args:{direction:"left",content:"Hello, world!"}},r={args:{direction:"right",content:"Hello, world!"}};var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    direction: 'left',
    content: 'Hello, world!'
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var c,l,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    direction: 'right',
    content: 'Hello, world!'
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const x=["LeftToRight","RightToLeft"];export{e as LeftToRight,r as RightToLeft,x as __namedExportsOrder,h as default};
