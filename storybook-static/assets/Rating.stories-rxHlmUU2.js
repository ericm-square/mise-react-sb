import{j as r}from"./jsx-runtime-qGIIFXMu.js";import{S as J}from"./Star-7Y6jEKYU.js";import"./index-CDs2tPxN.js";function C(){return r.jsx(r.Fragment,{children:"½"})}C.__docgenInfo={description:"",methods:[],displayName:"StarHalfIcon"};function k(){return r.jsx(r.Fragment,{children:"☆"})}k.__docgenInfo={description:"",methods:[],displayName:"StarEmptyIcon"};const e={"ui-rating":"_ui-rating_1mr3u_1","ui-rating__average":"_ui-rating__average_1mr3u_7","ui-rating__star":"_ui-rating__star_1mr3u_13","ui-rating__content":"_ui-rating__content_1mr3u_19","ui-button":"_ui-button_1mr3u_24"};function z(B){const{average:d,children:D}=B,G=()=>{const s=[];for(let a=1;a<=5;a++)d>=Math.max(0,a-.25)?s.push(r.jsx("span",{className:e.uiRatingStar,children:r.jsx(J,{})},a)):d>a-.75?s.push(r.jsx("span",{className:e.uiRatingStar,children:r.jsx(C,{})},a)):s.push(r.jsx("span",{className:e.uiRatingStar,children:r.jsx(k,{})},a));return s};return r.jsxs("div",{className:e.uiRating,children:[r.jsx("div",{className:e.uiRatingAverage,children:G()}),r.jsx("div",{className:e.uiRatingContent,children:D})]})}z.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{average:{required:!0,tsType:{name:"number"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Q={title:"partials/ui/Rating",component:z},t={args:{average:0}},n={args:{average:1}},o={args:{average:2}},c={args:{average:3}},i={args:{average:4}},g={args:{average:5}},u={args:{average:.5}},m={args:{average:3.5}};var p,l,_;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    average: 0
  }
}`,...(_=(l=t.parameters)==null?void 0:l.docs)==null?void 0:_.source}}};var S,v,h;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    average: 1
  }
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,f,R;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    average: 2
  }
}`,...(R=(f=o.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};var j,N,y;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    average: 3
  }
}`,...(y=(N=c.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var I,F,T;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    average: 4
  }
}`,...(T=(F=i.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var E,H,b;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    average: 5
  }
}`,...(b=(H=g.parameters)==null?void 0:H.docs)==null?void 0:b.source}}};var w,M,O;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    average: 0.5
  }
}`,...(O=(M=u.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var q,Z,A;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    average: 3.5
  }
}`,...(A=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:A.source}}};const U=["ZeroStars","OneStar","TwoStars","ThreeStars","FourStars","FiveStars","HalfStar","MixedStars"];export{g as FiveStars,i as FourStars,u as HalfStar,m as MixedStars,n as OneStar,c as ThreeStars,o as TwoStars,t as ZeroStars,U as __namedExportsOrder,Q as default};
