import{r as u,c as g,h as p,H as m,g as b}from"./preview-BLkU8-7b.js";import{g as c}from"./index-2dc281eb-DCayfYZh.js";import{D as f,i as v}from"./draggable-3c5539a5-C1SC_K6H.js";import{R as E}from"./reorderable-ad24a486-D9uBLKy-.js";import{s as k}from"./utils-1428aa72-Boutt1vS.js";import"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";import"./iframe-BYgjunmg.js";import"../sb-preview/runtime.js";import"./tslib.es6-pJfR_DrR.js";import"./max-z-index-7a974719-43GcVZqA.js";import"./raf-ac8923ee-Dje82vI4.js";import"./index-b9ae40c9-Bb5aO-kv.js";import"./index-33c9a13b-DS93TaAl.js";const S=`:host{--table-cell-horizontal-padding-size:8px;--table-cell-indent-size:40px;--drag-highlight-border-size:2px}:host,slot,.children{vertical-align:inherit;text-align:inherit}:host,.children{display:contents}:host([collapsible][collapsed]) .children{display:none}:host(.market-drag-cursor-parent[collapsible][collapsed]) ::slotted([slot="parent"]){position:relative;border-radius:var(--core-radius-10);background-color:var(--core-emphasis-40-color);outline:var(--drag-highlight-border-size) solid var(--core-emphasis-fill-color);outline-offset:calc(var(--drag-highlight-border-size) * -1)}::slotted(.market-drag-cursor){--drag-cursor-height:4px;position:absolute;right:0;left:calc(
      var(--table-cell-horizontal-padding-size) +
      (var(--drag-cursor-indent-level) + 1) * var(--table-cell-indent-size)
    );display:block;height:0;outline:calc(var(--drag-cursor-height) / 2) solid var(--core-emphasis-fill-color);pointer-events:none}:host(.market-drag-placeholder) ::slotted(:not([slot="parent"])){display:none}`,C=S,y=class{constructor(e){u(this,e),this.marketInternalTableV2GroupSelectionChange=g(this,"marketInternalTableV2GroupSelectionChange",7),this.marketTableV2RowsReordered=g(this,"marketTableV2RowsReordered",7),this.marketTableV2GroupCollapsedChange=g(this,"marketTableV2GroupCollapsedChange",7),this.collapsible=!1,this.collapsed=!1,this.dragEnabled=!1,this.indent=0,this.reorderable=void 0,this.reorderMode="default",this.selected="false"}onMarketTableV2CellCaretClicked(e){e.stopPropagation(),this.setCollapsed(!this.collapsed)}async onMarketTableV2SelectionChange(e){const{el:r,parent:t}=this,{target:a,detail:o}=e,{current:s}=o;a!==r&&(e.stopImmediatePropagation(),a===t?await this.setSelected(s):await this.setSelectedFromChildEvent(e))}async onDragHandleStart(e){e.stopImmediatePropagation();const{el:r,parent:t}=this,{target:a,detail:o}=e;if(t!==a)return;const s=t.dragHandlePosition==="leading"?"left":"right",l=new f(r,{anchor:s});this.drag=l,await l.start(o),t.classList.add("market-drag-placeholder")}onDragHandleMove(e){e.stopImmediatePropagation();const{parent:r,drag:t}=this,{target:a,detail:o}=e;r===a&&t.move(o)}async onDragHandleDragEnd(e){e.stopImmediatePropagation();const{parent:r,drag:t}=this,{target:a,detail:o}=e;r===a&&(await t.end(o),r.classList.remove("market-drag-placeholder"),t.destroy())}onDragMove(e){const{parent:r,reorder:t}=this,{el:a}=e.detail;r!==a&&(e.stopImmediatePropagation(),t==null||t.dragMove(e))}onDragLeave(e){const{parent:r,reorder:t}=this,{el:a}=e.detail;r!==a&&(e.stopImmediatePropagation(),t==null||t.dragLeave())}onDragEnd(e){const{parent:r,reorder:t}=this,{el:a}=e.detail;r!==a&&(t==null||t.dragEnd(e))}onDragDrop(e){const{parent:r,reorder:t}=this,{el:a}=e.detail;r!==a&&(t==null||t.dragDrop(e))}propagateNestedState(){const{parent:e,children:r,groups:t,rows:a,indent:o,collapsible:s,collapsed:l}=this;if(t.forEach(n=>{n.collapsible=s}),s){const n=r.length>0;e&&(e.caret=n?l?"down":"up":void 0,e.indent=n?o:o+1),t.forEach(i=>{i.indent=o+1,i.collapsible=s}),a.forEach(i=>{i.indent=o+2})}else e&&(e.caret=void 0,e.indent=o),r.forEach(n=>{n.indent=o+1}),t.forEach(n=>{n.collapsible=s})}watchDragEnabled(){const{parent:e,children:r,dragEnabled:t}=this;e&&(e.dragEnabled=t),r==null||r.forEach(a=>{a.dragEnabled=t})}watchReorderable(){const{el:e,reorder:r,reorderable:t,reorderMode:a,marketTableV2RowsReordered:o}=this;if(r==null||r.destroy(),["internal","external"].includes(t)){const l=c("market-table-v2-row"),n=c("market-table-v2-group");this.reorder=new E({el:e,accepts:[`${l}:not([header]):not([footer]):not([slot="parent"])`,n],event:o,mode:a})}this.syncDragEnabled()}async setSelected(e,{silent:r=!1}={}){const{parent:t,children:a,marketInternalTableV2GroupSelectionChange:o,selected:s}=this;return s===e||(r||o.emit({current:e,previous:s}),this.selected=e,await(t==null?void 0:t.setSelected(e,{silent:!0})),a==null||a.forEach(async l=>{await l.setSelected(e,{silent:!0})})),Promise.resolve()}async setCollapsed(e,{silent:r=!1}={}){const{collapsed:t,collapsible:a,marketTableV2GroupCollapsedChange:o}=this;if(!a||e===t)return Promise.resolve();if(this.collapsed=e,!r){const{defaultPrevented:s}=o.emit({previous:t,current:e});s&&(this.collapsed=t)}return Promise.resolve()}async sort({order:e,column:r,strategy:t,format:a}){const{el:o,children:s,groups:l}=this,n=k({items:s,order:e,column:r,strategy:t,format:a});return l==null||l.forEach(i=>i.sort({order:e,column:r,strategy:t,format:a})),n.forEach(i=>{o.append(i)}),Promise.resolve()}async setSelectedFromChildEvent(e){const{parent:r,children:t,marketInternalTableV2GroupSelectionChange:a,selected:o}=this,{target:s,detail:l}=e,{current:n}=l,i=t.map(d=>s===d?n:d.selected),h=i.every(d=>d==="true")?"true":i.every(d=>d==="false")?"false":"indeterminate";o!==h&&(a.emit({current:h,previous:o}),this.selected=h,await r.setSelected(h,{silent:!0}))}getElements(){this.parent=[...this.el.children].find(e=>e.tagName===c("market-table-v2-row").toUpperCase()&&e.slot==="parent"),this.rows=[...this.el.children].filter(e=>e.tagName===c("market-table-v2-row").toUpperCase()&&e.slot!=="parent"),this.groups=[...this.el.children].filter(e=>e.tagName===c("market-table-v2-group").toUpperCase()&&e.slot!=="parent"),this.children=[...this.groups,...this.rows]}getStyles(){const{indent:e}=this;return{"--drag-cursor-indent-level":e.toString()}}syncDragEnabled(){const{parent:e,rows:r,groups:t,reorderable:a,reorderMode:o}=this,s=["internal","external"].includes(a);e&&(e.dragEnabled=s),r==null||r.forEach(l=>{v(l)&&(l.dragEnabled=s)}),t==null||t.forEach(l=>{l.dragEnabled=s,l.reorderable=a,l.reorderMode=o})}onSlotChange(){this.getElements(),this.propagateNestedState(),this.syncDragEnabled()}connectedCallback(){this.getElements(),this.propagateNestedState(),this.syncDragEnabled()}componentDidRender(){this.watchReorderable()}render(){return p(m,{key:"f7a8d13f3317f8921d6047dae421285e9926bce2",class:"market-table-v2-group",style:this.getStyles()},p("slot",{key:"1d01cf036ff5c5e870dca69415a6970c4bef7c33",name:"parent",onSlotchange:()=>this.onSlotChange()}),p("div",{key:"e9b2557b520745e947c13df656494bd9ae5ef613",class:"children"},p("slot",{key:"6e3b9cde31c418bf3e2d1fce1eaa70027e91b505",onSlotchange:()=>this.onSlotChange()})))}get el(){return b(this)}static get watchers(){return{indent:["propagateNestedState"],collapsed:["propagateNestedState"],collapsible:["propagateNestedState"],dragEnabled:["watchDragEnabled"],reorderable:["watchReorderable"]}}};y.style=C;export{y as market_table_v2_group};
