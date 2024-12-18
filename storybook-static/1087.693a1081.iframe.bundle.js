"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[1087],{"./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/draggable-3c5539a5.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Draggable,a:()=>isMarketTableV2Group,b:()=>isMarketTableV2Row,i:()=>isDraggable});var _max_z_index_7a974719_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/max-z-index-7a974719.js"),_raf_ac8923ee_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/raf-ac8923ee.js"),_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/index-2dc281eb.js");async function transitionToPromise(el,styles){const computedStyle=getComputedStyle(el),{transitionProperty}=computedStyle,properties=transitionProperty.split(", ");return Promise.all(Object.keys(styles).map((property=>{const value=styles[property];return new Promise((resolve=>{value||resolve(),value===el.style[property]&&resolve(),properties.includes(property)||(el.style[property]=value,resolve());const transitionEnded=e=>{e.propertyName===property&&(el.removeEventListener("transitionend",transitionEnded),resolve())};el.addEventListener("transitionend",transitionEnded),el.style[property]=value}))})))}function isMarketTableV2Row(value){const tagName=null==value?void 0:value.tagName.toLowerCase();return Boolean(value&&tagName===(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_0__.g)("market-table-v2-row"))}function isMarketTableV2Group(value){const tagName=null==value?void 0:value.tagName.toLowerCase();return Boolean(value&&tagName===(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_0__.g)("market-table-v2-group"))}function isDraggable(value){return Boolean(value&&void 0!==value.dragEnabled)}const SCROLL_DELAY=Math.min(1e3/60),MarketTableV2GroupTag=(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_0__.g)("market-table-v2-group");class Draggable{constructor(el,opts){this.el=el,this.anchor=(null==opts?void 0:opts.anchor)||"none"}async start(coords){this.canceled=!1;const{x,y}=coords;this.startCoords=this.previousCoords=coords;const{el,anchor}=this,referenceElement=isMarketTableV2Group(el)?el.querySelector('[slot="parent"]'):el,{top:startTop,right:startRight,left:startLeft,width:startWidth,height:startHeight}=measureElement(referenceElement),source=el.parentElement,target=document.elementsFromPoint(x,y)[0],clone=referenceElement.cloneNode(!0);clone.classList.add("market-drag-clone","market-drag-transitioning");if(!el.dispatchEvent(new CustomEvent("marketDragStart",{bubbles:!0,cancelable:!0,detail:Object.assign(Object.assign({},coords),{el,source,target,clone})})))return void(this.canceled=!0);this.scrollParent=function getScrollParent(element){let parent=element.parentElement;for(;parent!==document.documentElement;){const{overflowY,overflowX}=getComputedStyle(parent),scrollableY=/(auto|scroll)/.test(overflowY)&&parent.scrollHeight>parent.offsetHeight,scrollableX=/(auto|scroll)/.test(overflowX)&&parent.scrollWidth>parent.offsetWidth;if(scrollableY||scrollableX)return parent;parent=parent.parentElement}return document.documentElement}(el),el.classList.add("market-drag-placeholder"),Object.assign(clone.style,{position:"fixed",opacity:0,transitionProperty:"none"}),document.body.append(clone),await(0,_raf_ac8923ee_js__WEBPACK_IMPORTED_MODULE_1__.a)();const{width:finalWidth,height:finalHeight}=measureElement(clone);Object.assign(clone.style,{opacity:"",width:`${startWidth}px`,height:`${startHeight}px`,top:`${startTop}px`,left:"right"!==anchor?`${startLeft}px`:"auto",right:"left"!==anchor?window.innerWidth-startRight+"px":"auto",zIndex:`${(0,_max_z_index_7a974719_js__WEBPACK_IMPORTED_MODULE_2__.g)(document.body)+1}`}),await(0,_raf_ac8923ee_js__WEBPACK_IMPORTED_MODULE_1__.a)(),clone.style.transitionProperty="",isMarketTableV2Row(clone)&&clone.querySelector("market-table-v2-cell").classList.add("market-drag-clone-first-cell"),clone.style.setProperty("--market-drag-clone-shadow-opacity","1"),transitionToPromise(clone,{top:`${startTop+(startHeight-finalHeight)/2}px`,height:`${finalHeight}px`,width:"none"===anchor?`${startWidth}px`:`${finalWidth}px`}).then((()=>{clone.classList.remove("market-drag-transitioning")})),this.source=source,this.target=target,this.clone=clone}move(coords){const{el,clone,source,target,startCoords,previousCoords,canceled}=this,{x,y}=coords;if(canceled)return;if(!clone)return;if(x===previousCoords.x&&y===previousCoords.y)return;this.previousCoords=coords;const newTarget=[...document.elementsFromPoint(x,y)].find((target=>!clone.contains(target)));newTarget!==target&&(null==target||target.dispatchEvent(new CustomEvent("marketDragLeave",{bubbles:!0,detail:{x,y,el,source,target,clone}})),null==newTarget||newTarget.dispatchEvent(new CustomEvent("marketDragEnter",{bubbles:!0,detail:{x,y,el,source,target:newTarget,clone}})),this.target=newTarget),null==newTarget||newTarget.dispatchEvent(new CustomEvent("marketDragMove",{bubbles:!0,detail:{x,y,el,source,target:newTarget,clone}}));const deltaX=x-startCoords.x,deltaY=y-startCoords.y;Object.assign(clone.style,{transform:`translate(${deltaX}px, ${deltaY}px)`}),this.scroll()}async end(coords){if(this.canceled)return;const{el,source,clone,anchor,scrollInterval}=this,{x,y}=coords;if(clearInterval(scrollInterval),!clone)return;const target=[...document.elementsFromPoint(x,y)].find((target=>!clone.contains(target)));!el.dispatchEvent(new CustomEvent("marketDragEnd",{bubbles:!0,cancelable:!0,detail:{x,y,el,source,target,clone}}))||null==target||target.dispatchEvent(new CustomEvent("marketDragDrop",{bubbles:!0,cancelable:!1,detail:{x,y,el,source,target,clone}}));const collapsedTableGroup=function farthest(el,selector){let farthest,pointer=el;for(;pointer!==document.body;){const nextClosest=pointer.closest(selector);nextClosest&&(farthest=nextClosest),pointer=pointer.parentElement}return farthest}(el,`${MarketTableV2GroupTag}[collapsed]`),draggedIntoCollapsedGroup=collapsedTableGroup&&collapsedTableGroup!==el,referenceElement=draggedIntoCollapsedGroup?collapsedTableGroup.querySelector('[slot="parent"]'):isMarketTableV2Group(el)?el.querySelector('[slot="parent"]'):el;await(0,_raf_ac8923ee_js__WEBPACK_IMPORTED_MODULE_1__.a)();const{top:finalTop,right:finalRight,left:finalLeft,width:finalWidth,height:finalHeight}=measureElement(referenceElement),{top:startTop,right:startRight,left:startLeft,width:startWidth,height:startHeight}=measureElement(clone),deltaX="left"===anchor?startLeft-finalLeft:startRight-finalRight,deltaY=startTop-finalTop;Object.assign(clone.style,{pointerEvents:"none",transitionProperty:"none",top:`${finalTop}px`,left:"right"!==anchor?`${finalLeft}px`:"auto",right:"left"!==anchor?window.innerWidth-finalRight+"px":"auto",width:`${startWidth}px`,height:`${startHeight}px`,transform:`translate(${deltaX}px, ${deltaY}px)`}),await(0,_raf_ac8923ee_js__WEBPACK_IMPORTED_MODULE_1__.a)(),clone.style.transitionProperty="",isMarketTableV2Row(clone)&&isMarketTableV2Row(referenceElement)&&clone.querySelector("market-table-v2-cell").classList.remove("market-drag-clone-first-cell"),clone.classList.add("market-drag-released","market-drag-transitioning"),draggedIntoCollapsedGroup&&clone.classList.add("market-drag-into-collapsed-group"),clone.style.removeProperty("--market-drag-clone-shadow-opacity"),await transitionToPromise(clone,{width:`${finalWidth}px`,height:`${finalHeight}px`,transform:deltaX||deltaY?"translate(0, 0)":null}),el.classList.remove("market-drag-placeholder"),clone.remove(),null==el||el.dispatchEvent(new CustomEvent("marketDragComplete",{bubbles:!0,cancelable:!1,detail:{x,y,el,source,target,clone}}))}scroll(){const{clone,scrollParent,scrollInterval}=this;clearInterval(scrollInterval);const{bottom:cloneBottom,top:cloneTop,right:cloneRight,left:cloneLeft}=measureElement(clone),{bottom:scrollParentBottom,top:scrollParentTop,right:scrollParentRight,left:scrollParentLeft}=function getScrollParentRect(element){const{top,right,bottom,left}=measureElement(element);if(element===document.documentElement){return{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}}return{top,right,bottom,left}}(scrollParent),deltaBottom=cloneBottom-scrollParentBottom,deltaTop=cloneTop-scrollParentTop,top=deltaBottom>0?Math.min(deltaBottom/4,24):deltaTop<0?Math.max(deltaTop/4,-24):0,deltaRight=cloneRight-scrollParentRight,deltaLeft=cloneLeft-scrollParentLeft,left=deltaRight>0?Math.min(deltaRight/4,24):deltaLeft<0?Math.max(deltaLeft/4,-24):0;0===top&&0===left||(this.scrollInterval=setInterval((()=>{scrollParent.scrollBy({top,left})}),SCROLL_DELAY))}destroy(){this.el=null,this.clone=null,this.source=null,this.target=null,this.startCoords=null,this.canceled=null,this.scrollParent=null,this.scrollInterval=null,this.anchor=null}}function measureElement(el){const rect=el.getBoundingClientRect();return{top:Math.round(rect.top),right:Math.round(rect.right),bottom:Math.round(rect.bottom),left:Math.round(rect.left),width:Math.round(rect.width),height:Math.round(rect.height)}}},"./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/index-2dc281eb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{let localTransformTagName;function getNamespacedTagFor(tagName){return new Proxy((tag=>tag),{apply:(target,thisArg,args)=>Reflect.apply(null!=localTransformTagName?localTransformTagName:target,thisArg,args)})(tagName)}__webpack_require__.d(__webpack_exports__,{g:()=>getNamespacedTagFor,i:()=>isElementWithTagName});function isElementWithTagName(el,tagName){var _a,_b;return(null===(_b=null===(_a=null==el?void 0:el.tagName)||void 0===_a?void 0:_a.toLowerCase)||void 0===_b?void 0:_b.call(_a))===getNamespacedTagFor(tagName)}},"./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/max-z-index-7a974719.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getMaxZIndex(container){return Math.max(...[...container.querySelectorAll("*")].map((el=>Number.parseFloat(window.getComputedStyle(el).zIndex))).filter((zIndex=>!Number.isNaN(zIndex))),0)}__webpack_require__.d(__webpack_exports__,{g:()=>getMaxZIndex})},"./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/raf-ac8923ee.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function asyncRequestAnimationFrame(){return new Promise((resolve=>{var _a;(null===(_a=null===window||void 0===window?void 0:window.requestAnimationFrame)||void 0===_a?void 0:_a.call(window,(()=>resolve())))||resolve()}))}__webpack_require__.d(__webpack_exports__,{a:()=>asyncRequestAnimationFrame})}}]);