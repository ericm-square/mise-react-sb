import{r,h as s,H as h,g as n}from"./preview-BLkU8-7b.js";import{g as i}from"./index-2dc281eb-DCayfYZh.js";import"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";import"./iframe-BYgjunmg.js";import"../sb-preview/runtime.js";import"./tslib.es6-pJfR_DrR.js";const o=":host{display:block}",d=o,c=class{constructor(t){r(this,t),this.selectedTab=void 0,this.defaultTab=void 0}marketTabSelectedChangedEventHandler(t){t.stopPropagation();const{panelId:e,tabId:a,value:l}=t.detail;if(l)this.selectedTab!==a&&(this.selectedTab=a);else return;this.showPanelWithId(e)}tabWatcher(t){this.setTab(t)}setTab(t){this.tabListEl&&(this.tabListEl.selectedTab=t)}showPanelWithId(t){var e;(e=this.panelEls)===null||e===void 0||e.forEach(a=>{a.hidden=a.id!==t})}handleSlotChange(){this.panelEls=[...this.el.querySelectorAll(i("market-tab-panel"))].map(t=>(t.hidden=!0,t)),this.tabListEl=this.el.querySelector(i("market-tab-list"))}componentWillLoad(){var t;this.handleSlotChange(),this.setTab((t=this.selectedTab)!==null&&t!==void 0?t:this.defaultTab)}render(){return s(h,{key:"5462e854de4a5f78156cf056a544cb0d84194348",class:"market-tabs"},s("slot",{key:"cb96c959379bf34393361fa4ac857f1db8ff3d2f",onSlotchange:()=>this.handleSlotChange()}))}get el(){return n(this)}static get watchers(){return{selectedTab:["tabWatcher"]}}};c.style=d;export{c as market_tabs};
