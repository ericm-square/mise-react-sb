import{r as L,c as b,h as u,H as _,g as x}from"./preview-BLkU8-7b.js";import{g as f}from"./index-2dc281eb-DCayfYZh.js";import{a as g}from"./raf-ac8923ee-Dje82vI4.js";import{R as F}from"./reorderable-ad24a486-D9uBLKy-.js";import{i as M}from"./draggable-3c5539a5-C1SC_K6H.js";import{i as p,a as O}from"./utils-cc39d575-jvTINiUJ.js";import{s as y,S as H,b as C,c as V,a as P,k as W}from"./_baseIsEqual-efa577aa-BqZvovRz.js";import{i as q}from"./isObject-f305a0d7-CA5ssx5i.js";import{i as R,t as I,h as N,b as k}from"./hasIn-91a6dab9-BGI6-jbq.js";import{i as $}from"./identity-db011338-DKeuBCMA.js";import{i as U}from"./_Map-5d7abd2f-CY00VWNU.js";import{S as w}from"./_getTag-40eee50c-43w3foRc.js";import"./_arrayPush-074dda83-BicVvr-I.js";import"./_getNative-e422aac7-CFRFUET7.js";import"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";import"./iframe-BYgjunmg.js";import"../sb-preview/runtime.js";import"./tslib.es6-pJfR_DrR.js";import"./max-z-index-7a974719-43GcVZqA.js";import"./isSymbol-385885b1-CYoGKoqs.js";function T(){}function Z(e,t,i,s){for(var r=e.length,o=i+-1;++o<r;)if(t(e[o],o,e))return o;return-1}function G(e){return e!==e}function K(e,t,i){for(var s=i-1,r=e.length;++s<r;)if(e[s]===t)return s;return-1}function B(e,t,i){return t===t?K(e,t,i):Z(e,G,i)}function Y(e,t){var i=e==null?0:e.length;return!!i&&B(e,t,0)>-1}function z(e,t,i){var s=e==null?void 0:k(e,t);return s===void 0?i:s}var J=1,Q=2;function X(e,t,i,s){var r=i.length,o=r;if(e==null)return!o;for(e=Object(e);r--;){var n=i[r];if(n[2]?n[1]!==e[n[0]]:!(n[0]in e))return!1}for(;++r<o;){n=i[r];var l=n[0],a=e[l],c=n[1];if(n[2]){if(a===void 0&&!(l in e))return!1}else{var h=new P,d;if(!(d===void 0?C(c,a,J|Q,s,h):d))return!1}}return!0}function E(e){return e===e&&!q(e)}function j(e){for(var t=W(e),i=t.length;i--;){var s=t[i],r=e[s];t[i]=[s,r,E(r)]}return t}function D(e,t){return function(i){return i==null?!1:i[e]===t&&(t!==void 0||e in Object(i))}}function ee(e){var t=j(e);return t.length==1&&t[0][2]?D(t[0][0],t[0][1]):function(i){return i===e||X(i,e,t)}}var te=1,ie=2;function se(e,t){return R(e)&&E(t)?D(I(e),t):function(i){var s=z(i,e);return s===void 0&&s===t?N(i,e):C(t,s,te|ie)}}function re(e){return function(t){return t==null?void 0:t[e]}}function ne(e){return function(t){return k(t,e)}}function oe(e){return R(e)?re(I(e)):ne(e)}function le(e){return typeof e=="function"?e:e==null?$:typeof e=="object"?U(e)?se(e[0],e[1]):ee(e):oe(e)}var ae=1/0,ce=w&&1/y(new w([,-0]))[1]==ae?function(e){return new w(e)}:T;const he=ce;var de=200;function ue(e,t,i){var s=-1,r=Y,o=e.length,n=!0,l=[],a=l;if(o>=de){var c=t?null:he(e);if(c)return y(c);n=!1,r=V,a=new H}else a=t?[]:l;e:for(;++s<o;){var h=e[s],d=t?t(h):h;if(h=h!==0?h:0,n&&d===d){for(var v=a.length;v--;)if(a[v]===d)continue e;t&&a.push(d),l.push(h)}else r(a,d,i)||(a!==l&&a.push(d),l.push(h))}return l}function fe(e,t){return e&&e.length?ue(e,le(t)):[]}const ve=":host,::slotted(*),*{box-sizing:border-box}:host([disabled]){cursor:not-allowed !important;}:host([disabled]) *,:host([disabled]) ::slotted(*){cursor:not-allowed !important;pointer-events:none !important;}:host{display:block}::slotted(.market-action-card){margin-bottom:var(--action-card-spacing)}::slotted(.market-input-search){margin-bottom:var(--core-metrics-spacing-100)}.hidden,::slotted(.hidden){display:none}::slotted(.market-row.hide-bottom-border)::before{display:none}.market-empty-state,::slotted(.market-empty-state){padding-right:0;padding-left:0;border:0}::slotted(.market-drag-cursor){--drag-cursor-height:4px;display:block;height:0;outline:calc(var(--drag-cursor-height) / 2) solid var(--core-emphasis-fill-color);pointer-events:none}",me=ve,be=class{constructor(e){L(this,e),this.marketListSelectionsDidChange=b(this,"marketListSelectionsDidChange",7),this.marketListSlotChange=b(this,"marketListSlotChange",7),this.marketListItemsReordered=b(this,"marketListItemsReordered",3),this.marketListItemsFiltered=b(this,"marketListItemsFiltered",7),this.observers={},this.value="",this.interactive=!1,this.transient=!1,this.multiselect=!1,this.name=void 0,this.filterStrategy="textcontent",this.reorderable="off",this.reorderMode="default",this.hideSelectableCount=!1,this.hasSearch=!1,this.items=void 0,this.selections=new Set,this.filteredItems=void 0}reorderableWatcher(){this.setReorderable()}valueWatcher(){this.setSelectionsFromValue()}hideSelectableCountWatcher(){this.injectCountOnControlRow()}rowSelectedEventHandler(e){this.handleItemSelectedEvent(e.target)}rowDeselectedEventHandler(e){this.handleItemDeselectedEvent(e.target)}cardSelectedEventHandler(e){this.handleItemSelectedEvent(e.target)}cardDeselectedEventHandler(e){this.handleItemDeselectedEvent(e.target)}marketInputSearchValueChangeEventHander({detail:e}){this.filterItems(e.value)}getEventSelectionDetails(){const e=typeof this.value=="string"?this.value?this.value.split(",").filter(s=>!p(s)):[]:Array.isArray(this.value)?this.value.filter(s=>!p(s)):this.value,t=fe([...this.selections].filter(s=>s!==this.controlRow),s=>s.value),i=t.reduce((s,r)=>(p(r.value)||s.push(r.value),s),[]);return{currentSelections:t,currentSelectionValues:i,prevSelectionValues:e}}handleItemSelectedEvent(e){e===this.controlRow?this.selectAllItems():this.selectItem(e);const{currentSelections:t,currentSelectionValues:i,prevSelectionValues:s}=this.getEventSelectionDetails();this.value=i.join(","),this.marketListSelectionsDidChange.emit({newSelection:e,newSelectionValue:e.value,newDeselection:null,newDeselectionValue:null,currentSelections:t,currentSelectionValues:i,prevSelectionValues:s})}handleItemDeselectedEvent(e){if(!this.selections.has(e))return;e===this.controlRow?(()=>{var o,n;return((n=(o=this.filteredItems)===null||o===void 0?void 0:o.visible)!==null&&n!==void 0?n:this.items).filter(c=>c!==this.controlRow).filter(c=>!c.disabled).every(c=>!c.selected)})()?this.selectAllItems():this.deselectAllItems():this.deselectItem(e);const{currentSelections:t,currentSelectionValues:i,prevSelectionValues:s}=this.getEventSelectionDetails();this.value=i.join(","),this.marketListSelectionsDidChange.emit({newSelection:null,newSelectionValue:null,newDeselection:e,newDeselectionValue:e.value,currentSelections:t,currentSelectionValues:i,prevSelectionValues:s})}selectItem(e){this.interactive&&(this.multiselect?this.selections.add(e):(this.deselectItems([e]),this.selections=new Set([e])))}selectAllItems(){var e;if(!this.items||!this.interactive||!this.multiselect)return;const t=(((e=this.filteredItems)===null||e===void 0?void 0:e.visible)||this.items).filter(i=>!i.disabled);this.selections=new Set([...this.selections.values(),...t])}deselectItem(e){this.selections.delete(e)}deselectItems(e){this.items&&this.items.forEach(t=>{!e.includes(t)&&t.selected&&t.deselect()})}deselectAllItems(){var e,t;if(!this.selections||!this.interactive)return;const i=new Set((t=(e=this.filteredItems)===null||e===void 0?void 0:e.visible)!==null&&t!==void 0?t:this.items),s=[...this.selections].filter(r=>r.disabled||!i.has(r));this.selections=new Set(s)}syncListInteractiveWithItems(){this.items.length>0&&(this.items[0].tagName===f("market-action-card").toUpperCase()||this.items[0].tagName===f("market-row").toUpperCase()&&this.items[0].interactive===!0)&&!this.interactive&&(this.interactive=!0)}processItems(){this.items.forEach(e=>{if(e.tagName===f("market-action-card").toUpperCase()){e.transient=this.transient;const t=e.querySelector(f("market-row"));t&&this.setRowProperties(t)}else this.setRowProperties(e)})}getCurrentSelectionValues(){return Array.isArray(this.value)?new Set(this.value):new Set(this.multiselect?this.value.split(","):[this.value])}setRowProperties(e){e.interactive=this.interactive,e.transient=this.transient,e.togglable=this.multiselect}setSelectionsFromValue(){var e;if(this.value||this.value===""){const t=this.getCurrentSelectionValues();(e=this.items)===null||e===void 0||e.forEach(i=>{i!==this.controlRow&&(!p(this.value)&&t.has(i.value)?(i.silentlySelect(),this.selectItem(i)):(i.silentlyDeselect(),this.deselectItem(i)))})}}setSelectionsFromRowAttributes(){const e=new Set;this.items.forEach(t=>{t.selected&&e.add(t)}),this.selections=e}setInternalState(){this.items=[...this.el.querySelectorAll(`:scope > ${f("market-row")}, :scope > ${f("market-action-card")}`)],this.syncListInteractiveWithItems(),this.processItems(),this.items.length>0&&(this.value?this.setSelectionsFromValue():this.setSelectionsFromRowAttributes())}async syncControlRowWithSelections(){var e,t;if(!this.controlRow)return;const i=this.controlRow.querySelector('[slot="control"]'),s=i.tagName.toLowerCase()===f("market-checkbox"),r=((t=(e=this.filteredItems)===null||e===void 0?void 0:e.visible)!==null&&t!==void 0?t:this.items).filter(n=>n!==this.controlRow);switch(r.every(n=>n.selected)?"checked":r.some(n=>n.selected)?"indeterminate":"unchecked"){case"unchecked":this.deselectItem(this.controlRow),await this.controlRow.silentlyDeselect(),await g(),i.removeAttribute("indeterminate");break;case"checked":await this.controlRow.silentlySelect(),this.selectItem(this.controlRow),i.removeAttribute("indeterminate");break;case"indeterminate":s?(await this.controlRow.silentlySelect(),this.selectItem(this.controlRow),await g(),i.setAttribute("indeterminate","")):(await this.controlRow.silentlyDeselect(),this.deselectItem(this.controlRow));break}this.injectCountOnControlRow()}injectCountOnControlRow(){if(!this.controlRow)return;const e=this.controlRow.querySelector('.count[slot="trailing-accessory"]');if(this.hideSelectableCount){e&&this.controlRow.removeChild(e);return}const t=this.filteredItems.visible.filter(i=>!i.disabled).length;if(e)e.textContent=`${t}`;else{const i=document.createElement("span");i.classList.add("count"),i.setAttribute("slot","trailing-accessory"),i.textContent=`${t}`,this.controlRow.appendChild(i)}}filterItems(e){var t;const i=this.items.reduce((s,r)=>{var o,n,l,a,c,h,d,v,S;if(r.getAttribute("slot")==="control-row")return s;if(e){if(typeof this.filterStrategy=="function"){if(this.filterStrategy({item:r,label:(o=r.querySelector('[slot="label"]'))===null||o===void 0?void 0:o.textContent,query:e,textContent:r.textContent,value:r.value}))return s.visible.push(r),s}else if(((l=(n=this.filterStrategy)===null||n===void 0?void 0:n.toLocaleLowerCase)===null||l===void 0?void 0:l.call(n))==="textcontent"){if(((a=r==null?void 0:r.textContent)===null||a===void 0?void 0:a.search(new RegExp(e,"i")))>=0)return s.visible.push(r),s}else if(((h=(c=this.filterStrategy)===null||c===void 0?void 0:c.toLocaleLowerCase)===null||h===void 0?void 0:h.call(c))==="label"){const m=r.querySelector('[slot="label"]');if(((d=m==null?void 0:m.textContent)===null||d===void 0?void 0:d.search(new RegExp(e,"i")))>=0)return s.visible.push(r),s}else if(((S=(v=this.filterStrategy)===null||v===void 0?void 0:v.toLocaleLowerCase)===null||S===void 0?void 0:S.call(v))==="value"&&String(r.value).search(new RegExp(e))>=0)return s.visible.push(r),s}else return s.visible.push(r),s;return s.hidden.push(r),s},{visible:[],hidden:[],visibleSelected:[],selected:[]});requestAnimationFrame(()=>{var s;i.visible.forEach(r=>r.classList.remove("hidden")),i.hidden.forEach(r=>r.classList.add("hidden")),this.items.forEach(r=>r.classList.remove("hide-bottom-border")),i.visible.length>0&&i.visible[i.visible.length-1].classList.add("hide-bottom-border"),(s=this.controlRow)===null||s===void 0||s.classList.toggle("hidden",i.visible.length===0)}),(this.filteredItems||!this.filteredItems&&e)&&this.marketListItemsFiltered.emit({items:i.visible,prevItems:(t=this.filteredItems)===null||t===void 0?void 0:t.visible}),this.filteredItems=i,this.updateSelectedItemsInFilteredItems()}updateSelectedItemsInFilteredItems(){this.filteredItems&&(this.filteredItems.selected=this.items.filter(e=>e.getAttribute("slot")!=="control-row"&&e.selected),this.filteredItems.visibleSelected=this.filteredItems.visible.filter(e=>e.getAttribute("slot")!=="control-row"&&e.selected))}handleSearchSlotchange(){var e;this.inputSearchEl=this.el.querySelector('[slot="search"]'),this.hasSearch=!!this.inputSearchEl,this.filterItems((e=this.inputSearchEl)===null||e===void 0?void 0:e.value)}defaultSlotchangeHandler(){var e;this.setInternalState(),this.filterItems((e=this.inputSearchEl)===null||e===void 0?void 0:e.value),this.setReorderable(),this.marketListSlotChange.emit()}controlRowSlotchangeHandler(){if(!this.interactive||!this.multiselect)return;const e=this.el.querySelector('[slot="control-row"]'),t=e==null?void 0:e.querySelector('[slot="control"]');this.controlRow=O(t)?e:void 0}setEmptyStateVisibility(){var e,t;const i=this.el.querySelector('[slot="empty-state"]')||this.el.shadowRoot.querySelector(f("market-empty-state")),s=((e=this.inputSearchEl)===null||e===void 0?void 0:e.value)&&!(!((t=this.filteredItems)===null||t===void 0)&&t.visible.length);i==null||i.classList.toggle("hidden",!s)}initItemDisabledAttributeObserver(){this.observers.itemDisabledAttribute||(this.observers.itemDisabledAttribute=new MutationObserver(e=>{for(const t of e)t.target.parentElement===this.el&&t.type==="attributes"&&t.attributeName==="disabled"&&this.injectCountOnControlRow()}),this.observers.itemDisabledAttribute.observe(this.el,{attributes:!0,attributeFilter:["disabled"],childList:!0,subtree:!0}))}connectedCallback(){this.syncControlRowWithSelections()}componentWillLoad(){var e;this.setInternalState(),this.filterItems((e=this.inputSearchEl)===null||e===void 0?void 0:e.value)}componentWillRender(){this.syncListInteractiveWithItems(),this.processItems(),this.updateSelectedItemsInFilteredItems(),this.controlRowSlotchangeHandler(),this.syncControlRowWithSelections(),this.setEmptyStateVisibility()}componentDidLoad(){this.initItemDisabledAttributeObserver()}disconnectedCallback(){var e;(e=this.observers.itemDisabledAttribute)===null||e===void 0||e.disconnect()}handleKeydown(e){switch(e.key){case"ArrowDown":this.handleArrowDown(e);break;case"ArrowUp":this.handleArrowUp(e);break}}handleArrowDown(e){const t=document.querySelector(":focus"),i=[...this.items].indexOf(t);if(i!==-1){for(let s=i+1;s<this.items.length;s++)if(!this.items[s].disabled){this.items[s].focus();break}e.preventDefault()}}handleArrowUp(e){const t=document.querySelector(":focus"),i=[...this.items].indexOf(t);if(i!==-1){for(let s=i-1;s>=0;s--)if(!this.items[s].disabled){this.items[s].focus();break}e.preventDefault()}}async focusRowAtIndex(e){const t=this.items[e];return t?(t.focus(),Promise.resolve()):Promise.reject(new Error(`Row at index ${e} not found`))}setReorderable(){const{el:e,items:t,controlRow:i,reorderable:s,reorderMode:r,reorder:o,marketListItemsReordered:n}=this;s==="off"?(o==null||o.destroy(),this.reorder=null):o||(this.reorder=new F({el:e,accepts:[`${f("market-row")}:not([slot="control"])`],event:n,mode:r})),t==null||t.forEach(l=>{M(l)&&l!==i&&(l.dragEnabled=s!=="off")})}onDragMove(e){var t;(t=this.reorder)===null||t===void 0||t.dragMove(e)}onDragLeave(){var e;(e=this.reorder)===null||e===void 0||e.dragLeave()}onDragEnd(e){var t;(t=this.reorder)===null||t===void 0||t.dragEnd(e)}onDragDrop(e){var t;(t=this.reorder)===null||t===void 0||t.dragDrop(e)}componentDidRender(){this.setReorderable()}render(){var e;const t=f("market-empty-state");return u(_,{key:"f17a275017f31dbb76e784c3d9baba3acaccc8ea",class:"market-list",role:this.interactive?"listbox":"list","aria-labelledby":this.name,"aria-multiselectable":this.multiselect,"has-search":this.hasSearch,onKeydown:i=>this.handleKeydown(i),onMarketDragMove:i=>this.onDragMove(i),onMarketDragLeave:()=>this.onDragLeave(),onMarketDragEnd:i=>this.onDragEnd(i),onMarketDragDrop:i=>this.onDragDrop(i)},u("slot",{key:"48bb440dbf2d8d72b99ac2b505b21af0ce635f91",name:"search",onSlotchange:()=>this.handleSearchSlotchange()}),u("slot",{key:"221ca2f236089caeec0ee56115427c15ea51eb0b",name:"control-row",onSlotchange:()=>this.controlRowSlotchangeHandler()}),u("slot",{key:"24eec9af1c055a61c4b1eb56134743929454b725",onSlotchange:()=>this.defaultSlotchangeHandler()}),u("slot",{key:"49fa5c373360d8c5de182377902364c2fc76fab8",name:"empty-state"},u(t,{key:"ca6c84fd1a49701e2f13bd8ecf7c05d7cd00262e",class:"hidden"},u("svg",{key:"c599bae3c172058eccf581aef09c57137a71eb3d",height:"40",slot:"media",viewBox:"0 0 40 40",width:"40",xmlns:"http://www.w3.org/2000/svg"},u("path",{key:"aabf094159a64ecf35d4e6b6d10052321783cadf",d:"M34.4667 17.2L28.1 10.8333H26.6667C26.6667 9.45 25.55 8.33333 24.1667 8.33333C22.7834 8.33333 21.6667 9.45 21.6667 10.8333H18.3334C18.3334 9.45 17.2167 8.33333 15.8334 8.33333C14.45 8.33333 13.3334 9.45 13.3334 10.8333H11.9L5.53337 17.2C4.11671 18.6167 3.33337 20.5 3.33337 22.5C3.33337 26.6333 6.70004 30 10.8334 30C14.8 30 18.0167 26.9 18.2834 23.0167C18.8167 23.2167 19.4 23.3333 20 23.3333C20.6 23.3333 21.1834 23.2167 21.7167 23.0167C21.9834 26.9 25.2 30 29.1667 30C33.3 30 36.6667 26.6333 36.6667 22.5C36.6667 20.5 35.8834 18.6167 34.4667 17.2ZM10.8334 26.6667C8.53337 26.6667 6.66671 24.8 6.66671 22.5C6.66671 21.3833 7.10004 20.3333 7.88337 19.55C8.66671 18.7667 9.71671 18.3333 10.8334 18.3333C13.1334 18.3333 15 20.2 15 22.5C15 24.8 13.1334 26.6667 10.8334 26.6667ZM15.35 16.55C14.4667 15.8833 13.4334 15.3833 12.3 15.15L13.2667 14.1667H17.2334C16.3834 14.7333 15.7167 15.5667 15.35 16.55ZM20 20C19.0834 20 18.3334 19.25 18.3334 18.3333C18.3334 17.4167 19.0834 16.6667 20 16.6667C20.9167 16.6667 21.6667 17.4167 21.6667 18.3333C21.6667 19.25 20.9167 20 20 20ZM22.75 14.1667H26.7167L27.7 15.15C26.5667 15.3833 25.5334 15.8833 24.65 16.55C24.2834 15.5667 23.6167 14.7333 22.75 14.1667ZM29.1667 26.6667C26.8667 26.6667 25 24.8 25 22.5C25 20.2 26.8667 18.3333 29.1667 18.3333C30.2834 18.3333 31.3334 18.7667 32.1167 19.55C32.9 20.3333 33.3334 21.3833 33.3334 22.5C33.3334 24.8 31.4667 26.6667 29.1667 26.6667Z",fill:"var(--core-text-10-color)","fill-opacity":"0.9"})),u("h3",{key:"e60257bed93133dc7c5e160bfbc56241141d0bb4",slot:"primary-text"},u("slot",{key:"1ab4dcd6f13250014312b4cdd35fd825c866f2d7",name:"empty-state-primary-text"},"No search results for “",(e=this.inputSearchEl)===null||e===void 0?void 0:e.value,"”")),u("p",{key:"c20c1039f5118d14391abf213038775aed678733",slot:"secondary-text"},u("slot",{key:"69184906c3584e901da11d005fdf3c056fcd8108",name:"empty-state-secondary-text"},"Try a different search.")))))}get el(){return x(this)}static get watchers(){return{reorderable:["reorderableWatcher"],value:["valueWatcher"],hideSelectableCount:["hideSelectableCountWatcher"]}}};be.style=me;export{be as market_list};
