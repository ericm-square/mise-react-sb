"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[6554],{"./node_modules/@market/web-components/dist/esm/market-table-v2-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{market_table_v2_group:()=>MarketTableV2Group});var _index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@market/web-components/dist/esm/index-e03cb5c3.js"),_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@market/web-components/dist/esm/index-2dc281eb.js"),_draggable_dbb6e789_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@market/web-components/dist/esm/draggable-dbb6e789.js"),_reorderable_a47cef94_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@market/web-components/dist/esm/reorderable-a47cef94.js"),_utils_81774f07_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@market/web-components/dist/esm/utils-81774f07.js");__webpack_require__("./node_modules/@market/web-components/dist/esm/index-b9ae40c9.js"),__webpack_require__("./node_modules/@market/web-components/dist/esm/index-33c9a13b.js");const MarketTableV2Group=class{constructor(hostRef){(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.marketInternalTableV2GroupSelectionChange=(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketInternalTableV2GroupSelectionChange",7),this.marketTableV2RowsReordered=(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketTableV2RowsReordered",7),this.marketTableV2GroupCollapsedChange=(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketTableV2GroupCollapsedChange",7),this.collapsible=!1,this.collapsed=!1,this.dragEnabled=!1,this.indent=0,this.reorderable=void 0,this.reorderMode="default",this.selected="false"}onMarketTableV2CellCaretClicked(e){e.stopPropagation(),this.setCollapsed(!this.collapsed)}async onMarketTableV2SelectionChange(e){const{el,parent}=this,{target,detail}=e,{current}=detail;target!==el&&(e.stopImmediatePropagation(),target===parent?await this.setSelected(current):await this.setSelectedFromChildEvent(e))}async onDragHandleStart(e){e.stopImmediatePropagation();const{el,parent}=this,{target,detail:coords}=e;if(parent!==target)return;const anchor="leading"===parent.dragHandlePosition?"left":"right",drag=new _draggable_dbb6e789_js__WEBPACK_IMPORTED_MODULE_1__.D(el,{anchor});this.drag=drag,await drag.start(coords),parent.classList.add("market-drag-placeholder")}onDragHandleMove(e){e.stopImmediatePropagation();const{parent,drag}=this,{target,detail:coords}=e;parent===target&&drag.move(coords)}async onDragHandleDragEnd(e){e.stopImmediatePropagation();const{parent,drag}=this,{target,detail:coords}=e;parent===target&&(await drag.end(coords),parent.classList.remove("market-drag-placeholder"),drag.destroy())}onDragMove(e){const{parent,reorder}=this,{el}=e.detail;parent!==el&&(e.stopImmediatePropagation(),null==reorder||reorder.dragMove(e))}onDragLeave(e){const{parent,reorder}=this,{el}=e.detail;parent!==el&&(e.stopImmediatePropagation(),null==reorder||reorder.dragLeave())}onDragEnd(e){const{parent,reorder}=this,{el}=e.detail;parent!==el&&(null==reorder||reorder.dragEnd(e))}onDragDrop(e){const{parent,reorder}=this,{el}=e.detail;parent!==el&&(null==reorder||reorder.dragDrop(e))}propagateNestedState(){const{parent,children,groups,rows,indent,collapsible,collapsed}=this;if(groups.forEach((group=>{group.collapsible=collapsible})),collapsible){const hasChildren=children.length>0;parent&&(parent.caret=hasChildren?collapsed?"down":"up":void 0,parent.indent=hasChildren?indent:indent+1),groups.forEach((group=>{group.indent=indent+1,group.collapsible=collapsible})),rows.forEach((row=>{row.indent=indent+2}))}else parent&&(parent.caret=void 0,parent.indent=indent),children.forEach((child=>{child.indent=indent+1})),groups.forEach((group=>{group.collapsible=collapsible}))}watchDragEnabled(){const{parent,children,dragEnabled}=this;parent&&(parent.dragEnabled=dragEnabled),null==children||children.forEach((child=>{child.dragEnabled=dragEnabled}))}watchReorderable(){const{el,reorder,reorderable,reorderMode,marketTableV2RowsReordered}=this;null==reorder||reorder.destroy();if(["internal","external"].includes(reorderable)){const rowTagName=(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_6__.g)("market-table-v2-row"),groupTagName=(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_6__.g)("market-table-v2-group");this.reorder=new _reorderable_a47cef94_js__WEBPACK_IMPORTED_MODULE_2__.R({el,accepts:[`${rowTagName}:not([header]):not([footer]):not([slot="parent"])`,groupTagName],event:marketTableV2RowsReordered,mode:reorderMode})}this.syncDragEnabled()}async setSelected(selected,{silent=!1}={}){const{parent,children,marketInternalTableV2GroupSelectionChange,selected:prevSelected}=this;return prevSelected===selected||(silent||marketInternalTableV2GroupSelectionChange.emit({current:selected,previous:prevSelected}),this.selected=selected,await(null==parent?void 0:parent.setSelected(selected,{silent:!0})),null==children||children.forEach((async child=>{await child.setSelected(selected,{silent:!0})}))),Promise.resolve()}async setCollapsed(collapsed,{silent=!1}={}){const{collapsed:prevCollapsed,collapsible,marketTableV2GroupCollapsedChange}=this;if(!collapsible)return Promise.resolve();if(collapsed===prevCollapsed)return Promise.resolve();if(this.collapsed=collapsed,!silent){const{defaultPrevented}=marketTableV2GroupCollapsedChange.emit({previous:prevCollapsed,current:collapsed});defaultPrevented&&(this.collapsed=prevCollapsed)}return Promise.resolve()}async sort({order,column,strategy,format}){const{el,children,groups}=this,sortedChildren=(0,_utils_81774f07_js__WEBPACK_IMPORTED_MODULE_3__.s)({items:children,order,column,strategy,format});return null==groups||groups.forEach((group=>group.sort({order,column,strategy,format}))),sortedChildren.forEach((row=>{el.append(row)})),Promise.resolve()}async setSelectedFromChildEvent(e){const{parent,children,marketInternalTableV2GroupSelectionChange,selected:prevSelected}=this,{target,detail}=e,{current:childSelected}=detail,childrenSelected=children.map((child=>target===child?childSelected:child.selected)),groupSelected=childrenSelected.every((val=>"true"===val))?"true":childrenSelected.every((val=>"false"===val))?"false":"indeterminate";prevSelected!==groupSelected&&(marketInternalTableV2GroupSelectionChange.emit({current:groupSelected,previous:prevSelected}),this.selected=groupSelected,await parent.setSelected(groupSelected,{silent:!0}))}getElements(){this.parent=[...this.el.children].find((child=>child.tagName===(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_6__.g)("market-table-v2-row").toUpperCase()&&"parent"===child.slot)),this.rows=[...this.el.children].filter((child=>child.tagName===(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_6__.g)("market-table-v2-row").toUpperCase()&&"parent"!==child.slot)),this.groups=[...this.el.children].filter((child=>child.tagName===(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_6__.g)("market-table-v2-group").toUpperCase()&&"parent"!==child.slot)),this.children=[...this.groups,...this.rows]}getStyles(){const{indent}=this;return{"--drag-cursor-indent-level":indent.toString()}}syncDragEnabled(){const{parent,rows,groups,reorderable,reorderMode}=this,reorderEnabled=["internal","external"].includes(reorderable);parent&&(parent.dragEnabled=reorderEnabled),null==rows||rows.forEach((row=>{(0,_draggable_dbb6e789_js__WEBPACK_IMPORTED_MODULE_1__.i)(row)&&(row.dragEnabled=reorderEnabled)})),null==groups||groups.forEach((group=>{group.dragEnabled=reorderEnabled,group.reorderable=reorderable,group.reorderMode=reorderMode}))}onSlotChange(){this.getElements(),this.propagateNestedState(),this.syncDragEnabled()}connectedCallback(){this.getElements(),this.propagateNestedState(),this.syncDragEnabled()}componentDidRender(){this.watchReorderable()}render(){return(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"d9cbe1aedb87a3c17432fc9f4ca124f5c66c0f1f",class:"market-table-v2-group",style:this.getStyles()},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"8dbe5dbad648491ecc4ac7dea1c587109b7ef85e",name:"parent",onSlotchange:()=>this.onSlotChange()}),(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"2c7cbe82180fa0389961c4f540115a005f9f0632",class:"children"},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"66b80abc2a499f55eb95edbaf76fe6b736544d2e",onSlotchange:()=>this.onSlotChange()})))}get el(){return(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{indent:["propagateNestedState"],collapsed:["propagateNestedState"],collapsible:["propagateNestedState"],dragEnabled:["watchDragEnabled"],reorderable:["watchReorderable"]}}};MarketTableV2Group.style=':host{--table-cell-horizontal-padding-size:8px;--table-cell-indent-size:40px;--drag-highlight-border-size:2px}:host,slot,.children{vertical-align:inherit;text-align:inherit}:host,.children{display:contents}:host([collapsible][collapsed]) .children{display:none}:host(.market-drag-cursor-parent[collapsible][collapsed]) ::slotted([slot="parent"]){position:relative;border-radius:var(--core-radius-10);background-color:var(--core-emphasis-40-color);outline:var(--drag-highlight-border-size) solid var(--core-emphasis-fill-color);outline-offset:calc(var(--drag-highlight-border-size) * -1)}::slotted(.market-drag-cursor){--drag-cursor-height:4px;position:absolute;right:0;left:calc(\n      var(--table-cell-horizontal-padding-size) +\n      (var(--drag-cursor-indent-level) + 1) * var(--table-cell-indent-size)\n    );display:block;height:0;outline:calc(var(--drag-cursor-height) / 2) solid var(--core-emphasis-fill-color);pointer-events:none}:host(.market-drag-placeholder) ::slotted(:not([slot="parent"])){display:none}'}}]);