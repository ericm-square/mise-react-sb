"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[1039],{"./src/components/image.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,EagerLoading:()=>EagerLoading,HighPriority:()=>HighPriority,WithPlaceholder:()=>WithPlaceholder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>image_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),image_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/image.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(image_module.A,options);const components_image_module=image_module.A&&image_module.A.locals?image_module.A.locals:void 0,Image=({imageSrc,shouldGenerateImageSrcSet=!0,showPlaceholder=!1,imageSizes,breakpoints,sizesOverride,altText="",loadCallback,errorCallback,eager=!1,imageClasses="",highPriority=!1})=>{const[isFailedToLoad,setIsFailedToLoad]=react.useState(!1),imageRef=react.useRef(null),handleError=()=>{var _imageRef_current,_imageRef_current1;const hasFailedToLoad=!imageSrc||(null===(_imageRef_current=imageRef.current)||void 0===_imageRef_current?void 0:_imageRef_current.checkVisibility())&&0===(null===(_imageRef_current1=imageRef.current)||void 0===_imageRef_current1?void 0:_imageRef_current1.offsetHeight);setIsFailedToLoad(hasFailedToLoad),hasFailedToLoad&&errorCallback&&errorCallback()},generateSizes=()=>{if(shouldGenerateImageSrcSet)return sizesOverride||void 0};return showPlaceholder?(0,jsx_runtime.jsxs)("figure",{children:[!isFailedToLoad&&(0,jsx_runtime.jsx)("img",{ref:imageRef,className:`${components_image_module["ui-image"]} ${imageClasses}`,sizes:generateSizes(),srcSet:void 0,src:imageSrc,alt:altText,draggable:"false",loading:eager?void 0:"lazy",onLoad:loadCallback,onError:handleError}),isFailedToLoad&&(0,jsx_runtime.jsx)("div",{className:components_image_module["ui-image-placeholder__wrapper"]})]}):(0,jsx_runtime.jsx)("span",{className:components_image_module["ui-image-wrapper"],children:(0,jsx_runtime.jsx)("img",{className:`${components_image_module["ui-image"]} ${imageClasses}`,sizes:generateSizes(),srcSet:void 0,src:imageSrc,alt:altText,draggable:"false",loading:eager?void 0:"lazy",fetchPriority:highPriority?"high":void 0,onLoad:loadCallback,onError:errorCallback})})},components_image=Image;Image.__docgenInfo={description:"",methods:[],displayName:"Image",props:{imageSrc:{required:!1,tsType:{name:"string"},description:""},shouldGenerateImageSrcSet:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showPlaceholder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},imageSizes:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},breakpoints:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},sizesOverride:{required:!1,tsType:{name:"string"},description:""},altText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},loadCallback:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},errorCallback:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},eager:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},imageClasses:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},highPriority:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const image_stories={title:"Components/Image",component:components_image,argTypes:{imageSrc:{control:"text"},shouldGenerateImageSrcSet:{control:"boolean"},showPlaceholder:{control:"boolean"},imageSizes:{control:"array"},breakpoints:{control:"array"},sizesOverride:{control:"text"},altText:{control:"text"},loadCallback:{action:"loaded"},errorCallback:{action:"error"},eager:{control:"boolean"},imageClasses:{control:"text"},highPriority:{control:"boolean"}}},Template=args=>(0,jsx_runtime.jsx)(components_image,{...args}),Default=Template.bind({});Default.args={imageSrc:"https://via.placeholder.com/150",shouldGenerateImageSrcSet:!0,showPlaceholder:!1,imageSizes:[150,300,450],breakpoints:[576,768,992],sizesOverride:"",altText:"Placeholder Image",eager:!1,imageClasses:"",highPriority:!1};const WithPlaceholder=Template.bind({});WithPlaceholder.args={imageSrc:"https://via.placeholder.com/150",shouldGenerateImageSrcSet:!0,showPlaceholder:!0,imageSizes:[150,300,450],breakpoints:[576,768,992],sizesOverride:"",altText:"Placeholder Image",eager:!1,imageClasses:"",highPriority:!1};const EagerLoading=Template.bind({});EagerLoading.args={imageSrc:"https://via.placeholder.com/150",shouldGenerateImageSrcSet:!0,showPlaceholder:!1,imageSizes:[150,300,450],breakpoints:[576,768,992],sizesOverride:"",altText:"Placeholder Image",eager:!0,imageClasses:"",highPriority:!1};const HighPriority=Template.bind({});HighPriority.args={imageSrc:"https://via.placeholder.com/150",shouldGenerateImageSrcSet:!0,showPlaceholder:!1,imageSizes:[150,300,450],breakpoints:[576,768,992],sizesOverride:"",altText:"Placeholder Image",eager:!1,imageClasses:"",highPriority:!0};const __namedExportsOrder=["Default","WithPlaceholder","EagerLoading","HighPriority"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Image {...args} />",...Default.parameters?.docs?.source}}},WithPlaceholder.parameters={...WithPlaceholder.parameters,docs:{...WithPlaceholder.parameters?.docs,source:{originalSource:"args => <Image {...args} />",...WithPlaceholder.parameters?.docs?.source}}},EagerLoading.parameters={...EagerLoading.parameters,docs:{...EagerLoading.parameters?.docs,source:{originalSource:"args => <Image {...args} />",...EagerLoading.parameters?.docs?.source}}},HighPriority.parameters={...HighPriority.parameters,docs:{...HighPriority.parameters?.docs,source:{originalSource:"args => <Image {...args} />",...HighPriority.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/image.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".image_ui-image__hxnLh {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.image_ui-image-wrapper__sktfj {\n    display: block;\n    width: 100%;\n    height: 100%;\n}\n\n.image_ui-image-placeholder__wrapper__xzMVE {\n    width: 100%;\n    height: 100%;\n}","",{version:3,sources:["webpack://./src/components/image.module.css"],names:[],mappings:"AAAA;IACI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB",sourcesContent:[".ui-image {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.ui-image-wrapper {\n    display: block;\n    width: 100%;\n    height: 100%;\n}\n\n.ui-image-placeholder__wrapper {\n    width: 100%;\n    height: 100%;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"ui-image":"image_ui-image__hxnLh","ui-image-wrapper":"image_ui-image-wrapper__sktfj","ui-image-placeholder__wrapper":"image_ui-image-placeholder__wrapper__xzMVE"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);