"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[5388],{"./node_modules/@market/web-components/dist/esm/index-2dc281eb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{let localTransformTagName;function getNamespacedTagFor(tagName){return new Proxy((tag=>tag),{apply:(target,thisArg,args)=>Reflect.apply(null!=localTransformTagName?localTransformTagName:target,thisArg,args)})(tagName)}__webpack_require__.d(__webpack_exports__,{g:()=>getNamespacedTagFor,i:()=>isElementWithTagName});function isElementWithTagName(el,tagName){var _a,_b;return(null===(_b=null===(_a=null==el?void 0:el.tagName)||void 0===_a?void 0:_a.toLowerCase)||void 0===_b?void 0:_b.call(_a))===getNamespacedTagFor(tagName)}},"./node_modules/@market/web-components/dist/esm/market-toast.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{market_toast:()=>MarketToast});var _index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@market/web-components/dist/esm/index-e03cb5c3.js"),_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@market/web-components/dist/esm/index-2dc281eb.js");const MarketToast=class{constructor(hostRef){(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.marketToastAutoDismissed=(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketToastAutoDismissed",7),this.marketToastManuallyDismissed=(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketToastManuallyDismissed",7),this.variant="info",this.persistent=!1,this.dismissButtonAriaLabel="Dismiss",this.progress=-1,this.durationTilAutoDismiss=5e3,this.showActionsNav=!1}startAutoDismissTimer(){return this.persistent||setTimeout((()=>{this.marketToastAutoDismissed.emit()}),this.durationTilAutoDismiss),Promise.resolve()}handleManualDismiss(){this.marketToastManuallyDismissed.emit()}componentWillLoad(){this.checkIfActionsArePresent()}checkIfActionsArePresent(){const actions=this.el.querySelector('[slot="action"]');this.showActionsNav=!!actions}getVariantIcon(){switch(this.variant){case"success":return"success";case"info":return"info";case"warning":return"attention";case"insight":return"recommendation";default:return"warning"}}render(){const MarketIconTagName=(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-icon"),progress=Math.min(this.progress,100),progressStyle={width:`${progress}%`};return(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"ea8031e0c9d54ff3c634ebb36042814e24a74b5c",class:"market-toast",role:"alert"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"18cc920dff395417e4693e0febd84c3655fedb7a",class:"content"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"506a426ae5b9b6da91802f7d48979b8053e4be82",class:"icon-container"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)(MarketIconTagName,{key:"72bc75f04541f3537d1f14c954e9550f592ee383",name:this.getVariantIcon()})),(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"c18c4e9e3aafedbafb3c9188d00fb7719c594826",class:"main"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("section",{key:"9de319838666fc129c0722d7bb6c1d24eec492b2"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"c3f2e675b038f45cd0e404da45235290654e0d43"})),(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{key:"3e320913d4f55d120d32d07ccef89b87fdd02823","aria-label":"toast-actions",class:this.showActionsNav?"":"hidden"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"e2a93cda67cd959d99838f09e97dfeca7adc1a26",name:"action",onSlotchange:()=>this.checkIfActionsArePresent()}))),(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{key:"e014f905baa12896113a2419c35ac2d86ce0f85b","aria-label":"dismiss-container",class:"dismiss-container"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"8755ac08692fdf1cb5e46c840d5a880d32bc6b68",type:"button","aria-label":this.dismissButtonAriaLabel,onClick:()=>this.handleManualDismiss()},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)(MarketIconTagName,{key:"ba31888f6a470040797fb1c5dcaad25a01cb139e",name:"close"})))),this.progress>=0&&(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("progress-bar",{key:"2f04b8226435f0212a828eb733cb3dfde7d57c2e",role:"progressbar","aria-valuenow":progress,"aria-valuemin":"0","aria-valuemax":"100",style:progressStyle}))}get el(){return(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};MarketToast.style=':host,::slotted(*),*{box-sizing:border-box}:host([disabled]){cursor:not-allowed !important;}:host([disabled]) *,:host([disabled]) ::slotted(*){cursor:not-allowed !important;pointer-events:none !important;}:host{display:flex;flex-direction:column;align-items:flex-start;overflow:hidden;width:100%;max-width:var(--toast-maximum-width);border-radius:var(--toast-radius);box-shadow:var(--elevation-30-shadow);font-weight:var(--toast-text-weight);font-size:var(--toast-text-size);line-height:var(--toast-text-leading);letter-spacing:var(--toast-text-tracking);text-transform:var(--toast-text-case)}.icon-container,.dismiss-container{display:flex;flex-shrink:0;align-items:center}.dismiss-container button{display:flex;justify-content:center;align-items:center;margin:0;padding:0;border:none;background-color:transparent;color:inherit;cursor:pointer;transition:opacity 0.2s;-webkit-appearance:none;-moz-appearance:none;appearance:none}.content{display:flex;align-items:flex-start;width:100%;padding:var(--toast-vertical-padding-size) var(--toast-horizontal-padding-size);-moz-column-gap:var(--toast-icon-spacing);column-gap:var(--toast-icon-spacing)}.main{display:flex;flex-grow:1;flex-wrap:wrap;row-gap:var(--toast-text-multiline-spacing);-moz-column-gap:var(--toast-content-spacing);column-gap:var(--toast-content-spacing)}section{flex-grow:1}nav{display:flex;flex-wrap:wrap;justify-content:flex-end}nav.hidden{display:none}::slotted(button),::slotted(a){margin:0;padding:0;border:none;background-color:transparent;color:inherit;font-weight:var(--toast-button-text-weight);font-size:var(--toast-button-text-size);font-family:inherit;line-height:var(--toast-button-text-leading);letter-spacing:var(--toast-button-text-tracking);text-decoration:none;text-transform:var(--toast-button-text-case);cursor:pointer;transition:opacity 0.2s}::slotted(button:hover),::slotted(a:hover){opacity:var(--text-link-hover-state-opacity)}::slotted(button:active),::slotted(a:active){opacity:var(--text-link-pressed-state-opacity)}::slotted([slot="action"]){display:flex;justify-content:center;align-items:center}::slotted([slot="action"]:not(:last-child)){margin-right:calc(var(--toast-button-spacing) * 2 + var(--toast-separator-width))}::slotted([slot="action"]:not(:last-child))::after{content:"";display:inline-block;width:var(--toast-separator-width);height:var(--toast-separator-height);margin-right:calc(-1 * var(--toast-button-spacing) - var(--toast-separator-width));margin-left:var(--toast-button-spacing);opacity:var(--toast-separator-opacity);pointer-events:none}progress-bar{height:var(--toast-progress-bar-height)}:host([variant="info"]){background-color:var(--toast-info-variant-background-color);color:var(--toast-info-variant-text-color)}:host([variant="info"]) .icon-container{color:var(--toast-info-variant-icon-color)}:host([variant="info"]) .dismiss-container{color:var(--toast-info-variant-dismiss-button-color)}:host([variant="info"]) progress-bar{background-color:var(--toast-info-variant-progress-bar-color)}:host([variant="info"]) ::slotted(a){color:var(--toast-info-variant-text-link-text-color)}:host([variant="info"]) ::slotted(button){color:var(--toast-info-variant-button-text-color)}:host([variant="info"]) ::slotted([slot="action"]:not(:last-child))::after{background-color:var(--toast-info-variant-separator-color)}:host([variant="success"]){background-color:var(--toast-success-variant-background-color);color:var(--toast-success-variant-text-color)}:host([variant="success"]) .icon-container{color:var(--toast-success-variant-icon-color)}:host([variant="success"]) .dismiss-container{color:var(--toast-success-variant-dismiss-button-color)}:host([variant="success"]) progress-bar{background-color:var(--toast-success-variant-progress-bar-color)}:host([variant="success"]) ::slotted(a){color:var(--toast-success-variant-text-link-text-color)}:host([variant="success"]) ::slotted(button){color:var(--toast-success-variant-button-text-color)}:host([variant="success"]) ::slotted([slot="action"]:not(:last-child))::after{background-color:var(--toast-success-variant-separator-color)}:host([variant="warning"]){background-color:var(--toast-warning-variant-background-color);color:var(--toast-warning-variant-text-color)}:host([variant="warning"]) .icon-container{color:var(--toast-warning-variant-icon-color)}:host([variant="warning"]) .dismiss-container{color:var(--toast-warning-variant-dismiss-button-color)}:host([variant="warning"]) progress-bar{background-color:var(--toast-warning-variant-progress-bar-color)}:host([variant="warning"]) ::slotted(a){color:var(--toast-warning-variant-text-link-text-color)}:host([variant="warning"]) ::slotted(button){color:var(--toast-warning-variant-button-text-color)}:host([variant="warning"]) ::slotted([slot="action"]:not(:last-child))::after{background-color:var(--toast-warning-variant-separator-color)}:host([variant="critical"]){background-color:var(--toast-critical-variant-background-color);color:var(--toast-critical-variant-text-color)}:host([variant="critical"]) .icon-container{color:var(--toast-critical-variant-icon-color)}:host([variant="critical"]) .dismiss-container{color:var(--toast-critical-variant-dismiss-button-color)}:host([variant="critical"]) progress-bar{background-color:var(--toast-critical-variant-progress-bar-color)}:host([variant="critical"]) ::slotted(a){color:var(--toast-critical-variant-text-link-text-color)}:host([variant="critical"]) ::slotted(button){color:var(--toast-critical-variant-button-text-color)}:host([variant="critical"]) ::slotted([slot="action"]:not(:last-child))::after{background-color:var(--toast-critical-variant-separator-color)}:host([variant="insight"]){background-color:var(--toast-insight-variant-background-color);color:var(--toast-insight-variant-text-color)}:host([variant="insight"]) .icon-container{color:var(--toast-insight-variant-icon-color)}:host([variant="insight"]) .dismiss-container{color:var(--toast-insight-variant-dismiss-button-color)}:host([variant="insight"]) progress-bar{background-color:var(--toast-insight-variant-progress-bar-color)}:host([variant="insight"]) ::slotted(a){color:var(--toast-insight-variant-text-link-text-color)}:host([variant="insight"]) ::slotted(button){color:var(--toast-insight-variant-button-text-color)}:host([variant="insight"]) ::slotted([slot="action"]:not(:last-child))::after{background-color:var(--toast-insight-variant-separator-color)}'}}]);