"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[3112],{"./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/index-2dc281eb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{let localTransformTagName;function getNamespacedTagFor(tagName){return new Proxy((tag=>tag),{apply:(target,thisArg,args)=>Reflect.apply(null!=localTransformTagName?localTransformTagName:target,thisArg,args)})(tagName)}__webpack_require__.d(__webpack_exports__,{g:()=>getNamespacedTagFor,i:()=>isElementWithTagName});function isElementWithTagName(el,tagName){var _a,_b;return(null===(_b=null===(_a=null==el?void 0:el.tagName)||void 0===_a?void 0:_a.toLowerCase)||void 0===_b?void 0:_b.call(_a))===getNamespacedTagFor(tagName)}},"./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/market-pagination-page-size.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{market_pagination_page_size:()=>MarketPaginationPageSize});var _index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/index-fb35cab8.js"),_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/index-2dc281eb.js");const MarketPaginationPageSize=class{constructor(hostRef){(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.marketInternalPaginationPageSizeChange=(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketInternalPaginationPageSizeChange",7),this.value=void 0,this.pageSizeOptions=void 0}listSelectionEventHander(e){const{newSelectionValue}=e.detail;this.marketInternalPaginationPageSizeChange.emit({value:newSelectionValue})}render(){const MarketButtonDropdownTagName=(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-button-dropdown"),MarketFilterButtonTagName=(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-filter-button"),MarketListTagName=(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-list"),MarketRowTagName=(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-row");return(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"fbf24ade46c0896b264152ed6eaa8351dc0d8e46",class:"market-pagination-page-size"},(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)(MarketButtonDropdownTagName,{key:"843efe3d670050415a71a1de1c44d3b590903d90","no-caret":!0,"popover-placement":"bottom-start","persist-list":!0},(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)(MarketFilterButtonTagName,{key:"6e88dc61117b4c629f6ad55ee61709cfa1e86519",size:"small",slot:"trigger"},(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"ad298fd0ebcc172866337413d7d0c7de8b78219b"},(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"f95c967b4569d95a352ca2350f10b64bfd2fe6de",name:"page-size-label"},"Results per page")),(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"376e00643233c4bcda7992874478840404e429a2",slot:"feedback"},(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"5c66fb02cb8677307d77cb8b92a9d5c8757c73d7",name:"page-size-feedback"},this.value))),(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)(MarketListTagName,{key:"86f72a49007db9f5a42a2f2f5850f682680be253",value:this.value,slot:"content"},this.pageSizeOptions.split(",").map((v=>(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)(MarketRowTagName,{key:`pageSize_${v}`,value:v},v))))))}get el(){return(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}}}]);