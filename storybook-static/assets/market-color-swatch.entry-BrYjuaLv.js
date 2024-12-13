import{r as o,c as n,h as t,H as a,g as s}from"./preview-BLkU8-7b.js";import{c as d}from"./index-2c945920-BNEorLC5.js";import"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";import"./iframe-BYgjunmg.js";import"../sb-preview/runtime.js";import"./tslib.es6-pJfR_DrR.js";const c=`:host{position:relative;display:inline-block;width:40px;height:40px;border-radius:50%;background-color:var(--swatch-color);box-shadow:inset 0 0 0 1px rgb(0 0 0 / 15%);transition:box-shadow
    var(--core-animation-enter-transition-moderate-speed-duration)
    var(--core-animation-enter-transition-easing)}:host .inner-circle{position:absolute;top:50%;left:50%;width:0;height:0;border:0;border-radius:50%;background-color:white;box-shadow:0 0 0 0 rgb(0 0 0 / 15%);transition:width
      var(--core-animation-enter-transition-moderate-speed-duration)
      var(--core-animation-enter-transition-easing),
      height
      var(--core-animation-enter-transition-moderate-speed-duration)
      var(--core-animation-enter-transition-easing),
      box-shadow
      var(--core-animation-enter-transition-moderate-speed-duration)
      var(--core-animation-enter-transition-easing),
      border
      var(--core-animation-enter-transition-fast-speed-duration)
      var(--core-animation-enter-transition-easing);transform:translate(-50%, -50%)}:host(:hover:not([disabled])) .inner-circle{width:8px;height:8px;box-shadow:0 0 0 1px rgb(0 0 0 / 15%)}:host([selected]){box-shadow:inset 0 0 0 2px #006aff}:host([selected]) .inner-circle,:host([selected]:hover) .inner-circle{width:32px;height:32px;border:2px solid white;background-color:transparent;box-shadow:inset 0 0 0 1px rgb(0 0 0 / 15%)}:host(:active:not([disabled])) .inner-circle,:host([selected]:active) .inner-circle{width:16px;height:16px;border:0;background-color:white;box-shadow:0 0 0 1px rgb(0 0 0 / 15%)}:host(:hover:not([disabled])) .inner-circle,:host(:active:not([disabled])) .inner-circle{transition:width var(--core-animation-exit-transition-moderate-speed-duration),
    height var(--core-animation-exit-transition-moderate-speed-duration),
    box-shadow var(--core-animation-exit-transition-moderate-speed-duration),
    border var(--core-animation-exit-transition-fast-speed-duration)}`,h=c,l=class{constructor(e){o(this,e),this.marketColorSwatchSelectedChange=n(this,"marketColorSwatchSelectedChange",7),this.value=d.CORE_BLUE_FILL_COLOR,this.name=void 0,this.disabled=void 0,this.selected=!1}toggleSelection(){if(this.disabled)return;const e=!this.selected,i={value:this.value,selected:e},{defaultPrevented:r}=this.marketColorSwatchSelectedChange.emit(i);r||(this.selected=e)}render(){return t(a,{key:"cdffd64fba69827a9ddd35e01e9c01f1f05f130a",class:"market-color-swatch",role:"listitem",onClick:()=>this.toggleSelection(),style:{"--swatch-color":this.value}},t("div",{key:"e119468a948e2c977c84d3ade7040d6864e1f7ba",class:"inner-circle"}))}get el(){return s(this)}};l.style=h;export{l as market_color_swatch};
