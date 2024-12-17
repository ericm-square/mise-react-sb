"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[7366],{"./node_modules/@market/web-components/dist/esm/index-2dc281eb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{let localTransformTagName;function getNamespacedTagFor(tagName){return new Proxy((tag=>tag),{apply:(target,thisArg,args)=>Reflect.apply(null!=localTransformTagName?localTransformTagName:target,thisArg,args)})(tagName)}__webpack_require__.d(__webpack_exports__,{g:()=>getNamespacedTagFor,i:()=>isElementWithTagName});function isElementWithTagName(el,tagName){var _a,_b;return(null===(_b=null===(_a=null==el?void 0:el.tagName)||void 0===_a?void 0:_a.toLowerCase)||void 0===_b?void 0:_b.call(_a))===getNamespacedTagFor(tagName)}},"./node_modules/@market/web-components/dist/esm/market-table-row.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{market_table_row:()=>MarketTableRow});var _index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@market/web-components/dist/esm/index-e03cb5c3.js"),_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@market/web-components/dist/esm/index-2dc281eb.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");const MarketTableRow=class{constructor(hostRef){(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.marketTableHeaderLoaded=(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketTableHeaderLoaded",7),this.marketTableRowClicked=(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketTableRowClicked",7),this.marketTableRowStick=(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketTableRowStick",7),this.marketTableRowUnstick=(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketTableRowUnstick",7),this.marketAccordionToggled=(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketAccordionToggled",7),this.marketNestedRowToggled=(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketNestedRowToggled",7),this.componentLoaded=!1,this.leadingIndentation=0,this.stickTo=!1,this.sticky=void 0,this.active=!1,this.interactive=!1,this.disabled=!1,this.selected=!1,this.header=!1,this.footer=!1,this.originalSlot=void 0,this.index=0,this.tableColumns=void 0,this.cells=void 0,this.gridTemplateMain=[],this.gridTemplateLeft=[],this.gridTemplateRight=[],this.expanded=!1,this.nested=!1,this.styleDeclaration=void 0,this.gridTemplate=[],this.nestedRowToggleButton=void 0}formNewGridTemplate(){this.gridTemplate=[...this.gridTemplateLeft,...this.gridTemplateMain,...this.gridTemplateRight],this.tableAreaLeft&&(this.tableAreaLeft.placement=[1,this.gridTemplateLeft.length]),this.tableAreaMain&&(this.tableAreaMain.placement=[this.gridTemplateLeft.length+1,this.gridTemplateMain.length]),this.tableAreaRight&&(this.tableAreaRight.placement=[this.gridTemplateLeft.length+this.gridTemplateMain.length+1,this.gridTemplateRight.length])}gridTemplateObserver(newValue,oldValue){newValue!==oldValue&&(this.el.style.gridTemplateColumns=newValue.join(" "))}stickyObserver(newValue,oldValue){newValue!==oldValue&&this.emitStickyEvents()}columnsObserver(columns){this.setCellColumnProperties(columns)}updateCellProperties(oldCellList,newCellList){oldCellList!==newCellList&&this.setCellColumnProperties(this.tableColumns)}updateFirstCellProperties(){this._setFirstCellProperties()}updateNestedRowButton(){if(this.nestedRowToggleButton){this.nestedRowToggleButton.ariaExpanded=`${this.expanded}`;const svgElement=this.nestedRowToggleButton.querySelector("svg");svgElement&&(this.expanded?svgElement.style.transform="rotate(-180deg)":svgElement.style.transform="rotate(0deg)")}}updateSlottedControlCheckedValue(){var _a;null===(_a=this.slottedControl)||void 0===_a||_a.setSelection(this.selected)}updateSlottedControlDisabledValue(){var _a;null===(_a=this.slottedControl)||void 0===_a||_a.setDisabled(this.disabled)}handleMarketCheckboxValueChange(event){event.target===this.slottedControl&&(this.selected=event.detail.current)}stick(position){return position?this.stickTo=position:(this.header||this.footer)&&(this.sticky=!0),Promise.resolve()}unstick(){return this.sticky=!1,this.stickTo=!1,Promise.resolve()}async _stickColumn(column,position){const cell=this.el.querySelector(`[name="${column}"], [column="${column}"]`);cell?await cell._stickSelf(position):console.warn("cannot stick cell to unknown position")}async _unstickColumn(column){const cell=this.el.querySelector(`[name="${column}"], [column="${column}"]`);cell?await cell._unstickSelf():console.warn("cannot unstick cell from unknown position")}_syncColumnVisibilityWithCells(columnName,hidden){const cell=this.el.querySelector(`[name="${columnName}"], [column="${columnName}"]`);return cell&&(cell.hidden=hidden),Promise.resolve()}_setFirstCellProperties(){var _a,_b,_c;return(null===(_a=this.cells)||void 0===_a?void 0:_a.length)&&this.isStylableCell(this.cells[0])&&(null===(_c=(_b=this.cells[0])._updateFirstCellProperties)||void 0===_c||_c.call(_b,this.el)),Promise.resolve()}setLeadingIndentation(leadingIndentation){return this.leadingIndentation=leadingIndentation,Promise.resolve()}toggleNestedRow(){return this.expanded=!this.expanded,this.marketAccordionToggled.emit({expanded:this.expanded}),this.marketNestedRowToggled.emit({expanded:this.expanded}),Promise.resolve()}isStylableCell(cell){return void 0!==cell._updateColumnRelatedProperties&&void 0!==cell._updateFirstCellProperties}setCellColumnProperties(columns){this.cells&&columns&&columns.length>0&&this.cells.forEach(((cell,i)=>{if(this.isStylableCell(cell)){const column=columns[i];cell._updateColumnRelatedProperties(column)}}))}emitStickyEvents(){let position;this.stickTo?position=this.stickTo:this.header?position="top":this.footer&&(position="bottom"),this.sticky||this.stickTo?this.marketTableRowStick.emit({position,index:this.index}):this.componentLoaded&&this.marketTableRowUnstick.emit({position,index:this.index})}componentWillLoad(){this.originalSlot=this.el.slot,this.header="header"===this.originalSlot,this.footer="footer"===this.originalSlot,this.cells=this.el.querySelectorAll((0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-table-cell"))}handleSlotChange(){this.cells=this.el.querySelectorAll(`${(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-table-cell")}, ${(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-table-column")}`),this.header&&this.marketTableHeaderLoaded.emit({columns:this.el.querySelectorAll((0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-table-column"))}),this.emitStickyEvents()}_getMarketRowElement(element){return element.querySelector((0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-table-row"))}_addCaretButtonToFirstCell(){this.cells&&this.cells[0]&&(this.nestedRowToggleButton=document.createElement("button"),Object.assign(this.nestedRowToggleButton,{slot:"nested-row-indicator",type:"button",ariaExpanded:`${this.expanded}`,onclick:()=>this.toggleNestedRow()}),this.nestedRowToggleButton.innerHTML='<svg class="caret" width="14" height="8" viewBox="0 0 14 8" fill="none" style="transition-duration:300ms;" xmlns="http://www.w3.org/2000/svg">\n          <path\n            fill-rule="evenodd"\n            clip-rule="evenodd"\n            d="M7.70715 7.70711C7.31663 8.09763 6.68346 8.09763 6.29294 7.70711L0.29294 1.70711L1.70715 0.292892L7.00005 5.58579L12.2929 0.292893L13.7072 1.70711L7.70715 7.70711Z"\n            fill="currentColor"\n          />\n        </svg>',this.cells[0].append(this.nestedRowToggleButton))}_registerSlottedControl(){this.slottedControl=this.el.querySelector([`[slot="control"] ${(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-checkbox")}`,`[slot="control"] ${(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-toggle")}`].join(",")),this.slottedControl&&(this.slottedControl.setDisabled(this.disabled),this.slottedControl.setSelection(this.selected))}componentDidRender(){var _a,_b;const accordionElement=this.el.closest((0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-accordion-item"));if(accordionElement){let parentRow;if("custom-trigger"===this.el.slot){const parentAccordionElement=null===(_a=accordionElement.parentElement)||void 0===_a?void 0:_a.closest((0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-accordion-item"));parentAccordionElement&&(parentRow=[...parentAccordionElement.children].find((child=>"custom-trigger"===child.slot)))}else parentRow=[...accordionElement.children].find((child=>"custom-trigger"===child.slot));this.leadingIndentation=parentRow?(null!==(_b=parentRow.leadingIndentation)&&void 0!==_b?_b:0)+1:0}this._setFirstCellProperties()}componentDidLoad(){if(this.componentLoaded=!0,"custom-trigger"===this.el.slot){this._addCaretButtonToFirstCell();const svgElement=this.nestedRowToggleButton.querySelector("svg");svgElement&&this.expanded&&(svgElement.style.transform="rotate(-180deg)")}}handleClick(e){[(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-accessory"),(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-button"),(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-button-dropdown"),(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-checkbox"),(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-link"),(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-toggle"),"button","a"].some((tagname=>e.target.closest(tagname)))||this.interactive&&this.marketTableRowClicked.emit()}handleKeydown(e){if(e.target===this.el)switch(e.key){case"Enter":this.handleClick(e);break;case" ":this.handleClick(e),e.preventDefault()}}render(){const{disabled,footer,gridTemplateLeft,gridTemplateMain,gridTemplateRight,header,interactive,selected,slottedControl}=this,MarketTableAreaTagName=(0,_index_2dc281eb_js__WEBPACK_IMPORTED_MODULE_1__.g)("market-table-area");return(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"b21f7e4205a1bdeedb0e5b954cca59fa929759b6","aria-selected":slottedControl?Boolean(selected).toString():null,class:"market-table-row",role:"row",tabindex:interactive&&!disabled?"0":null,header,footer,onClick:e=>this.handleClick(e),onKeydown:e=>this.handleKeydown(e)},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)(MarketTableAreaTagName,{key:"1ec156add1e9edfbc896c2bf4b4ed2dec6abc853",orientation:"vertical","stick-to":"left",gridTemplate:gridTemplateLeft,ref:el=>this.tableAreaLeft=el},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"cc0b2f616a2ce5ee5cff172f71cfa061c5a19d39",name:"sticky-left"})),(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)(MarketTableAreaTagName,{key:"6c16c71570af888f249ed17e208cf7ba529ed408",orientation:"vertical",gridTemplate:gridTemplateMain,ref:el=>this.tableAreaMain=el,active:!0},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"3fa9a13284967ade7ca15968a9be73b097c2934e",name:"control",onSlotchange:()=>this._registerSlottedControl()}),(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"3ce80946bd17ff03315262bff77d728f92fc9fe0",onSlotchange:()=>this.handleSlotChange()})),(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)(MarketTableAreaTagName,{key:"8c37a017089cc05a86be2228bdb56d3ce7da6d5b",orientation:"vertical","stick-to":"right",gridTemplate:gridTemplateRight,ref:el=>this.tableAreaRight=el},(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"4144f5e42d7371d60733da1d8cc584a16f6d9eb0",name:"sticky-right"})))}get el(){return(0,_index_e03cb5c3_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{gridTemplateMain:["formNewGridTemplate"],gridTemplateLeft:["formNewGridTemplate"],gridTemplateRight:["formNewGridTemplate"],gridTemplate:["gridTemplateObserver"],stickTo:["stickyObserver"],sticky:["stickyObserver"],tableColumns:["columnsObserver"],cells:["updateCellProperties"],leadingIndentation:["updateFirstCellProperties"],expanded:["updateNestedRowButton"],selected:["updateSlottedControlCheckedValue"],disabled:["updateSlottedControlDisabledValue"]}}};MarketTableRow.style=":host{--transition-duration:0.2s;position:relative;display:grid;grid-column:1 / -1;grid-auto-columns:1fr;grid-auto-flow:column;border-bottom:var(--table-border-width, 1px) solid var(--table-row-border-color, var(--core-divider-20-color));transition:background-color var(--transition-duration)}@media (hover: hover){:host{}:host([interactive]:hover) ::slotted(.market-table-cell){background-color:var(--table-cell-hover-state-background-color, var(--core-fill-50-color))}}:host([header]){border-bottom:var(--table-border-width, 1px) solid var(--table-heading-border-color, var(--core-divider-10-color))}:host([footer]) ::slotted(.market-table-cell){border-bottom:none;font-weight:var(--table-footing-primary-text-font-weight, 500);font-size:var(--table-footing-primary-text-font-size, var(--core-type-semibold-20-size));line-height:var(--table-footing-primary-text-line-height, var(--core-type-semibold-20-leading))}:host([interactive]) ::slotted(.market-table-cell){cursor:pointer}:host([active]) ::slotted(.market-table-cell),:host([interactive]:active) ::slotted(.market-table-cell){background-color:var(--table-cell-pressed-state-background-color, var(--core-emphasis-40-color))}:host([interactive]:focus){outline:none;}:host([interactive]:not([disabled]):focus) ::slotted(.market-table-cell){background-color:var(--table-cell-focus-state-background-color, var(--core-fill-50-color))}:host([interactive][disabled]){pointer-events:none}:host([disabled]) ::slotted(.market-table-cell){background-color:transparent;color:var(--table-cell-disabled-state-text-color, var(--core-text-30-color));pointer-events:none}:host([nested]) ::slotted(.market-table-cell:first-of-type){padding-left:calc(\n        (\n          var(--cell-indent-level) *\n          var(--table-row-indentation-padding, 40px)\n        ) +\n        var(--table-cell-padding, 8px) +\n        var(--table-accordion-content-width, 30px)\n      )}:host([slot='custom-trigger']) ::slotted(.market-table-cell:first-of-type),:host([slot='header']) ::slotted(.market-table-cell:first-of-type),:host([slot='footer']) ::slotted(.market-table-cell:first-of-type){padding-left:var(--table-cell-padding, 8px)}:host ::slotted(.market-table-cell:first-of-type){padding-left:calc(\n      var(--table-cell-padding, 8px) +\n      (var(--cell-indent-level) * var(--table-row-indentation-padding, 40px))\n    )}"}}]);