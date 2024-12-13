import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as s}from"./index-CDs2tPxN.js";const r={"form-element":"_form-element_51rde_1","form-textarea":"_form-textarea_51rde_1","form-textarea__inner":"_form-textarea__inner_51rde_6","form-textarea--focus":"_form-textarea--focus_51rde_17","form-textarea--disabled":"_form-textarea--disabled_51rde_22","form-textarea--invalid":"_form-textarea--invalid_51rde_28","form-element__label":"_form-element__label_51rde_36","form-textarea--empty":"_form-textarea--empty_51rde_44","form-textarea__input":"_form-textarea__input_51rde_48","form-textarea__text-length":"_form-textarea__text-length_51rde_76"};function N(W){const{label:d,hint:_,max:m,parentModel:F,name:A,disabled:c,resize:u,errorMessage:p,textareaClasses:C}=W,[x,I]=s.useState(""),[t,h]=s.useState(!1),f=s.useRef(null),a=`textarea-${Math.random().toString(36).substr(2,9)}`,z=`textarea-form-data-${Math.random().toString(36).substr(2,9)}`,g=!!d,R=!!_;s.useEffect(()=>{t&&f.current&&f.current.focus()},[t]);const O=()=>h(!0),k=()=>h(!1);return e.jsxs("div",{"data-x-effect":"isFocused ? $nextTick(() => $refs.textarea.focus()) : null","data-x-modelable":F?"model":void 0,"aria-invalid":t,"aria-describedby":g?`${a}__label`:void 0,className:`${r["form-element"]} ${r["form-textarea"]} ${C} ${!x.length&&!R?r["form-textarea--empty"]:""} ${t?r["form-textarea--focus"]:""} ${c?r["form-textarea--disabled"]:""} ${t?r["form-textarea--invalid"]:""}`,style:u?{"--ui-textarea-resize-override":u}:void 0,children:[e.jsx("script",{id:z,type:"application/json",children:JSON.stringify({isDisabled:c})}),g&&e.jsx("label",{id:`${a}__label`,htmlFor:`textarea-${a}`,className:"form-element__label",children:d}),e.jsx("div",{className:"form-textarea__inner",children:e.jsx("textarea",{id:a,ref:f,value:x,onChange:w=>I(w.target.value),name:A||d,placeholder:_||"",rows:2,maxLength:m,className:"form-textarea__input",disabled:c,onFocus:O,onBlur:k})}),m&&e.jsxs("div",{className:"form-textarea__text-length",children:[e.jsx("span",{children:x.length})," / ",m]}),p&&e.jsx("div",{className:"form-element__error",children:p})]})}N.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},max:{required:!1,tsType:{name:"number"},description:""},parentModel:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},resize:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},textareaClasses:{required:!1,tsType:{name:"string"},description:""}}};const J={title:"partials/form/TextArea",component:N},n={args:{label:"Default Label",hint:"Enter text here..."}},o={args:{label:"With Max Length",hint:"Enter text here...",max:100}},i={args:{label:"Disabled TextArea",hint:"Cannot enter text",disabled:!0}},l={args:{label:"With Error Message",hint:"Enter text here...",errorMessage:"This field is required."}};var b,T,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Default Label',
    hint: 'Enter text here...'
  }
}`,...(y=(T=n.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var M,v,E;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'With Max Length',
    hint: 'Enter text here...',
    max: 100
  }
}`,...(E=(v=o.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var $,j,q;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Disabled TextArea',
    hint: 'Cannot enter text',
    disabled: true
  }
}`,...(q=(j=i.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var D,S,L;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'With Error Message',
    hint: 'Enter text here...',
    errorMessage: 'This field is required.'
  }
}`,...(L=(S=l.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};const G=["Default","WithMaxLength","Disabled","WithErrorMessage"];export{n as Default,i as Disabled,l as WithErrorMessage,o as WithMaxLength,G as __namedExportsOrder,J as default};
