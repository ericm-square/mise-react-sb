import{r as a,c as o,h as t,H as r,g as c}from"./preview-BLkU8-7b.js";import"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";import"./iframe-BYgjunmg.js";import"../sb-preview/runtime.js";import"./tslib.es6-pJfR_DrR.js";const s=':host,::slotted(*),*{box-sizing:border-box}:host([disabled]){cursor:not-allowed !important;}:host([disabled]) *,:host([disabled]) ::slotted(*){cursor:not-allowed !important;pointer-events:none !important;}:host{--transition-duration:0.2s;--focus-ring-color:color-mix(in srgb, var(--choice-button-focus-ring-color) 50%, transparent);position:relative;display:inline-block;border-radius:var(--choice-button-border-radius);background-color:var(--choice-button-unselected-value-normal-state-background-color);color:var(--choice-button-unselected-value-normal-state-label-color);cursor:pointer;transition:background-color color var(--transition-duration)}button{display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box;width:100%;margin:0;padding:0;border:none;border-radius:var(--choice-button-border-radius);background-color:transparent;color:inherit;outline:none;font-weight:inherit;font-size:inherit;font-family:inherit;line-height:inherit;text-align:center;cursor:inherit}button:focus-visible{outline:var(--choice-button-focus-ring-border-size) solid var(--focus-ring-color);outline-offset:var(--choice-button-focus-ring-buffer-size)}::slotted([slot="secondary-text"]){cursor:inherit}:host([size="medium"]) button{padding:var(--choice-button-medium-size-vertical-padding) var(--choice-button-medium-size-horizontal-padding);font-weight:var(--choice-button-medium-size-text-primary-weight);font-size:var(--choice-button-medium-size-text-primary-size);line-height:var(--choice-button-medium-size-text-primary-leading);letter-spacing:var(--choice-button-medium-size-text-primary-tracking);text-transform:var(--choice-button-medium-size-text-primary-case);-moz-column-gap:var(--choice-button-medium-size-content-spacing);column-gap:var(--choice-button-medium-size-content-spacing)}:host([size="medium"]) ::slotted([slot="secondary-text"]){font-weight:var(--choice-button-medium-size-text-secondary-weight);font-size:var(--choice-button-medium-size-text-secondary-size);line-height:var(--choice-button-medium-size-text-secondary-leading);letter-spacing:var(--choice-button-medium-size-text-secondary-tracking);text-transform:var(--choice-button-medium-size-text-secondary-case)}:host([size="small"]) button{padding:var(--choice-button-small-size-vertical-padding) var(--choice-button-small-size-horizontal-padding);font-weight:var(--choice-button-small-size-text-primary-weight);font-size:var(--choice-button-small-size-text-primary-size);line-height:var(--choice-button-small-size-text-primary-leading);letter-spacing:var(--choice-button-small-size-text-primary-tracking);text-transform:var(--choice-button-small-size-text-primary-case);-moz-column-gap:var(--choice-button-small-size-content-spacing);column-gap:var(--choice-button-small-size-content-spacing)}:host([size="small"]) ::slotted([slot="secondary-text"]){font-weight:var(--choice-button-small-size-text-secondary-weight);font-size:var(--choice-button-small-size-text-secondary-size);line-height:var(--choice-button-small-size-text-secondary-leading);letter-spacing:var(--choice-button-small-size-text-secondary-tracking);text-transform:var(--choice-button-small-size-text-secondary-case)}:host([size="large"]) button{padding:var(--choice-button-large-size-vertical-padding) var(--choice-button-large-size-horizontal-padding);font-weight:var(--choice-button-large-size-text-primary-weight);font-size:var(--choice-button-large-size-text-primary-size);line-height:var(--choice-button-large-size-text-primary-leading);letter-spacing:var(--choice-button-large-size-text-primary-tracking);text-transform:var(--choice-button-large-size-text-primary-case);-moz-column-gap:var(--choice-button-large-size-content-spacing);column-gap:var(--choice-button-large-size-content-spacing)}:host([size="large"]) ::slotted([slot="secondary-text"]){font-weight:var(--choice-button-large-size-text-secondary-weight);font-size:var(--choice-button-large-size-text-secondary-size);line-height:var(--choice-button-large-size-text-secondary-leading);letter-spacing:var(--choice-button-large-size-text-secondary-tracking);text-transform:var(--choice-button-large-size-text-secondary-case)}@media (hover: hover){:host(:hover){background-color:var(--choice-button-unselected-value-hover-state-background-color);color:var(--choice-button-unselected-value-hover-state-label-color)}}:host(:active){background-color:var(--choice-button-unselected-value-pressed-state-background-color);color:var(--choice-button-unselected-value-pressed-state-label-color)}:host([disabled]){background-color:var(--choice-button-unselected-value-disabled-state-background-color);color:var(--choice-button-unselected-value-disabled-state-label-color)}:host([selected]){background-color:var(--choice-button-selected-value-normal-state-background-color);color:var(--choice-button-selected-value-normal-state-label-color)}@media (hover: hover){:host([selected]:hover){background-color:var(--choice-button-selected-value-hover-state-background-color);color:var(--choice-button-selected-value-hover-state-label-color)}}:host([selected]:active){background-color:var(--choice-button-selected-value-pressed-state-background-color);color:var(--choice-button-selected-value-pressed-state-label-color)}:host([selected][disabled]){background-color:var(--choice-button-selected-value-disabled-state-background-color);color:var(--choice-button-selected-value-disabled-state-label-color)}',n=s,l=class{constructor(e){a(this,e),this.marketChoiceButtonSelected=o(this,"marketChoiceButtonSelected",7),this.marketChoiceButtonDeselected=o(this,"marketChoiceButtonDeselected",7),this.disabled=!1,this.selected=!1,this.size="medium"}onClick(e){if(this.disabled){e.stopImmediatePropagation();return}this.selected?(this.selected=!1,this.marketChoiceButtonDeselected.emit()):(this.selected=!0,this.marketChoiceButtonSelected.emit())}render(){const{disabled:e}=this;return t(r,{key:"506aa3d27df8065466ca9a14bc7ce1d11838de93",class:"market-choice-button","aria-disabled":e,role:"button",tabindex:e?-1:void 0,onClick:i=>{this.onClick(i)}},t("button",{key:"35bf61f4613d02a2c582253d237d872d8a07c8a5"},t("slot",{key:"abb024be9260830c95a877ff716be1c644c55d9f"}),t("slot",{key:"28eab90a59041b4b6c38241af0cce46aa65ddc4d",name:"secondary-text"})))}get el(){return c(this)}};l.style=n;export{l as market_choice_button};