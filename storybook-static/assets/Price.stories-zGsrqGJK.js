import{j as a}from"./jsx-runtime-qGIIFXMu.js";import{S as D}from"./Star-7Y6jEKYU.js";import"./index-CDs2tPxN.js";const u={"ui-price":"_ui-price_g9ami_1","ui-price__regular":"_ui-price__regular_g9ami_28","ui-price__final":"_ui-price__final_g9ami_34"};function S(q){const{price:o,onSale:l,unitSuffix:r,size:k,variant:s,color:$,weight:x,italic:j,bold:T,priceClasses:z,formattedPrice:e}=q,m=(e==null?void 0:e.regular)||o.regular_low,C=(e==null?void 0:e.final)||o.low,c=o.regular_high,d=c&&m.amount!==c.amount;return a.jsxs("div",{className:`${u["ui-price"]} ${z}`,"data-t-size":k,"data-t-variant":s,style:{fontWeight:x||(T?"var(--theme-font-weight-heavy)":"var(--theme-font-weight-light)"),fontStyle:j?"italic":"normal"},children:[l&&a.jsxs("div",{className:u["ui-price__regular"],children:[m.formatted,d&&"+",r&&` / ${r}`]}),a.jsxs("div",{className:u["ui-price__final"],"aria-live":"polite",style:{color:$},children:[l&&s==="sale"&&a.jsx(D,{}),C.formatted,d&&"+",r&&` / ${r}`]})]})}S.__docgenInfo={description:"",methods:[],displayName:"Price",props:{price:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  regular_low: {
    amount: number;
    formatted: string;
  };
  low: {
    amount: number;
    formatted: string;
  };
  regular_high: {
    amount: number;
    formatted: string;
  };
  currency: string;
}`,signature:{properties:[{key:"regular_low",value:{name:"signature",type:"object",raw:`{
  amount: number;
  formatted: string;
}`,signature:{properties:[{key:"amount",value:{name:"number",required:!0}},{key:"formatted",value:{name:"string",required:!0}}]},required:!0}},{key:"low",value:{name:"signature",type:"object",raw:`{
  amount: number;
  formatted: string;
}`,signature:{properties:[{key:"amount",value:{name:"number",required:!0}},{key:"formatted",value:{name:"string",required:!0}}]},required:!0}},{key:"regular_high",value:{name:"signature",type:"object",raw:`{
  amount: number;
  formatted: string;
}`,signature:{properties:[{key:"amount",value:{name:"number",required:!0}},{key:"formatted",value:{name:"string",required:!0}}]},required:!0}},{key:"currency",value:{name:"string",required:!0}}]}},description:""},onSale:{required:!0,tsType:{name:"boolean"},description:""},unitSuffix:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'extra-large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'extra-large'"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'sale'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'sale'"}]},description:""},color:{required:!1,tsType:{name:"string"},description:""},weight:{required:!1,tsType:{name:"union",raw:"'light' | 'heavy'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'heavy'"}]},description:""},italic:{required:!1,tsType:{name:"boolean"},description:""},bold:{required:!1,tsType:{name:"boolean"},description:""},priceClasses:{required:!1,tsType:{name:"string"},description:""},formattedPrice:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  regular: {
    amount: number;
    formatted: string;
  };
  final: {
    amount: number;
    formatted: string;
  };
}`,signature:{properties:[{key:"regular",value:{name:"signature",type:"object",raw:`{
  amount: number;
  formatted: string;
}`,signature:{properties:[{key:"amount",value:{name:"number",required:!0}},{key:"formatted",value:{name:"string",required:!0}}]},required:!0}},{key:"final",value:{name:"signature",type:"object",raw:`{
  amount: number;
  formatted: string;
}`,signature:{properties:[{key:"amount",value:{name:"number",required:!0}},{key:"formatted",value:{name:"string",required:!0}}]},required:!0}}]}},description:""}}};const E={title:"partials/ui/Price",component:S},n={args:{price:{regular_low:{amount:100,formatted:"$100"},low:{amount:80,formatted:"$80"},regular_high:{amount:120,formatted:"$120"},currency:"USD"},onSale:!0,size:"normal",variant:"standard",color:"#000",weight:"bold",bold:!0,italic:"italic",priceClasses:"custom-price-class",unitSuffix:"kg"}},t={args:{price:{regular_low:{amount:100,formatted:"$100"},low:{amount:80,formatted:"$80"},regular_high:{amount:120,formatted:"$120"},currency:"USD"},onSale:!0,size:"normal",variant:"sale",color:"#ff0000",weight:"bold",bold:!0,italic:"italic",priceClasses:"custom-price-class",unitSuffix:"kg"}},i={args:{price:{regular_low:{amount:100,formatted:"$100"},low:{amount:100,formatted:"$100"},regular_high:{amount:120,formatted:"$120"},currency:"USD"},onSale:!1,size:"normal",variant:"standard",color:"#000",weight:"normal",bold:!1,italic:"normal",priceClasses:"custom-price-class",unitSuffix:"kg"}};var g,p,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    price: {
      regular_low: {
        amount: 100,
        formatted: '$100'
      },
      low: {
        amount: 80,
        formatted: '$80'
      },
      regular_high: {
        amount: 120,
        formatted: '$120'
      },
      currency: 'USD'
    },
    onSale: true,
    size: 'normal',
    variant: 'standard',
    color: '#000',
    weight: 'bold',
    bold: true,
    italic: 'italic',
    priceClasses: 'custom-price-class',
    unitSuffix: 'kg'
  }
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var y,h,_;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    price: {
      regular_low: {
        amount: 100,
        formatted: '$100'
      },
      low: {
        amount: 80,
        formatted: '$80'
      },
      regular_high: {
        amount: 120,
        formatted: '$120'
      },
      currency: 'USD'
    },
    onSale: true,
    size: 'normal',
    variant: 'sale',
    color: '#ff0000',
    weight: 'bold',
    bold: true,
    italic: 'italic',
    priceClasses: 'custom-price-class',
    unitSuffix: 'kg'
  }
}`,...(_=(h=t.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var v,w,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    price: {
      regular_low: {
        amount: 100,
        formatted: '$100'
      },
      low: {
        amount: 100,
        formatted: '$100'
      },
      regular_high: {
        amount: 120,
        formatted: '$120'
      },
      currency: 'USD'
    },
    onSale: false,
    size: 'normal',
    variant: 'standard',
    color: '#000',
    weight: 'normal',
    bold: false,
    italic: 'normal',
    priceClasses: 'custom-price-class',
    unitSuffix: 'kg'
  }
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const I=["Default","SaleVariant","NoSale"];export{n as Default,i as NoSale,t as SaleVariant,I as __namedExportsOrder,E as default};
