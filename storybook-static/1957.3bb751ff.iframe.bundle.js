"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[1957],{"./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/market-table-v2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{market_table_v2:()=>MarketTableV2});var _index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/index-fb35cab8.js"),_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/index-2dc281eb.js"),_reorderable_ad24a486_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/reorderable-ad24a486.js"),_draggable_3c5539a5_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/draggable-3c5539a5.js"),_utils_1428aa72_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/utils-1428aa72.js");__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/index-b9ae40c9.js"),__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/index-33c9a13b.js");const MarketTableV2=class{constructor(hostRef){(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.marketTableV2RowsReordered=(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketTableV2RowsReordered",7),this.align=void 0,this.collapsible=!1,this.layout="auto",this.reorderable=void 0,this.reorderMode="default",this.selected="false",this.valign=void 0}async onMarketTableV2SelectionChange(e){const{header,footer}=this,{target,detail}=e,eventSelected=detail.current;e.stopPropagation(),target===header||target===footer?await this.setSelected(eventSelected,{silent:!0}):await this.setSelectedFromChildEvent(e)}onMarketTableV2CellSortClicked(e){const{el,header,children,groups,footer}=this,sortedCell=e.target;if(sortedCell.parentElement!==header)return;const{current:newSortOrder}=e.detail,headerChildren=[...header.children],sortedColumnIndex=headerChildren.indexOf(sortedCell),{sortStrategy,sortStrategyFormat}=sortedCell,sortedChildren=(0,_utils_1428aa72_js__WEBPACK_IMPORTED_MODULE_3__.s)({items:children,order:newSortOrder,column:sortedColumnIndex,strategy:sortStrategy,format:sortStrategyFormat});null==groups||groups.forEach((group=>{group.sort({order:newSortOrder,column:sortedColumnIndex,strategy:sortStrategy,format:sortStrategyFormat})})),sortedCell.sortOrder=newSortOrder,headerChildren.forEach((cell=>{cell.sortOrder=cell===sortedCell?newSortOrder:void 0})),sortedChildren.forEach((row=>{el.append(row)})),footer&&el.append(footer)}onDragMove(e){var _a;null===(_a=this.reorder)||void 0===_a||_a.dragMove(e)}onDragLeave(){var _a;null===(_a=this.reorder)||void 0===_a||_a.dragLeave()}onDragEnd(e){var _a;null===(_a=this.reorder)||void 0===_a||_a.dragEnd(e)}onDragDrop(e){var _a;null===(_a=this.reorder)||void 0===_a||_a.dragDrop(e)}watchCollapsible(){const{rows,groups,collapsible}=this;groups.forEach((group=>{group.collapsible=collapsible,group.indent=0})),rows.forEach((row=>{row.header||row.footer||(row.indent=collapsible&&groups.length>0?1:0)}))}watchReorderable(){const{el,reorder,reorderable,reorderMode,marketTableV2RowsReordered}=this;null==reorder||reorder.destroy();if(["internal","external"].includes(reorderable)){const rowTagName=(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_6__.g)("market-table-v2-row"),groupTagName=(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_6__.g)("market-table-v2-group");this.reorder=new _reorderable_ad24a486_js__WEBPACK_IMPORTED_MODULE_1__.R({el,accepts:[`${rowTagName}:not([header]):not([footer]):not([slot="parent"])`,groupTagName],event:marketTableV2RowsReordered,mode:reorderMode})}this.syncDragEnabled()}async setSelected(selected,{silent=!1}={}){const{header,footer,children,selected:prevSelected}=this;return prevSelected===selected||(this.selected=selected,await(null==header?void 0:header.setSelected(selected,{silent})),await(null==footer?void 0:footer.setSelected(selected,{silent})),null==children||children.forEach((async child=>{await child.setSelected(selected,{silent})}))),Promise.resolve()}async setSelectedFromChildEvent(e){const{header,footer,children,selected:prevSelected}=this,{target,detail}=e,{current:childSelected}=detail,childrenSelected=children.map((child=>target===child?childSelected:child.selected)),tableSelected=childrenSelected.every((val=>"true"===val))?"true":childrenSelected.every((val=>"false"===val))?"false":"indeterminate";prevSelected!==tableSelected&&(this.selected=tableSelected,await(null==header?void 0:header.setSelected(tableSelected,{silent:!0})),await(null==footer?void 0:footer.setSelected(tableSelected,{silent:!0})))}getElements(){this.rows=[...this.el.children].filter((child=>child.tagName===(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_6__.g)("market-table-v2-row").toUpperCase())),this.groups=[...this.el.children].filter((child=>child.tagName===(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_6__.g)("market-table-v2-group").toUpperCase())),this.header=this.rows.find((row=>row.header)),this.footer=this.rows.find((row=>row.footer)),this.children=[...this.groups,...this.rows.filter((row=>!row.header&&!row.footer))]}syncDragEnabled(){const{header,footer,rows,groups,reorderable,reorderMode}=this,reorderEnabled=["internal","external"].includes(reorderable);header&&(header.dragEnabled=reorderEnabled),footer&&(footer.dragEnabled=reorderEnabled),null==rows||rows.forEach((row=>{(0,_draggable_3c5539a5_js__WEBPACK_IMPORTED_MODULE_2__.i)(row)&&(row.dragEnabled=reorderEnabled)})),null==groups||groups.forEach((group=>{group.dragEnabled=reorderEnabled,group.reorderable=reorderable,group.reorderMode=reorderMode}))}onSlotChange(){this.getElements(),this.watchCollapsible(),this.syncDragEnabled()}connectedCallback(){this.getElements(),this.watchCollapsible(),this.syncDragEnabled()}componentDidRender(){this.watchReorderable()}render(){return(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"ff6498a9a86efd1960cabf36309c62ccf2d7eef2",class:"market-table-v2"},(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"2ab117eac57bd9dee4b2c6a7331442da85c6507d",role:"table",part:"table"},(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"935a77c47f8cb23cbc60e92b316f69ac8b8780b5",onSlotchange:()=>this.onSlotChange()})))}get el(){return(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{collapsible:["watchCollapsible"],reorderable:["watchReorderable"]}}};MarketTableV2.style=':host,*{box-sizing:border-box}:host{--table-cell-state-normal-background-color:var(--core-surface-10-color);position:relative;display:block;overflow:auto;width:100%;background-color:var(--table-cell-state-normal-background-color);font-feature-settings:"tnum"}:host [role="table"]{display:table;vertical-align:middle;width:100%;height:100%;border-spacing:0;border-collapse:separate;table-layout:auto;text-align:left}:host slot{vertical-align:inherit;text-align:inherit}:host([layout="fixed"]) [role="table"]{table-layout:fixed}:host([align="left"]) [role="table"]{text-align:left}:host([align="center"]) [role="table"]{text-align:center}:host([align="right"]) [role="table"]{text-align:right}:host([valign="top"]) [role="table"]{vertical-align:top}:host([valign="middle"]) [role="table"]{vertical-align:middle}:host([valign="bottom"]) [role="table"]{vertical-align:bottom}::slotted(.market-drag-cursor){--drag-cursor-height:4px;position:absolute;right:0;left:0;display:block;height:0;outline:calc(var(--drag-cursor-height) / 2) solid var(--core-emphasis-fill-color);pointer-events:none}'}}]);