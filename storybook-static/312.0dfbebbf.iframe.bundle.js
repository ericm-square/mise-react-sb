"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[312],{"./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/market-table-area.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{market_table_area:()=>MarketTableArea});var _index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/index-fb35cab8.js");const MarketTableArea=class{constructor(hostRef){(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.orientation="horizontal",this.stickTo=void 0,this.gridTemplate=void 0,this.active=!1,this.placement=[1,-1],this.elements=void 0}assignGridTemplate(newValue,oldValue){newValue&&newValue!==oldValue&&(newValue.length>0||void 0===oldValue?(this.active=!0,this.el.style.gridTemplateColumns=newValue.join(" ")):(this.active=!1,this.el.style.gridTemplateColumns=void 0))}placementObserver(newValue,oldValue){newValue!==oldValue&&(this.el.style.gridColumn=`${newValue[0]} / span ${newValue[1]}`)}componentWillLoad(){this.assignGridTemplate(this.gridTemplate)}render(){return(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"2776d86fb5c61001ba8527edd9279b61b2d915ac",class:"market-table-area"},(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"abc78925204cb6bd9b1bbf8820e7f42e82cf66fa"}))}get el(){return(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{gridTemplate:["assignGridTemplate"],placement:["placementObserver"]}}};MarketTableArea.style=':host{position:relative;grid-column:1 / -1;background-color:var(--table-cell-state-normal-background-color, var(--core-surface-10-color))}:host(:not([active])){display:none !important;}:host([orientation="horizontal"]){display:block}:host([orientation="vertical"]){display:grid;grid-auto-columns:1fr;grid-auto-flow:column}:host([orientation="vertical"]) ::slotted(.market-table-row){border-bottom:none}:host([stick-to]){position:sticky;z-index:1}:host([stick-to][orientation="horizontal"]){z-index:2}:host([stick-to="top"]){top:0;border-bottom:var(--table-border-width, 1px) solid var(--table-heading-border-color, var(--core-divider-10-color))}:host([stick-to="bottom"]){bottom:0}:host([stick-to="bottom"]:not(:empty)){border-top:var(--table-border-width, 1px) solid var(--table-heading-border-color, var(--core-divider-10-color))}:host([stick-to="left"]){left:0;justify-content:end;border-right:var(--table-border-width, 1px) solid var(--table-heading-border-color, var(--core-divider-10-color))}:host([stick-to="right"]){right:0;justify-content:start;border-left:var(--table-border-width, 1px) solid var(--table-heading-border-color, var(--core-divider-10-color))}'}}]);