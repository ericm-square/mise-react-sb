"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[4683],{"./node_modules/@market/web-components/dist/esm/market-toaster.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{market_toaster:()=>MarketToaster});var _index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@market/web-components/dist/esm/index-e03cb5c3.js");const MarketToaster=class{constructor(hostRef){(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.toasts=[]}async show(toastEl){this.toasts.unshift(toastEl),toastEl.classList.add("use-transitions"),this.el.appendChild(toastEl),window.requestAnimationFrame(this.positionToasts.bind(this)),await new Promise((resolve=>setTimeout(resolve,200))),toastEl.startAutoDismissTimer()}positionToasts(){let offset=24;this.toasts.forEach((toast=>{toast.style.transform=`translate(-50%, calc(-100% - ${offset}px))`,offset+=toast.offsetHeight+16}))}async hide(toastEl){const index=this.toasts.indexOf(toastEl);this.toasts.splice(index,1),window.requestAnimationFrame((()=>{toastEl.style.transform="",this.positionToasts()})),await new Promise((resolve=>setTimeout(resolve,200))),toastEl.remove()}removeAll(){const allActiveToasts=[...this.toasts];return Promise.all(allActiveToasts.map((toast=>this.hide(toast))))}toastAutoDismissedEventHandler({target:toast}){this.hide(toast)}toastManuallyDismissedEventHandler({target:toast}){this.hide(toast)}render(){return(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"41039f2a89257f0d38a7c5ca6bda6f47e499b723",class:"market-toaster"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"3df82a1457777462257c259cd1b215bcc9f86634"}))}get el(){return(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};MarketToaster.style=":host,::slotted(*),*{box-sizing:border-box}:host([disabled]){cursor:not-allowed !important;}:host([disabled]) *,:host([disabled]) ::slotted(*){cursor:not-allowed !important;pointer-events:none !important;}:host{position:fixed;right:0;bottom:0;left:0;z-index:1010;padding:0 0 var(--toast-bottom-margin, 24px);pointer-events:none}:host ::slotted(.market-toast){width:calc(100% - var(--toast-horizontal-margin, 16px) * 2);margin:var(--toast-vertical-spacing, 16px) auto 0;pointer-events:auto}:host ::slotted(.use-transitions){position:absolute;top:100%;left:50%;margin:0;transition:transform var(--toast-animation-transition-duration, 200ms) ease-in-out;transform:translate(-50%, 0)}"}}]);