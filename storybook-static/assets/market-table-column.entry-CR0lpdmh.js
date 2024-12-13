import{r as a,c as i,h as t,H as o,g as s}from"./preview-BLkU8-7b.js";import"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";import"./iframe-BYgjunmg.js";import"../sb-preview/runtime.js";import"./tslib.es6-pJfR_DrR.js";const n=`:host{position:relative;display:flex;justify-content:flex-start;align-items:center;overflow:hidden;padding:var(--table-cell-vertical-padding-size, 12px) var(--table-cell-horizontal-padding-size, 8px);background-color:var(--table-cell-state-normal-background-color, var(--core-surface-10-color));font-weight:var(--table-cell-primary-text-font-weight, var(--core-type-paragraph-20-weight));font-size:var(--table-cell-primary-text-font-size, var(--core-type-paragraph-20-size));line-height:var(--table-cell-primary-text-line-height, var(--core-type-paragraph-20-leading));text-overflow:ellipsis}:host([align="right"]){justify-content:flex-end}:host([align="right"]) .sorting-caret{order:-1;margin-right:var(--table-heading-sort-icon-space-size, 8px);margin-left:0}:host([stickTo="left"]){position:sticky;grid-area:left;border-right:var(--table-fixed-column-border-width, 1px)
      solid
      var(--table-fixed-column-border-color, var(--core-divider-20-color))}:host([stickTo="right"]){grid-area:right;border-left:var(--table-fixed-column-border-width, 1px)
      solid
      var(--table-fixed-column-border-color, var(--core-divider-20-color))}:host{font-weight:var(--table-heading-primary-text-font-weight, 500);font-size:var(--table-heading-primary-text-font-size, var(--core-type-semibold-20-size));line-height:var(--table-heading-primary-text-line-height, var(--core-type-semibold-20-leading))}:host([sortable]){cursor:pointer;transition:background-color
      var(--core-animation-enter-transition-fast-speed-duration)
      var(--core-animation-enter-transition-fast-speed-duration-easing)}:host([sortable]:hover){background-color:var(--table-heading-hover-state-background-color, var(--core-fill-50-color))}:host([sortable]:active){background-color:var(--table-heading-active-state-background-color, var(--core-emphasis-40-color))}:host([sort-order]) .sorting-caret{fill:var(--table-heading-sortable-variant-active-state-caret-color, var(--core-text-10-color))}:host([sort-order="descending"]) .sorting-caret{transform:rotate(0deg)}:host([hidden]){display:none}.sorting-caret{margin-left:var(--table-heading-sort-icon-space-size, 8px);fill:var(--table-heading-sortable-variant-normal-state-caret-color, var(--core-text-30-color));transition:color
    var(--core-animation-enter-transition-fast-speed-duration)
    var(--core-animation-enter-transition-fast-speed-duration-easing);transform:rotate(180deg)}::slotted([slot="leading-accessory"][size="image"]){margin-right:16px;margin-left:12px}::slotted([slot="leading-accessory"][size="icon"]){margin-right:16px;margin-left:16px}::slotted([slot="trailing-accessory"][size="image"]){margin-right:12px;margin-left:16px}::slotted([slot="trailing-accessory"][size="icon"]){margin-right:16px;margin-left:16px}button{display:flex;align-items:center;padding:0;border:inherit;background-color:transparent;font:inherit}`,l=n,c=class{constructor(e){a(this,e),this.marketTableColumnStick=i(this,"marketTableColumnStick",7),this.marketTableColumnUnstick=i(this,"marketTableColumnUnstick",7),this.marketTableColumnSort=i(this,"marketTableColumnSort",7),this.marketTableColumnVisibilityChange=i(this,"marketTableColumnVisibilityChange",7),this.name=void 0,this.align=!1,this.stickTo=void 0,this.sortable=!1,this.sortOrder=void 0,this.hidden=!1,this.index=0,this.width=void 0,this.originalSlot=void 0}emitVisibilityChangeEvent(e,r){e!==r&&this.marketTableColumnVisibilityChange.emit({columnName:this.name,hidden:e})}async emitStickyEvents(e,r){e&&e!==r?await this.stick(e):this.unstick(e)}stick(e){return e!==this.stickTo?this.stickTo=e:this.marketTableColumnStick.emit({position:e,index:this.index}),Promise.resolve()}unstick(e){return this.marketTableColumnUnstick.emit({position:e,index:this.index}),Promise.resolve()}_stickSelf(e){return e&&(this.el.slot=`sticky-${e}`),this.stickTo=e,Promise.resolve()}_unstickSelf(){return this.originalSlot?this.el.slot=this.originalSlot:this.el.removeAttribute("slot"),this.el.removeAttribute("stick-to"),Promise.resolve()}clickHandler(){this.sortable&&this.marketTableColumnSort.emit({column:this.name,previousSortOrder:this.sortOrder})}componentWillLoad(){this.originalSlot=this.el.getAttribute("slot"),this.name||console.warn("Please set a name on <market-table-column>. Tables may not work correctly without this.")}componentDidLoad(){this.stickTo&&this.stick(this.stickTo)}render(){return t(o,{key:"13c2fc2aa7b253a454aefa6e06526a9d0cada5f4",class:"market-table-column",align:this.align==="right"&&this.align,role:"columnheader","aria-sort":this.sortOrder,onClick:()=>this.clickHandler()},t("slot",{key:"5a79a95f0f1bd92fb417c4c1124135d11cde61ba",name:"leading-accessory"}),this.sortable&&t("button",{key:"1b66c7b6ca36db1810cf4be54ed6ba52e396695f"},t("slot",{key:"c7b98ed1914a8b230481aaec2d3aceb0de1e41f3"}),t("svg",{key:"a0699f24130c028e2beccc561d8fe0d3f7e4b82d",width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"sorting-caret","aria-hidden":"true"},t("path",{key:"3f99ee1414e99c9c3f053be1ad23d08b65e74689","fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.70709 14.7071C8.31657 15.0976 7.6834 15.0976 7.29288 14.7071L0.292879 7.7071L1.70709 6.29289L6.99999 11.5858L6.99999 -7.612e-07L8.99999 -5.86354e-07L8.99999 11.5858L14.2929 6.29289L15.7071 7.70711L8.70709 14.7071Z"}))),!this.sortable&&t("slot",{key:"3534cd5ccc0d2f4415581ab88421343b05bd23f6"}),t("slot",{key:"aa444c4028f8b9e95a85afcfc7f74582d21aa8b2",name:"trailing-accessory"}))}get el(){return s(this)}static get watchers(){return{hidden:["emitVisibilityChangeEvent"],stickTo:["emitStickyEvents"]}}};c.style=l;export{c as market_table_column};
