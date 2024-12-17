"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[1268],{"./node_modules/@market/web-components/dist/esm/dialog-b3d4b5d7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ALL_DIALOG_TYPES,D:()=>DIALOGS_META,g:()=>getDialogSelector,s:()=>setupDialogCompactHandler});var _index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@market/web-components/dist/esm/index-2dc281eb.js");const ALL_DIALOG_TYPES=["modal-full","modal-partial","blade","dialog","sheet"],DIALOGS_META={"modal-full":{veil:!0},"modal-partial":{veil:!0},blade:{veil:!1},dialog:{veil:!0},sheet:{veil:!0}},getDialogSelector=()=>ALL_DIALOG_TYPES.map((type=>(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_0__.g)(`market-${type}`))).join(",");function setupDialogCompactHandler(modal){const main=modal.querySelector("main, .main"),header=modal.querySelector((0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_0__.g)("market-header"));main&&header&&!header.compact&&main.addEventListener("scroll",(()=>{if(main.scrollTop>0){if(!header.compact){const headingDiv=header.shadowRoot.querySelector(".heading"),headingDivStyles=getComputedStyle(headingDiv),paddingTop=Number.parseInt(headingDivStyles.height,10)+Number.parseInt(headingDivStyles.marginTop,10);main.style.paddingTop=`${paddingTop}px`,header.compact=!0}}else header.compact&&(main.style.paddingTop="",header.compact=!1)}))}},"./node_modules/@market/web-components/dist/esm/index-2dc281eb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{let localTransformTagName;function getNamespacedTagFor(tagName){return new Proxy((tag=>tag),{apply:(target,thisArg,args)=>Reflect.apply(null!=localTransformTagName?localTransformTagName:target,thisArg,args)})(tagName)}__webpack_require__.d(__webpack_exports__,{g:()=>getNamespacedTagFor,i:()=>isElementWithTagName});function isElementWithTagName(el,tagName){var _a,_b;return(null===(_b=null===(_a=null==el?void 0:el.tagName)||void 0===_a?void 0:_a.toLowerCase)||void 0===_b?void 0:_b.call(_a))===getNamespacedTagFor(tagName)}},"./node_modules/@market/web-components/dist/esm/market-context.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{market_context:()=>MarketContext});var _index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@market/web-components/dist/esm/index-e03cb5c3.js"),_index_83af7ff4_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@market/web-components/dist/esm/index-83af7ff4.js"),_dialog_b3d4b5d7_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@market/web-components/dist/esm/dialog-b3d4b5d7.js"),_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@market/web-components/dist/esm/index-2dc281eb.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");const MarketContext=class{constructor(hostRef){(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.marketContextContentsChanged=(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketContextContentsChanged",7),this.marketContextEmptied=(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketContextEmptied",7),this.currentDialog=void 0,this.noVeil=!1,this.hidden=!1,this.animationEnterDuration=_index_83af7ff4_js__WEBPACK_IMPORTED_MODULE_1__.c.CORE_ANIMATION_ENTER_TRANSITION_MODERATE_SPEED_DURATION,this.animationExitDuration=_index_83af7ff4_js__WEBPACK_IMPORTED_MODULE_1__.c.CORE_ANIMATION_EXIT_TRANSITION_MODERATE_SPEED_DURATION,this.stack=[],this.totalCount=0,this.dialogMeta={}}currentDialogWatcher(newDialog){this.stack.push(newDialog),this.stack=[...this.stack]}stackWatcher(newValue){newValue.forEach((dialog=>{this.dialogMeta[dialog.type].count+=1,this.totalCount+=1})),0===newValue.length&&(this.hidden=!0,setTimeout((()=>{this.marketContextEmptied.emit()}),this.animationExitDuration)),this.setContextVeil()}doesStackContainDialogThatRequiresVeil(dialog){return Object.entries(_dialog_b3d4b5d7_js__WEBPACK_IMPORTED_MODULE_2__.D).filter((([,config])=>config.veil)).map((([type])=>(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_3__.g)(`market-${type}`))).includes(dialog.tagName.toLowerCase())}setContextVeil(){this.el.hasAttribute("no-veil")||0===this.stack.length||(this.noVeil=!this.stack.some((dialog=>this.doesStackContainDialogThatRequiresVeil(dialog.el))))}stackHasDialog(dialogEl){return this.stack.some((dialog=>dialog.el===dialogEl))}modalLoadedEventHandler(e){const dialog=e.detail.dialog,type=e.detail.type;if(dialog.parentElement!==this.el)return;if(this.stackHasDialog(dialog))return;const generatedDialogID=this.generateDialogID(type);dialog.dialogID=generatedDialogID,dialog.id=dialog.id||generatedDialogID,this.currentDialog={el:dialog,type,dialogID:dialog.dialogID,id:dialog.id,index:this.stack.length,indexOfType:this.dialogMeta[type].count+1},this.marketContextContentsChanged.emit({action:"marketNewDialogOpened",currentDialog:this.currentDialog,stack:this.stack})}dialogDismissedEventHandler(event){event.defaultPrevented||event.target.parentElement===this.el&&this.close(event.detail.dialog.dialogID)}generateDialogID(type){return`${type}-${this.dialogMeta[type].count+1}`}getDialogByID(dialogID){return this.stack.find((dialog=>dialog.dialogID===dialogID))}open(dialogTemplate){return 0===this.stack.length&&(this.noVeil=!this.doesStackContainDialogThatRequiresVeil(dialogTemplate)),this.el.appendChild(dialogTemplate),Promise.resolve()}close(dialogID){let dialog;const d=this.stack.indexOf(dialog);if(dialogID?(dialog=this.stack.find((dialog=>dialog.dialogID===dialogID)),!dialog&&console.warn(`Tried to close dialog with data-dialog-id "${dialogID}" but none were found`)):dialog=this.currentDialog,dialog){if("dialog"===dialog.type&&dialog.el.persistent)return Promise.resolve();setTimeout((()=>{dialog.el.remove(),this.stack.splice(d,1),this.stack=[...this.stack],this.marketContextContentsChanged.emit({action:"marketDialogClosed",currentDialog:dialog,stack:this.stack})}),dialog.el.animationExitDuration)}return Promise.resolve()}closeCurrent(){return this.close(),Promise.resolve()}connectedCallback(){_dialog_b3d4b5d7_js__WEBPACK_IMPORTED_MODULE_2__.A.forEach((dialogType=>{this.dialogMeta[dialogType]={count:0}}))}render(){return(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"2a0b56ee061c12442f50ceeaa8cb717817a0d1d5",class:"market-context "+(this.noVeil?"no-veil":"")},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"12f97a955528ee801f1459cc9426f71b4a625025"}))}get el(){return(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{currentDialog:["currentDialogWatcher"],stack:["stackWatcher"]}}};MarketContext.style=":host,::slotted(*),*{box-sizing:border-box}:host([disabled]){cursor:not-allowed !important;}:host([disabled]) *,:host([disabled]) ::slotted(*){cursor:not-allowed !important;pointer-events:none !important;}:host{position:absolute;display:grid;justify-items:center;width:100vw;height:100%;animation:var(--core-animation-enter-transition-moderate-speed-duration)\n    market-fade-in\n    forwards\n    var(--core-animation-enter-transition-easing)}:host([hidden]){opacity:0%;animation-name:market-fade-out;animation-duration:var(--core-animation-exit-transition-moderate-speed-duration);animation-timing-function:var(--core-animation-exit-transition-easing)}:host>*{pointer-events:auto}:host(:not(.no-veil)){background-color:var(--core-surface-overlay-color);opacity:100%;pointer-events:auto}:host(.no-veil){pointer-events:none}@media screen and (min-width: 800px){::slotted(.market-modal-partial){align-self:center;margin:var(--modal-partial-vertical-screen-buffer-size) var(--modal-partial-horizontal-screen-buffer-size)}}::slotted(.market-dialog){align-self:center;width:calc(100% - (2 * var(--modal-dialog-horizontal-screen-buffer-size, 16px)))}"}}]);