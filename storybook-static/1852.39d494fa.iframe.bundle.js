"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[1852],{"./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/market-code-display.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{market_code_display:()=>MarketCodeDisplay});var _index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/index-fb35cab8.js");const MarketCodeDisplay=class{constructor(hostRef){(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.marketCodeCopied=(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketCodeCopied",7),this.code="",this.codeChars=[],this.disabled=!1,this.focused=!1}componentWillLoad(){const slottedCodeTag=this.el.querySelector("[slot=code]"),code=slottedCodeTag.textContent;if(this.code=code.replace(/\s/g,""),this.initCodeChars(this.code),this.copyButton=document.createElement("button"),Object.assign(this.copyButton,{slot:"actions",type:"button",tabIndex:this.disabled?-1:0,onclick:()=>this.copyToClipboard()}),this.el.querySelector("[slot=copy-text]")){const slottedCopyText=this.el.querySelector("[slot=copy-text]"),copyText=slottedCopyText.textContent;this.copyButton.innerHTML=copyText,slottedCopyText.insertAdjacentElement("afterend",this.copyButton)}else this.copyButton.innerHTML="Copy",slottedCodeTag.insertAdjacentElement("afterend",this.copyButton)}initCodeChars(code){const codeLen=code.length,BLANK_CODE_SPAN=(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"code-char"});if(4!==codeLen&&codeLen%4==0)for(let i=0;i<codeLen;i++)i%4==0&&this.codeChars.push(BLANK_CODE_SPAN),this.codeChars.push((0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"code-char"},code[i]));else{this.codeChars.push(BLANK_CODE_SPAN);for(let i=0;i<codeLen;i++)this.codeChars.push((0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"code-char"},code[i]))}this.codeChars.push(BLANK_CODE_SPAN)}copyToClipboard(){navigator.clipboard.writeText(this.code),this.marketCodeCopied.emit()}render(){return(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"d20b66bb6de60a11d86a92b2fa8faafa594727b7",class:"market-code-display",tabIndex:this.disabled?null:0,"aria-label":this.code},(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"d403656bd834ecea1b9deb6409d9d0747e41e27b",class:"code-container"},this.codeChars),(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"87a4cc31d2bcf6dd393b247e43a75067cd65b0e0",class:"actions-container"},(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"42ceb91d39adfef778a695c1c4b3700d78d77a55",name:"actions"})))}get el(){return(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};MarketCodeDisplay.style=':host,::slotted(*),*{box-sizing:border-box}:host([disabled]){cursor:not-allowed !important;}:host([disabled]) *,:host([disabled]) ::slotted(*){cursor:not-allowed !important;pointer-events:none !important;}:host{display:flex;justify-content:space-between;align-items:center;width:-moz-min-content;width:min-content;min-width:var(--code-display-width, 320px);min-height:var(--code-display-height, 48px);margin:var(--code-display-margin, 12px);padding:var(--code-display-padding-vertical, 12px)\n    var(--code-display-padding-right, 16px)\n    var(--code-display-padding-vertical, 12px)\n    var(--code-display-zero-value, 0);border-radius:var(--code-display-border-radius, 6px);background-color:var(--code-display-background-color, var(--core-fill-40-color));font-weight:var(--code-display-code-font-weight, var(--core-type-bold-weight));font-size:var(--code-display-code-font-size, var(--core-type-heading-20-size));font-family:var(--code-display-font-family, var(--core-type-font-family));font-feature-settings:"tnum"}:host(:not([disabled])) button:hover,:host ::slotted(button:hover),:host ::slotted(a:hover){opacity:var(--code-display-action-interaction-opacity, 60%)}:host(:not([disabled])) button:active,:host ::slotted(button:active),:host ::slotted(a:active){opacity:var(--code-display-action-interaction-opacity, 60%)}:host([disabled]){color:var(--code-display-disabled-text-color, var(--core-text-30-color));}:host([disabled]) ::slotted(button),:host ::slotted(a){color:var(--code-display-disabled-text-color, var(--core-text-30-color));}:host .code-container{display:flex;flex-grow:2;justify-content:space-between;min-width:var(--code-display-code-container-min-width, 269px)}:host .code-char{flex-basis:100%;font-family:var(--core-type-mono-font-family, monospace);text-align:center}:host .actions-container{display:flex;justify-content:center;align-items:center}:host .actions-container ::slotted([slot="actions"]:not(:last-child)){margin-right:var(--code-display-extra-actions-margin-right, 25px)}:host .actions-container ::slotted([slot="actions"]:not(:last-child))::after{content:"";display:inline-block;width:var(--code-display-button-separator-width, 1px);height:var(--code-display-button-separator-height, 8px);margin-right:var(--code-display-separator-margin-right, -13px);margin-left:var(--code-display-button-content-spacing, 12px);background-color:var(--code-display-button-separator-color, var(--core-fill-10-color));opacity:var(--code-display-button-separator-opacity, 30%);pointer-events:none}:host button,:host ::slotted(button),:host ::slotted(a){margin:var(--code-display-zero-value, 0);padding:var(--code-display-zero-value, 0);border:none;background-color:transparent;color:var(--code-display-button-font-color, var(--core-blue-text-color));font-weight:var(--code-display-button-font-weight, var(--core-type-semibold-weight));font-size:var(--code-display-button-font-size, var(--core-type-paragraph-20-size));font-family:inherit;line-height:var(--code-display-button-line-height, var(--core-type-paragraph-20-leading));text-decoration:none;cursor:pointer}@media only screen and (max-width: 320px){:host{flex-wrap:wrap;width:100%;min-width:var(--code-display-zero-value, 0)}:host .code-container{min-width:var(--code-display-zero-value, 0)}}'}}]);