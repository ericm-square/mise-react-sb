"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[6521],{"./src/components/theme/partials/form/CheckboxSingle/CheckboxSingle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>CheckboxSingle});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CheckboxSingle_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/theme/partials/form/CheckboxSingle/CheckboxSingle.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CheckboxSingle_module.A,options);const CheckboxSingle_CheckboxSingle_module=CheckboxSingle_module.A&&CheckboxSingle_module.A.locals?CheckboxSingle_module.A.locals:void 0;function CheckboxSingle(props){const{label,sublabel,value,onChange,invalid,disabled,variant,size,align,showDivider,indeterminate,isRequired,CheckboxSingleClasses}=props,optionId=`checkbox-single-${Math.random().toString(36).substr(2,9)}`;return(0,jsx_runtime.jsx)("div",{"data-aria-invalid":invalid,className:`${CheckboxSingle_CheckboxSingle_module["form-element"]} ${CheckboxSingle_CheckboxSingle_module["form-checkbox"]} ${CheckboxSingle_CheckboxSingle_module["form-checkbox--single"]} ${CheckboxSingleClasses}`,"data-class":`{'form-checkbox--invalid': ${invalid}}`,"data-t-variant":variant||"normal","data-t-size":size||"medium","data-t-align":align||"left","data-divider":showDivider?"divider":void 0,children:(0,jsx_runtime.jsx)("div",{className:CheckboxSingle_CheckboxSingle_module["form-checkbox__options"],children:(0,jsx_runtime.jsxs)("label",{htmlFor:optionId,className:CheckboxSingle_CheckboxSingle_module["form-checkbox__option"],"data-class":`{ 'form-checkbox__option--indeterminate': ${indeterminate}, 'form-checkbox__option--disabled': ${disabled} }`,children:[(0,jsx_runtime.jsx)("input",{id:optionId,type:"checkbox",className:CheckboxSingle_CheckboxSingle_module["form-checkbox__input"],checked:value||void 0,disabled,"data-indeterminate":indeterminate,required:isRequired,onChange:()=>{onChange&&onChange()}}),(0,jsx_runtime.jsxs)("span",{className:CheckboxSingle_CheckboxSingle_module["form-checkbox__input-labels"],children:[(0,jsx_runtime.jsx)("span",{className:CheckboxSingle_CheckboxSingle_module["form-checkbox__input-label"],children:label}),sublabel&&(0,jsx_runtime.jsx)("span",{className:CheckboxSingle_CheckboxSingle_module["form-checkbox__input-sublabel"],children:sublabel})]})]})})})}CheckboxSingle.__docgenInfo={description:"",methods:[],displayName:"CheckboxSingle",props:{label:{required:!0,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},sublabel:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"string"},description:""},showDivider:{required:!1,tsType:{name:"boolean"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:""},CheckboxSingleClasses:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/theme/partials/form/CheckboxSingle/CheckboxSingle.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.CheckboxSingle_form-checkbox__options__a4EKY {\n    display: flex;\n    flex-flow: column;\n    gap: var(--space);\n}\n\n.CheckboxSingle_form-checkbox__DxKSt[data-t-variant="row"][data-divider] .CheckboxSingle_form-checkbox__options__a4EKY {\n    padding-top: var(--space-x2);\n}\n\n.CheckboxSingle_form-checkbox__option__a3sxk {\n    position: relative;\n    display: flex;\n    gap: var(--space-x2);\n    align-items: center;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.CheckboxSingle_form-checkbox__DxKSt[data-t-variant="normal"][data-divider] .CheckboxSingle_form-checkbox__option__a3sxk,\n.CheckboxSingle_form-checkbox__DxKSt[data-t-variant="row"][data-divider] .CheckboxSingle_form-checkbox__option__a3sxk {\n    padding-bottom: var(--space);\n    border-bottom: 1px solid var(--theme-divider-20);\n    transition: border-color 0.1s ease;\n}\n\n.CheckboxSingle_form-checkbox__DxKSt[data-t-variant="row"][data-divider] .CheckboxSingle_form-checkbox__option__a3sxk {\n    padding-bottom: var(--space-x2);\n}\n\n.CheckboxSingle_form-checkbox__DxKSt[data-t-variant="normal"][data-divider]:not(.CheckboxSingle_form-checkbox--single__t_ovP) .CheckboxSingle_form-checkbox__option__a3sxk:last-of-type,\n.CheckboxSingle_form-checkbox__DxKSt[data-t-variant="row"][data-divider]:not(.CheckboxSingle_form-checkbox--single__t_ovP) .CheckboxSingle_form-checkbox__option__a3sxk:last-of-type {\n    border-bottom: none;\n}\n\n.CheckboxSingle_form-checkbox__DxKSt[data-t-variant="normal"][data-divider]:not(.CheckboxSingle_form-checkbox--single__t_ovP) .CheckboxSingle_form-checkbox__option__a3sxk:last-of-type {\n    padding-bottom: 0;\n}\n\n.CheckboxSingle_form-checkbox__input__Rb_uw {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: var(--space-x2_5);\n    height: var(--space-x2_5);\n    margin: 2px 0 0;\n    vertical-align: middle;\n    cursor: pointer;\n    background-color: transparent;\n    border: 2px solid var(--theme-fill-20);\n    border-radius: 4px;\n    transition: border-color 0.2s ease, background-color 0.2s ease;\n}\n\n.CheckboxSingle_form-checkbox__input__Rb_uw:checked {\n    background-color: var(--theme-emphasis-fill);\n    border-color: var(--theme-emphasis-fill);\n}\n\n.CheckboxSingle_form-checkbox__input__Rb_uw:disabled {\n    background-color: var(--theme-fill-50);\n    border-color: var(--theme-fill-30);\n}\n\n.CheckboxSingle_form-checkbox__DxKSt[data-t-variant="row"] .CheckboxSingle_form-checkbox__input__Rb_uw {\n    position: relative;\n    margin: 0;\n}\n\n.CheckboxSingle_form-checkbox__DxKSt[data-t-align="right"] .CheckboxSingle_form-checkbox__input__Rb_uw {\n    order: 2;\n}\n\n.CheckboxSingle_form-checkbox--invalid__DtIzu .CheckboxSingle_form-checkbox__input__Rb_uw:not(:disabled) {\n    border-color: var(--theme-critical-fill);\n}\n\n.CheckboxSingle_form-checkbox--invalid__DtIzu .CheckboxSingle_form-checkbox__input__Rb_uw:checked {\n    background-color: var(--theme-critical-fill);\n}\n\n.CheckboxSingle_form-checkbox__option--disabled__3a1XJ,\n.CheckboxSingle_form-checkbox__input__Rb_uw[disabled] {\n    cursor: not-allowed;\n}\n\n.CheckboxSingle_form-checkbox__input__Rb_uw:not([disabled], :checked):hover {\n    border-color: var(--theme-emphasis-fill);\n}\n\n.CheckboxSingle_form-checkbox__input__Rb_uw:not([disabled], :checked):active {\n    border-color: var(--theme-emphasis-10);\n}\n\n.CheckboxSingle_form-checkbox__input__Rb_uw:checked[disabled] {\n    background-color: var(--theme-fill-20);\n    border-color: transparent;\n}\n\n/* check icon */\n.CheckboxSingle_form-checkbox__input__Rb_uw::after {\n    position: relative;\n    top: calc(var(--space) * -0.2);\n    display: block;\n    width: calc(var(--space-x2_5) / 2 * 0.7);\n    height: calc(var(--space-x2_5) / 2);\n    content: "";\n    border-right: 2px solid var(--theme-fill-inverse-solid);\n    border-bottom: 2px solid var(--theme-fill-inverse-solid);\n    opacity: 0;\n    transition: opacity 0.3s ease, transform 0.3s ease;\n}\n\n.CheckboxSingle_form-checkbox__input__Rb_uw:checked::after {\n    opacity: 1;\n    transform: rotate(45deg);\n}\n\n/* dash icon */\n.CheckboxSingle_form-checkbox__input__Rb_uw[indeterminate]:not(:checked)::after {\n    top: 0;\n    width: calc(var(--space-x2_5) / 2 * 0.9);\n    height: 2px;\n    border-color: var(--theme-emphasis-fill);\n    border-right: 0;\n    opacity: 1;\n}\n\n.CheckboxSingle_form-checkbox__input__Rb_uw[indeterminate]:disabled::after {\n    border-color: var(--theme-fill-30);\n}\n\n.CheckboxSingle_form-checkbox--invalid__DtIzu .CheckboxSingle_form-checkbox__input__Rb_uw[indeterminate]:not(:disabled, :checked)::after {\n    border-color: var(--theme-critical-fill);\n}\n\n/* image */\n.CheckboxSingle_form-checkbox__input-image__HcH_J {\n    position: relative;\n    overflow: hidden;\n    border: 1px solid var(--theme-fill-40);\n    border-radius: var(--theme-border-radius-image);\n}\n\n.CheckboxSingle_form-checkbox__DxKSt[data-t-variant="normal"]:not([data-t-align="right"]) .CheckboxSingle_form-checkbox__input-image__HcH_J {\n    order: 1;\n}\n\n.CheckboxSingle_form-checkbox__input-image__HcH_J img {\n    width: var(--space-x6);\n    height: var(--space-x6);\n    object-fit: cover;\n}\n\n/* row variant */\n.CheckboxSingle_form-checkbox__DxKSt[data-t-variant="row"] .CheckboxSingle_form-checkbox__input__Rb_uw:not([indeterminate])::after {\n    border-color: transparent;\n    transition: transform 0.3s ease;\n}\n\n.CheckboxSingle_form-checkbox__DxKSt[data-t-variant="row"] .CheckboxSingle_form-checkbox__input__Rb_uw:checked::after {\n    border-color: var(--theme-fill-inverse-solid);\n}\n\n/* stylelint-disable-next-line no-descending-specificity */\n.CheckboxSingle_form-checkbox__DxKSt[data-t-variant="row"] .CheckboxSingle_form-checkbox__options__a4EKY {\n    gap: var(--space-x2);\n}\n\n.CheckboxSingle_form-checkbox__DxKSt[data-t-variant="row"] .CheckboxSingle_form-checkbox__option__a3sxk:hover .CheckboxSingle_form-checkbox__input__Rb_uw:not(:checked, [indeterminate])::after {\n    border-color: var(--theme-fill-40);\n}\n\n.CheckboxSingle_form-checkbox__DxKSt[data-t-variant="row"] .CheckboxSingle_form-checkbox__option__a3sxk::before {\n    position: absolute;\n    top: calc(var(--space-half) * -1);\n    left: calc(var(--space-x1_5) * -1);\n    display: block;\n    width: calc(100% + calc(var(--space-x1_5) * 2));\n    height: calc(100% + calc(var(--space-half) * 2));\n    content: \'\';\n    background-color: var(--theme-emphasis-40);\n    border-radius: var(--theme-border-radius-input-medium-inner);\n    opacity: 0;\n    transition: opacity 0.3s ease;\n}\n\n.CheckboxSingle_form-checkbox__DxKSt[data-t-variant="row"][data-divider] .CheckboxSingle_form-checkbox__option__a3sxk::before {\n    top: calc(var(--space-x2) * -1);\n    height: calc(100% + calc(var(--space) * 2));\n}\n\n.CheckboxSingle_form-checkbox__DxKSt[data-t-variant="row"] .CheckboxSingle_form-checkbox__options-collapse__r4BJn {\n    margin-right: calc(var(--space-x1_5) * -1);\n    margin-left: calc(var(--space-x1_5) * -1);\n}\n\n.CheckboxSingle_form-checkbox__DxKSt[data-t-variant="row"] .CheckboxSingle_form-checkbox__options-collapse__r4BJn .CheckboxSingle_form-checkbox__options__a4EKY {\n    margin: var(--space-half) var(--space-x1_5);\n}\n\n/* Only non-mobile devices, where hover is supported, should have hover states */\n@media (hover: hover) {\n    .CheckboxSingle_form-checkbox__DxKSt[data-t-variant="row"] .CheckboxSingle_form-checkbox__option__a3sxk:hover::before {\n        opacity: 1;\n    }\n\n    /* stylelint-disable-next-line no-descending-specificity */\n    .CheckboxSingle_form-checkbox__DxKSt[data-t-variant="row"][data-divider] .CheckboxSingle_form-checkbox__option__a3sxk:hover,\n    .CheckboxSingle_form-checkbox__option--hide-divider__qbKa3.CheckboxSingle_form-checkbox__option__a3sxk {\n        border-color: transparent;\n    }\n}\n\n.CheckboxSingle_form-checkbox__input-side-label__uK5LX,\n.CheckboxSingle_form-checkbox__input-labels__jGGDl {\n    font-size: var(--theme-font-size-minus-1);\n    line-height: var(--theme-font-size-minus-1-line-height);\n    color: var(--theme-label-color);\n}\n\n.CheckboxSingle_form-checkbox__input-labels__jGGDl {\n    display: flex;\n    flex-flow: column;\n}\n\n.CheckboxSingle_form-checkbox__DxKSt[data-t-variant="row"] .CheckboxSingle_form-checkbox__input-labels__jGGDl {\n    position: relative;\n    flex: 1;\n}\n\n.CheckboxSingle_form-checkbox__DxKSt[data-t-variant="normal"]:not([data-t-align="right"]) .CheckboxSingle_form-checkbox__input-labels__jGGDl {\n    order: 2;\n}\n\n.CheckboxSingle_form-checkbox__input-sublabel__cUApk {\n    color: var(--theme-text-20);\n}\n\n/* size */\n/* stylelint-disable-next-line no-descending-specificity */\n.CheckboxSingle_form-checkbox__DxKSt[t-size="large"] .CheckboxSingle_form-checkbox__input-side-label__uK5LX,\n.CheckboxSingle_form-checkbox__DxKSt[t-size="large"] .CheckboxSingle_form-checkbox__input-labels__jGGDl {\n    font-size: var(--theme-font-size-base);\n    font-weight: var(--theme-font-weight-light);\n    line-height: var(--theme-line-height-base);\n}\n\n/* alignment */\n/* stylelint-disable-next-line no-descending-specificity */\n.CheckboxSingle_form-checkbox__DxKSt[data-t-align="right"] .CheckboxSingle_form-checkbox__input-labels__jGGDl {\n    flex: 1;\n    order: 1;\n}\n',"",{version:3,sources:["webpack://./src/components/theme/partials/form/CheckboxSingle/CheckboxSingle.module.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,eAAe;IACf,wCAAwC;AAC5C;;AAEA;;IAEI,4BAA4B;IAC5B,gDAAgD;IAChD,kCAAkC;AACtC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,wBAAwB;IACxB,yBAAyB;IACzB,eAAe;IACf,sBAAsB;IACtB,eAAe;IACf,6BAA6B;IAC7B,sCAAsC;IACtC,kBAAkB;IAClB,8DAA8D;AAClE;;AAEA;IACI,4CAA4C;IAC5C,wCAAwC;AAC5C;;AAEA;IACI,sCAAsC;IACtC,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,4CAA4C;AAChD;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,sCAAsC;IACtC,yBAAyB;AAC7B;;AAEA,eAAe;AACf;IACI,kBAAkB;IAClB,8BAA8B;IAC9B,cAAc;IACd,wCAAwC;IACxC,mCAAmC;IACnC,WAAW;IACX,uDAAuD;IACvD,wDAAwD;IACxD,UAAU;IACV,kDAAkD;AACtD;;AAEA;IACI,UAAU;IACV,wBAAwB;AAC5B;;AAEA,cAAc;AACd;IACI,MAAM;IACN,wCAAwC;IACxC,WAAW;IACX,wCAAwC;IACxC,eAAe;IACf,UAAU;AACd;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,wCAAwC;AAC5C;;AAEA,UAAU;AACV;IACI,kBAAkB;IAClB,gBAAgB;IAChB,sCAAsC;IACtC,+CAA+C;AACnD;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA,gBAAgB;AAChB;IACI,yBAAyB;IACzB,+BAA+B;AACnC;;AAEA;IACI,6CAA6C;AACjD;;AAEA,0DAA0D;AAC1D;IACI,oBAAoB;AACxB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,iCAAiC;IACjC,kCAAkC;IAClC,cAAc;IACd,+CAA+C;IAC/C,gDAAgD;IAChD,WAAW;IACX,0CAA0C;IAC1C,4DAA4D;IAC5D,UAAU;IACV,6BAA6B;AACjC;;AAEA;IACI,+BAA+B;IAC/B,2CAA2C;AAC/C;;AAEA;IACI,0CAA0C;IAC1C,yCAAyC;AAC7C;;AAEA;IACI,2CAA2C;AAC/C;;AAEA,gFAAgF;AAChF;IACI;QACI,UAAU;IACd;;IAEA,0DAA0D;IAC1D;;QAEI,yBAAyB;IAC7B;AACJ;;AAEA;;IAEI,yCAAyC;IACzC,uDAAuD;IACvD,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,OAAO;AACX;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,2BAA2B;AAC/B;;AAEA,SAAS;AACT,0DAA0D;AAC1D;;IAEI,sCAAsC;IACtC,2CAA2C;IAC3C,0CAA0C;AAC9C;;AAEA,cAAc;AACd,0DAA0D;AAC1D;IACI,OAAO;IACP,QAAQ;AACZ",sourcesContent:['.form-checkbox__options {\n    display: flex;\n    flex-flow: column;\n    gap: var(--space);\n}\n\n.form-checkbox[data-t-variant="row"][data-divider] .form-checkbox__options {\n    padding-top: var(--space-x2);\n}\n\n.form-checkbox__option {\n    position: relative;\n    display: flex;\n    gap: var(--space-x2);\n    align-items: center;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.form-checkbox[data-t-variant="normal"][data-divider] .form-checkbox__option,\n.form-checkbox[data-t-variant="row"][data-divider] .form-checkbox__option {\n    padding-bottom: var(--space);\n    border-bottom: 1px solid var(--theme-divider-20);\n    transition: border-color 0.1s ease;\n}\n\n.form-checkbox[data-t-variant="row"][data-divider] .form-checkbox__option {\n    padding-bottom: var(--space-x2);\n}\n\n.form-checkbox[data-t-variant="normal"][data-divider]:not(.form-checkbox--single) .form-checkbox__option:last-of-type,\n.form-checkbox[data-t-variant="row"][data-divider]:not(.form-checkbox--single) .form-checkbox__option:last-of-type {\n    border-bottom: none;\n}\n\n.form-checkbox[data-t-variant="normal"][data-divider]:not(.form-checkbox--single) .form-checkbox__option:last-of-type {\n    padding-bottom: 0;\n}\n\n.form-checkbox__input {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: var(--space-x2_5);\n    height: var(--space-x2_5);\n    margin: 2px 0 0;\n    vertical-align: middle;\n    cursor: pointer;\n    background-color: transparent;\n    border: 2px solid var(--theme-fill-20);\n    border-radius: 4px;\n    transition: border-color 0.2s ease, background-color 0.2s ease;\n}\n\n.form-checkbox__input:checked {\n    background-color: var(--theme-emphasis-fill);\n    border-color: var(--theme-emphasis-fill);\n}\n\n.form-checkbox__input:disabled {\n    background-color: var(--theme-fill-50);\n    border-color: var(--theme-fill-30);\n}\n\n.form-checkbox[data-t-variant="row"] .form-checkbox__input {\n    position: relative;\n    margin: 0;\n}\n\n.form-checkbox[data-t-align="right"] .form-checkbox__input {\n    order: 2;\n}\n\n.form-checkbox--invalid .form-checkbox__input:not(:disabled) {\n    border-color: var(--theme-critical-fill);\n}\n\n.form-checkbox--invalid .form-checkbox__input:checked {\n    background-color: var(--theme-critical-fill);\n}\n\n.form-checkbox__option--disabled,\n.form-checkbox__input[disabled] {\n    cursor: not-allowed;\n}\n\n.form-checkbox__input:not([disabled], :checked):hover {\n    border-color: var(--theme-emphasis-fill);\n}\n\n.form-checkbox__input:not([disabled], :checked):active {\n    border-color: var(--theme-emphasis-10);\n}\n\n.form-checkbox__input:checked[disabled] {\n    background-color: var(--theme-fill-20);\n    border-color: transparent;\n}\n\n/* check icon */\n.form-checkbox__input::after {\n    position: relative;\n    top: calc(var(--space) * -0.2);\n    display: block;\n    width: calc(var(--space-x2_5) / 2 * 0.7);\n    height: calc(var(--space-x2_5) / 2);\n    content: "";\n    border-right: 2px solid var(--theme-fill-inverse-solid);\n    border-bottom: 2px solid var(--theme-fill-inverse-solid);\n    opacity: 0;\n    transition: opacity 0.3s ease, transform 0.3s ease;\n}\n\n.form-checkbox__input:checked::after {\n    opacity: 1;\n    transform: rotate(45deg);\n}\n\n/* dash icon */\n.form-checkbox__input[indeterminate]:not(:checked)::after {\n    top: 0;\n    width: calc(var(--space-x2_5) / 2 * 0.9);\n    height: 2px;\n    border-color: var(--theme-emphasis-fill);\n    border-right: 0;\n    opacity: 1;\n}\n\n.form-checkbox__input[indeterminate]:disabled::after {\n    border-color: var(--theme-fill-30);\n}\n\n.form-checkbox--invalid .form-checkbox__input[indeterminate]:not(:disabled, :checked)::after {\n    border-color: var(--theme-critical-fill);\n}\n\n/* image */\n.form-checkbox__input-image {\n    position: relative;\n    overflow: hidden;\n    border: 1px solid var(--theme-fill-40);\n    border-radius: var(--theme-border-radius-image);\n}\n\n.form-checkbox[data-t-variant="normal"]:not([data-t-align="right"]) .form-checkbox__input-image {\n    order: 1;\n}\n\n.form-checkbox__input-image img {\n    width: var(--space-x6);\n    height: var(--space-x6);\n    object-fit: cover;\n}\n\n/* row variant */\n.form-checkbox[data-t-variant="row"] .form-checkbox__input:not([indeterminate])::after {\n    border-color: transparent;\n    transition: transform 0.3s ease;\n}\n\n.form-checkbox[data-t-variant="row"] .form-checkbox__input:checked::after {\n    border-color: var(--theme-fill-inverse-solid);\n}\n\n/* stylelint-disable-next-line no-descending-specificity */\n.form-checkbox[data-t-variant="row"] .form-checkbox__options {\n    gap: var(--space-x2);\n}\n\n.form-checkbox[data-t-variant="row"] .form-checkbox__option:hover .form-checkbox__input:not(:checked, [indeterminate])::after {\n    border-color: var(--theme-fill-40);\n}\n\n.form-checkbox[data-t-variant="row"] .form-checkbox__option::before {\n    position: absolute;\n    top: calc(var(--space-half) * -1);\n    left: calc(var(--space-x1_5) * -1);\n    display: block;\n    width: calc(100% + calc(var(--space-x1_5) * 2));\n    height: calc(100% + calc(var(--space-half) * 2));\n    content: \'\';\n    background-color: var(--theme-emphasis-40);\n    border-radius: var(--theme-border-radius-input-medium-inner);\n    opacity: 0;\n    transition: opacity 0.3s ease;\n}\n\n.form-checkbox[data-t-variant="row"][data-divider] .form-checkbox__option::before {\n    top: calc(var(--space-x2) * -1);\n    height: calc(100% + calc(var(--space) * 2));\n}\n\n.form-checkbox[data-t-variant="row"] .form-checkbox__options-collapse {\n    margin-right: calc(var(--space-x1_5) * -1);\n    margin-left: calc(var(--space-x1_5) * -1);\n}\n\n.form-checkbox[data-t-variant="row"] .form-checkbox__options-collapse .form-checkbox__options {\n    margin: var(--space-half) var(--space-x1_5);\n}\n\n/* Only non-mobile devices, where hover is supported, should have hover states */\n@media (hover: hover) {\n    .form-checkbox[data-t-variant="row"] .form-checkbox__option:hover::before {\n        opacity: 1;\n    }\n\n    /* stylelint-disable-next-line no-descending-specificity */\n    .form-checkbox[data-t-variant="row"][data-divider] .form-checkbox__option:hover,\n    .form-checkbox__option--hide-divider.form-checkbox__option {\n        border-color: transparent;\n    }\n}\n\n.form-checkbox__input-side-label,\n.form-checkbox__input-labels {\n    font-size: var(--theme-font-size-minus-1);\n    line-height: var(--theme-font-size-minus-1-line-height);\n    color: var(--theme-label-color);\n}\n\n.form-checkbox__input-labels {\n    display: flex;\n    flex-flow: column;\n}\n\n.form-checkbox[data-t-variant="row"] .form-checkbox__input-labels {\n    position: relative;\n    flex: 1;\n}\n\n.form-checkbox[data-t-variant="normal"]:not([data-t-align="right"]) .form-checkbox__input-labels {\n    order: 2;\n}\n\n.form-checkbox__input-sublabel {\n    color: var(--theme-text-20);\n}\n\n/* size */\n/* stylelint-disable-next-line no-descending-specificity */\n.form-checkbox[t-size="large"] .form-checkbox__input-side-label,\n.form-checkbox[t-size="large"] .form-checkbox__input-labels {\n    font-size: var(--theme-font-size-base);\n    font-weight: var(--theme-font-weight-light);\n    line-height: var(--theme-line-height-base);\n}\n\n/* alignment */\n/* stylelint-disable-next-line no-descending-specificity */\n.form-checkbox[data-t-align="right"] .form-checkbox__input-labels {\n    flex: 1;\n    order: 1;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"form-checkbox__options":"CheckboxSingle_form-checkbox__options__a4EKY","form-checkbox":"CheckboxSingle_form-checkbox__DxKSt","form-checkbox__option":"CheckboxSingle_form-checkbox__option__a3sxk","form-checkbox--single":"CheckboxSingle_form-checkbox--single__t_ovP","form-checkbox__input":"CheckboxSingle_form-checkbox__input__Rb_uw","form-checkbox--invalid":"CheckboxSingle_form-checkbox--invalid__DtIzu","form-checkbox__option--disabled":"CheckboxSingle_form-checkbox__option--disabled__3a1XJ","form-checkbox__input-image":"CheckboxSingle_form-checkbox__input-image__HcH_J","form-checkbox__options-collapse":"CheckboxSingle_form-checkbox__options-collapse__r4BJn","form-checkbox__option--hide-divider":"CheckboxSingle_form-checkbox__option--hide-divider__qbKa3","form-checkbox__input-side-label":"CheckboxSingle_form-checkbox__input-side-label__uK5LX","form-checkbox__input-labels":"CheckboxSingle_form-checkbox__input-labels__jGGDl","form-checkbox__input-sublabel":"CheckboxSingle_form-checkbox__input-sublabel__cUApk"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);