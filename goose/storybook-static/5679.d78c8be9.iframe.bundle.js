"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[5679],{"./node_modules/@market/web-components/dist/esm/index-2dc281eb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{let localTransformTagName;function getNamespacedTagFor(tagName){return new Proxy((tag=>tag),{apply:(target,thisArg,args)=>Reflect.apply(null!=localTransformTagName?localTransformTagName:target,thisArg,args)})(tagName)}__webpack_require__.d(__webpack_exports__,{g:()=>getNamespacedTagFor,i:()=>isElementWithTagName});function isElementWithTagName(el,tagName){var _a,_b;return(null===(_b=null===(_a=null==el?void 0:el.tagName)||void 0===_a?void 0:_a.toLowerCase)||void 0===_b?void 0:_b.call(_a))===getNamespacedTagFor(tagName)}},"./node_modules/@market/web-components/dist/esm/market-pagination.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{market_pagination:()=>MarketPagination});var _index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@market/web-components/dist/esm/index-e03cb5c3.js"),_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@market/web-components/dist/esm/index-2dc281eb.js");const MarketPagination=class{constructor(hostRef){(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.marketPaginationPageSizeChange=(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketPaginationPageSizeChange",7),this.marketPaginationNavigation=(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketPaginationNavigation",7),this.currentPage=void 0,this.disabled=!1,this.totalPages=void 0,this.hasNextPage=void 0,this.hasPreviousPage=void 0,this.pageSize=void 0,this.pageSizeOptions=void 0}changePageSize(e){e.stopPropagation();const{detail}=e;this.marketPaginationPageSizeChange.emit(detail)}navigatePage(e){e.stopPropagation();const{detail}=e;this.marketPaginationNavigation.emit(detail)}render(){const MarketPaginationPageSizeTagName=(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-pagination-page-size"),MarketPaginationNavTagName=(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-pagination-nav");return(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"70cf818519b6ee590b22c9bfb1fb5e92c31e1224",class:"market-pagination"},this.pageSizeOptions&&(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)(MarketPaginationPageSizeTagName,{key:"85bd2e032a865aaf3afd03a52c37ec7db5009266",value:this.pageSize,pageSizeOptions:this.pageSizeOptions,disabled:this.disabled},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"3e9980c675ff623b1c8060a2d065942ab6cc902b",name:"page-size-label",slot:"page-size-label"},"Results per page"),(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"5cf6a24f01417af66fdfc6eac940a25b16f4a57b",name:"page-size-feedback",slot:"page-size-feedback"},this.pageSize)),(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)(MarketPaginationNavTagName,{key:"003efb55ac37e10bc0cfb351d43edddbf9d65e62",currentPage:this.currentPage,disabled:this.disabled,totalPages:this.totalPages,pageSize:this.pageSize,hasNextPage:this.hasNextPage,hasPreviousPage:this.hasPreviousPage},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"c55a2ae022d735e97508e94da860ea55fbd22c87",name:"nav-label",slot:"nav-label"},"Page"),(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"4e9b90afeabccf36d35094d67ff14060270415c2",name:"nav-feedback",slot:"nav-feedback"},this.currentPage," of ",this.totalPages)))}get el(){return(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};MarketPagination.style=":host{display:flex;flex-direction:column;align-items:stretch}.market-button-dropdown{display:flex;flex-direction:column;align-items:stretch}.market-button-dropdown .market-filter-button{display:block}.market-pagination-page-size+.market-pagination-nav{margin-top:var(--pagination-nav-vertical-margin)}@media only screen and (min-width: 600px){.market-pagination-page-size+.market-pagination-nav{margin-top:0;margin-left:var(--pagination-nav-horizontal-margin)}}.market-pagination-nav nav{display:flex;justify-content:space-between;-moz-column-gap:var(--pagination-nav-content-spacing);column-gap:var(--pagination-nav-content-spacing)}.market-pagination-nav nav .market-button-dropdown{flex-grow:1}@media only screen and (min-width: 600px){:host{flex-direction:row;justify-content:space-between}.market-pagination-nav:only-child{margin-left:auto}}"}}]);