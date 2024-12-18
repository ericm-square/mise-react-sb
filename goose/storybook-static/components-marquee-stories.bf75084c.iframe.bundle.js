"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[7340],{"./src/components/marquee.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LeftDirection:()=>LeftDirection,RightDirection:()=>RightDirection,__namedExportsOrder:()=>__namedExportsOrder,default:()=>marquee_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),marquee_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/marquee.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(marquee_module.A,options);const components_marquee_module=marquee_module.A&&marquee_module.A.locals?marquee_module.A.locals:void 0,Marquee=({content,direction="left"})=>(0,jsx_runtime.jsx)("div",{className:components_marquee_module["ui-marquee-container"],children:[...Array(5)].map(((_,i)=>(0,jsx_runtime.jsx)("div",{className:`${components_marquee_module["ui-marquee"]} ${components_marquee_module[`ui-marquee--direction-${direction}`]}`,"data-text":content,children:(0,jsx_runtime.jsx)("span",{children:content})},i)))}),marquee=Marquee;Marquee.__docgenInfo={description:"",methods:[],displayName:"Marquee",props:{content:{required:!0,tsType:{name:"string"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}}}};const marquee_stories={title:"Components/Marquee",component:marquee,argTypes:{content:{control:"text"},direction:{control:"select",options:["left","right"]}}},Template=args=>(0,jsx_runtime.jsx)(marquee,{...args}),LeftDirection=Template.bind({});LeftDirection.args={content:"This is a marquee text moving left",direction:"left"};const RightDirection=Template.bind({});RightDirection.args={content:"This is a marquee text moving right",direction:"right"};const __namedExportsOrder=["LeftDirection","RightDirection"];LeftDirection.parameters={...LeftDirection.parameters,docs:{...LeftDirection.parameters?.docs,source:{originalSource:"args => <Marquee {...args} />",...LeftDirection.parameters?.docs?.source}}},RightDirection.parameters={...RightDirection.parameters,docs:{...RightDirection.parameters?.docs,source:{originalSource:"args => <Marquee {...args} />",...RightDirection.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/marquee.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".marquee_ui-marquee-container__SLgLq {\n    display: flex;\n    align-items: center;\n}\n\n.marquee_ui-marquee__w__PZ {\n    position: relative;\n    display: flex;\n    align-items: center;\n    font: var(--theme-paragraph-10-medium);\n    text-transform: uppercase;\n    letter-spacing: var(--theme-paragraph-10-letter-spacing);\n    white-space: nowrap;\n    animation-duration: 3s;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n}\n\n.marquee_ui-marquee__w__PZ span {\n    display: inline-flex;\n    align-items: center;\n}\n\n.marquee_ui-marquee__w__PZ::after,\n.marquee_ui-marquee__w__PZ span::before {\n    display: inline-block;\n    width: 4px;\n    height: 4px;\n    margin: auto var(--space);\n    content: '';\n    background-color: var(--theme-text-10);\n}\n\n.marquee_ui-marquee__w__PZ::before {\n    content: attr(data-text);\n}\n\n.marquee_ui-marquee--direction-right__4bI0E {\n    animation-name: marquee_scroll-right__JZjIx;\n}\n\n.marquee_ui-marquee--direction-left__QTDoi {\n    animation-name: marquee_scroll-left__Ingvk;\n}\n\n@keyframes marquee_scroll-left__Ingvk {\n    from {\n        transform: translateX(0);\n    }\n\n    to {\n        transform: translateX(-50%)\n    }\n}\n\n@keyframes marquee_scroll-right__JZjIx {\n    from {\n        transform: translateX(-50%)\n    }\n\n    to {\n        transform: translateX(0);\n    }\n}","",{version:3,sources:["webpack://./src/components/marquee.module.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,sCAAsC;IACtC,yBAAyB;IACzB,wDAAwD;IACxD,mBAAmB;IACnB,sBAAsB;IACtB,iCAAiC;IACjC,mCAAmC;AACvC;;AAEA;IACI,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;;IAEI,qBAAqB;IACrB,UAAU;IACV,WAAW;IACX,yBAAyB;IACzB,WAAW;IACX,sCAAsC;AAC1C;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,2CAA4B;AAChC;;AAEA;IACI,0CAA2B;AAC/B;;AAEA;IACI;QACI,wBAAwB;IAC5B;;IAEA;QACI;IACJ;AACJ;;AAEA;IACI;QACI;IACJ;;IAEA;QACI,wBAAwB;IAC5B;AACJ",sourcesContent:[".ui-marquee-container {\n    display: flex;\n    align-items: center;\n}\n\n.ui-marquee {\n    position: relative;\n    display: flex;\n    align-items: center;\n    font: var(--theme-paragraph-10-medium);\n    text-transform: uppercase;\n    letter-spacing: var(--theme-paragraph-10-letter-spacing);\n    white-space: nowrap;\n    animation-duration: 3s;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n}\n\n.ui-marquee span {\n    display: inline-flex;\n    align-items: center;\n}\n\n.ui-marquee::after,\n.ui-marquee span::before {\n    display: inline-block;\n    width: 4px;\n    height: 4px;\n    margin: auto var(--space);\n    content: '';\n    background-color: var(--theme-text-10);\n}\n\n.ui-marquee::before {\n    content: attr(data-text);\n}\n\n.ui-marquee--direction-right {\n    animation-name: scroll-right;\n}\n\n.ui-marquee--direction-left {\n    animation-name: scroll-left;\n}\n\n@keyframes scroll-left {\n    from {\n        transform: translateX(0);\n    }\n\n    to {\n        transform: translateX(-50%)\n    }\n}\n\n@keyframes scroll-right {\n    from {\n        transform: translateX(-50%)\n    }\n\n    to {\n        transform: translateX(0);\n    }\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"ui-marquee-container":"marquee_ui-marquee-container__SLgLq","ui-marquee":"marquee_ui-marquee__w__PZ","ui-marquee--direction-right":"marquee_ui-marquee--direction-right__4bI0E","scroll-right":"marquee_scroll-right__JZjIx","ui-marquee--direction-left":"marquee_ui-marquee--direction-left__QTDoi","scroll-left":"marquee_scroll-left__Ingvk"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);