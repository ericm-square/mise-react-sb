import{r as a,h as r,H as s,g as d}from"./preview-BLkU8-7b.js";import{g as i}from"./index-2dc281eb-DCayfYZh.js";import"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";import"./iframe-BYgjunmg.js";import"../sb-preview/runtime.js";import"./tslib.es6-pJfR_DrR.js";const p=`:host,::slotted(*),*{box-sizing:border-box}:host([disabled]){cursor:not-allowed !important;}:host([disabled]) *,:host([disabled]) ::slotted(*){cursor:not-allowed !important;pointer-events:none !important;}:host{display:inline-block;overflow-y:auto;min-width:var(--modal-popover-wide-viewport-min-width-size);max-height:var(--modal-popover-wide-viewport-max-height-size);padding:var(--modal-popover-wide-viewport-padding-right-size)
    var(--modal-popover-wide-viewport-padding-right-size)
    var(--modal-popover-wide-viewport-padding-right-size)
    var(--modal-popover-wide-viewport-padding-left-size);border-radius:var(--modal-popover-border-radius);background-color:var(--modal-popover-background-color);box-shadow:var(--elevation-30-shadow)}@media (min-width: 600px){:host{width:auto}}::slotted(.market-list){display:block;width:100%;height:100%;margin-bottom:calc(var(--modal-popover-wide-viewport-padding-bottom-size) - var(--popover-padding, 24px))}::slotted(.market-list:not([has-search])){margin:calc(var(--popover-content-vertical-padding, 8px) - var(--popover-padding, 24px)) 0}`,l=p,n=class{constructor(o){a(this,o)}initInteractiveList(){const o=this.el.querySelector("slot");let e;o?e=o.assignedElements().filter(t=>t.localName===i("market-list")):e=[].slice.call(this.el.querySelectorAll(i("market-list"))),e&&e.forEach(t=>{t.interactive=!0})}render(){return this.initInteractiveList(),r(s,{key:"fb8c6831fa007507cd6e86e0dd80e478a99f3fdc",class:"market-popover"},r("slot",{key:"c0019bae3135d92bbf81c9564f14c914472d3ff0"}))}get el(){return d(this)}};n.style=l;export{n as market_popover};