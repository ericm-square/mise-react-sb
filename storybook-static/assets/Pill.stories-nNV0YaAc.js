import{j as D}from"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";const W={"ui-pills-container":"_ui-pills-container_1ww7n_2","ui-pill":"_ui-pill_1ww7n_2"};function C(b){const{label:z="Pill",type:q="default",size:A="small",variant:w="text",shape:_="squared",uppercase:S=!1,interactive:T=!1,shouldAnnounce:x=!1,pillClasses:I=""}=b;return D.jsx("div",{"data-t-type":q,"data-t-size":A,"data-t-variant":w,"data-t-shape":_,className:`${W["ui-pill"]} ${I}`,...x&&{"aria-live":"polite"},...S&&{"data-uppercase":!0},...T&&{"data-interactive":!0},children:z})}C.__docgenInfo={description:"",methods:[],displayName:"Pill",props:{label:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'critical' | 'emphasis'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'critical'"},{name:"literal",value:"'emphasis'"}]},description:""},size:{required:!1,tsType:{name:"literal",value:"'small'"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'text' | 'outline' | 'fill'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'fill'"}]},description:""},shape:{required:!1,tsType:{name:"union",raw:"'squared' | 'rounded'",elements:[{name:"literal",value:"'squared'"},{name:"literal",value:"'rounded'"}]},description:""},uppercase:{required:!1,tsType:{name:"boolean"},description:""},interactive:{required:!1,tsType:{name:"boolean"},description:""},shouldAnnounce:{required:!1,tsType:{name:"boolean"},description:""},pillClasses:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"partials/ui/Pill",component:C},e={args:{label:"Default Pill",type:"info",size:"normal",variant:"fill",shape:"pill",uppercase:!0,interactive:!1,shouldAnnounce:!1,pillClasses:""}},a={args:{label:"Success Pill",type:"success",size:"normal",variant:"fill",shape:"pill",uppercase:!0,interactive:!1,shouldAnnounce:!1,pillClasses:""}},l={args:{label:"Warning Pill",type:"warning",size:"normal",variant:"fill",shape:"pill",uppercase:!0,interactive:!1,shouldAnnounce:!1,pillClasses:""}},s={args:{label:"Critical Pill",type:"critical",size:"normal",variant:"fill",shape:"pill",uppercase:!0,interactive:!1,shouldAnnounce:!1,pillClasses:""}},n={args:{label:"Interactive Pill",type:"info",size:"normal",variant:"fill",shape:"pill",uppercase:!0,interactive:!0,shouldAnnounce:!1,pillClasses:""}};var i,r,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Default Pill',
    type: 'info',
    size: 'normal',
    variant: 'fill',
    shape: 'pill',
    uppercase: true,
    interactive: false,
    shouldAnnounce: false,
    pillClasses: ''
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var p,c,o;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Success Pill',
    type: 'success',
    size: 'normal',
    variant: 'fill',
    shape: 'pill',
    uppercase: true,
    interactive: false,
    shouldAnnounce: false,
    pillClasses: ''
  }
}`,...(o=(c=a.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var u,d,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Warning Pill',
    type: 'warning',
    size: 'normal',
    variant: 'fill',
    shape: 'pill',
    uppercase: true,
    interactive: false,
    shouldAnnounce: false,
    pillClasses: ''
  }
}`,...(m=(d=l.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var f,v,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Critical Pill',
    type: 'critical',
    size: 'normal',
    variant: 'fill',
    shape: 'pill',
    uppercase: true,
    interactive: false,
    shouldAnnounce: false,
    pillClasses: ''
  }
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,y,P;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Interactive Pill',
    type: 'info',
    size: 'normal',
    variant: 'fill',
    shape: 'pill',
    uppercase: true,
    interactive: true,
    shouldAnnounce: false,
    pillClasses: ''
  }
}`,...(P=(y=n.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const $=["Default","SuccessPill","WarningPill","CriticalPill","InteractivePill"];export{s as CriticalPill,e as Default,n as InteractivePill,a as SuccessPill,l as WarningPill,$ as __namedExportsOrder,N as default};
