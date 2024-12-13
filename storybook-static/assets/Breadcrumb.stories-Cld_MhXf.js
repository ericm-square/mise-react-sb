import{j as r}from"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";const i={"ui-breadcrumb":"_ui-breadcrumb_1z0lu_1"};function f(h){const{breadcrumb:_,uppercase:x,size:v}=h;return r.jsx("ul",{className:i["ui-breadcrumb"],"data-t-size":v,"data-uppercase":x,children:_.map((e,j)=>r.jsx("li",{className:i["ui-breadcrumb__link"],children:e.link?r.jsx("a",{href:e.link,children:e.title}):r.jsx("span",{children:e.title})},j))})}f.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{breadcrumb:{required:!0,tsType:{name:"Array",elements:[{name:"IBreadcrumb"}],raw:"IBreadcrumb[]"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},uppercase:{required:!1,tsType:{name:"boolean"},description:""}}};const B={title:"partials/ui/Breadcrumb",component:f},s={args:{breadcrumb:[{title:"Home",link:"/"},{title:"Products",link:"/products"},{title:"Shoes",link:"/products/shoes"},{title:"Running Shoes"}],size:"small",uppercase:!0}},t={args:{breadcrumb:[{title:"Home",link:"/"},{title:"About Us",link:"/about"},{title:"Our Team"}],size:"medium",uppercase:!1}},a={args:{breadcrumb:[{title:"Home",link:"/"},{title:"Services",link:"/services"},{title:"Consulting"}],size:"large",uppercase:!0}},n={args:{breadcrumb:[{title:"Step 1"},{title:"Step 2"},{title:"Step 3"}],size:"small",uppercase:!1}};var l,u,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    breadcrumb: [{
      title: 'Home',
      link: '/'
    }, {
      title: 'Products',
      link: '/products'
    }, {
      title: 'Shoes',
      link: '/products/shoes'
    }, {
      title: 'Running Shoes'
    }],
    size: 'small',
    uppercase: true
  }
}`,...(c=(u=s.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var o,m,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    breadcrumb: [{
      title: 'Home',
      link: '/'
    }, {
      title: 'About Us',
      link: '/about'
    }, {
      title: 'Our Team'
    }],
    size: 'medium',
    uppercase: false
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,b,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    breadcrumb: [{
      title: 'Home',
      link: '/'
    }, {
      title: 'Services',
      link: '/services'
    }, {
      title: 'Consulting'
    }],
    size: 'large',
    uppercase: true
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var S,k,z;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    breadcrumb: [{
      title: 'Step 1'
    }, {
      title: 'Step 2'
    }, {
      title: 'Step 3'
    }],
    size: 'small',
    uppercase: false
  }
}`,...(z=(k=n.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};const N=["Default","MediumSize","LargeSize","NoLinks"];export{s as Default,a as LargeSize,t as MediumSize,n as NoLinks,N as __namedExportsOrder,B as default};
