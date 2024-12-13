import{r,c as d,h as o,H as n,g as c}from"./preview-BLkU8-7b.js";import"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";import"./iframe-BYgjunmg.js";import"../sb-preview/runtime.js";import"./tslib.es6-pJfR_DrR.js";const l=`:host,::slotted(*),*{box-sizing:border-box}:host([disabled]){cursor:not-allowed !important;}:host([disabled]) *,:host([disabled]) ::slotted(*){cursor:not-allowed !important;pointer-events:none !important;}:host{display:flex;justify-content:space-between;align-items:center;width:-moz-min-content;width:min-content;min-width:var(--code-display-width, 320px);min-height:var(--code-display-height, 48px);margin:var(--code-display-margin, 12px);padding:var(--code-display-padding-vertical, 12px)
    var(--code-display-padding-right, 16px)
    var(--code-display-padding-vertical, 12px)
    var(--code-display-zero-value, 0);border-radius:var(--code-display-border-radius, 6px);background-color:var(--code-display-background-color, var(--core-fill-40-color));font-weight:var(--code-display-code-font-weight, var(--core-type-bold-weight));font-size:var(--code-display-code-font-size, var(--core-type-heading-20-size));font-family:var(--code-display-font-family, var(--core-type-font-family));font-feature-settings:"tnum"}:host(:not([disabled])) button:hover,:host ::slotted(button:hover),:host ::slotted(a:hover){opacity:var(--code-display-action-interaction-opacity, 60%)}:host(:not([disabled])) button:active,:host ::slotted(button:active),:host ::slotted(a:active){opacity:var(--code-display-action-interaction-opacity, 60%)}:host([disabled]){color:var(--code-display-disabled-text-color, var(--core-text-30-color));}:host([disabled]) ::slotted(button),:host ::slotted(a){color:var(--code-display-disabled-text-color, var(--core-text-30-color));}:host .code-container{display:flex;flex-grow:2;justify-content:space-between;min-width:var(--code-display-code-container-min-width, 269px)}:host .code-char{flex-basis:100%;font-family:var(--core-type-mono-font-family, monospace);text-align:center}:host .actions-container{display:flex;justify-content:center;align-items:center}:host .actions-container ::slotted([slot="actions"]:not(:last-child)){margin-right:var(--code-display-extra-actions-margin-right, 25px)}:host .actions-container ::slotted([slot="actions"]:not(:last-child))::after{content:"";display:inline-block;width:var(--code-display-button-separator-width, 1px);height:var(--code-display-button-separator-height, 8px);margin-right:var(--code-display-separator-margin-right, -13px);margin-left:var(--code-display-button-content-spacing, 12px);background-color:var(--code-display-button-separator-color, var(--core-fill-10-color));opacity:var(--code-display-button-separator-opacity, 30%);pointer-events:none}:host button,:host ::slotted(button),:host ::slotted(a){margin:var(--code-display-zero-value, 0);padding:var(--code-display-zero-value, 0);border:none;background-color:transparent;color:var(--code-display-button-font-color, var(--core-blue-text-color));font-weight:var(--code-display-button-font-weight, var(--core-type-semibold-weight));font-size:var(--code-display-button-font-size, var(--core-type-paragraph-20-size));font-family:inherit;line-height:var(--code-display-button-line-height, var(--core-type-paragraph-20-leading));text-decoration:none;cursor:pointer}@media only screen and (max-width: 320px){:host{flex-wrap:wrap;width:100%;min-width:var(--code-display-zero-value, 0)}:host .code-container{min-width:var(--code-display-zero-value, 0)}}`,p=l,s=4,h=class{constructor(e){r(this,e),this.marketCodeCopied=d(this,"marketCodeCopied",7),this.code="",this.codeChars=[],this.disabled=!1,this.focused=!1}componentWillLoad(){const e=this.el.querySelector("[slot=code]"),a=e.textContent;if(this.code=a.replace(/\s/g,""),this.initCodeChars(this.code),this.copyButton=document.createElement("button"),Object.assign(this.copyButton,{slot:"actions",type:"button",tabIndex:this.disabled?-1:0,onclick:()=>this.copyToClipboard()}),this.el.querySelector("[slot=copy-text]")){const i=this.el.querySelector("[slot=copy-text]"),t=i.textContent;this.copyButton.innerHTML=t,i.insertAdjacentElement("afterend",this.copyButton)}else this.copyButton.innerHTML="Copy",e.insertAdjacentElement("afterend",this.copyButton)}initCodeChars(e){const a=e.length,i=o("span",{class:"code-char"});if(a!==s&&a%s===0)for(let t=0;t<a;t++)t%s===0&&this.codeChars.push(i),this.codeChars.push(o("span",{class:"code-char"},e[t]));else{this.codeChars.push(i);for(let t=0;t<a;t++)this.codeChars.push(o("span",{class:"code-char"},e[t]))}this.codeChars.push(i)}copyToClipboard(){navigator.clipboard.writeText(this.code),this.marketCodeCopied.emit()}render(){return o(n,{key:"d20b66bb6de60a11d86a92b2fa8faafa594727b7",class:"market-code-display",tabIndex:this.disabled?null:0,"aria-label":this.code},o("span",{key:"d403656bd834ecea1b9deb6409d9d0747e41e27b",class:"code-container"},this.codeChars),o("span",{key:"87a4cc31d2bcf6dd393b247e43a75067cd65b0e0",class:"actions-container"},o("slot",{key:"42ceb91d39adfef778a695c1c4b3700d78d77a55",name:"actions"})))}get el(){return c(this)}};h.style=p;export{h as market_code_display};
