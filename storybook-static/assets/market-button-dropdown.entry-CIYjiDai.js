import{r as i,c as s,h as o,H as n,g as a}from"./preview-BLkU8-7b.js";import{s as d}from"./dropdown-7de2f73b-B7yQ-06u.js";import{g as r}from"./index-2dc281eb-DCayfYZh.js";import"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";import"./iframe-BYgjunmg.js";import"../sb-preview/runtime.js";import"./tslib.es6-pJfR_DrR.js";const p=":host{display:inline-block}market-dropdown,.market-dropdown{width:100%}svg{fill:transparent}",l=p;function c(t){return t.tagName.toLowerCase()===r("market-button")}const h=class{constructor(t){i(this,t),this.marketButtonDropdownOpened=s(this,"marketButtonDropdownOpened",7),this.marketButtonDropdownClosed=s(this,"marketButtonDropdownClosed",7),this.interaction="click",this.disabled=!1,this.noCaret=!1,this.popoverPlacement="bottom-end",this.popoverStrategy="absolute",this.persistListSelections=!1,this.dropdownIsActive=!1}dropdownOpenedEventHandler(t){t.target===this.el&&(this.dropdownIsActive=!0,this.setCaret(),this.marketButtonDropdownOpened.emit())}dropdownClosedEventHandler(t){t.target===this.el&&(this.dropdownIsActive=!1,this.setCaret(),this.marketButtonDropdownClosed.emit())}syncTriggerDisabledState(){this.slottedButton&&(this.slottedButton.disabled=this.disabled)}setCaret(){this.noCaret||!c(this.slottedButton)||(this.dropdownIsActive?this.slottedButton.caret="up":this.slottedButton.caret="down")}registerTrigger(){this.slottedButton=this.el.querySelector(d.join(",")),this.syncTriggerDisabledState(),this.setCaret()}componentWillRender(){const t=r("market-list"),e=this.el.querySelector(t);e&&(e.interactive=!0,e.transient=!this.persistListSelections)}render(){const t=r("market-dropdown"),e=r("market-popover");return o(n,{key:"b3b24cb92bf8f2e2a21cbe7dff105e5688b33518",class:"market-button-dropdown","aria-expanded":this.dropdownIsActive},o(t,{key:"3c7cebfbfede0efa3f8a5462a2d9301561abc3f8",interaction:this.interaction,"popover-strategy":this.popoverStrategy,"popover-placement":this.popoverPlacement,disabled:this.disabled},o("slot",{key:"5131b69fd9f41cc202efd57f85b7ed8d266eceb6",name:"trigger",slot:"trigger",onSlotchange:()=>this.registerTrigger()}),o(e,{key:"5155e19df34c427da9a46f3b17c7143ccf441316",slot:"popover",part:"popover"},o("slot",{key:"fdb5e41c05d16771e6144e47fdae2d4c5b020023",name:"content"}))))}get el(){return a(this)}static get watchers(){return{disabled:["syncTriggerDisabledState"]}}};h.style=l;export{h as market_button_dropdown};
