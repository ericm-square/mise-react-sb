"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[1140],{"./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/market-table-v2-row.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{market_table_v2_row:()=>MarketTableV2Row});var _index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/index-fb35cab8.js"),_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/index-2dc281eb.js"),_draggable_3c5539a5_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/draggable-3c5539a5.js");const MarketTableV2Row=class{constructor(hostRef){(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.marketInternalTableV2RowSelectionChange=(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketInternalTableV2RowSelectionChange",7),this.marketTableV2RowSelectionChange=(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketTableV2RowSelectionChange",7),this.active=!1,this.align=void 0,this.caret=void 0,this.disabled=!1,this.dragEnabled=!1,this.dragHandleVisibility=void 0,this.dragHandlePosition=void 0,this.footer=!1,this.header=!1,this.indent=void 0,this.interactive=!1,this.selected="false",this.sticky=void 0,this.valign=void 0}onKeydown(e){const{target,key}=e,{el,disabled,interactive}=this;disabled||interactive&&target===el&&("Enter"!==key&&" "!==key||(e.preventDefault(),el.click()))}async onMarketInternalTableV2CellSelectionChange(e){const{detail}=e,{current}=detail;e.stopPropagation(),await this.setSelected(current)}async onDragStart(e){const{el,dragHandlePosition}=this;if("parent"===el.slot)return;e.stopPropagation();const coords=e.detail,anchor="leading"===dragHandlePosition?"left":"right",drag=new _draggable_3c5539a5_js__WEBPACK_IMPORTED_MODULE_1__.D(el,{anchor});this.drag=drag,await drag.start(coords)}onDragMove(e){if("parent"===this.el.slot)return;e.stopPropagation();const coords=e.detail;this.drag.move(coords)}async onDragEnd(e){if("parent"===this.el.slot)return;e.stopPropagation();const coords=e.detail;await this.drag.end(coords),this.drag.destroy()}watchCaret(){const{firstCell,caret}=this;firstCell&&(firstCell.caret=caret)}watchIndent(){const{firstCell,indent}=this;firstCell&&(firstCell.indent=indent)}async setSelected(selected,{silent=!1}={}){const{firstCell,selected:prevSelected,marketTableV2RowSelectionChange,marketInternalTableV2RowSelectionChange}=this;if(prevSelected===selected)return Promise.resolve();const{defaultPrevented}=marketTableV2RowSelectionChange.emit({current:selected,previous:prevSelected});return defaultPrevented?(await(null==firstCell?void 0:firstCell.setSelected(prevSelected,{silent:!0})),Promise.resolve()):(silent||marketInternalTableV2RowSelectionChange.emit({current:selected,previous:prevSelected}),this.selected=selected,await(null==firstCell?void 0:firstCell.setSelected(selected,{silent})),Promise.resolve())}getTabIndex(){const{disabled,interactive}=this;return interactive&&!disabled?"0":null}async initFirstCell(){const{el,selected}=this,MarketTableV2CellTagName=(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_2__.g)("market-table-v2-cell"),firstCell=el.querySelector(`${MarketTableV2CellTagName}`);firstCell&&(this.firstCell=firstCell,selected&&await(null==firstCell?void 0:firstCell.setSelected(selected))),this.watchCaret(),this.watchIndent()}async connectedCallBack(){await this.initFirstCell()}renderDragHandleCell(){const MarketDragHandleTagName=(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_2__.g)("market-drag-handle"),MarketTableV2CellTagName=(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_2__.g)("market-table-v2-cell");return(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)(MarketTableV2CellTagName,{class:"drag-handle-cell"},(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)(MarketDragHandleTagName,{part:"drag-handle"}))}render(){const{dragEnabled,dragHandlePosition}=this;return(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"3f8ebc79243556b6c425b7e5f1df6bd273ea55b3",role:"row",class:"market-table-v2-row",tabindex:this.getTabIndex(),onMarketDragHandleDragStart:e=>this.onDragStart(e),onMarketDragHandleDragMove:e=>this.onDragMove(e),onMarketDragHandleDragEnd:e=>this.onDragEnd(e)},dragEnabled&&"leading"===dragHandlePosition&&this.renderDragHandleCell(),(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"cd73548185f384edcf7c4e2ebe95c42a03e330ff",onSlotchange:()=>this.initFirstCell()}),dragEnabled&&"leading"!==dragHandlePosition&&this.renderDragHandleCell())}get el(){return(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{caret:["watchCaret"],indent:["watchIndent"]}}};MarketTableV2Row.style=':host,*{box-sizing:border-box}:host{--table-cell-border-width:1px;--table-cell-border-color:var(--core-divider-20-color);--table-cell-horizontal-spacing:var(--core-metrics-spacing-150);--table-cell-heading-border-color:var(--core-divider-10-color);--table-cell-heading-font-weight:var(--core-type-medium-weight);--table-cell-state-normal-background-color:var(--core-surface-10-color);display:table-row;vertical-align:inherit;width:100%;outline:none;text-align:inherit}:host slot{vertical-align:inherit;text-align:inherit}:host([align="left"]){text-align:left}:host([align="center"]){text-align:center}:host([align="right"]){text-align:right}:host([valign="top"]){vertical-align:top}:host([valign="middle"]){vertical-align:middle}:host([valign="bottom"]){vertical-align:bottom}:host([header]) .market-table-v2-cell,:host([header]) ::slotted(.market-table-v2-cell),:host([footer]) .market-table-v2-cell,:host([footer]) ::slotted(.market-table-v2-cell){font-weight:var(--table-cell-heading-font-weight)}:host([header]) .market-drag-handle,:host([footer]) .market-drag-handle{visibility:hidden}:host([header]) .market-table-v2-cell,:host([header]) ::slotted(.market-table-v2-cell),:host([sticky="top"]) .market-table-v2-cell,:host([sticky="top"]) ::slotted(.market-table-v2-cell){border-bottom:var(--table-cell-border-width) solid var(--table-cell-heading-border-color)}:host([footer]) .market-table-v2-cell,:host([footer]) ::slotted(.market-table-v2-cell),:host([sticky="bottom"]) .market-table-v2-cell,:host([sticky="bottom"]) ::slotted(.market-table-v2-cell){border-top:var(--table-cell-border-width) solid var(--table-cell-heading-border-color);border-bottom:none}:host([sticky]){position:sticky;z-index:3;background-color:var(--table-cell-state-normal-background-color)}:host([sticky="top"]){top:0}:host([sticky="bottom"]){bottom:0}:host([interactive]){cursor:pointer}@media (hover: hover){:host([interactive]:hover){background-color:var(--table-cell-hover-state-background-color)}}:host([interactive]:focus){background-color:var(--table-cell-focus-state-background-color)}:host([active]),:host([interactive]:active){background-color:var(--table-cell-pressed-state-background-color)}:host([disabled]){color:var(--table-cell-disabled-state-text-color);pointer-events:none}.drag-handle-cell{width:var(--core-metrics-spacing-500)}@media (hover: hover){:host([drag-handle-visibility="hover"]) .market-drag-handle{opacity:0%}:host([drag-handle-visibility="hover"]:hover) .market-drag-handle{opacity:100%}}:host(.market-drag-placeholder),:host(.market-drag-placeholder[interactive]){background-color:var(--core-fill-50-color)}:host(.market-drag-placeholder) *,:host(.market-drag-placeholder) ::slotted(*),:host(.market-drag-placeholder[interactive]) *,:host(.market-drag-placeholder[interactive]) ::slotted(*){opacity:0%}:host(.market-drag-placeholder) .market-drag-handle,:host(.market-drag-placeholder[interactive]) .market-drag-handle{pointer-events:none}:host(.market-drag-clone),:host(.market-drag-clone[interactive]){--table-row-dragged-width:240px;display:flex;justify-content:space-between;align-items:center;width:var(--table-row-dragged-width);border-bottom:var(--table-cell-border-width) solid var(--table-cell-border-color);border-radius:var(--core-radius-10);background-color:var(--core-surface-20-color);cursor:grabbing;transition-timing-function:var(--core-animation-move-transition-easing);transition-duration:var(--core-animation-move-transition-moderate-speed-duration);transition-property:top, width, height}:host(.market-drag-clone)::after,:host(.market-drag-clone[interactive])::after{content:"";position:absolute;inset:0;display:block;border-radius:var(--core-radius-10);box-shadow:var(--elevation-20-shadow);opacity:var(--market-drag-clone-shadow-opacity, 0%);transition-timing-function:var(--core-animation-move-transition-easing);transition-duration:var(--core-animation-move-transition-moderate-speed-duration);transition-property:opacity}:host(.market-drag-clone) .market-drag-handle,:host(.market-drag-clone[interactive]) .market-drag-handle{cursor:grabbing}:host(.market-drag-clone) ::slotted(.market-table-v2-cell:first-child),:host(.market-drag-clone[interactive]) ::slotted(.market-table-v2-cell:first-child){overflow:hidden;width:100%;border:none;text-overflow:ellipsis;white-space:nowrap;transition-timing-function:var(--core-animation-move-transition-easing);transition-duration:var(--core-animation-move-transition-moderate-speed-duration);transition-property:padding-left}:host(.market-drag-clone) ::slotted(.market-table-v2-cell:not(:first-child)),:host(.market-drag-clone[interactive]) ::slotted(.market-table-v2-cell:not(:first-child)){display:none}:host(.market-drag-clone) .drag-handle-cell,:host(.market-drag-clone[interactive]) .drag-handle-cell{border:none}:host(.market-drag-clone[drag-handle-position="leading"]){justify-content:flex-start}:host(.market-drag-released){pointer-events:none;transition-property:opacity, width, height, transform, scale}:host(.market-drag-into-collapsed-group){opacity:0%;scale:0}'}}]);