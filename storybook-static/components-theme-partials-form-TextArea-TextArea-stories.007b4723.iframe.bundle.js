"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[3363],{"./src/components/theme/partials/form/TextArea/TextArea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomClasses:()=>CustomClasses,Default:()=>Default,Disabled:()=>Disabled,WithError:()=>WithError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextArea_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js"),Notice=__webpack_require__("./src/components/theme/partials/ui/Notice/Notice.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),TextArea_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/theme/partials/form/TextArea/TextArea.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TextArea_module.A,options);const TextArea_TextArea_module=TextArea_module.A&&TextArea_module.A.locals?TextArea_module.A.locals:void 0;function TextArea(props){const{parentModel="model",label,hint,textareaClasses,resize,name,rows=2,max,errorMessage,disabled=!1}=props,[textareaId]=(0,react.useState)(`textarea-${Math.random().toString(36).substr(2,9)}`),[textareaFormDataId]=(0,react.useState)(`textarea-form-data-${Math.random().toString(36).substr(2,9)}`),hasLabel=void 0!==label&&""!==label,hasHint=void 0!==hint&&""!==hint,textareaRef=(0,react.useRef)(null),[isFocused,setIsFocused]=(0,react.useState)(!1),[isInvalid]=(0,react.useState)(!1),[model,setModel]=(0,react.useState)("");(0,react.useEffect)((()=>{isFocused&&textareaRef.current&&textareaRef.current.focus()}),[isFocused]);const focusTextarea=()=>setIsFocused(!0);return(0,jsx_runtime.jsxs)("div",{role:"textbox",tabIndex:0,"data-x-data":`{ ...textareaForm('${textareaFormDataId}'), }`,"data-x-init":"initTextarea()","data-x-effect":"isFocused ? $nextTick(() => textareaRef.current.focus()) : null","data-x-modelable":parentModel,"aria-invalid":isInvalid,"aria-describedby":hasLabel?`${textareaId}__label`:void 0,className:`\n        ${TextArea_TextArea_module["form-element"]} ${TextArea_TextArea_module["form-textarea"]} ${textareaClasses} \n        ${model.length||hasHint?"":TextArea_TextArea_module["form-textarea--empty"]} \n        ${isFocused?TextArea_TextArea_module["form-textarea--focus"]:""} \n        ${disabled?TextArea_TextArea_module["form-textarea--disabled"]:""} \n        ${isInvalid?TextArea_TextArea_module["form-textarea--invalid"]:""}\n      `,style:resize?{"--ui-textarea-resize-override":resize}:void 0,onClick:focusTextarea,onKeyDown:()=>{},children:[hasLabel&&(0,jsx_runtime.jsx)("label",{id:`${textareaId}__label`,htmlFor:`textarea-${textareaId}`,className:TextArea_TextArea_module["form-element__label"],children:label}),(0,jsx_runtime.jsx)("textarea",{id:textareaId,ref:textareaRef,"data-x-model":parentModel||"model",name:name||label,placeholder:hint||"",rows,maxLength:max,className:TextArea_TextArea_module["form-textarea__input"],disabled,onFocus:focusTextarea,onBlur:()=>setIsFocused(!1),value:model,onChange:e=>setModel(e.target.value)}),max&&(0,jsx_runtime.jsxs)("div",{className:TextArea_TextArea_module["form-textarea__text-length"],children:[(0,jsx_runtime.jsx)("span",{children:model.length})," / ",max]}),errorMessage&&(0,jsx_runtime.jsx)("div",{className:TextArea_TextArea_module["form-element__error"],children:(0,jsx_runtime.jsx)(Notice.A,{variant:"critical",message:errorMessage,title:"",bannerStyle:""})})]})}TextArea.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{parentModel:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},textareaClasses:{required:!1,tsType:{name:"string"},description:""},resize:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},rows:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const TextArea_stories={title:"theme/partials/form/TextArea",component:TextArea},Default={args:{label:"Default Label",hint:"This is a hint",name:"default",rows:3,max:100,errorMessage:"",disabled:!1}},WithError={args:{label:"Error Label",hint:"This is a hint",name:"error",rows:3,max:100,errorMessage:"This is an error message",disabled:!1}},Disabled={args:{label:"Disabled Label",hint:"This is a hint",name:"disabled",rows:3,max:100,errorMessage:"",disabled:!0}},CustomClasses={args:{label:"Custom Classes Label",hint:"This is a hint",name:"custom-classes",rows:3,max:100,errorMessage:"",disabled:!1,textareaClasses:"custom-class"}},__namedExportsOrder=["Default","WithError","Disabled","CustomClasses"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Default Label',\n    hint: 'This is a hint',\n    name: 'default',\n    rows: 3,\n    max: 100,\n    errorMessage: '',\n    disabled: false\n  }\n}",...Default.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Error Label',\n    hint: 'This is a hint',\n    name: 'error',\n    rows: 3,\n    max: 100,\n    errorMessage: 'This is an error message',\n    disabled: false\n  }\n}",...WithError.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Disabled Label',\n    hint: 'This is a hint',\n    name: 'disabled',\n    rows: 3,\n    max: 100,\n    errorMessage: '',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},CustomClasses.parameters={...CustomClasses.parameters,docs:{...CustomClasses.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Custom Classes Label',\n    hint: 'This is a hint',\n    name: 'custom-classes',\n    rows: 3,\n    max: 100,\n    errorMessage: '',\n    disabled: false,\n    textareaClasses: 'custom-class'\n  }\n}",...CustomClasses.parameters?.docs?.source}}}},"./src/components/theme/partials/ui/Notice/Notice.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Notice});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js"),Icon=__webpack_require__("./src/components/theme/partials/ui/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Notice_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/theme/partials/ui/Notice/Notice.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Notice_module.A,options);const Notice_Notice_module=Notice_module.A&&Notice_module.A.locals?Notice_module.A.locals:void 0;function Notice(props){const{bannerStyle="banner",linkText,linkAction,secondLinkText,secondLinkAction,title,message,variant="normal",linkPosition,removeCloseButton}=props,[isNoticeVisible,setIsNoticeVisible]=(0,react.useState)(!0),isBannerStyle="banner"===bannerStyle,shouldShowTextLink=isBannerStyle&&linkText&&linkAction;let noticeIcon="add";return"info"===variant?noticeIcon="info":"success"===variant?noticeIcon="check_circle":"warning"===variant?noticeIcon="warning":"critical"===variant&&(noticeIcon="error"),isNoticeVisible?(0,jsx_runtime.jsxs)("div",{role:"alert",className:Notice_Notice_module["ui-notice"],"data-t-variant":variant,"data-t-style":bannerStyle,children:[(0,jsx_runtime.jsx)(Icon.A,{name:noticeIcon,iconClasses:Notice_Notice_module["ui-notice__icon"]}),(0,jsx_runtime.jsxs)("div",{className:Notice_Notice_module["ui-notice__message"],children:[title&&(0,jsx_runtime.jsx)("div",{className:Notice_Notice_module["ui-notice__title"],children:title}),message&&(0,jsx_runtime.jsx)("div",{children:message}),shouldShowTextLink&&"bottom"===linkPosition&&(0,jsx_runtime.jsx)("span",{tabIndex:0,role:"button",className:Notice_Notice_module["ui-notice__link"],onClick:linkAction,onKeyDown:linkAction,children:linkText}),secondLinkText&&secondLinkAction&&(0,jsx_runtime.jsx)("span",{tabIndex:0,role:"button",className:Notice_Notice_module["ui-notice__link"],onClick:secondLinkAction,onKeyDown:secondLinkAction,children:secondLinkText})]}),shouldShowTextLink&&"bottom"!==linkPosition&&(0,jsx_runtime.jsxs)("div",{className:Notice_Notice_module["ui-notice__links-wrapper"],children:[(0,jsx_runtime.jsx)("span",{tabIndex:0,role:"button",className:Notice_Notice_module["ui-notice__link"],onClick:linkAction,onKeyDown:linkAction,children:linkText}),secondLinkText&&secondLinkAction&&(0,jsx_runtime.jsx)("span",{tabIndex:0,role:"button",className:Notice_Notice_module["ui-notice__link"],onClick:secondLinkAction,onKeyDown:secondLinkAction,children:secondLinkText})]}),isBannerStyle&&!removeCloseButton&&(0,jsx_runtime.jsx)("div",{className:Notice_Notice_module["ui-notice__close"],onClick:()=>setIsNoticeVisible(!1),"aria-label":"Close",role:"button",tabIndex:0,onKeyDown:()=>setIsNoticeVisible(!1),children:(0,jsx_runtime.jsx)(Icon.A,{iconClasses:`${Notice_Notice_module["ui-notice__icon"]} ${Notice_Notice_module["ui-notice__icon--close"]}`,name:"close"})})]}):null}Notice.__docgenInfo={description:"",methods:[],displayName:"Notice",props:{bannerStyle:{required:!0,tsType:{name:"union",raw:"'' | 'banner'",elements:[{name:"literal",value:"''"},{name:"literal",value:"'banner'"}]},description:""},linkText:{required:!1,tsType:{name:"string"},description:""},linkAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},secondLinkText:{required:!1,tsType:{name:"string"},description:""},secondLinkAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'normal' | 'critical'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'normal'"},{name:"literal",value:"'critical'"}]},description:""},linkPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:""},removeCloseButton:{required:!1,tsType:{name:"boolean"},description:""}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/theme/partials/form/TextArea/TextArea.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".TextArea_form-element__RE71O.TextArea_form-textarea__qUtz_ {\n    position: relative;\n    gap: var(--space-half);\n}\n\n.TextArea_form-textarea__inner__Tm_vT {\n    min-height: 156px;\n    padding: var(--space) var(--space-x2);\n    overflow: auto;\n    color: var(--theme-body-text-color);\n    resize: var(--ui-textarea-resize-override, 'none');\n    background-color: transparent;\n    border: var(--theme-form-border-width) solid var(--theme-fill-30);\n    border-radius: var(--theme-border-radius-input-medium);\n}\n\n.TextArea_form-textarea--focus__JeEkX .TextArea_form-textarea__inner__Tm_vT {\n    border-color: var(--theme-emphasis-fill);\n    box-shadow: 0px 0px 0px var(--theme-form-border-width) var(--theme-emphasis-fill);\n}\n\n.TextArea_form-textarea--disabled__lwG_l .TextArea_form-textarea__inner__Tm_vT {\n    cursor: not-allowed;\n    background-color: var(--theme-fill-40);\n    border-color: var(--theme-fill-30);\n}\n\n.TextArea_form-textarea--invalid__vWFMM:not(:hover, .TextArea_form-textarea--focus__JeEkX) .TextArea_form-textarea__inner__Tm_vT {\n    border-color: var(--theme-critical-fill);\n}\n\n.TextArea_form-textarea__qUtz_:not(.TextArea_form-textarea--disabled__lwG_l):hover .TextArea_form-textarea__inner__Tm_vT {\n    border-color: var(--theme-emphasis-fill);\n}\n\n.TextArea_form-textarea__qUtz_ .TextArea_form-element__label__i8d9m {\n    position: relative;\n    top: var(--space);\n    font-weight: var(--theme-font-weight-light);\n    transition: font-size 0.2s, font-weight 0.1s ease 0.1s;\n}\n\n.TextArea_form-textarea--disabled__lwG_l .TextArea_form-element__label__i8d9m {\n    color: var(--theme-text-30);\n}\n\n.TextArea_form-textarea--disabled__lwG_l:not(.TextArea_form-textarea--empty__Axv4C) .TextArea_form-element__label__i8d9m {\n    color: var(--theme-text-20);\n}\n\n/* stylelint-disable-next-line no-descending-specificity */\n.TextArea_form-textarea__qUtz_:not(.TextArea_form-textarea--empty__Axv4C) .TextArea_form-element__label__i8d9m:not(.TextArea_form-element__label--collapsible__srP9G),\n.TextArea_form-textarea--focus__JeEkX .TextArea_form-element__label__i8d9m:not(.TextArea_form-element__label--collapsible__srP9G) {\n    top: 0;\n    font: var(--theme-paragraph-20-bold);\n    letter-spacing: var(--theme-paragraph-20-letter-spacing);\n}\n\n.TextArea_form-textarea__input__kx3nl {\n    flex: 1;\n    width: 100%;\n    font: var(--theme-paragraph-30);\n    color: inherit;\n    letter-spacing: var(--theme-paragraph-30-letter-spacing);\n    background: none;\n    border: none;\n    outline: none;\n}\n\n.TextArea_form-textarea__input__kx3nl:hover,\n.TextArea_form-textarea__input__kx3nl:focus {\n    border: none;\n    outline: none;\n}\n\n.TextArea_form-textarea--empty__Axv4C .TextArea_form-textarea__input__kx3nl {\n    display: none;\n}\n\n.TextArea_form-textarea--focus__JeEkX .TextArea_form-textarea__input__kx3nl {\n    display: initial;\n}\n\n.TextArea_form-textarea__input__kx3nl[disabled] {\n    cursor: not-allowed;\n}\n\n.TextArea_form-textarea__text-length__tqPdL {\n    font: var(--theme-paragraph-20);\n    color: var(--theme-text-20);\n    letter-spacing: var(--theme-paragraph-20-letter-spacing);\n}\n\n.TextArea_form-textarea--disabled__lwG_l .TextArea_form-textarea__text-length__tqPdL {\n    color: var(--theme-text-30);\n}\n","",{version:3,sources:["webpack://./src/components/theme/partials/form/TextArea/TextArea.module.css"],names:[],mappings:"AAAA;IACI,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,qCAAqC;IACrC,cAAc;IACd,mCAAmC;IACnC,kDAAkD;IAClD,6BAA6B;IAC7B,iEAAiE;IACjE,sDAAsD;AAC1D;;AAEA;IACI,wCAAwC;IACxC,iFAAiF;AACrF;;AAEA;IACI,mBAAmB;IACnB,sCAAsC;IACtC,kCAAkC;AACtC;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,2CAA2C;IAC3C,sDAAsD;AAC1D;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA,0DAA0D;AAC1D;;IAEI,MAAM;IACN,oCAAoC;IACpC,wDAAwD;AAC5D;;AAEA;IACI,OAAO;IACP,WAAW;IACX,+BAA+B;IAC/B,cAAc;IACd,wDAAwD;IACxD,gBAAgB;IAChB,YAAY;IACZ,aAAa;AACjB;;AAEA;;IAEI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,+BAA+B;IAC/B,2BAA2B;IAC3B,wDAAwD;AAC5D;;AAEA;IACI,2BAA2B;AAC/B",sourcesContent:[".form-element.form-textarea {\n    position: relative;\n    gap: var(--space-half);\n}\n\n.form-textarea__inner {\n    min-height: 156px;\n    padding: var(--space) var(--space-x2);\n    overflow: auto;\n    color: var(--theme-body-text-color);\n    resize: var(--ui-textarea-resize-override, 'none');\n    background-color: transparent;\n    border: var(--theme-form-border-width) solid var(--theme-fill-30);\n    border-radius: var(--theme-border-radius-input-medium);\n}\n\n.form-textarea--focus .form-textarea__inner {\n    border-color: var(--theme-emphasis-fill);\n    box-shadow: 0px 0px 0px var(--theme-form-border-width) var(--theme-emphasis-fill);\n}\n\n.form-textarea--disabled .form-textarea__inner {\n    cursor: not-allowed;\n    background-color: var(--theme-fill-40);\n    border-color: var(--theme-fill-30);\n}\n\n.form-textarea--invalid:not(:hover, .form-textarea--focus) .form-textarea__inner {\n    border-color: var(--theme-critical-fill);\n}\n\n.form-textarea:not(.form-textarea--disabled):hover .form-textarea__inner {\n    border-color: var(--theme-emphasis-fill);\n}\n\n.form-textarea .form-element__label {\n    position: relative;\n    top: var(--space);\n    font-weight: var(--theme-font-weight-light);\n    transition: font-size 0.2s, font-weight 0.1s ease 0.1s;\n}\n\n.form-textarea--disabled .form-element__label {\n    color: var(--theme-text-30);\n}\n\n.form-textarea--disabled:not(.form-textarea--empty) .form-element__label {\n    color: var(--theme-text-20);\n}\n\n/* stylelint-disable-next-line no-descending-specificity */\n.form-textarea:not(.form-textarea--empty) .form-element__label:not(.form-element__label--collapsible),\n.form-textarea--focus .form-element__label:not(.form-element__label--collapsible) {\n    top: 0;\n    font: var(--theme-paragraph-20-bold);\n    letter-spacing: var(--theme-paragraph-20-letter-spacing);\n}\n\n.form-textarea__input {\n    flex: 1;\n    width: 100%;\n    font: var(--theme-paragraph-30);\n    color: inherit;\n    letter-spacing: var(--theme-paragraph-30-letter-spacing);\n    background: none;\n    border: none;\n    outline: none;\n}\n\n.form-textarea__input:hover,\n.form-textarea__input:focus {\n    border: none;\n    outline: none;\n}\n\n.form-textarea--empty .form-textarea__input {\n    display: none;\n}\n\n.form-textarea--focus .form-textarea__input {\n    display: initial;\n}\n\n.form-textarea__input[disabled] {\n    cursor: not-allowed;\n}\n\n.form-textarea__text-length {\n    font: var(--theme-paragraph-20);\n    color: var(--theme-text-20);\n    letter-spacing: var(--theme-paragraph-20-letter-spacing);\n}\n\n.form-textarea--disabled .form-textarea__text-length {\n    color: var(--theme-text-30);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"form-element":"TextArea_form-element__RE71O","form-textarea":"TextArea_form-textarea__qUtz_","form-textarea__inner":"TextArea_form-textarea__inner__Tm_vT","form-textarea--focus":"TextArea_form-textarea--focus__JeEkX","form-textarea--disabled":"TextArea_form-textarea--disabled__lwG_l","form-textarea--invalid":"TextArea_form-textarea--invalid__vWFMM","form-element__label":"TextArea_form-element__label__i8d9m","form-textarea--empty":"TextArea_form-textarea--empty__Axv4C","form-element__label--collapsible":"TextArea_form-element__label--collapsible__srP9G","form-textarea__input":"TextArea_form-textarea__input__kx3nl","form-textarea__text-length":"TextArea_form-textarea__text-length__tqPdL"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/theme/partials/ui/Notice/Notice.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Notice_ui-notice__gan1z {\n    display: flex;\n    gap: var(--space);\n    align-items: flex-start;\n    font-size: var(--theme-paragraph-20);\n    color: var(--ui-notice-text-color);\n    letter-spacing: var(--theme-paragraph-20-letter-spacing);\n}\n\n.Notice_ui-notice__links-wrapper__ggyoP {\n    display: flex;\n    flex-flow: column;\n}\n\n.Notice_ui-notice__link__kOgEe {\n    font: var(--theme-paragraph-20-semibold);\n    color: var(--ui-notice-text-color);\n    cursor: pointer;\n}\n\n.Notice_ui-notice__link__kOgEe:hover {\n    text-decoration: underline;\n}\n\n.Notice_ui-notice__gan1z[data-t-style="banner"] {\n    padding: var(--space-x2);\n    border: 1px solid transparent;\n    border-radius: var(--theme-border-radius-card);\n}\n\n.Notice_ui-notice__gan1z[data-t-variant="normal"],\n.Notice_ui-notice__gan1z[data-t-variant="normal"] .Notice_ui-notice__link__kOgEe {\n    --ui-notice-text-color: var(--theme-emphasis-text);\n}\n\n.Notice_ui-notice__gan1z[data-t-style="banner"][data-t-variant="normal"] {\n    background-color: var(--theme-emphasis-40);\n    border-color: var(--theme-emphasis-30);\n}\n\n.Notice_ui-notice__gan1z[data-t-variant="info"],\n.Notice_ui-notice__gan1z[data-t-variant="info"] .Notice_ui-notice__link__kOgEe {\n    --ui-notice-text-color: var(--theme-text-20);\n}\n\n.Notice_ui-notice__gan1z[data-t-style="banner"][data-t-variant="info"] {\n    background-color: var(--theme-fill-40);\n    border-color: var(--theme-fill-30);\n}\n\n.Notice_ui-notice__gan1z[data-t-variant="success"],\n.Notice_ui-notice__gan1z[data-t-variant="success"] .Notice_ui-notice__link__kOgEe {\n    --ui-notice-text-color: var(--theme-success-text);\n}\n\n.Notice_ui-notice__gan1z[data-t-style="banner"][data-t-variant="success"] {\n    --ui-notice-title-color: var(--theme-success-10);\n\n    background-color: var(--theme-success-40);\n    border-color: var(--theme-success-30);\n}\n\n.Notice_ui-notice__gan1z[data-t-variant="warning"],\n.Notice_ui-notice__gan1z[data-t-variant="warning"] .Notice_ui-notice__link__kOgEe {\n    --ui-notice-text-color: var(--theme-warning-text);\n}\n\n.Notice_ui-notice__gan1z[data-t-style="banner"][data-t-variant="warning"] {\n    --ui-notice-title-color: var(--theme-warning-10);\n\n    background-color: var(--theme-warning-40);\n    border-color: var(--theme-warning-30);\n}\n\n.Notice_ui-notice__gan1z[data-t-variant="critical"],\n.Notice_ui-notice__gan1z[data-t-variant="critical"] .Notice_ui-notice__link__kOgEe {\n    --ui-notice-text-color: var(--theme-critical-text);\n}\n\n.Notice_ui-notice__gan1z[data-t-style="banner"][data-t-variant="critical"] {\n    --ui-notice-title-color: var(--theme-critical-10);\n\n    background-color: var(--theme-critical-40);\n    border-color: var(--theme-critical-30);\n}\n\n.Notice_ui-notice__icon__6Lvfy {\n    --icon-size: var(--theme-heading-20-font-size);\n    --material-icon-height: var(--icon-size);\n    --material-icon-width: var(--icon-size);\n\n    display: inline-flex;\n    align-items: center;\n    height: var(--icon-size);\n}\n\n.Notice_ui-notice__gan1z[data-t-style="banner"][data-t-variant="info"] .Notice_ui-notice__icon__6Lvfy {\n    --ui-notice-text-color: var(--theme-emphasis-fill);\n}\n\n.Notice_ui-notice__gan1z[data-t-style="banner"][data-t-variant="success"] .Notice_ui-notice__icon__6Lvfy {\n    --ui-notice-text-color: var(--theme-success-fill);\n}\n\n.Notice_ui-notice__gan1z[data-t-style="banner"][data-t-variant="warning"] .Notice_ui-notice__icon__6Lvfy {\n    --ui-notice-text-color: var(--theme-warning-fill);\n}\n\n.Notice_ui-notice__gan1z[data-t-style="banner"][data-t-variant="critical"] .Notice_ui-notice__icon__6Lvfy {\n    --ui-notice-text-color: var(--theme-critical-fill);\n}\n\n.Notice_ui-notice__title__Cpg2l {\n    font-weight: var(--theme-font-weight-semibold);\n    color: var(--ui-notice-title-color);\n}\n\n.Notice_ui-notice__message__kwYGf {\n    display: flex;\n    flex-flow: column;\n    gap: var(--space);\n    justify-content: center;\n    font-weight: var(--theme-font-weight-light);\n    color: var(--ui-notice-text-color);\n    white-space: wrap;\n}\n\n.Notice_ui-notice__gan1z[data-t-style="banner"] .Notice_ui-notice__message__kwYGf {\n    flex: 1;\n}\n\n.Notice_ui-notice__icon--close__bvkYe {\n    --icon-size: var(--theme-heading-30-font-size);\n    --material-icon-width: var(--icon-size);\n    --material-icon-height: var(--icon-size);\n\n    height: var(--icon-size);\n    margin: 0 0 0 var(--space);\n    color: var(--ui-notice-text-color);\n    cursor: pointer;\n}\n',"",{version:3,sources:["webpack://./src/components/theme/partials/ui/Notice/Notice.module.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,oCAAoC;IACpC,kCAAkC;IAClC,wDAAwD;AAC5D;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,wCAAwC;IACxC,kCAAkC;IAClC,eAAe;AACnB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,wBAAwB;IACxB,6BAA6B;IAC7B,8CAA8C;AAClD;;AAEA;;IAEI,kDAAkD;AACtD;;AAEA;IACI,0CAA0C;IAC1C,sCAAsC;AAC1C;;AAEA;;IAEI,4CAA4C;AAChD;;AAEA;IACI,sCAAsC;IACtC,kCAAkC;AACtC;;AAEA;;IAEI,iDAAiD;AACrD;;AAEA;IACI,gDAAgD;;IAEhD,yCAAyC;IACzC,qCAAqC;AACzC;;AAEA;;IAEI,iDAAiD;AACrD;;AAEA;IACI,gDAAgD;;IAEhD,yCAAyC;IACzC,qCAAqC;AACzC;;AAEA;;IAEI,kDAAkD;AACtD;;AAEA;IACI,iDAAiD;;IAEjD,0CAA0C;IAC1C,sCAAsC;AAC1C;;AAEA;IACI,8CAA8C;IAC9C,wCAAwC;IACxC,uCAAuC;;IAEvC,oBAAoB;IACpB,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,kDAAkD;AACtD;;AAEA;IACI,iDAAiD;AACrD;;AAEA;IACI,iDAAiD;AACrD;;AAEA;IACI,kDAAkD;AACtD;;AAEA;IACI,8CAA8C;IAC9C,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,iBAAiB;IACjB,uBAAuB;IACvB,2CAA2C;IAC3C,kCAAkC;IAClC,iBAAiB;AACrB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,8CAA8C;IAC9C,uCAAuC;IACvC,wCAAwC;;IAExC,wBAAwB;IACxB,0BAA0B;IAC1B,kCAAkC;IAClC,eAAe;AACnB",sourcesContent:['.ui-notice {\n    display: flex;\n    gap: var(--space);\n    align-items: flex-start;\n    font-size: var(--theme-paragraph-20);\n    color: var(--ui-notice-text-color);\n    letter-spacing: var(--theme-paragraph-20-letter-spacing);\n}\n\n.ui-notice__links-wrapper {\n    display: flex;\n    flex-flow: column;\n}\n\n.ui-notice__link {\n    font: var(--theme-paragraph-20-semibold);\n    color: var(--ui-notice-text-color);\n    cursor: pointer;\n}\n\n.ui-notice__link:hover {\n    text-decoration: underline;\n}\n\n.ui-notice[data-t-style="banner"] {\n    padding: var(--space-x2);\n    border: 1px solid transparent;\n    border-radius: var(--theme-border-radius-card);\n}\n\n.ui-notice[data-t-variant="normal"],\n.ui-notice[data-t-variant="normal"] .ui-notice__link {\n    --ui-notice-text-color: var(--theme-emphasis-text);\n}\n\n.ui-notice[data-t-style="banner"][data-t-variant="normal"] {\n    background-color: var(--theme-emphasis-40);\n    border-color: var(--theme-emphasis-30);\n}\n\n.ui-notice[data-t-variant="info"],\n.ui-notice[data-t-variant="info"] .ui-notice__link {\n    --ui-notice-text-color: var(--theme-text-20);\n}\n\n.ui-notice[data-t-style="banner"][data-t-variant="info"] {\n    background-color: var(--theme-fill-40);\n    border-color: var(--theme-fill-30);\n}\n\n.ui-notice[data-t-variant="success"],\n.ui-notice[data-t-variant="success"] .ui-notice__link {\n    --ui-notice-text-color: var(--theme-success-text);\n}\n\n.ui-notice[data-t-style="banner"][data-t-variant="success"] {\n    --ui-notice-title-color: var(--theme-success-10);\n\n    background-color: var(--theme-success-40);\n    border-color: var(--theme-success-30);\n}\n\n.ui-notice[data-t-variant="warning"],\n.ui-notice[data-t-variant="warning"] .ui-notice__link {\n    --ui-notice-text-color: var(--theme-warning-text);\n}\n\n.ui-notice[data-t-style="banner"][data-t-variant="warning"] {\n    --ui-notice-title-color: var(--theme-warning-10);\n\n    background-color: var(--theme-warning-40);\n    border-color: var(--theme-warning-30);\n}\n\n.ui-notice[data-t-variant="critical"],\n.ui-notice[data-t-variant="critical"] .ui-notice__link {\n    --ui-notice-text-color: var(--theme-critical-text);\n}\n\n.ui-notice[data-t-style="banner"][data-t-variant="critical"] {\n    --ui-notice-title-color: var(--theme-critical-10);\n\n    background-color: var(--theme-critical-40);\n    border-color: var(--theme-critical-30);\n}\n\n.ui-notice__icon {\n    --icon-size: var(--theme-heading-20-font-size);\n    --material-icon-height: var(--icon-size);\n    --material-icon-width: var(--icon-size);\n\n    display: inline-flex;\n    align-items: center;\n    height: var(--icon-size);\n}\n\n.ui-notice[data-t-style="banner"][data-t-variant="info"] .ui-notice__icon {\n    --ui-notice-text-color: var(--theme-emphasis-fill);\n}\n\n.ui-notice[data-t-style="banner"][data-t-variant="success"] .ui-notice__icon {\n    --ui-notice-text-color: var(--theme-success-fill);\n}\n\n.ui-notice[data-t-style="banner"][data-t-variant="warning"] .ui-notice__icon {\n    --ui-notice-text-color: var(--theme-warning-fill);\n}\n\n.ui-notice[data-t-style="banner"][data-t-variant="critical"] .ui-notice__icon {\n    --ui-notice-text-color: var(--theme-critical-fill);\n}\n\n.ui-notice__title {\n    font-weight: var(--theme-font-weight-semibold);\n    color: var(--ui-notice-title-color);\n}\n\n.ui-notice__message {\n    display: flex;\n    flex-flow: column;\n    gap: var(--space);\n    justify-content: center;\n    font-weight: var(--theme-font-weight-light);\n    color: var(--ui-notice-text-color);\n    white-space: wrap;\n}\n\n.ui-notice[data-t-style="banner"] .ui-notice__message {\n    flex: 1;\n}\n\n.ui-notice__icon--close {\n    --icon-size: var(--theme-heading-30-font-size);\n    --material-icon-width: var(--icon-size);\n    --material-icon-height: var(--icon-size);\n\n    height: var(--icon-size);\n    margin: 0 0 0 var(--space);\n    color: var(--ui-notice-text-color);\n    cursor: pointer;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"ui-notice":"Notice_ui-notice__gan1z","ui-notice__links-wrapper":"Notice_ui-notice__links-wrapper__ggyoP","ui-notice__link":"Notice_ui-notice__link__kOgEe","ui-notice__icon":"Notice_ui-notice__icon__6Lvfy","ui-notice__title":"Notice_ui-notice__title__Cpg2l","ui-notice__message":"Notice_ui-notice__message__kwYGf","ui-notice__icon--close":"Notice_ui-notice__icon--close__bvkYe"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);