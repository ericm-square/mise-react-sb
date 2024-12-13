import{j as P}from"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";const n={"ui-progress-bar":"_ui-progress-bar_o2eel_1","ui-progress-bar--empty":"_ui-progress-bar--empty_o2eel_51"};function _(b){const{percentage:e,parentModel:t,size:f,progressClasses:v}=b;return P.jsx("progress",{"data-x-data":`{ percentage: ${e} }`,className:`${n["ui-progress-bar"]} ${v}`,"data-x-modelable":t?"percentage":void 0,"data-x-model":t,"data-class":Number(e)===0?n["ui-progress-bar--empty"]:void 0,value:e,"aria-valuemin":0,"aria-valuenow":e,"aria-valuemax":100,max:"100","data-t-size":f})}_.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{percentage:{required:!0,tsType:{name:"number"},description:""},parentModel:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'large' | 'extra-large'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'extra-large'"}]},description:""},progressClasses:{required:!1,tsType:{name:"string"},description:""}}};const E={title:"partials/ui/Progress",component:_},r={args:{percentage:50,size:"small",progressClasses:""}},s={args:{percentage:75,size:"medium",progressClasses:"",parentModel:"exampleModel"}},a={args:{percentage:0,size:"large",progressClasses:""}},o={args:{percentage:100,size:"extra-large",progressClasses:""}};var p,l,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    percentage: 50,
    size: 'small',
    progressClasses: ''
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var g,m,c;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    percentage: 75,
    size: 'medium',
    progressClasses: '',
    parentModel: 'exampleModel'
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,u,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    percentage: 0,
    size: 'large',
    progressClasses: ''
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var y,z,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    percentage: 100,
    size: 'extra-large',
    progressClasses: ''
  }
}`,...(C=(z=o.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const S=["Default","WithParentModel","EmptyProgress","FullProgress"];export{r as Default,a as EmptyProgress,o as FullProgress,s as WithParentModel,S as __namedExportsOrder,E as default};
