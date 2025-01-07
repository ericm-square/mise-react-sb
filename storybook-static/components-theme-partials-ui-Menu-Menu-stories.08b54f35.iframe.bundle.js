"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[5705],{"./src/components/theme/partials/ui/Menu/Menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,SmallSize:()=>SmallSize,WithDisabledItem:()=>WithDisabledItem,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"theme/partials/ui/Menu",component:__webpack_require__("./src/components/theme/partials/ui/Menu/Menu.tsx").A},items=[{label:"Item 1",value:"item1",disabled:!1,attributes:{}},{label:"Item 2",value:"item2",disabled:!1,attributes:{}},{label:"Item 3",value:"item3",disabled:!0,attributes:{}}],Default={args:{items,size:"medium",menuClasses:"default-menu"}},SmallSize={args:{items,size:"small",menuClasses:"small-menu"}},WithDisabledItem={args:{items:[...items,{label:"Disabled Item",value:"disabledItem",disabled:!0,attributes:{}}],size:"medium",menuClasses:"menu-with-disabled-item"}},__namedExportsOrder=["Default","SmallSize","WithDisabledItem"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    items,\n    size: 'medium',\n    menuClasses: 'default-menu'\n  }\n}",...Default.parameters?.docs?.source}}},SmallSize.parameters={...SmallSize.parameters,docs:{...SmallSize.parameters?.docs,source:{originalSource:"{\n  args: {\n    items,\n    size: 'small',\n    menuClasses: 'small-menu'\n  }\n}",...SmallSize.parameters?.docs?.source}}},WithDisabledItem.parameters={...WithDisabledItem.parameters,docs:{...WithDisabledItem.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: [...items, {\n      label: 'Disabled Item',\n      value: 'disabledItem',\n      disabled: true,\n      attributes: {}\n    }],\n    size: 'medium',\n    menuClasses: 'menu-with-disabled-item'\n  }\n}",...WithDisabledItem.parameters?.docs?.source}}}},"./src/components/theme/partials/ui/Menu/Menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Menu});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.0_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Menu_module=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.49_typescript@5.7.2_webpack@5.97.1_esbuild@0.24.0_/node_modules/postcss-loader/dist/cjs.js!./src/components/theme/partials/ui/Menu/Menu.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Menu_module.A,options);const Menu_Menu_module=Menu_module.A&&Menu_module.A.locals?Menu_module.A.locals:void 0;function Menu(props){const{items,size="medium",menuClasses}=props,menuRef=(0,react.useRef)(null),menuTriggerRef=(0,react.useRef)(null),[hoverIndex,setHoverIndex]=(0,react.useState)(null),[menuValue,setMenuValue]=(0,react.useState)(null),scrollToHoverItem=(0,react.useCallback)((()=>{if(menuRef.current&&null!==hoverIndex){const hoverItem=menuRef.current.querySelectorAll("li")[hoverIndex-1];if(hoverItem){const hoverItemOffset=hoverItem.offsetTop,menuHeight=menuRef.current.offsetHeight;hoverItemOffset<menuHeight+(menuHeight-menuRef.current.scrollTop)%menuHeight&&menuRef.current.scrollTo({top:hoverItem.offsetTop,behavior:"smooth"})}}}),[hoverIndex]),onMenuItemFocus=(0,react.useCallback)((()=>{}),[]),onMenuItemBlur=(0,react.useCallback)((()=>{}),[]),onMenuItemClick=(0,react.useCallback)(((index,value)=>{setMenuValue(value),props.onMenuItemClick&&props.onMenuItemClick(value)}),[props]),onKeyDown=(0,react.useCallback)((()=>{if(menuRef.current){const totalItems=menuRef.current.querySelectorAll("li").length;null!==hoverIndex&&hoverIndex<totalItems&&(setHoverIndex(hoverIndex+1),scrollToHoverItem())}}),[hoverIndex,scrollToHoverItem]),onKeyUp=(0,react.useCallback)((()=>{if(menuRef.current){const totalItems=menuRef.current.querySelectorAll("li").length,minIndex=menuTriggerRef.current?0:1;null!==hoverIndex&&hoverIndex>minIndex&&hoverIndex<=totalItems&&(setHoverIndex(hoverIndex-1),0===hoverIndex&&menuTriggerRef.current&&menuTriggerRef.current.focus(),hoverIndex>0&&scrollToHoverItem())}}),[hoverIndex,scrollToHoverItem]),onKeyEnter=(0,react.useCallback)((()=>{if(null!==hoverIndex){var _items_selectedIndex;onMenuItemClick(hoverIndex,null===(_items_selectedIndex=items[hoverIndex-1])||void 0===_items_selectedIndex?void 0:_items_selectedIndex.value)}}),[hoverIndex,items,onMenuItemClick]);return(0,jsx_runtime.jsx)("div",{ref:menuTriggerRef,className:`${Menu_Menu_module["ui-menu"]} ${menuClasses}`,"data-t-size":size,children:(0,jsx_runtime.jsx)("div",{className:`${Menu_Menu_module["ui-menu--scrollbar"]} ${Menu_Menu_module["custom-scrollbar"]}`,children:(0,jsx_runtime.jsx)("ul",{ref:menuRef,tabIndex:0,"aria-label":"menu list",role:"listbox",className:`${Menu_Menu_module["ui-menu__list"]} ${Menu_Menu_module["custom-scrollbar-inner"]}`,onFocus:onMenuItemFocus,onBlur:onMenuItemBlur,onKeyDown:e=>{"ArrowDown"===e.key?(e.preventDefault(),onKeyDown()):"ArrowUp"===e.key?(e.preventDefault(),onKeyUp()):"Enter"===e.key&&(e.preventDefault(),onKeyEnter())},children:items.length>0&&items.map(((item,index)=>(0,jsx_runtime.jsx)(MenuItem,{item,index,itemsLength:items.length,hoverIndex,menuValue,onMenuItemClick,setHoverIndex,setMenuValue},item.value)))})})})}function MenuItem(props){const{item,index,itemsLength,hoverIndex,menuValue,onMenuItemClick,setHoverIndex,setMenuValue}=props;return(0,jsx_runtime.jsx)("li",{role:"option",tabIndex:-1,"aria-posinset":index+1,"aria-setsize":itemsLength,"aria-selected":menuValue===item.value,className:`\n        ${Menu_Menu_module["ui-menu__item"]} \n        ${hoverIndex===index?Menu_Menu_module["ui-menu__item--hover"]:""} \n        ${hoverIndex===index+1?Menu_Menu_module["ui-menu__item--hide-divider"]:""} \n        ${menuValue&&menuValue.value===item.value||menuValue===item.value?Menu_Menu_module["ui-menu__item--active"]:""} \n        ${item.disabled?Menu_Menu_module["ui-menu__item--disabled"]:""}\n      `,onMouseEnter:()=>setHoverIndex(index),onMouseLeave:()=>setHoverIndex(null),onClick:()=>{item.disabled||(onMenuItemClick(index,item.value),setMenuValue(item.value))},onKeyDown:e=>{"Enter"!==e.key||item.disabled||(e.preventDefault(),onMenuItemClick(index,item.value),setMenuValue(item.value))},children:(0,jsx_runtime.jsx)("span",{className:Menu_Menu_module["ui-menu__item-wrapper"],...item.attributes,children:item.label})},item.value)}Menu.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"IMenuItem",elements:[{name:"T"}],raw:"IMenuItem<T>"}],raw:"IMenuItem<T>[]"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""},menuClasses:{required:!1,tsType:{name:"string"},description:""},onMenuItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""}}}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.0_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.49_typescript@5.7.2_webpack@5.97.1_esbuild@0.24.0_/node_modules/postcss-loader/dist/cjs.js!./src/components/theme/partials/ui/Menu/Menu.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.0_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Menu_ui-menu__6w1EZ {\n    width: 100%;\n    min-width: 160px;\n    padding: var(--space-half) var(--space);\n    margin-top: var(--space-half);\n    overflow: hidden;\n    font: var(--theme-paragraph-30-semibold);\n    color: var(--theme-body-text-color);\n    letter-spacing: var(--theme-paragraph-30-letter-spacing);\n    white-space: nowrap;\n    background: var(--theme-body-color);\n    border-radius: var(--theme-border-radius-input-medium);\n}\n\n.Menu_ui-menu__6w1EZ[data-t-size="small"] {\n    font: var(--theme-paragraph-20-semibold);\n    letter-spacing: var(--theme-paragraph-20-letter-spacing);\n    border-radius: var(--theme-border-radius-input-small);\n}\n\n.Menu_ui-menu__list__KwzuN {\n    max-height: 180px;\n    padding: 0 var(--space-x2);\n    margin: var(--space) 0;\n    list-style: none;\n}\n\n.Menu_ui-menu__list__KwzuN:focus-visible {\n    outline: none;\n}\n\n.Menu_ui-menu__item__VVNPp {\n    position: relative;\n    padding: var(--space-x2) 0;\n    color: var(--theme-link-color);\n    cursor: pointer;\n}\n\n.Menu_ui-menu__item__VVNPp:not(:last-child) {\n    border-bottom: 1px solid var(--theme-divider-20);\n}\n\n.Menu_ui-menu__item--active__Ia9_n {\n    color: var(--theme-emphasis-text);\n}\n\n.Menu_ui-menu__item__VVNPp::before {\n    position: absolute;\n    bottom: 0;\n    left: calc(var(--space-x4) / 2 * -1);\n    display: block;\n    width: calc(100% + var(--space-x4));\n    height: 100%;\n    content: \'\';\n    background-color: var(--theme-emphasis-40);\n    border-radius: var(--theme-border-radius-input-medium-inner);\n    opacity: 0;\n    transition: opacity 0.2s ease-out;\n}\n\n.Menu_ui-menu__item__VVNPp:active::before {\n    background-color: var(--theme-emphasis-30);\n}\n\n.Menu_ui-menu__6w1EZ[data-t-size="small"] .Menu_ui-menu__item__VVNPp::before {\n    border-radius: var(--theme-border-radius-input-small-inner);\n}\n\n.Menu_ui-menu__item--hover__9bFeS,\n.Menu_ui-menu__item__VVNPp:hover,\n.Menu_ui-menu__item--hide-divider__Ehb7V.Menu_ui-menu__item__VVNPp {\n    border-color: transparent;\n}\n\n/* stylelint-disable-next-line no-descending-specificity */\n.Menu_ui-menu__item--hover__9bFeS::before,\n.Menu_ui-menu__item__VVNPp:hover::before,\n.Menu_ui-menu__item--active__Ia9_n::before,\n.Menu_ui-menu__item__VVNPp:active::before {\n    opacity: 1;\n}\n\n.Menu_ui-menu__item--disabled__ymyK4 {\n    color: var(--theme-text-30);\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.Menu_ui-menu__item-wrapper__IDh5y {\n    position: relative;\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n',"",{version:3,sources:["webpack://./src/components/theme/partials/ui/Menu/Menu.module.css"],names:[],mappings:"AAAA;IACI,WAAW;IACX,gBAAgB;IAChB,uCAAuC;IACvC,6BAA6B;IAC7B,gBAAgB;IAChB,wCAAwC;IACxC,mCAAmC;IACnC,wDAAwD;IACxD,mBAAmB;IACnB,mCAAmC;IACnC,sDAAsD;AAC1D;;AAEA;IACI,wCAAwC;IACxC,wDAAwD;IACxD,qDAAqD;AACzD;;AAEA;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,0BAA0B;IAC1B,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,gDAAgD;AACpD;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,oCAAoC;IACpC,cAAc;IACd,mCAAmC;IACnC,YAAY;IACZ,WAAW;IACX,0CAA0C;IAC1C,4DAA4D;IAC5D,UAAU;IACV,iCAAiC;AACrC;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,2DAA2D;AAC/D;;AAEA;;;IAGI,yBAAyB;AAC7B;;AAEA,0DAA0D;AAC1D;;;;IAII,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,uBAAuB;AAC3B",sourcesContent:['.ui-menu {\n    width: 100%;\n    min-width: 160px;\n    padding: var(--space-half) var(--space);\n    margin-top: var(--space-half);\n    overflow: hidden;\n    font: var(--theme-paragraph-30-semibold);\n    color: var(--theme-body-text-color);\n    letter-spacing: var(--theme-paragraph-30-letter-spacing);\n    white-space: nowrap;\n    background: var(--theme-body-color);\n    border-radius: var(--theme-border-radius-input-medium);\n}\n\n.ui-menu[data-t-size="small"] {\n    font: var(--theme-paragraph-20-semibold);\n    letter-spacing: var(--theme-paragraph-20-letter-spacing);\n    border-radius: var(--theme-border-radius-input-small);\n}\n\n.ui-menu__list {\n    max-height: 180px;\n    padding: 0 var(--space-x2);\n    margin: var(--space) 0;\n    list-style: none;\n}\n\n.ui-menu__list:focus-visible {\n    outline: none;\n}\n\n.ui-menu__item {\n    position: relative;\n    padding: var(--space-x2) 0;\n    color: var(--theme-link-color);\n    cursor: pointer;\n}\n\n.ui-menu__item:not(:last-child) {\n    border-bottom: 1px solid var(--theme-divider-20);\n}\n\n.ui-menu__item--active {\n    color: var(--theme-emphasis-text);\n}\n\n.ui-menu__item::before {\n    position: absolute;\n    bottom: 0;\n    left: calc(var(--space-x4) / 2 * -1);\n    display: block;\n    width: calc(100% + var(--space-x4));\n    height: 100%;\n    content: \'\';\n    background-color: var(--theme-emphasis-40);\n    border-radius: var(--theme-border-radius-input-medium-inner);\n    opacity: 0;\n    transition: opacity 0.2s ease-out;\n}\n\n.ui-menu__item:active::before {\n    background-color: var(--theme-emphasis-30);\n}\n\n.ui-menu[data-t-size="small"] .ui-menu__item::before {\n    border-radius: var(--theme-border-radius-input-small-inner);\n}\n\n.ui-menu__item--hover,\n.ui-menu__item:hover,\n.ui-menu__item--hide-divider.ui-menu__item {\n    border-color: transparent;\n}\n\n/* stylelint-disable-next-line no-descending-specificity */\n.ui-menu__item--hover::before,\n.ui-menu__item:hover::before,\n.ui-menu__item--active::before,\n.ui-menu__item:active::before {\n    opacity: 1;\n}\n\n.ui-menu__item--disabled {\n    color: var(--theme-text-30);\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.ui-menu__item-wrapper {\n    position: relative;\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"ui-menu":"Menu_ui-menu__6w1EZ","ui-menu__list":"Menu_ui-menu__list__KwzuN","ui-menu__item":"Menu_ui-menu__item__VVNPp","ui-menu__item--active":"Menu_ui-menu__item--active__Ia9_n","ui-menu__item--hover":"Menu_ui-menu__item--hover__9bFeS","ui-menu__item--hide-divider":"Menu_ui-menu__item--hide-divider__Ehb7V","ui-menu__item--disabled":"Menu_ui-menu__item--disabled__ymyK4","ui-menu__item-wrapper":"Menu_ui-menu__item-wrapper__IDh5y"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);