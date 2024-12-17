"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[871],{"./node_modules/@market/web-components/dist/esm/market-tag.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{market_tag:()=>MarketTag});var _index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@market/web-components/dist/esm/index-e03cb5c3.js");const MarketTag=class{constructor(hostRef){(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.marketTagDismissed=(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketTagDismissed",7),this.disabled=!1,this.focused=!1,this.size="small",this.hasIcon=!1}onFocus(){this.disabled||(this.focused?this.focused=!1:this.focused=!0)}handleDismissTagEvent(e){this.marketTagDismissed.emit(),e.stopPropagation(),this.el.remove()}componentWillLoad(){this.hasIcon=Boolean(this.el.querySelector('[slot="icon"]'))}render(){return(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"37f3ad283e4d5685e11414f926069ec29920a574",class:"market-tag "+(this.hasIcon?"has-icon":""),onClick:()=>{this.onFocus()},onFocus:()=>{this.onFocus()},"aria-disabled":this.disabled},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"554bd8546b27836fca82c46bd0da5aaba005399e",class:"icon"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"80c1f77c916d24eea3de22680cca10878eeb07c9",name:"icon"})),(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"be124087fce86db46627d0a813ced4de628edce5"}),(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{key:"0848c9196a3ae5768f2803ddfb318c4505510400",class:"remove-indicator",width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",onClick:e=>this.handleDismissTagEvent(e)},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{key:"5a2a0424e1fb8982d7bbdb605c2dce9949a65449",d:"M4.4734 12.4734L8.00007 8.94002L11.5267 12.4734L12.4734 11.5267L8.94007 8.00002L12.4734 4.47335L11.5267 3.52669L8.00007 7.06002L4.4734 3.52669L3.52673 4.47335L7.06007 8.00002L3.52673 11.5267L4.4734 12.4734Z"})))}get el(){return(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};MarketTag.style=':host,::slotted(*),*{box-sizing:border-box}:host([disabled]){cursor:not-allowed !important;}:host([disabled]) *,:host([disabled]) ::slotted(*){cursor:not-allowed !important;pointer-events:none !important;}:host{--tag-small-size-minimum-height:var(--core-metrics-spacing-400);--tag-small-size-horizontal-spacing:var(--core-metrics-spacing-50);--tag-small-size-text-weight:var(--core-type-paragraph-10-weight);--tag-small-size-text-size:var(--core-type-paragraph-10-size);--tag-small-size-text-leading:var(--core-type-paragraph-10-leading);--tag-small-size-text-tracking:var(--core-type-paragraph-10-tracking);--tag-small-size-text-case:var(--core-type-paragraph-10-case);--tag-small-size-basic-format-top-padding:7px;--tag-small-size-basic-format-right-padding:8px;--tag-small-size-basic-format-bottom-padding:7px;--tag-small-size-basic-format-left-padding:12px;--tag-small-size-with-icon-format-top-padding:7px;--tag-small-size-with-icon-format-right-padding:8px;--tag-small-size-with-icon-format-bottom-padding:7px;--tag-small-size-with-icon-format-left-padding:8px;--tag-medium-size-minimum-height:var(--core-metrics-spacing-500);--tag-medium-size-horizontal-spacing:var(--core-metrics-spacing-50);--tag-medium-size-text-weight:var(--core-type-paragraph-20-weight);--tag-medium-size-text-size:var(--core-type-paragraph-20-size);--tag-medium-size-text-leading:var(--core-type-paragraph-20-leading);--tag-medium-size-text-tracking:var(--core-type-paragraph-20-tracking);--tag-medium-size-text-case:var(--core-type-paragraph-20-case);--tag-medium-size-basic-format-top-padding:9px;--tag-medium-size-basic-format-right-padding:8px;--tag-medium-size-basic-format-bottom-padding:9px;--tag-medium-size-basic-format-left-padding:12px;--tag-medium-size-with-icon-format-top-padding:9px;--tag-medium-size-with-icon-format-right-padding:8px;--tag-medium-size-with-icon-format-bottom-padding:9px;--tag-medium-size-with-icon-format-left-padding:8px;display:inline-flex;align-items:center;background-color:var(--tag-normal-state-background-color);color:var(--tag-normal-state-label-color);cursor:pointer}:host .icon{display:none}:host(.has-icon) .icon{display:inline-block}:host([size="small"]){gap:var(--tag-small-size-horizontal-spacing);min-height:var(--tag-small-size-minimum-height);padding:var(--tag-small-size-basic-format-top-padding)\n      var(--tag-small-size-basic-format-right-padding)\n      var(--tag-small-size-basic-format-bottom-padding)\n      var(--tag-small-size-basic-format-left-padding);border-radius:calc(var(--tag-small-size-minimum-height) / 2);font-weight:var(--tag-small-size-text-weight);font-size:var(--tag-small-size-text-size);line-height:var(--tag-small-size-text-leading);letter-spacing:var(--tag-small-size-text-tracking);text-transform:var(--tag-small-size-text-case)}:host([size="small"],.has-icon){padding:var(--tag-small-size-with-icon-format-top-padding)\n        var(--tag-small-size-with-icon-format-right-padding)\n        var(--tag-small-size-with-icon-format-bottom-padding)\n        var(--tag-small-size-with-icon-format-left-padding)}:host([size="medium"]){gap:var(--tag-medium-size-horizontal-spacing);min-height:var(--tag-medium-size-minimum-height);padding:var(--tag-medium-size-basic-format-top-padding)\n      var(--tag-medium-size-basic-format-right-padding)\n      var(--tag-medium-size-basic-format-bottom-padding)\n      var(--tag-medium-size-basic-format-left-padding);border-radius:calc(var(--tag-medium-size-minimum-height) / 2);font-weight:var(--tag-medium-size-text-weight);font-size:var(--tag-medium-size-text-size);line-height:var(--tag-medium-size-text-leading);letter-spacing:var(--tag-medium-size-text-tracking);text-transform:var(--tag-medium-size-text-case)}:host([size="medium"],.has-icon){padding:var(--tag-medium-size-with-icon-format-top-padding)\n        var(--tag-medium-size-with-icon-format-right-padding)\n        var(--tag-medium-size-with-icon-format-bottom-padding)\n        var(--tag-medium-size-with-icon-format-left-padding)}svg.remove-indicator,::slotted([slot="icon"]){flex-shrink:0}::slotted([slot="icon"]){fill:var(--tag-normal-state-icon-color)}svg.remove-indicator{fill:var(--tag-normal-state-remove-indicator-color)}@media (hover: hover){:host(:hover){background-color:var(--tag-hover-state-background-color);color:var(--tag-hover-state-label-color)}:host(:hover) ::slotted([slot="icon"]){fill:var(--tag-hover-state-icon-color)}:host(:hover) svg.remove-indicator{fill:var(--tag-hover-state-remove-indicator-color)}}:host(:active){background-color:var(--tag-pressed-state-background-color);color:var(--tag-pressed-state-label-color)}:host(:active) ::slotted([slot="icon"]){fill:var(--tag-pressed-state-icon-color)}:host(:active) svg.remove-indicator{fill:var(--tag-pressed-state-remove-indicator-color)}:host(:focus),:host([focused]){background-color:var(--tag-focus-state-background-color);color:var(--tag-focus-state-label-color)}:host(:focus) ::slotted([slot="icon"]),:host([focused]) ::slotted([slot="icon"]){fill:var(--tag-focus-state-icon-color)}:host(:focus) svg.remove-indicator,:host([focused]) svg.remove-indicator{fill:var(--tag-focus-state-remove-indicator-color)}:host([disabled]){background-color:var(--tag-disabled-state-background-color);color:var(--tag-disabled-state-label-color)}:host([disabled]) ::slotted([slot="icon"]){fill:var(--tag-disabled-state-icon-color)}:host([disabled]) svg.remove-indicator{fill:var(--tag-disabled-state-remove-indicator-color)}'}}]);