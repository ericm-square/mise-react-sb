import{j as e}from"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";const a={"ui-row":"_ui-row_1gmaj_1","ui-row__leading":"_ui-row__leading_1gmaj_18","ui-row__label":"_ui-row__label_1gmaj_19","ui-row__sublabel":"_ui-row__sublabel_1gmaj_20","ui-row__trailing":"_ui-row__trailing_1gmaj_21"};function $(I){const{selected:d,disabled:c,leading:p,title:O,text:u,trailing:g}=I;return e.jsxs("div",{className:`${a["ui-row"]} ${d?a.selected:""} ${c?a.disabled:""}`,"data-selected":d,"data-disabled":c,children:[p&&e.jsx("div",{className:a["ui-row__leading"],children:p}),e.jsxs("div",{className:a["ui-row__label"],children:[e.jsx("div",{children:O}),u&&e.jsx("div",{className:a["ui-row__sublabel"],children:u})]}),g&&e.jsx("div",{className:a["ui-row__trailing"],children:g})]})}$.__docgenInfo={description:"",methods:[],displayName:"Row",props:{selected:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},leading:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},text:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailing:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const A={title:"partials/ui/Row",component:$},t={args:{title:"Default Title"}},s={args:{selected:!0,title:"Selected Row"}},i={args:{disabled:!0,title:"Disabled Row"}},r={args:{leading:e.jsx("span",{children:"Leading Content"}),title:"Row with Leading"}},n={args:{title:"Row with Text",text:"This is some additional text."}},o={args:{title:"Row with Trailing",trailing:e.jsx("span",{children:"Trailing Content"})}},l={args:{selected:!0,disabled:!1,leading:e.jsx("span",{children:"Leading Content"}),title:"Full Example Row",text:"This is some additional text.",trailing:e.jsx("span",{children:"Trailing Content"})}};var m,_,w;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Default Title'
  }
}`,...(w=(_=t.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var x,R,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    selected: true,
    title: 'Selected Row'
  }
}`,...(h=(R=s.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var T,b,j;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true,
    title: 'Disabled Row'
  }
}`,...(j=(b=i.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var f,N,S;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    leading: <span>Leading Content</span>,
    title: 'Row with Leading'
  }
}`,...(S=(N=r.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var y,C,D;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Row with Text',
    text: 'This is some additional text.'
  }
}`,...(D=(C=n.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var L,q,v;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'Row with Trailing',
    trailing: <span>Trailing Content</span>
  }
}`,...(v=(q=o.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var E,W,F;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    selected: true,
    disabled: false,
    leading: <span>Leading Content</span>,
    title: 'Full Example Row',
    text: 'This is some additional text.',
    trailing: <span>Trailing Content</span>
  }
}`,...(F=(W=l.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const B=["Default","Selected","Disabled","WithLeading","WithText","WithTrailing","FullExample"];export{t as Default,i as Disabled,l as FullExample,s as Selected,r as WithLeading,n as WithText,o as WithTrailing,B as __namedExportsOrder,A as default};
