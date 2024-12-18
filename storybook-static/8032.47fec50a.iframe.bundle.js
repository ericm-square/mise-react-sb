"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[8032],{"./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/index-2dc281eb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{let localTransformTagName;function getNamespacedTagFor(tagName){return new Proxy((tag=>tag),{apply:(target,thisArg,args)=>Reflect.apply(null!=localTransformTagName?localTransformTagName:target,thisArg,args)})(tagName)}__webpack_require__.d(__webpack_exports__,{g:()=>getNamespacedTagFor,i:()=>isElementWithTagName});function isElementWithTagName(el,tagName){var _a,_b;return(null===(_b=null===(_a=null==el?void 0:el.tagName)||void 0===_a?void 0:_a.toLowerCase)||void 0===_b?void 0:_b.call(_a))===getNamespacedTagFor(tagName)}},"./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/market-tab-list.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{market_tab_list:()=>MarketTabList});var _index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/index-fb35cab8.js"),_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/index-2dc281eb.js");const MarketTabList=class{constructor(hostRef){(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.marketTabListSelectedTabChanged=(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketTabListSelectedTabChanged",7),this.size=void 0,this.selectedTab=void 0,this.defaultTab=void 0}marketTabSelectedChangedEventHandler(e){var _a;const{tabId,value}=e.detail;if(value){if(this.selectedTab!==tabId){const{defaultPrevented}=this.marketTabListSelectedTabChanged.emit({prevValue:this.selectedTab,value:tabId});defaultPrevented||(this.selectedTab=tabId)}null===(_a=this.tabEls)||void 0===_a||_a.forEach((tabEl=>{tabEl.id!==tabId?(tabEl.deselect(),tabEl.tabIndex=-1):tabEl.tabIndex=0}))}}tabWatcher(newTabId){this.selectTab(newTabId)}sizeWatcher(newSize){this.propagateSizeProp(newSize)}selectTab(tabId){var _a,_b;const tabEl=(null===(_a=this.tabEls)||void 0===_a?void 0:_a.find((el=>tabId===el.id&&!el.disabled)))||(null===(_b=this.tabEls)||void 0===_b?void 0:_b.find((el=>!el.disabled)));null==tabEl||tabEl.select()}propagateSizeProp(size){this.tabEls.forEach((el=>{this.size&&el.size!==this.size&&(el.size=size)}))}focusOnTab(el){var _a,_b;null===(_b=null===(_a=null==el?void 0:el.shadowRoot)||void 0===_a?void 0:_a.querySelector("button"))||void 0===_b||_b.focus()}handleKeyDown(e){if(this.tabEls&&!this.tabEls.every((el=>el.disabled))&&("ArrowLeft"===e.key||"ArrowRight"===e.key||"Home"===e.key||"End"===e.key)){e.preventDefault();const currentTabIndex=this.tabEls.indexOf(e.target);if(currentTabIndex<0)return;const left=this.tabEls.slice(0,currentTabIndex),right=this.tabEls.slice(currentTabIndex+1);switch(e.key){case"ArrowRight":{const focusableTabEls=[...right,...left].find((el=>!el.disabled));this.focusOnTab(focusableTabEls);break}case"ArrowLeft":{const focusableTabEls=[...right,...left].reverse().find((el=>!el.disabled));this.focusOnTab(focusableTabEls);break}case"Home":{const focusableTabEls=this.tabEls.find((el=>!el.disabled));this.focusOnTab(focusableTabEls);break}case"End":{const focusableTabEls=this.tabEls.filter((el=>!el.disabled));this.focusOnTab(focusableTabEls[focusableTabEls.length-1]);break}}}}handleSlotChange(){this.tabEls=[...this.el.querySelectorAll((0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-tab"))],this.propagateSizeProp(this.size)}componentWillLoad(){this.handleSlotChange(),this.selectTab(this.selectedTab||this.defaultTab)}render(){return(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"8a74e46b5b435b18dbb10a19572a5e166e43ce34",class:"market-tab-list",onKeyDown:this.handleKeyDown.bind(this),role:"tablist"},(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"d969f71a753e2415e92994da2212b2cef4a25406",onSlotchange:()=>this.handleSlotChange()}))}get el(){return(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{selectedTab:["tabWatcher"],size:["sizeWatcher"]}}};MarketTabList.style=':host{position:relative;display:flex}:host::after{content:"";position:absolute;bottom:0;left:0;display:block;width:100%;height:var(--tabs-list-bottom-border-size, 1px);background-color:var(--tabs-list-bottom-border-color, var(--core-divider-20-color))}:host(:not([size])),:host([size="small"]),:host([size="medium"]){gap:var(--tabs-list-medium-size-horizontal-spacing, var(--core-metrics-spacing-200))}:host([size="large"]){gap:var(--tabs-list-large-size-horizontal-spacing, var(--core-metrics-spacing-300))}'}}]);