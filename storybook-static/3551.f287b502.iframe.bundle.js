"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[3551],{"./src/components/theme/partials/ui/Menu/Menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Menu});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Menu_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/theme/partials/ui/Menu/Menu.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Menu_module.A,options);const Menu_Menu_module=Menu_module.A&&Menu_module.A.locals?Menu_module.A.locals:void 0;function Menu(props){const{items,size="medium",menuClasses}=props,menuRef=(0,react.useRef)(null),menuTriggerRef=(0,react.useRef)(null),[hoverIndex,setHoverIndex]=(0,react.useState)(null),[menuValue,setMenuValue]=(0,react.useState)(null),scrollToHoverItem=(0,react.useCallback)((()=>{if(menuRef.current&&null!==hoverIndex){const hoverItem=menuRef.current.querySelectorAll("li")[hoverIndex-1];if(hoverItem){const hoverItemOffset=hoverItem.offsetTop,menuHeight=menuRef.current.offsetHeight;hoverItemOffset<menuHeight+(menuHeight-menuRef.current.scrollTop)%menuHeight&&menuRef.current.scrollTo({top:hoverItem.offsetTop,behavior:"smooth"})}}}),[hoverIndex]),onMenuItemFocus=(0,react.useCallback)((()=>{}),[]),onMenuItemBlur=(0,react.useCallback)((()=>{}),[]),onMenuItemClick=(0,react.useCallback)(((index,value)=>{setMenuValue(value)}),[]),onKeyDown=(0,react.useCallback)((()=>{if(menuRef.current){const totalItems=menuRef.current.querySelectorAll("li").length;null!==hoverIndex&&hoverIndex<totalItems&&(setHoverIndex(hoverIndex+1),scrollToHoverItem())}}),[hoverIndex,scrollToHoverItem]),onKeyUp=(0,react.useCallback)((()=>{if(menuRef.current){const totalItems=menuRef.current.querySelectorAll("li").length,minIndex=menuTriggerRef.current?0:1;null!==hoverIndex&&hoverIndex>minIndex&&hoverIndex<=totalItems&&(setHoverIndex(hoverIndex-1),0===hoverIndex&&menuTriggerRef.current&&menuTriggerRef.current.focus(),hoverIndex>0&&scrollToHoverItem())}}),[hoverIndex,scrollToHoverItem]),onKeyEnter=(0,react.useCallback)((()=>{if(null!==hoverIndex){var _items_selectedIndex;onMenuItemClick(hoverIndex,null===(_items_selectedIndex=items[hoverIndex-1])||void 0===_items_selectedIndex?void 0:_items_selectedIndex.value)}}),[hoverIndex,items,onMenuItemClick]);return(0,jsx_runtime.jsx)("div",{ref:menuTriggerRef,className:`${Menu_Menu_module["ui-menu"]} ${menuClasses}`,"data-t-size":size,children:(0,jsx_runtime.jsx)("div",{className:`${Menu_Menu_module["ui-menu--scrollbar"]} ${Menu_Menu_module["custom-scrollbar"]}`,children:(0,jsx_runtime.jsx)("ul",{ref:menuRef,tabIndex:0,"aria-label":"menu list",role:"listbox",className:`${Menu_Menu_module["ui-menu__list"]} ${Menu_Menu_module["custom-scrollbar-inner"]}`,onFocus:onMenuItemFocus,onBlur:onMenuItemBlur,onKeyDown:e=>{"ArrowDown"===e.key?(e.preventDefault(),onKeyDown()):"ArrowUp"===e.key?(e.preventDefault(),onKeyUp()):"Enter"===e.key&&(e.preventDefault(),onKeyEnter())},children:items.length>0&&items.map(((item,index)=>(0,jsx_runtime.jsx)(MenuItem,{item,index,itemsLength:items.length,hoverIndex,menuValue,onMenuItemClick,setHoverIndex,setMenuValue},item.value)))})})})}function MenuItem(props){const{item,index,itemsLength,hoverIndex,menuValue,onMenuItemClick,setHoverIndex,setMenuValue}=props;return(0,jsx_runtime.jsx)("li",{role:"option",tabIndex:-1,"aria-posinset":index+1,"aria-setsize":itemsLength,"aria-selected":menuValue===item.value,className:`\n        ${Menu_Menu_module["ui-menu__item"]} \n        ${hoverIndex===index?Menu_Menu_module["ui-menu__item--hover"]:""} \n        ${hoverIndex===index+1?Menu_Menu_module["ui-menu__item--hide-divider"]:""} \n        ${menuValue&&menuValue.value===item.value||menuValue===item.value?Menu_Menu_module["ui-menu__item--active"]:""} \n        ${item.disabled?Menu_Menu_module["ui-menu__item--disabled"]:""}`,onMouseEnter:()=>setHoverIndex(index),onMouseLeave:()=>setHoverIndex(null),onClick:()=>{item.disabled||(onMenuItemClick(index,item.value),setMenuValue(item.value))},onKeyDown:e=>{"Enter"!==e.key||item.disabled||(e.preventDefault(),onMenuItemClick(index,item.value),setMenuValue(item.value))},children:(0,jsx_runtime.jsx)("span",{className:Menu_Menu_module["ui-menu__item-wrapper"],...item.attributes,children:item.label})},item.value)}Menu.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"IMenuItem",elements:[{name:"T"}],raw:"IMenuItem<T>"}],raw:"IMenuItem<T>[]"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""},menuClasses:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/theme/partials/ui/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Tooltip});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Tooltip_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/theme/partials/ui/Tooltip/Tooltip.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Tooltip_module.A,options);const Tooltip_Tooltip_module=Tooltip_module.A&&Tooltip_module.A.locals?Tooltip_module.A.locals:void 0;var Menu=__webpack_require__("./src/components/theme/partials/ui/Menu/Menu.tsx"),TooltipMenu=__webpack_require__("./src/components/theme/partials/ui/TooltipMenu/TooltipMenu.tsx");function Tooltip(props){const{variant="normal"}=props;return"menu"===variant?(0,jsx_runtime.jsx)(MenuTooltip,{...props}):(0,jsx_runtime.jsx)(NonMenuTooltip,{...props})}function MenuTooltip(props){const{id,menuTemplateId,menuSize="small",borderless,fullWidth,flush,tooltipAttributes,items,show}=props,[menuValue]=react.useState(void 0);return(0,jsx_runtime.jsx)("div",{id:id||Math.random().toString(36).substr(2,9),className:Tooltip_Tooltip_module["ui-tooltip"],"data-show":show?"true":void 0,"data-t-variant":"menu","data-fullwidth":fullWidth?"true":void 0,"data-borderless":borderless?"true":void 0,"data-flush":flush?"true":void 0,...tooltipAttributes,children:menuTemplateId?(0,jsx_runtime.jsx)("div",{id:menuTemplateId,children:(0,jsx_runtime.jsx)(TooltipMenu.A,{items,menuSize,selectedItem:menuValue})}):(0,jsx_runtime.jsx)(Menu.A,{items,size:menuSize})})}function NonMenuTooltip(props){const{id,variant,fullWidth,tooltipContrast,tooltipClasses,tooltipAttributes,children}=props;return(0,jsx_runtime.jsx)("span",{id:id||Math.random().toString(36).substr(2,9),role:"tooltip",className:`${Tooltip_Tooltip_module["ui-tooltip"]} ${tooltipClasses}`,"data-t-variant":variant,"data-fullwidth":fullWidth?"true":void 0,"data-contrast":tooltipContrast?"true":void 0,...tooltipAttributes,children})}Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{id:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'menu' | 'dropdown' | 'normal'",elements:[{name:"literal",value:"'menu'"},{name:"literal",value:"'dropdown'"},{name:"literal",value:"'normal'"}]},description:""},menuTemplateId:{required:!1,tsType:{name:"string"},description:""},menuSize:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""},borderless:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},flush:{required:!1,tsType:{name:"boolean"},description:""},tooltipContrast:{required:!1,tsType:{name:"boolean"},description:""},tooltipClasses:{required:!1,tsType:{name:"string"},description:""},tooltipAttributes:{required:!1,tsType:{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"IMenuItem"}],raw:"IMenuItem[]"},description:""},show:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}},"./src/components/theme/partials/ui/TooltipMenu/TooltipMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TooltipMenu});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/components/theme/partials/ui/Menu/Menu.tsx"));function TooltipMenu(props){const{items=[],menuSize}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__.A,{items,size:menuSize})}TooltipMenu.__docgenInfo={description:"",methods:[],displayName:"TooltipMenu",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"IMenuItem"}],raw:"IMenuItem[]"},description:""},menuSize:{required:!0,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""},selectedItem:{required:!1,tsType:{name:"IMenuItem"},description:""}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/theme/partials/ui/Menu/Menu.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Menu_ui-menu__6w1EZ {\n    width: 100%;\n    min-width: 160px;\n    padding: var(--space-half) var(--space);\n    margin-top: var(--space-half);\n    overflow: hidden;\n    font: var(--theme-paragraph-30-semibold);\n    color: var(--theme-body-text-color);\n    letter-spacing: var(--theme-paragraph-30-letter-spacing);\n    white-space: nowrap;\n    background: var(--theme-body-color);\n    border-radius: var(--theme-border-radius-input-medium);\n}\n\n.Menu_ui-menu__6w1EZ[data-t-size="small"] {\n    font: var(--theme-paragraph-20-semibold);\n    letter-spacing: var(--theme-paragraph-20-letter-spacing);\n    border-radius: var(--theme-border-radius-input-small);\n}\n\n.Menu_ui-menu__list__KwzuN {\n    max-height: 180px;\n    padding: 0 var(--space-x2);\n    margin: var(--space) 0;\n    list-style: none;\n}\n\n.Menu_ui-menu__list__KwzuN:focus-visible {\n    outline: none;\n}\n\n.Menu_ui-menu__item__VVNPp {\n    position: relative;\n    padding: var(--space-x2) 0;\n    color: var(--theme-link-color);\n    cursor: pointer;\n}\n\n.Menu_ui-menu__item__VVNPp:not(:last-child) {\n    border-bottom: 1px solid var(--theme-divider-20);\n}\n\n.Menu_ui-menu__item--active__Ia9_n {\n    color: var(--theme-emphasis-text);\n}\n\n.Menu_ui-menu__item__VVNPp::before {\n    position: absolute;\n    bottom: 0;\n    left: calc(var(--space-x4) / 2 * -1);\n    display: block;\n    width: calc(100% + var(--space-x4));\n    height: 100%;\n    content: \'\';\n    background-color: var(--theme-emphasis-40);\n    border-radius: var(--theme-border-radius-input-medium-inner);\n    opacity: 0;\n    transition: opacity 0.2s ease-out;\n}\n\n.Menu_ui-menu__item__VVNPp:active::before {\n    background-color: var(--theme-emphasis-30);\n}\n\n.Menu_ui-menu__6w1EZ[data-t-size="small"] .Menu_ui-menu__item__VVNPp::before {\n    border-radius: var(--theme-border-radius-input-small-inner);\n}\n\n.Menu_ui-menu__item--hover__9bFeS,\n.Menu_ui-menu__item__VVNPp:hover,\n.Menu_ui-menu__item--hide-divider__Ehb7V.Menu_ui-menu__item__VVNPp {\n    border-color: transparent;\n}\n\n/* stylelint-disable-next-line no-descending-specificity */\n.Menu_ui-menu__item--hover__9bFeS::before,\n.Menu_ui-menu__item__VVNPp:hover::before,\n.Menu_ui-menu__item--active__Ia9_n::before,\n.Menu_ui-menu__item__VVNPp:active::before {\n    opacity: 1;\n}\n\n.Menu_ui-menu__item--disabled__ymyK4 {\n    color: var(--theme-text-30);\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.Menu_ui-menu__item-wrapper__IDh5y {\n    position: relative;\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n',"",{version:3,sources:["webpack://./src/components/theme/partials/ui/Menu/Menu.module.css"],names:[],mappings:"AAAA;IACI,WAAW;IACX,gBAAgB;IAChB,uCAAuC;IACvC,6BAA6B;IAC7B,gBAAgB;IAChB,wCAAwC;IACxC,mCAAmC;IACnC,wDAAwD;IACxD,mBAAmB;IACnB,mCAAmC;IACnC,sDAAsD;AAC1D;;AAEA;IACI,wCAAwC;IACxC,wDAAwD;IACxD,qDAAqD;AACzD;;AAEA;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,0BAA0B;IAC1B,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,gDAAgD;AACpD;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,oCAAoC;IACpC,cAAc;IACd,mCAAmC;IACnC,YAAY;IACZ,WAAW;IACX,0CAA0C;IAC1C,4DAA4D;IAC5D,UAAU;IACV,iCAAiC;AACrC;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,2DAA2D;AAC/D;;AAEA;;;IAGI,yBAAyB;AAC7B;;AAEA,0DAA0D;AAC1D;;;;IAII,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,uBAAuB;AAC3B",sourcesContent:['.ui-menu {\n    width: 100%;\n    min-width: 160px;\n    padding: var(--space-half) var(--space);\n    margin-top: var(--space-half);\n    overflow: hidden;\n    font: var(--theme-paragraph-30-semibold);\n    color: var(--theme-body-text-color);\n    letter-spacing: var(--theme-paragraph-30-letter-spacing);\n    white-space: nowrap;\n    background: var(--theme-body-color);\n    border-radius: var(--theme-border-radius-input-medium);\n}\n\n.ui-menu[data-t-size="small"] {\n    font: var(--theme-paragraph-20-semibold);\n    letter-spacing: var(--theme-paragraph-20-letter-spacing);\n    border-radius: var(--theme-border-radius-input-small);\n}\n\n.ui-menu__list {\n    max-height: 180px;\n    padding: 0 var(--space-x2);\n    margin: var(--space) 0;\n    list-style: none;\n}\n\n.ui-menu__list:focus-visible {\n    outline: none;\n}\n\n.ui-menu__item {\n    position: relative;\n    padding: var(--space-x2) 0;\n    color: var(--theme-link-color);\n    cursor: pointer;\n}\n\n.ui-menu__item:not(:last-child) {\n    border-bottom: 1px solid var(--theme-divider-20);\n}\n\n.ui-menu__item--active {\n    color: var(--theme-emphasis-text);\n}\n\n.ui-menu__item::before {\n    position: absolute;\n    bottom: 0;\n    left: calc(var(--space-x4) / 2 * -1);\n    display: block;\n    width: calc(100% + var(--space-x4));\n    height: 100%;\n    content: \'\';\n    background-color: var(--theme-emphasis-40);\n    border-radius: var(--theme-border-radius-input-medium-inner);\n    opacity: 0;\n    transition: opacity 0.2s ease-out;\n}\n\n.ui-menu__item:active::before {\n    background-color: var(--theme-emphasis-30);\n}\n\n.ui-menu[data-t-size="small"] .ui-menu__item::before {\n    border-radius: var(--theme-border-radius-input-small-inner);\n}\n\n.ui-menu__item--hover,\n.ui-menu__item:hover,\n.ui-menu__item--hide-divider.ui-menu__item {\n    border-color: transparent;\n}\n\n/* stylelint-disable-next-line no-descending-specificity */\n.ui-menu__item--hover::before,\n.ui-menu__item:hover::before,\n.ui-menu__item--active::before,\n.ui-menu__item:active::before {\n    opacity: 1;\n}\n\n.ui-menu__item--disabled {\n    color: var(--theme-text-30);\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.ui-menu__item-wrapper {\n    position: relative;\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"ui-menu":"Menu_ui-menu__6w1EZ","ui-menu__list":"Menu_ui-menu__list__KwzuN","ui-menu__item":"Menu_ui-menu__item__VVNPp","ui-menu__item--active":"Menu_ui-menu__item--active__Ia9_n","ui-menu__item--hover":"Menu_ui-menu__item--hover__9bFeS","ui-menu__item--hide-divider":"Menu_ui-menu__item--hide-divider__Ehb7V","ui-menu__item--disabled":"Menu_ui-menu__item--disabled__ymyK4","ui-menu__item-wrapper":"Menu_ui-menu__item-wrapper__IDh5y"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/theme/partials/ui/Tooltip/Tooltip.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Tooltip_ui-tooltip__tmAbz[data-t-variant="normal"],\n.Tooltip_ui-tooltip__tmAbz[data-t-variant="dropdown"] {\n    font: var(--theme-paragraph-20-medium);\n    color: var(--theme-surface-05);\n    letter-spacing: var(--theme-paragraph-20-letter-spacing);\n    white-space: nowrap;\n    background: var(--ui-tooltip-background-override, var(--theme-surface-inverse));\n    border-radius: var(--ui-tooltip-border-radius-override, var(--theme-border-radius-input-small));\n    box-shadow: var(--theme-elevation-20);\n}\n\n.Tooltip_ui-tooltip__tmAbz[data-t-variant="dropdown"] {\n    overflow: hidden;\n    color: var(--theme-surface-inverse);\n    background: var(--ui-tooltip-background-override, var(--theme-surface-05));\n}\n\n.Tooltip_ui-tooltip__tmAbz[data-t-variant="normal"]:not([flush]),\n.Tooltip_ui-tooltip__tmAbz[data-t-variant="dropdown"]:not([flush]) {\n    padding: var(--space-half) var(--space);\n}\n\n.Tooltip_ui-tooltip__tmAbz[data-fullwidth] {\n    width: 100%;\n}\n\n.Tooltip_ui-tooltip__tmAbz[contrast] {\n    color: var(--theme-surface-inverse);\n    background: var(--theme-surface-05);\n}\n\n.Tooltip_ui-tooltip__tmAbz,\n.Tooltip_ui-tooltip__tmAbz[data-t-variant="menu"] {\n    position: absolute;\n    z-index: -1;\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.2s ease-out, visibility 0s linear 0.5s;\n}\n\n.Tooltip_ui-tooltip__tmAbz[data-show],\n.Tooltip_ui-tooltip__tmAbz[data-t-variant="menu"][data-show] {\n    z-index: var(--theme-z-index-overlay);\n    height: auto;\n    overflow: initial;\n    visibility: visible;\n    opacity: 1;\n    transition: opacity 0.2s ease-out;\n}\n\n/* stylelint-disable-next-line no-descending-specificity */\n.Tooltip_ui-tooltip__tmAbz[data-t-variant="dropdown"],\n.Tooltip_ui-tooltip__tmAbz[data-t-variant="menu"]:not([data-borderless]) .Tooltip_ui-menu__vvZ_V {\n    box-shadow: var(--theme-elevation-20);\n}\n\n.Tooltip_ui-tooltip__tmAbz[data-t-variant="menu"][data-borderless] .Tooltip_ui-menu__vvZ_V {\n    padding: 0;\n    margin: 0;\n    border: none;\n    box-shadow: none;\n}\n\n.Tooltip_ui-tooltip__tmAbz[data-t-variant="menu"][data-borderless] .Tooltip_ui-menu__vvZ_V .Tooltip_ui-menu__list__fi43W {\n    margin: 0;\n}\n\n.Tooltip_ui-tooltip__tmAbz p {\n    font: var(--theme-paragraph-20);\n    letter-spacing: var(--theme-paragraph-20-letter-spacing);\n}\n\n.Tooltip_ui-loader--overlay__Qt0Kz.Tooltip_ui-tooltip__loader__Qtay7 {\n    min-height: 0;\n}\n',"",{version:3,sources:["webpack://./src/components/theme/partials/ui/Tooltip/Tooltip.module.css"],names:[],mappings:"AAAA;;IAEI,sCAAsC;IACtC,8BAA8B;IAC9B,wDAAwD;IACxD,mBAAmB;IACnB,+EAA+E;IAC/E,+FAA+F;IAC/F,qCAAqC;AACzC;;AAEA;IACI,gBAAgB;IAChB,mCAAmC;IACnC,0EAA0E;AAC9E;;AAEA;;IAEI,uCAAuC;AAC3C;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,mCAAmC;IACnC,mCAAmC;AACvC;;AAEA;;IAEI,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,4DAA4D;AAChE;;AAEA;;IAEI,qCAAqC;IACrC,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,UAAU;IACV,iCAAiC;AACrC;;AAEA,0DAA0D;AAC1D;;IAEI,qCAAqC;AACzC;;AAEA;IACI,UAAU;IACV,SAAS;IACT,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,+BAA+B;IAC/B,wDAAwD;AAC5D;;AAEA;IACI,aAAa;AACjB",sourcesContent:['.ui-tooltip[data-t-variant="normal"],\n.ui-tooltip[data-t-variant="dropdown"] {\n    font: var(--theme-paragraph-20-medium);\n    color: var(--theme-surface-05);\n    letter-spacing: var(--theme-paragraph-20-letter-spacing);\n    white-space: nowrap;\n    background: var(--ui-tooltip-background-override, var(--theme-surface-inverse));\n    border-radius: var(--ui-tooltip-border-radius-override, var(--theme-border-radius-input-small));\n    box-shadow: var(--theme-elevation-20);\n}\n\n.ui-tooltip[data-t-variant="dropdown"] {\n    overflow: hidden;\n    color: var(--theme-surface-inverse);\n    background: var(--ui-tooltip-background-override, var(--theme-surface-05));\n}\n\n.ui-tooltip[data-t-variant="normal"]:not([flush]),\n.ui-tooltip[data-t-variant="dropdown"]:not([flush]) {\n    padding: var(--space-half) var(--space);\n}\n\n.ui-tooltip[data-fullwidth] {\n    width: 100%;\n}\n\n.ui-tooltip[contrast] {\n    color: var(--theme-surface-inverse);\n    background: var(--theme-surface-05);\n}\n\n.ui-tooltip,\n.ui-tooltip[data-t-variant="menu"] {\n    position: absolute;\n    z-index: -1;\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.2s ease-out, visibility 0s linear 0.5s;\n}\n\n.ui-tooltip[data-show],\n.ui-tooltip[data-t-variant="menu"][data-show] {\n    z-index: var(--theme-z-index-overlay);\n    height: auto;\n    overflow: initial;\n    visibility: visible;\n    opacity: 1;\n    transition: opacity 0.2s ease-out;\n}\n\n/* stylelint-disable-next-line no-descending-specificity */\n.ui-tooltip[data-t-variant="dropdown"],\n.ui-tooltip[data-t-variant="menu"]:not([data-borderless]) .ui-menu {\n    box-shadow: var(--theme-elevation-20);\n}\n\n.ui-tooltip[data-t-variant="menu"][data-borderless] .ui-menu {\n    padding: 0;\n    margin: 0;\n    border: none;\n    box-shadow: none;\n}\n\n.ui-tooltip[data-t-variant="menu"][data-borderless] .ui-menu .ui-menu__list {\n    margin: 0;\n}\n\n.ui-tooltip p {\n    font: var(--theme-paragraph-20);\n    letter-spacing: var(--theme-paragraph-20-letter-spacing);\n}\n\n.ui-loader--overlay.ui-tooltip__loader {\n    min-height: 0;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"ui-tooltip":"Tooltip_ui-tooltip__tmAbz","ui-menu":"Tooltip_ui-menu__vvZ_V","ui-menu__list":"Tooltip_ui-menu__list__fi43W","ui-loader--overlay":"Tooltip_ui-loader--overlay__Qt0Kz","ui-tooltip__loader":"Tooltip_ui-tooltip__loader__Qtay7"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);