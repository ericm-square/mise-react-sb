import{j as a}from"./jsx-runtime-qGIIFXMu.js";import{r as H}from"./index-CDs2tPxN.js";const e={"form-checkbox__options":"_form-checkbox__options_1m0lw_1","form-checkbox":"_form-checkbox_1m0lw_1","form-checkbox__option":"_form-checkbox__option_1m0lw_1","form-checkbox--single":"_form-checkbox--single_1m0lw_31","form-checkbox__input":"_form-checkbox__input_1m0lw_40","form-checkbox--invalid":"_form-checkbox--invalid_1m0lw_75","form-checkbox__option--disabled":"_form-checkbox__option--disabled_1m0lw_83","form-checkbox__input-image":"_form-checkbox__input-image_1m0lw_139","form-checkbox__options-collapse":"_form-checkbox__options-collapse_1m0lw_194","form-checkbox__option--hide-divider":"_form-checkbox__option--hide-divider_1m0lw_211","form-checkbox__input-side-label":"_form-checkbox__input-side-label_1m0lw_216","form-checkbox__input-labels":"_form-checkbox__input-labels_1m0lw_217","form-checkbox__input-sublabel":"_form-checkbox__input-sublabel_1m0lw_237"};function $(I){const{label:M,sublabel:c,value:z,parentModel:E,invalid:t,disabled:d,variant:W,size:F,align:L,showDivider:O,indeterminate:m,isRequired:A,singleCheckboxClasses:B}=I,[b,G]=H.useState(!1),u=`checkbox-single-${Math.random().toString(36).substr(2,9)}`;return a.jsx("div",{"data-x-modelable":E?"model":void 0,"data-aria-invalid":t,className:`${e["form-element"]} ${e["form-checkbox"]} ${e["form-checkbox--single"]} ${B}`,"data-class":`{'form-checkbox--invalid': ${t}}`,"data-t-variant":W||"normal","data-t-size":F||"medium","data-t-align":L||"left","data-divider":O?"divider":void 0,children:a.jsx("div",{className:e["form-checkbox__options"],children:a.jsxs("label",{htmlFor:u,className:e["form-checkbox__option"],"data-class":`{ 'form-checkbox__option--indeterminate': ${m}, 'form-checkbox__option--disabled': ${d} }`,children:[a.jsx("input",{id:u,type:"checkbox",className:e["form-checkbox__input"],checked:b===z,disabled:d,"data-indeterminate":m,required:A,onChange:()=>G(!b)}),a.jsxs("span",{className:e["form-checkbox__input-labels"],children:[a.jsx("span",{className:e["form-checkbox__input-label"],children:M}),c&&a.jsx("span",{className:e["form-checkbox__input-sublabel"],children:c})]})]})})})}$.__docgenInfo={description:"",methods:[],displayName:"SingleCheckbox",props:{label:{required:!0,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},sublabel:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"boolean"},description:""},parentModel:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"string"},description:""},showDivider:{required:!1,tsType:{name:"boolean"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:""},singleCheckboxClasses:{required:!1,tsType:{name:"string"},description:""}}};const P={title:"partials/form/SingleCheckbox",component:$},s={args:{label:"Default Checkbox",value:!1}},r={args:{label:"Checked Checkbox",value:!0}},o={args:{label:"Disabled Checkbox",value:!1,disabled:!0}},i={args:{label:"Checkbox with Sublabel",sublabel:"This is a sublabel",value:!1}},l={args:{label:"Indeterminate Checkbox",value:!1,indeterminate:!0}},n={args:{label:"Required Checkbox",value:!1,isRequired:!0}};var p,_,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Default Checkbox',
    value: false
  }
}`,...(h=(_=s.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var f,x,k;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Checked Checkbox',
    value: true
  }
}`,...(k=(x=r.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var g,v,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Checkbox',
    value: false,
    disabled: true
  }
}`,...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var q,w,y;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox with Sublabel',
    sublabel: 'This is a sublabel',
    value: false
  }
}`,...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var T,S,D;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Indeterminate Checkbox',
    value: false,
    indeterminate: true
  }
}`,...(D=(S=l.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var j,R,N;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Required Checkbox',
    value: false,
    isRequired: true
  }
}`,...(N=(R=n.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const Q=["Default","Checked","Disabled","WithSublabel","Indeterminate","Required"];export{r as Checked,s as Default,o as Disabled,l as Indeterminate,n as Required,i as WithSublabel,Q as __namedExportsOrder,P as default};
