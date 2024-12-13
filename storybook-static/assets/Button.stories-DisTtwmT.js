import{j as e}from"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";const t={"ui-button":"_ui-button_1xqyd_1","ui-button--icon-only":"_ui-button--icon-only_1xqyd_199","ui-button__label":"_ui-button__label_1xqyd_230","ui-button__sublabel":"_ui-button__sublabel_1xqyd_237","ui-button-dropdown__label":"_ui-button-dropdown__label_1xqyd_252","ui-button-dropdown__empty-label":"_ui-button-dropdown__empty-label_1xqyd_261","ui-button-dropdown__label-wrapper":"_ui-button-dropdown__label-wrapper_1xqyd_265","ui-button__label--standalone":"_ui-button__label--standalone_1xqyd_285","ui-button--focus":"_ui-button--focus_1xqyd_292","ui-button-dropdown--expanded":"_ui-button-dropdown--expanded_1xqyd_368","ui-button-dropdown--collapsed":"_ui-button-dropdown--collapsed_1xqyd_369","ui-button__icon--dropdown":"_ui-button__icon--dropdown_1xqyd_381","ui-button__icon--prefix":"_ui-button__icon--prefix_1xqyd_387","ui-button--disable-hover":"_ui-button--disable-hover_1xqyd_435","ui-button__icon--suffix":"_ui-button__icon--suffix_1xqyd_939","ui-button__icon":"_ui-button__icon_1xqyd_381","ui-button__overlay":"_ui-button__overlay_1xqyd_1228","ui-button__overlay--success":"_ui-button__overlay--success_1xqyd_1243"};function A(I){const{label:l,sublabel:u,variant:H="primary",style:k="fill",size:E="medium",align:M="center",iconPrefix:d,iconPrefixClasses:R,iconSuffix:c,iconSuffixClasses:O,fullWidth:p,disabled:m,contrast:_,opaque:b,destructive:G,buttonClasses:y="",link:f,buttonType:J="button"}=I,x=e.jsxs(e.Fragment,{children:[d&&e.jsx("span",{className:`${t["ui-button__icon"]} ${t["ui-button__icon--prefix"]} ${R}`,children:d}),l&&e.jsx("span",{className:t["ui-button__label"],children:l}),u&&e.jsx("span",{className:t["ui-button__sublabel"],children:u}),c&&e.jsx("span",{className:`${t["ui-button__icon"]} ${t["ui-button__icon--suffix"]} ${O}`,children:c})]});return f?e.jsx("a",{href:f,className:`${t["ui-button"]} ${y}`,"data-contrast":_,"data-fullwidth":p,"data-opaque":b,"data-disabled":m,children:x}):e.jsx("button",{type:J,className:`${t["ui-button"]} ${y}`,"data-t-variant":H,"data-t-style":k,"data-t-size":E,"data-t-align":M,"data-fullwidth":p,"data-opaque":b,"data-destructive":G,disabled:m,"data-contrast":_,children:x})}A.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!1,tsType:{name:"string"},description:""},sublabel:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'subtle' | 'neutral' | 'row'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'subtle'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'row'"}]},description:""},style:{required:!1,tsType:{name:"union",raw:"'fill' | 'outline'",elements:[{name:"literal",value:"'fill'"},{name:"literal",value:"'outline'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'compact' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},align:{required:!1,tsType:{name:"union",raw:"'center' | 'left' | 'right' | 'space-between' | 'flex-end'",elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'flex-end'"}]},description:""},iconPrefix:{required:!1,tsType:{name:"string"},description:""},iconPrefixAlt:{required:!1,tsType:{name:"string"},description:""},iconPrefixClasses:{required:!1,tsType:{name:"string"},description:""},iconSuffix:{required:!1,tsType:{name:"string"},description:""},iconSuffixAlt:{required:!1,tsType:{name:"string"},description:""},iconSuffixClasses:{required:!1,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},destructive:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},contrast:{required:!1,tsType:{name:"boolean"},description:""},opaque:{required:!1,tsType:{name:"boolean"},description:""},disableHoverStyles:{required:!1,tsType:{name:"boolean"},description:""},isDropdown:{required:!1,tsType:{name:"boolean"},description:""},disableDropdownToggle:{required:!1,tsType:{name:"boolean"},description:""},buttonClasses:{required:!1,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:""},action:{required:!1,tsType:{name:"string"},description:""},actionOnFocus:{required:!1,tsType:{name:"boolean"},description:""},skipActionPrevent:{required:!1,tsType:{name:"boolean"},description:""},stopPropagation:{required:!1,tsType:{name:"boolean"},description:""},buttonType:{required:!1,tsType:{name:"ReactButtonHTMLAttributes['type']",raw:"React.ButtonHTMLAttributes<HTMLButtonElement>['type']"},description:""}}};const U={title:"partials/ui/Button",component:A},a={args:{label:"Default Button",variant:"primary",size:"medium"}},n={args:{label:"Secondary Button",variant:"secondary",size:"medium"}},r={args:{label:"Large Button",variant:"primary",size:"large"}},i={args:{label:"Button with Icon",variant:"primary",size:"medium",iconPrefix:"🔍"}},s={args:{label:"Disabled Button",variant:"primary",size:"medium",disabled:!0}},o={args:{label:"Full Width Button",variant:"primary",size:"medium",fullWidth:!0}};var q,g,v;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Default Button',
    variant: 'primary',
    size: 'medium'
  }
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var T,w,h;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'medium'
  }
}`,...(h=(w=n.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var B,S,z;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Large Button',
    variant: 'primary',
    size: 'large'
  }
}`,...(z=(S=r.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var D,W,$;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Button with Icon',
    variant: 'primary',
    size: 'medium',
    iconPrefix: '🔍'
  }
}`,...($=(W=i.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var j,P,C;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    disabled: true
  }
}`,...(C=(P=s.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var L,N,F;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Button',
    variant: 'primary',
    size: 'medium',
    fullWidth: true
  }
}`,...(F=(N=o.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};const V=["Default","Secondary","Large","WithIcon","Disabled","FullWidth"];export{a as Default,s as Disabled,o as FullWidth,r as Large,n as Secondary,i as WithIcon,V as __namedExportsOrder,U as default};
