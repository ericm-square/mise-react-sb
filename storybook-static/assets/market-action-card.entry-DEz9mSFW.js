import{r as s,c as r,h as o,H as n,g as i}from"./preview-BLkU8-7b.js";import{i as l}from"./element-type-guard-08daa588-Bmz4Rrwp.js";import"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";import"./iframe-BYgjunmg.js";import"../sb-preview/runtime.js";import"./tslib.es6-pJfR_DrR.js";import"./index-2dc281eb-DCayfYZh.js";function d(e){return e!=null&&e.children?[...e.children].find(l):null}const c=`:host,::slotted(*),*{box-sizing:border-box}:host([disabled]){cursor:not-allowed !important;}:host([disabled]) *,:host([disabled]) ::slotted(*){cursor:not-allowed !important;pointer-events:none !important;}:host{--focus-ring-color:color-mix(in srgb, var(--action-card-focus-ring-color) 50%, transparent);display:block;padding:var(--action-card-padding-vertical-size) var(--action-card-padding-horizontal-size);border-radius:var(--action-card-border-radius);background-color:var(--action-card-background-color);box-shadow:inset
    0
    0
    0
    var(--action-card-normal-state-unselected-value-border-width)
    var(--action-card-normal-state-unselected-value-border-color);opacity:var(--action-card-normal-state-content-opacity);cursor:pointer}:host(:hover){box-shadow:inset
      0
      0
      0
      var(--action-card-hover-state-unselected-value-border-width)
      var(--action-card-hover-state-unselected-value-border-color)}:host(:active){box-shadow:inset
      0
      0
      0
      var(--action-card-active-state-unselected-value-border-width)
      var(--action-card-active-state-unselected-value-border-color)}:host([disabled]){box-shadow:inset
      0
      0
      0
      var(--action-card-disabled-state-unselected-value-border-width)
      var(--action-card-disabled-state-unselected-value-border-color);opacity:var(--action-card-disabled-state-content-opacity)}:host([selected]){box-shadow:inset
      0
      0
      0
      var(--action-card-normal-state-selected-value-border-width)
      var(--action-card-normal-state-selected-value-border-color)}:host([selected]:hover){box-shadow:inset
      0
      0
      0
      var(--action-card-hover-state-selected-value-border-width)
      var(--action-card-hover-state-selected-value-border-color)}:host([selected]:active){box-shadow:inset
      0
      0
      0
      var(--action-card-active-state-selected-value-border-width)
      var(--action-card-active-state-selected-value-border-color)}:host([selected][disabled]){box-shadow:inset
      0
      0
      0
      var(--action-card-disabled-state-selected-value-border-width)
      var(--action-card-disabled-state-selected-value-border-color)}:host(.has-slotted-row){padding:0 var(--row-background-horizontal-outset-padding)}:host(.has-slotted-row) ::slotted(.market-row){--row-normal-variant-hover-state-text-color:var(--row-normal-variant-normal-state-text-color);--row-normal-variant-hover-state-subtext-color:var(--row-normal-variant-normal-state-subtext-color);--row-normal-variant-hover-state-side-text-primary-color:var(--row-normal-variant-normal-state-side-text-primary-color);--row-normal-variant-hover-state-side-text-secondary-color:var(--row-normal-variant-normal-state-side-text-secondary-color);--row-normal-variant-selected-state-text-color:var(--row-normal-variant-normal-state-text-color);--row-normal-variant-selected-state-subtext-color:var(--row-normal-variant-normal-state-subtext-color);--row-normal-variant-selected-state-side-text-primary-color:var(--row-normal-variant-normal-state-side-text-primary-color);--row-normal-variant-selected-state-side-text-secondary-color:var(--row-normal-variant-normal-state-side-text-secondary-color);--row-normal-variant-pressed-state-text-color:var(--row-normal-variant-normal-state-text-color);--row-normal-variant-pressed-state-subtext-color:var(--row-normal-variant-normal-state-subtext-color);--row-normal-variant-pressed-state-side-text-primary-color:var(--row-normal-variant-normal-state-side-text-primary-color);--row-normal-variant-pressed-state-side-text-secondary-color:var(--row-normal-variant-normal-state-side-text-secondary-color);padding-right:calc(
          var(--action-card-padding-horizontal-size) -
          var(--row-normal-variant-background-horizontal-outset-padding)
        );padding-left:calc(
          var(--action-card-padding-horizontal-size) -
          var(--row-normal-variant-background-horizontal-outset-padding)
        );background-color:transparent}:host(:focus-visible){outline:var(--action-card-focus-ring-border-size) solid var(--focus-ring-color);outline-offset:var(--action-card-focus-ring-buffer-size)}`,v=c,h=class{constructor(e){s(this,e),this.marketCardSelected=r(this,"marketCardSelected",7),this.marketCardDeselected=r(this,"marketCardDeselected",7),this.selected=!1,this.disabled=!1,this.value=void 0,this.transient=!1}handleRowSelection(e){this.select(),e.stopPropagation()}handleRowDeselection(e){this.deselect(),e.stopPropagation()}async select(){var e,t;this.selected=!0,await((e=this.rowEl)===null||e===void 0?void 0:e.silentlySelect());const{defaultPrevented:a}=this.marketCardSelected.emit({value:this.value});a&&(this.selected=!1,await((t=this.rowEl)===null||t===void 0?void 0:t.silentlyDeselect()))}async deselect(){var e,t;this.selected=!1,await((e=this.rowEl)===null||e===void 0?void 0:e.silentlyDeselect());const{defaultPrevented:a}=this.marketCardDeselected.emit({value:this.value});a&&(this.selected=!0,await((t=this.rowEl)===null||t===void 0?void 0:t.silentlySelect()))}async silentlySelect(){var e;return this.selected=!0,await((e=this.rowEl)===null||e===void 0?void 0:e.silentlySelect()),Promise.resolve()}async silentlyDeselect(){var e;return this.selected=!1,await((e=this.rowEl)===null||e===void 0?void 0:e.silentlyDeselect()),Promise.resolve()}handleClick(){this.disabled||this.transient||this.rowEl||(this.selected?this.deselect():this.select())}handleKeydown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.rowEl?this.rowEl.click():this.el.click())}syncRowAttributes(){this.rowEl&&(this.rowEl.interactive=!0,this.rowEl.selected=this.selected,this.rowEl.removeAttribute("tabIndex"))}handleSlotChangeDefault(){this.rowEl=d(this.el),this.el.classList.toggle("has-slotted-row",!!this.rowEl),this.syncRowAttributes()}componentDidRender(){this.rowEl&&this.rowEl.removeAttribute("tabIndex")}render(){return o(n,{key:"e359747b5bed802de611d5afe9afc94b7f0c7946","aria-selected":this.selected,class:"market-action-card",onClick:this.handleClick.bind(this),onKeydown:this.handleKeydown.bind(this),role:"option",tabindex:this.disabled?null:"0"},o("slot",{key:"7cddfe4c7cf3d1b19d4c7cd53f0445d280fc41b2",onSlotchange:()=>this.handleSlotChangeDefault()}))}get el(){return i(this)}};h.style=v;export{h as market_action_card};
