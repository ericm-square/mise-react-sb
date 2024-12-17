"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[5e3],{"./src/components/Notice.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CriticalNotice:()=>CriticalNotice,Default:()=>Default,InfoNotice:()=>InfoNotice,SuccessNotice:()=>SuccessNotice,WarningNotice:()=>WarningNotice,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Notice_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Notice_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Notice.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Notice_module.A,options);const components_Notice_module=Notice_module.A&&Notice_module.A.locals?Notice_module.A.locals:void 0,IconInput=({name,ariaHidden=!1,iconClasses=""})=>(0,jsx_runtime.jsx)("span",{className:iconClasses,...ariaHidden?{"aria-hidden":"true"}:{},children:name}),Notice=({title,message,variant="normal",style="inline",linkPosition="right",linkText,linkAction,secondLinkText,secondLinkAction,removeCloseButton=!1,iconOverride,className=""})=>{const[isVisible,setIsVisible]=(0,react.useState)(!0),isBannerStyle="banner"===style,shouldShowTextLink=isBannerStyle&&linkText&&linkAction;if(!isVisible)return null;let noticeIcon="add";switch(variant){case"info":noticeIcon="info";break;case"success":noticeIcon="check_circle";break;case"warning":noticeIcon="warning";break;case"critical":noticeIcon="error"}iconOverride&&(noticeIcon=iconOverride);const renderLinks=()=>(0,jsx_runtime.jsxs)("div",{className:components_Notice_module["ui-notice__links-wrapper"],children:[(0,jsx_runtime.jsx)("span",{tabIndex:0,className:components_Notice_module["ui-notice__link"],onClick:e=>{e.preventDefault(),null==linkAction||linkAction()},children:linkText}),secondLinkAction&&secondLinkText&&(0,jsx_runtime.jsx)("span",{tabIndex:0,className:components_Notice_module["ui-notice__link"],onClick:e=>{e.preventDefault(),secondLinkAction()},children:secondLinkText})]});return(0,jsx_runtime.jsxs)("div",{role:"alert",className:`${components_Notice_module["ui-notice"]} ${className}`,"data-t-variant":variant,"data-t-style":style,children:[(0,jsx_runtime.jsx)(IconInput,{name:noticeIcon,ariaHidden:!0,iconClasses:components_Notice_module["ui-notice__icon"]}),(0,jsx_runtime.jsxs)("div",{className:components_Notice_module["ui-notice__message"],children:[title&&(0,jsx_runtime.jsx)("div",{className:components_Notice_module["ui-notice__title"],children:(0,jsx_runtime.jsx)("div",{children:title})}),message&&(0,jsx_runtime.jsx)("div",{children:message}),shouldShowTextLink&&"bottom"===linkPosition&&renderLinks()]}),shouldShowTextLink&&"bottom"!==linkPosition&&renderLinks(),isBannerStyle&&!removeCloseButton&&(0,jsx_runtime.jsx)("div",{className:components_Notice_module["ui-notice__close"],onClick:e=>{e.preventDefault(),setIsVisible(!1)},children:(0,jsx_runtime.jsx)(IconInput,{name:"close",ariaHidden:!0,iconClasses:`${components_Notice_module["ui-notice__icon"]} ${components_Notice_module["ui-notice__icon--close"]}`})})]})};Notice.__docgenInfo={description:"",methods:[],displayName:"Notice",props:{title:{required:!1,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'normal' | 'info' | 'success' | 'warning' | 'critical'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'critical'"}]},description:"",defaultValue:{value:"'normal'",computed:!1}},style:{required:!1,tsType:{name:"union",raw:"'inline' | 'banner'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'banner'"}]},description:"",defaultValue:{value:"'inline'",computed:!1}},linkPosition:{required:!1,tsType:{name:"union",raw:"'right' | 'bottom'",elements:[{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},linkText:{required:!1,tsType:{name:"string"},description:""},linkAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},secondLinkText:{required:!1,tsType:{name:"string"},description:""},secondLinkAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},removeCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},iconOverride:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const Notice_stories={title:"Components/Notice",component:Notice,argTypes:{title:{control:"text"},message:{control:"text"},variant:{control:"select",options:["normal","info","success","warning","critical"]},style:{control:"select",options:["inline","banner"]},linkPosition:{control:"select",options:["right","bottom"]},linkText:{control:"text"},linkAction:{action:"link clicked"},secondLinkText:{control:"text"},secondLinkAction:{action:"second link clicked"},removeCloseButton:{control:"boolean"},iconOverride:{control:"text"},className:{control:"text"}}},Template=args=>(0,jsx_runtime.jsx)(Notice,{...args}),Default=Template.bind({});Default.args={title:"Default Notice",message:"This is a default notice message.",variant:"normal",style:"inline",linkPosition:"right",linkText:"Learn more",linkAction:()=>alert("Link clicked"),secondLinkText:"Dismiss",secondLinkAction:()=>alert("Second link clicked"),removeCloseButton:!1,iconOverride:"",className:""};const InfoNotice=Template.bind({});InfoNotice.args={title:"Info Notice",message:"This is an info notice message.",variant:"info",style:"inline",linkPosition:"right",linkText:"Learn more",linkAction:()=>alert("Link clicked"),secondLinkText:"Dismiss",secondLinkAction:()=>alert("Second link clicked"),removeCloseButton:!1,iconOverride:"",className:""};const SuccessNotice=Template.bind({});SuccessNotice.args={title:"Success Notice",message:"This is a success notice message.",variant:"success",style:"inline",linkPosition:"right",linkText:"Learn more",linkAction:()=>alert("Link clicked"),secondLinkText:"Dismiss",secondLinkAction:()=>alert("Second link clicked"),removeCloseButton:!1,iconOverride:"",className:""};const WarningNotice=Template.bind({});WarningNotice.args={title:"Warning Notice",message:"This is a warning notice message.",variant:"warning",style:"inline",linkPosition:"right",linkText:"Learn more",linkAction:()=>alert("Link clicked"),secondLinkText:"Dismiss",secondLinkAction:()=>alert("Second link clicked"),removeCloseButton:!1,iconOverride:"",className:""};const CriticalNotice=Template.bind({});CriticalNotice.args={title:"Critical Notice",message:"This is a critical notice message.",variant:"critical",style:"inline",linkPosition:"right",linkText:"Learn more",linkAction:()=>alert("Link clicked"),secondLinkText:"Dismiss",secondLinkAction:()=>alert("Second link clicked"),removeCloseButton:!1,iconOverride:"",className:""};const __namedExportsOrder=["Default","InfoNotice","SuccessNotice","WarningNotice","CriticalNotice"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Notice {...args} />",...Default.parameters?.docs?.source}}},InfoNotice.parameters={...InfoNotice.parameters,docs:{...InfoNotice.parameters?.docs,source:{originalSource:"args => <Notice {...args} />",...InfoNotice.parameters?.docs?.source}}},SuccessNotice.parameters={...SuccessNotice.parameters,docs:{...SuccessNotice.parameters?.docs,source:{originalSource:"args => <Notice {...args} />",...SuccessNotice.parameters?.docs?.source}}},WarningNotice.parameters={...WarningNotice.parameters,docs:{...WarningNotice.parameters?.docs,source:{originalSource:"args => <Notice {...args} />",...WarningNotice.parameters?.docs?.source}}},CriticalNotice.parameters={...CriticalNotice.parameters,docs:{...CriticalNotice.parameters?.docs,source:{originalSource:"args => <Notice {...args} />",...CriticalNotice.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Notice.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Notice_ui-notice__fcmYa {\n    display: flex;\n    gap: var(--space-x2);\n    align-items: flex-start;\n    padding: var(--space-x2);\n    font: var(--theme-paragraph-20);\n    color: var(--theme-text-10);\n    letter-spacing: var(--theme-paragraph-20-letter-spacing);\n    background-color: var(--theme-surface-20);\n    border-radius: var(--theme-border-radius-card);\n}\n\n.Notice_ui-notice__fcmYa[data-t-variant="info"] {\n    background-color: var(--theme-info-40);\n}\n\n.Notice_ui-notice__fcmYa[data-t-variant="success"] {\n    background-color: var(--theme-success-40);\n}\n\n.Notice_ui-notice__fcmYa[data-t-variant="warning"] {\n    background-color: var(--theme-warning-40);\n}\n\n.Notice_ui-notice__fcmYa[data-t-variant="critical"] {\n    background-color: var(--theme-critical-40);\n}\n\n.Notice_ui-notice__fcmYa[data-t-style="banner"] {\n    position: relative;\n    padding: var(--space-x2);\n    overflow: hidden;\n    border-radius: 0;\n}\n\n.Notice_ui-notice__message__4ynpk {\n    flex: 1;\n}\n\n.Notice_ui-notice__icon__r6q7W {\n    --icon-size: var(--theme-icon-30-font-size);\n    --material-icon-width: var(--icon-size);\n    --material-icon-height: var(--icon-size);\n\n    color: var(--theme-text-20);\n}\n\n.Notice_ui-notice__fcmYa[data-t-variant="info"] .Notice_ui-notice__icon__r6q7W {\n    color: var(--theme-info-text);\n}\n\n.Notice_ui-notice__fcmYa[data-t-variant="success"] .Notice_ui-notice__icon__r6q7W {\n    color: var(--theme-success-text);\n}\n\n.Notice_ui-notice__fcmYa[data-t-variant="warning"] .Notice_ui-notice__icon__r6q7W {\n    color: var(--theme-warning-text);\n}\n\n.Notice_ui-notice__fcmYa[data-t-variant="critical"] .Notice_ui-notice__icon__r6q7W {\n    color: var(--theme-critical-text);\n}\n\n.Notice_ui-notice__title__Jw7D1 {\n    margin-bottom: var(--space);\n    font-weight: var(--theme-font-weight-semibold);\n}\n\n.Notice_ui-notice__links-wrapper__bypUx {\n    display: flex;\n    gap: var(--space-x2);\n    margin-top: var(--space);\n}\n\n.Notice_ui-notice__link__FKuyx {\n    display: inline-block;\n    font-weight: var(--theme-font-weight-semibold);\n    color: var(--theme-emphasis-text);\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n@media (min-width: 700px) {\n    .Notice_ui-notice__link__FKuyx {\n        text-decoration: none;\n    }\n}\n\n.Notice_ui-notice__link__FKuyx:hover {\n    opacity: 0.6;\n}\n\n.Notice_ui-notice__close__WGle_ {\n    cursor: pointer;\n}\n\n.Notice_ui-notice__icon--close___Rqcf {\n    color: var(--theme-text-20);\n}\n\n.Notice_ui-notice__close__WGle_:hover .Notice_ui-notice__icon--close___Rqcf {\n    color: var(--theme-text-10);\n}',"",{version:3,sources:["webpack://./src/components/Notice.module.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,oBAAoB;IACpB,uBAAuB;IACvB,wBAAwB;IACxB,+BAA+B;IAC/B,2BAA2B;IAC3B,wDAAwD;IACxD,yCAAyC;IACzC,8CAA8C;AAClD;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,kBAAkB;IAClB,wBAAwB;IACxB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,2CAA2C;IAC3C,uCAAuC;IACvC,wCAAwC;;IAExC,2BAA2B;AAC/B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,2BAA2B;IAC3B,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,wBAAwB;AAC5B;;AAEA;IACI,qBAAqB;IACrB,8CAA8C;IAC9C,iCAAiC;IACjC,0BAA0B;IAC1B,eAAe;AACnB;;AAEA;IACI;QACI,qBAAqB;IACzB;AACJ;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;AAC/B",sourcesContent:['.ui-notice {\n    display: flex;\n    gap: var(--space-x2);\n    align-items: flex-start;\n    padding: var(--space-x2);\n    font: var(--theme-paragraph-20);\n    color: var(--theme-text-10);\n    letter-spacing: var(--theme-paragraph-20-letter-spacing);\n    background-color: var(--theme-surface-20);\n    border-radius: var(--theme-border-radius-card);\n}\n\n.ui-notice[data-t-variant="info"] {\n    background-color: var(--theme-info-40);\n}\n\n.ui-notice[data-t-variant="success"] {\n    background-color: var(--theme-success-40);\n}\n\n.ui-notice[data-t-variant="warning"] {\n    background-color: var(--theme-warning-40);\n}\n\n.ui-notice[data-t-variant="critical"] {\n    background-color: var(--theme-critical-40);\n}\n\n.ui-notice[data-t-style="banner"] {\n    position: relative;\n    padding: var(--space-x2);\n    overflow: hidden;\n    border-radius: 0;\n}\n\n.ui-notice__message {\n    flex: 1;\n}\n\n.ui-notice__icon {\n    --icon-size: var(--theme-icon-30-font-size);\n    --material-icon-width: var(--icon-size);\n    --material-icon-height: var(--icon-size);\n\n    color: var(--theme-text-20);\n}\n\n.ui-notice[data-t-variant="info"] .ui-notice__icon {\n    color: var(--theme-info-text);\n}\n\n.ui-notice[data-t-variant="success"] .ui-notice__icon {\n    color: var(--theme-success-text);\n}\n\n.ui-notice[data-t-variant="warning"] .ui-notice__icon {\n    color: var(--theme-warning-text);\n}\n\n.ui-notice[data-t-variant="critical"] .ui-notice__icon {\n    color: var(--theme-critical-text);\n}\n\n.ui-notice__title {\n    margin-bottom: var(--space);\n    font-weight: var(--theme-font-weight-semibold);\n}\n\n.ui-notice__links-wrapper {\n    display: flex;\n    gap: var(--space-x2);\n    margin-top: var(--space);\n}\n\n.ui-notice__link {\n    display: inline-block;\n    font-weight: var(--theme-font-weight-semibold);\n    color: var(--theme-emphasis-text);\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n@media (min-width: 700px) {\n    .ui-notice__link {\n        text-decoration: none;\n    }\n}\n\n.ui-notice__link:hover {\n    opacity: 0.6;\n}\n\n.ui-notice__close {\n    cursor: pointer;\n}\n\n.ui-notice__icon--close {\n    color: var(--theme-text-20);\n}\n\n.ui-notice__close:hover .ui-notice__icon--close {\n    color: var(--theme-text-10);\n}'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"ui-notice":"Notice_ui-notice__fcmYa","ui-notice__message":"Notice_ui-notice__message__4ynpk","ui-notice__icon":"Notice_ui-notice__icon__r6q7W","ui-notice__title":"Notice_ui-notice__title__Jw7D1","ui-notice__links-wrapper":"Notice_ui-notice__links-wrapper__bypUx","ui-notice__link":"Notice_ui-notice__link__FKuyx","ui-notice__close":"Notice_ui-notice__close__WGle_","ui-notice__icon--close":"Notice_ui-notice__icon--close___Rqcf"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);