"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[4208],{"./node_modules/@market/web-components/dist/esm/classnames-84eaa2b2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function classNames(...args){return args.reduce(((result,arg)=>{if("string"==typeof arg)result.push(arg);else if("object"==typeof arg)for(const cn of Object.keys(arg))arg[cn]&&result.push(cn);return result}),[]).join(" ")}__webpack_require__.d(__webpack_exports__,{c:()=>classNames})},"./node_modules/@market/web-components/dist/esm/index-2dc281eb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{let localTransformTagName;function getNamespacedTagFor(tagName){return new Proxy((tag=>tag),{apply:(target,thisArg,args)=>Reflect.apply(null!=localTransformTagName?localTransformTagName:target,thisArg,args)})(tagName)}__webpack_require__.d(__webpack_exports__,{g:()=>getNamespacedTagFor,i:()=>isElementWithTagName});function isElementWithTagName(el,tagName){var _a,_b;return(null===(_b=null===(_a=null==el?void 0:el.tagName)||void 0===_a?void 0:_a.toLowerCase)||void 0===_b?void 0:_b.call(_a))===getNamespacedTagFor(tagName)}},"./node_modules/@market/web-components/dist/esm/market-progress-tracker-step.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{market_progress_tracker_step:()=>MarketProgressTrackerStep});var _index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@market/web-components/dist/esm/index-e03cb5c3.js"),_classnames_84eaa2b2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@market/web-components/dist/esm/classnames-84eaa2b2.js"),_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@market/web-components/dist/esm/index-2dc281eb.js");function getIcon({active,completed,indicator,orientation}){if("vertical"===orientation){if("check"===indicator)return completed?(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"default-icon checked-icon",width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{d:"M5.88683 7.62327L5.71005 7.4465L5.53327 7.62327L4.12327 9.03327L3.9465 9.21005L4.12327 9.38683L7.12327 12.3868C7.37411 12.6377 7.68955 12.75 8.01005 12.75C8.33627 12.75 8.64735 12.6239 8.89224 12.3913L8.89229 12.3914L8.89683 12.3868L13.8968 7.38683L14.0736 7.21005L13.8968 7.03327L12.4868 5.62327L12.3105 5.44691L12.1337 5.62286L8.00046 9.73691L5.88683 7.62327ZM0.25 9C0.25 4.16807 4.16807 0.25 9 0.25C13.8319 0.25 17.75 4.16807 17.75 9C17.75 13.8319 13.8319 17.75 9 17.75C4.16807 17.75 0.25 13.8319 0.25 9Z"})):(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"default-icon unchecked-icon",width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16ZM9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"}));if("circle"===indicator)return active?(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"default-icon active-circle-icon",width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle",{cx:"9",cy:"9",r:"7","stroke-width":"4"})):(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"default-icon inactive-circle-icon",width:"8",height:"8",viewBox:"0 0 8 8",xmlns:"http://www.w3.org/2000/svg"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{d:"M0 4a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}))}else if("horizontal"===orientation){if("check"===indicator)return completed?(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"default-icon small-checked-icon",width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 8C0 3.58222 3.58222 0 8 0C12.4178 0 16 3.58222 16 8C16 12.4178 12.4178 16 8 16C3.58222 16 0 12.4178 0 8ZM5.0756 6.93338L7.11115 8.96893L10.9423 5.1556L12.1956 6.40893L7.75116 10.8534C7.57338 11.0223 7.35115 11.1112 7.12004 11.1112C6.88893 11.1112 6.66671 11.0312 6.48893 10.8534L3.82227 8.18671L5.0756 6.93338Z"})):(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"default-icon small-unchecked-icon",width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 14.2222C11.4364 14.2222 14.2222 11.4364 14.2222 8C14.2222 4.56356 11.4364 1.77778 8 1.77778C4.56356 1.77778 1.77778 4.56356 1.77778 8C1.77778 11.4364 4.56356 14.2222 8 14.2222ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"}));if("circle"===indicator)return active?(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"default-icon small-active-circle-icon",width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle",{cx:"8",cy:"8",r:"6","stroke-opacity":"0.9","stroke-width":"4"})):(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"default-icon small-inactive-circle-icon",width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle",{cx:"8",cy:"8",r:"4"}))}}const MarketProgressTrackerStep=class{constructor(hostRef){(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.marketProgressTrackerStepClick=(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketProgressTrackerStepClick",7),this.active=!1,this.compact=!1,this.connector=void 0,this.completed=!1,this.indicator="circle",this.interactive=!1,this.name=void 0,this.orientation="vertical",this.size="medium",this.defaultIcon=void 0}updateDefaultIcon(){const{active,completed,el,indicator,orientation}=this,slottedIcon=[...el.children].some((e=>"icon"===e.slot));this.defaultIcon=slottedIcon?null:getIcon({active,completed,indicator,orientation})}handleClick(){const{el,interactive,marketProgressTrackerStepClick,name}=this;interactive&&marketProgressTrackerStepClick.emit({index:void 0!==el.dataset.stepIndex?Number.parseInt(el.dataset.stepIndex,10):null,name:null!=name?name:null})}connectedCallback(){this.updateDefaultIcon()}render(){const{defaultIcon,handleClick,interactive,orientation,updateDefaultIcon}=this,MarketAccessoryTagName=(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-accessory"),HorizontalWrapperTagName=interactive?"button":"div",renderContent=()=>(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.F,null,(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:(0,_classnames_84eaa2b2_js__WEBPACK_IMPORTED_MODULE_2__.c)("icon",{"custom-icon":Boolean(!defaultIcon)}),part:"icon"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon",onSlotchange:updateDefaultIcon.bind(this)},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)(MarketAccessoryTagName,null,defaultIcon))),(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"content",part:"content"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"label"}),(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"subtext"}),(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)));return(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:"market-progress-tracker-step",role:"horizontal"===orientation?"presentation":"listitem"},"horizontal"===orientation?(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)(HorizontalWrapperTagName,{class:interactive?"button":"label",onClick:interactive?handleClick.bind(this):null,part:interactive?"button":null,role:interactive?"tab":"listitem"},renderContent()):renderContent())}get el(){return(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{active:["updateDefaultIcon"],completed:["updateDefaultIcon"],indicator:["updateDefaultIcon"],orientation:["updateDefaultIcon"]}}};MarketProgressTrackerStep.style=':host,::slotted(*),*{box-sizing:border-box}:host([disabled]){cursor:not-allowed !important;}:host([disabled]) *,:host([disabled]) ::slotted(*){cursor:not-allowed !important;pointer-events:none !important;}:host([orientation="horizontal"][size="large"]) ::slotted([slot="label"]),:host([orientation="vertical"][size="large"]) ::slotted([slot="label"]){font-weight:var(--core-type-heading-20-weight);font-size:var(--core-type-heading-20-size);font-family:var(--core-type-heading-20-font-family);line-height:var(--core-type-heading-20-leading);letter-spacing:var(--core-type-heading-20-tracking);text-transform:var(--core-type-heading-20-case)}::slotted([slot="subtext"]){font-weight:var(--core-type-paragraph-10-weight);font-size:var(--core-type-paragraph-10-size);font-family:var(--core-type-paragraph-10-font-family);line-height:var(--core-type-paragraph-10-leading);letter-spacing:var(--core-type-paragraph-10-tracking);text-transform:var(--core-type-paragraph-10-case)}::slotted([slot="subtext"]) b,::slotted([slot="subtext"]) strong{font-weight:var(--core-type-semibold-10-weight)}:host([orientation="vertical"][size="small"]) ::slotted([slot="label"]){font-weight:var(--core-type-medium-20-weight);font-size:var(--core-type-medium-20-size);font-family:var(--core-type-medium-20-font-family);line-height:var(--core-type-medium-20-leading);letter-spacing:var(--core-type-medium-20-tracking);text-transform:var(--core-type-medium-20-case)}:host([orientation="horizontal"][size="small"]) ::slotted([slot="label"]){font-weight:var(--core-type-semibold-10-weight);font-size:var(--core-type-semibold-10-size);font-family:var(--core-type-semibold-10-font-family);line-height:var(--core-type-semibold-10-leading);letter-spacing:var(--core-type-semibold-10-tracking);text-transform:var(--core-type-semibold-10-case)}:host([orientation="horizontal"][size="medium"]) ::slotted([slot="label"]),:host([orientation="vertical"][size="medium"]) ::slotted([slot="label"]){font-weight:var(--core-type-semibold-30-weight);font-size:var(--core-type-semibold-30-size);font-family:var(--core-type-semibold-30-font-family);line-height:var(--core-type-semibold-30-leading);letter-spacing:var(--core-type-semibold-30-tracking);text-transform:var(--core-type-semibold-30-case)}.button,.label{display:flex;grid-area:button;gap:var(--progress-tracker-horizontal-label-spacing, var(--core-metrics-spacing-100));border:0;background:transparent;color:inherit}.button{border-radius:var(--progress-tracker-horizontal-button-border-radius, 6px);cursor:pointer}.button:active,.button:hover:active{background-color:var(--progress-tracker-horizontal-button-pressed-background-color, var(--core-emphasis-40-color));color:var(--progress-tracker-horizontal-button-pressed-text-color, var(--core-text-10-color))}.button:focus-visible{outline:var(--core-focus-ring-border-size) solid var(--core-focus-ring-color);outline-offset:var(--core-focus-ring-buffer-size)}:host([compact]) .button{padding-right:var(--progress-tracker-horizontal-compact-button-padding-right, var(--core-metrics-spacing-100));padding-left:var(--progress-tracker-horizontal-compact-button-padding-left, var(--core-metrics-spacing-100))}:host([compact]:not([connector])) .button{padding-right:var(--progress-tracker-horizontal-compact-button-padding-right, 6px);padding-left:var(--progress-tracker-horizontal-compact-button-padding-left, 6px)}:host([compact]:not([connector])) .button:hover,:host([compact]:not([connector])) .button:active,:host([compact]:not([connector])) .button:focus{margin-right:-2px;margin-left:-2px;padding-right:var(--progress-tracker-horizontal-compact-button-padding-right, var(--core-metrics-spacing-100));padding-left:var(--progress-tracker-horizontal-compact-button-padding-left, var(--core-metrics-spacing-100))}:host([size="small"]:not([compact])) .button{padding-right:var(--progress-tracker-horizontal-small-size-button-padding-right, var(--core-metrics-spacing-100));padding-left:var(--progress-tracker-horizontal-small-size-button-padding-left, var(--core-metrics-spacing-100))}:host([size="medium"]:not([compact])) .button{padding-right:var(--progress-tracker-horizontal-medium-size-button-padding-right, var(--core-metrics-spacing-150));padding-left:var(--progress-tracker-horizontal-medium-size-button-padding-left, var(--core-metrics-spacing-150))}:host([size="large"]:not([compact])) .button{padding-right:var(--progress-tracker-horizontal-large-size-button-padding-right, var(--core-metrics-spacing-200));padding-left:var(--progress-tracker-horizontal-large-size-button-padding-left, var(--core-metrics-spacing-200))}@media (hover: hover){.button:hover{background-color:var(--progress-tracker-horizontal-button-hover-background-color, var(--core-fill-40-color));color:var(--progress-tracker-horizontal-button-hover-text-color, var(--core-text-10-color))}.button:active,.button:hover:active{background-color:var(--progress-tracker-horizontal-button-pressed-background-color, var(--core-emphasis-40-color));color:var(--progress-tracker-horizontal-button-pressed-text-color, var(--core-text-10-color))}:host([compact]:not([connector])) .button{z-index:0}:host([compact]:not([connector])) .button:hover{z-index:1;margin-right:-2px;margin-left:-2px;padding-right:var(--progress-tracker-horizontal-compact-button-padding-right, var(--core-metrics-spacing-100));padding-left:var(--progress-tracker-horizontal-compact-button-padding-left, var(--core-metrics-spacing-100))}}:host([orientation="horizontal"]){--connector-color:var(--progress-tracker-horizontal-connector-color, var(--core-fill-30-color));--connector-radius:var(--progress-tracker-horizontal-connector-radius, var(--divider-radius));--active-connector-color:var(--progress-tracker-horizontal-active-connector-color, var(--core-fill-10-color))}:host([orientation="vertical"]){--connector-color:var(--progress-tracker-vertical-connector-color, var(--core-fill-30-color));--connector-radius:var(--progress-tracker-vertical-connector-radius, 0);--active-connector-color:var(--progress-tracker-vertical-active-connector-color, var(--core-blue-fill-color))}:host::after{content:"";display:none;grid-area:connector;align-self:center;justify-self:center;border-radius:var(--connector-radius);pointer-events:none}:host([connector="inactive"])::after{display:flex;background-color:var(--connector-color)}:host([connector="active"])::after{display:flex;background-color:var(--active-connector-color)}:host([orientation="vertical"])::after{width:var(--progress-tracker-vertical-connector-size, 2px);height:100%}:host([orientation="horizontal"])::after{width:100%;height:var(--progress-tracker-horizontal-connector-size, 2px)}.content{display:flex;flex-shrink:0;flex-direction:column;grid-area:content;align-items:flex-start}.content ::slotted([slot="label"]){color:inherit;cursor:inherit}:host([orientation="vertical"][size="small"]) .content ::slotted([slot="label"]){margin:3px 0 0}:host([orientation="vertical"][size="medium"]) .content ::slotted([slot="label"]){margin:2px 0 0}:host([orientation="vertical"][size="large"]) .content ::slotted([slot="label"]){margin:1px 0 0}.content ::slotted([slot="subtext"]){margin:0;color:var(--progress-tracker-subtext-color, var(--core-text-20-color))}.content ::slotted(p:first-of-type){margin-top:0}.content ::slotted(p:last-of-type){margin-bottom:0}:host([orientation="horizontal"]) .content{align-self:center;white-space:nowrap}:host([orientation="horizontal"]) .content ::slotted(:not([slot="icon"]):not([slot="label"])){display:none}:host([orientation="vertical"]) .content{gap:var(--progress-tracker-line-spacing, var(--core-metrics-spacing-25));padding-bottom:var(--progress-tracker-content-padding-bottom-size, var(--core-metrics-spacing-200))}:host([orientation="horizontal"][compact]:not([active])) .content{display:none}:host([orientation="horizontal"]) .content ::slotted(:not([slot="label"])){display:none}:host([orientation="horizontal"]:not([active]):not([completed])){color:var(--progress-tracker-horizontal-inactive-text-color, var(--core-text-20-color))}:host([orientation="horizontal"][active]),:host([orientation="horizontal"][completed]){color:var(--progress-tracker-horizontal-active-text-color, var(--core-text-10-color))}:host([orientation="horizontal"][connector="active"]),:host([orientation="horizontal"][connector="inactive"]){grid-template-areas:"button connector"}:host([orientation="horizontal"]:not([connector])),:host([orientation="horizontal"][connector="hidden"]){grid-template-areas:"button";grid-template-columns:auto}:host([orientation="horizontal"][connector="active"]:not([compact])),:host([orientation="horizontal"][connector="inactive"]:not([compact])){grid-template-columns:auto\n    minmax(\n      var(--tracker-horizontal-orientation-compact-density-small-size-current-state-connector-width),\n      var(--tracker-horizontal-orientation-regular-density-small-size-current-state-connector-width)\n    )}:host([orientation="horizontal"][connector="active"][compact]),:host([orientation="horizontal"][connector="inactive"][compact]){grid-template-columns:auto\n    minmax(\n      auto,\n      var(--tracker-horizontal-orientation-compact-density-small-size-current-state-connector-width)\n    )}:host([orientation="horizontal"][size="small"]){grid-template-rows:minmax(var(--progress-tracker-horizontal-small-size-height, 34px), 1fr)}:host([orientation="horizontal"][size="medium"]){grid-template-rows:minmax(var(--progress-tracker-horizontal-medium-size-height, 40px), 1fr)}:host([orientation="horizontal"][size="large"]){grid-template-rows:minmax(var(--progress-tracker-horizontal-large-size-height, 42px), 1fr)}:host([orientation="horizontal"][size="small"][connector]:not([compact]):not([interactive])){gap:var(--tracker-horizontal-orientation-connectors-density-small-size-current-state-step-spacing)}:host([orientation="horizontal"][size="medium"][connector]:not([compact]):not([interactive])){gap:var(--tracker-horizontal-orientation-connectors-density-medium-size-current-state-step-spacing)}:host([orientation="horizontal"][size="large"][connector]:not([compact]):not([interactive])){gap:var(--tracker-horizontal-orientation-connectors-density-large-size-current-state-step-spacing)}:host([orientation="horizontal"][size="small"][compact][connector]:not([interactive])){gap:var(--tracker-horizontal-orientation-compact-density-small-size-current-state-step-spacing)}:host([orientation="horizontal"][size="medium"][compact][connector]:not([interactive])){gap:var(--tracker-horizontal-orientation-compact-density-medium-size-current-state-step-spacing)}:host([orientation="horizontal"][size="large"][compact][connector]:not([interactive])){gap:var(--tracker-horizontal-orientation-compact-density-large-size-current-state-step-spacing)}:host([orientation="horizontal"][interactive]){gap:0}:host([orientation="horizontal"]){--default-icon-fill-color:var(--progress-tracker-horizontal-default-icon-fill-color, var(--core-fill-30-color));--custom-icon-fill-color:var(--progress-tracker-horizontal-custom-icon-fill-color, var(--core-fill-20-color));--active-icon-fill-color:var(--progress-tracker-horizontal-active-icon-fill-color, var(--core-fill-10-color));--completed-icon-fill-color:var(\n      --progress-tracker-horizontal-completed-icon-fill-color,\n      var(--core-fill-10-color)\n    )}:host([orientation="vertical"]){--default-icon-fill-color:var(--progress-tracker-vertical-default-icon-fill-color, var(--core-fill-30-color));--custom-icon-fill-color:var(--progress-tracker-vertical-custom-icon-fill-color, var(--core-fill-20-color));--active-icon-fill-color:var(--progress-tracker-vertical-active-icon-fill-color, var(--core-blue-fill-color));--completed-icon-fill-color:var(\n      --progress-tracker-vertical-completed-icon-fill-color,\n      var(--core-blue-fill-color)\n    )}.icon{display:flex;grid-area:icon;justify-content:center;align-items:center;align-self:center;fill:var(--default-icon-fill-color)}.icon.custom-icon{fill:var(--custom-icon-fill-color)}:host([active]) .icon{fill:var(--active-icon-fill-color)}:host([completed]) .icon{fill:var(--completed-icon-fill-color)}:host([orientation="horizontal"]) .icon{min-width:var(--progress-tracker-horizontal-icon-width, var(--core-metrics-spacing-200));min-height:var(--progress-tracker-horizontal-icon-height, var(--core-metrics-spacing-200))}:host([orientation="vertical"]) .icon{flex:0 0 var(--progress-tracker-vertical-icon-width, var(--accessory-icon-variant-medium-size-width));max-width:var(--progress-tracker-vertical-icon-width, var(--accessory-icon-variant-medium-size-width));max-height:var(--progress-tracker-vertical-icon-height, 28px)}:host(:not([completed]):not([active])) .default-icon.active-circle-icon,:host(:not([completed]):not([active])) .default-icon.small-active-circle-icon{fill:none;stroke:var(--default-icon-fill-color)}:host([active]) .default-icon.active-circle-icon,:host([active]) .default-icon.small-active-circle-icon{fill:none;stroke:var(--active-icon-fill-color)}:host([completed]) .default-icon.active-circle-icon,:host([completed]) .default-icon.small-active-circle-icon{fill:none;stroke:var(--completed-icon-fill-color)}@media (hover: hover){:host(:not([completed]):not([active])) .button:hover .icon,:host(:not([completed]):not([active])) .button:hover .default-icon,:host(:not([completed]):not([active])) .button:active .icon,:host(:not([completed]):not([active])) .button:active .default-icon{fill:var(--progress-tracker-horizontal-hover-icon-fill-color, var(--core-fill-10-color))}:host(:not([completed]):not([active])) .button:hover .default-icon.active-circle-icon,:host(:not([completed]):not([active])) .button:hover .default-icon.small-active-circle-icon,:host(:not([completed]):not([active])) .button:active .default-icon.active-circle-icon,:host(:not([completed]):not([active])) .button:active .default-icon.small-active-circle-icon{fill:none;stroke:var(--progress-tracker-horizontal-hover-icon-fill-color, var(--core-fill-10-color))}}:host([orientation="vertical"]){grid-template-rows:var(--progress-tracker-step-vertical-icon-height, 28px) auto;grid-template-columns:var(--progress-tracker-step-vertical-icon-width, var(--accessory-icon-variant-medium-size-width))\n    auto;gap:0 var(--core-metrics-spacing-200);align-self:flex-start;color:var(--progress-tracker-vertical-text-color, var(--core-text-10-color))}:host([orientation="vertical"][connector]){grid-template-areas:"icon content"\n    "connector content"}:host([orientation="vertical"]:not([connector])){grid-template-areas:"icon content"\n    ". content"}:host{display:inline-grid}'}}]);