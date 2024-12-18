"use strict";(self.webpackChunkmise_react=self.webpackChunkmise_react||[]).push([[8647],{"./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/aria-e3448f41.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>getTextInputAriaLabel,g:()=>getControlInputAriaLabel,o:()=>observeAriaAttributes});const observeAriaAttributes=(el,onMutationObserved)=>{const mutationObserver=new MutationObserver((()=>{const ariaAttributes=(el=>el.getAttributeNames().filter((attr=>attr.startsWith("aria-"))).reduce(((acc,attr)=>{const value=el.getAttribute(attr);return null!==value&&(acc[attr]=value),acc}),{}))(el);return onMutationObserved(ariaAttributes)}));return mutationObserver.observe(el,{attributes:!0}),mutationObserver},getTextInputAriaLabel=inputEl=>{var _a;const slottedLabel=inputEl.querySelector("label:not([slot])")||(null===(_a=inputEl.getRootNode().host)||void 0===_a?void 0:_a.querySelector("label:not([slot])"));return(null==slottedLabel?void 0:slottedLabel.innerHTML)||inputEl.getAttribute("name")||void 0},getControlInputAriaLabel=controlEl=>{var _a;const attrIsValid=attr=>null!==attr&&""!==attr.trim();let controlAriaLabel;const ariaLabelledBy=controlEl.getAttribute("aria-labelledby");if(attrIsValid(ariaLabelledBy)){const labelledByText=null===(_a=document.getElementById(ariaLabelledBy))||void 0===_a?void 0:_a.textContent;controlAriaLabel=controlAriaLabel||labelledByText}const ariaLabel=controlEl.getAttribute("aria-label");return attrIsValid(ariaLabel)&&(controlAriaLabel=controlAriaLabel||ariaLabel),controlAriaLabel||controlEl.getAttribute("name")||void 0}},"./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/market-checkbox.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{market_checkbox:()=>MarketCheckbox});var _index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/index-fb35cab8.js"),_aria_e3448f41_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@market+web-components@6.12.0/node_modules/@market/web-components/dist/esm/aria-e3448f41.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");var ARIA_VALUE;!function(ARIA_VALUE){ARIA_VALUE.TRUE="true",ARIA_VALUE.FALSE="false",ARIA_VALUE.MIXED="mixed"}(ARIA_VALUE||(ARIA_VALUE={}));const MarketCheckbox=class{constructor(hostRef){(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.marketCheckboxValueChange=(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"marketCheckboxValueChange",7),this.checked=!1,this.disabled=!1,this.indeterminate=!1,this.invalid=!1,this.focused=!1,this.hovered=!1,this.active=!1}setSelection(newValue,{silent=!1}={}){const{marketCheckboxValueChange,checked:prevValue,innerInput}=this;if("boolean"!=typeof newValue)return Promise.resolve();if(this.indeterminate=!1,prevValue===newValue)return Promise.resolve();if(!silent){const{defaultPrevented}=marketCheckboxValueChange.emit({current:newValue,previous:prevValue});if(defaultPrevented)return Promise.resolve()}return this.checked=newValue,innerInput.checked=newValue,Promise.resolve()}setIndeterminate(newValue){return this.indeterminate=newValue,Promise.resolve()}setValue(newValue){return console.warn("market-checkbox's setValue() method has been deprecated. Use setSelection() instead.",this.el),this.setSelection(newValue),Promise.resolve()}setActive(value){return this.active=value,Promise.resolve()}setHover(value){return this.hovered=value,Promise.resolve()}setDisabled(value){return this.disabled=value,Promise.resolve()}setFocus(value=!0){return this.disabled||(this.focused=value),Promise.resolve()}handleClick(event){event.preventDefault(),this.disabled||(this.setFocus(),this.setSelection(!this.checked))}getCheckedState(){return this.indeterminate?"indeterminate":this.checked}getAriaCheckedValue(){switch(this.getCheckedState()){case"indeterminate":return ARIA_VALUE.MIXED;case!0:return ARIA_VALUE.TRUE;default:return ARIA_VALUE.FALSE}}render(){return(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"f9f407a478354c3dce871eb88bf964beb3812af4",class:"market-checkbox",role:"checkbox","aria-checked":this.getAriaCheckedValue(),onBlur:()=>{this.setFocus(!1)},onClick:this.handleClick,onFocus:()=>{this.setFocus()}},(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{key:"aeef0b704d65e423d5e8ad3c5f62b5520c2962aa",ref:el=>this.innerInput=el,type:"checkbox","aria-checked":this.getAriaCheckedValue(),"aria-label":(0,_aria_e3448f41_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el),checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled}),this.checked&&!this.indeterminate&&(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{key:"edb4828da9c0097c6a9808fa4a8e4e298cf4279e",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","data-testid":"check"},(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{key:"cd3dcc181e83de02f6145dd3ca0e91a4c1d06337",d:"M6 10L8.85714 13L14 7",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),this.indeterminate&&(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{key:"05b3cc609f33b291fbea3ea1dad9973eefb8fef7",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","data-testid":"indeterminate"},(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{key:"2cdf56a4e6f1f9393771ba827e7dd21d4f646316",d:"M6 10H14","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})))}get el(){return(0,_index_fb35cab8_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};MarketCheckbox.style=":host,::slotted(*),*{box-sizing:border-box}:host([disabled]){cursor:not-allowed !important;}:host([disabled]) *,:host([disabled]) ::slotted(*){cursor:not-allowed !important;pointer-events:none !important;}:host{--checkbox-offset:calc(-1 * var(--checkbox-border-size));--focus-ring-color:color-mix(in srgb, var(--checkbox-focus-ring-color) 50%, transparent);position:relative;display:inline-block;width:var(--checkbox-width);height:var(--checkbox-height);border:var(--checkbox-border-size) solid var(--checkbox-normal-state-normal-validity-unchecked-value-border-color);border-radius:var(--checkbox-border-radius);background-color:var(--checkbox-normal-state-normal-validity-unchecked-value-background-color)}input{position:absolute;top:var(--checkbox-offset);left:var(--checkbox-offset);width:var(--checkbox-width);height:var(--checkbox-height);margin:0;border-radius:var(--checkbox-border-radius);background:transparent;outline:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}input:focus-visible{outline:var(--checkbox-focus-ring-border-size) solid var(--focus-ring-color);outline-offset:var(--checkbox-focus-ring-buffer-size)}svg{position:absolute;top:var(--checkbox-offset);left:var(--checkbox-offset);pointer-events:none}:host(:hover),:host([hovered]){border-color:var(--checkbox-hover-state-normal-validity-unchecked-value-border-color);background-color:var(--checkbox-hover-state-normal-validity-unchecked-value-background-color)}:host([focused]){border-color:var(--checkbox-focus-state-normal-validity-unchecked-value-border-color);background-color:var(--checkbox-focus-state-normal-validity-unchecked-value-background-color)}:host(:active),:host([active]){border-color:var(--checkbox-pressed-state-normal-validity-unchecked-value-border-color);background-color:var(--checkbox-pressed-state-normal-validity-unchecked-value-background-color)}:host([checked]){border-color:var(--checkbox-normal-state-normal-validity-checked-value-border-color);background-color:var(--checkbox-normal-state-normal-validity-checked-value-background-color)}:host([checked]) path{stroke:var(--checkbox-normal-state-normal-validity-checked-value-icon-color)}:host([checked]:hover),:host([checked][hovered]){border-color:var(--checkbox-hover-state-normal-validity-checked-value-border-color);background-color:var(--checkbox-hover-state-normal-validity-checked-value-background-color)}:host([checked]:hover) path,:host([checked][hovered]) path{stroke:var(--checkbox-hover-state-normal-validity-checked-value-icon-color)}:host([checked][focused]){border-color:var(--checkbox-focus-state-normal-validity-checked-value-border-color);background-color:var(--checkbox-focus-state-normal-validity-checked-value-background-color)}:host([checked][focused]) path{stroke:var(--checkbox-focus-state-normal-validity-checked-value-icon-color)}:host([checked]:active),:host([checked][active]){border-color:var(--checkbox-pressed-state-normal-validity-checked-value-border-color);background-color:var(--checkbox-pressed-state-normal-validity-checked-value-background-color)}:host([checked]:active) path,:host([checked][active]) path{stroke:var(--checkbox-pressed-state-normal-validity-checked-value-icon-color)}:host([indeterminate]){border-color:var(--checkbox-normal-state-normal-validity-indeterminate-value-border-color);background-color:var(--checkbox-normal-state-normal-validity-indeterminate-value-background-color)}:host([indeterminate]) path{stroke:var(--checkbox-normal-state-normal-validity-indeterminate-value-icon-color)}:host([indeterminate]:hover),:host([indeterminate][hovered]){border-color:var(--checkbox-hover-state-normal-validity-indeterminate-value-border-color);background-color:var(--checkbox-hover-state-normal-validity-indeterminate-value-background-color)}:host([indeterminate]:hover) path,:host([indeterminate][hovered]) path{stroke:var(--checkbox-hover-state-normal-validity-indeterminate-value-icon-color)}:host([indeterminate][focused]){border-color:var(--checkbox-focus-state-normal-validity-indeterminate-value-border-color);background-color:var(--checkbox-focus-state-normal-validity-indeterminate-value-background-color)}:host([indeterminate][focused]) path{stroke:var(--checkbox-focus-state-normal-validity-indeterminate-value-icon-color)}:host([indeterminate]:active),:host([indeterminate][active]){border-color:var(--checkbox-pressed-state-normal-validity-indeterminate-value-border-color);background-color:var(--checkbox-pressed-state-normal-validity-indeterminate-value-background-color)}:host([indeterminate]:active) path,:host([indeterminate][active]) path{stroke:var(--checkbox-pressed-state-normal-validity-indeterminate-value-icon-color)}:host([invalid]){border-color:var(--checkbox-normal-state-invalid-validity-unchecked-value-border-color);background-color:var(--checkbox-normal-state-invalid-validity-unchecked-value-background-color)}:host([invalid]:hover){border-color:var(--checkbox-hover-state-invalid-validity-unchecked-value-border-color);background-color:var(--checkbox-hover-state-invalid-validity-unchecked-value-background-color)}:host([invalid][focused]){border-color:var(--checkbox-focus-state-invalid-validity-unchecked-value-border-color);background-color:var(--checkbox-focus-state-invalid-validity-unchecked-value-background-color)}:host([invalid]:active){border-color:var(--checkbox-pressed-state-invalid-validity-unchecked-value-border-color);background-color:var(--checkbox-pressed-state-invalid-validity-unchecked-value-background-color)}:host([invalid][checked]){border-color:var(--checkbox-normal-state-invalid-validity-checked-value-border-color);background-color:var(--checkbox-normal-state-invalid-validity-checked-value-background-color)}:host([invalid][checked]) path{stroke:var(--checkbox-normal-state-invalid-validity-checked-value-icon-color)}:host([invalid][checked]:hover){border-color:var(--checkbox-hover-state-invalid-validity-checked-value-border-color);background-color:var(--checkbox-hover-state-invalid-validity-checked-value-background-color)}:host([invalid][checked]:hover) path{stroke:var(--checkbox-hover-state-invalid-validity-checked-value-icon-color)}:host([invalid][checked][focused]){border-color:var(--checkbox-focus-state-invalid-validity-checked-value-border-color);background-color:var(--checkbox-focus-state-invalid-validity-checked-value-background-color)}:host([invalid][checked][focused]) path{stroke:var(--checkbox-focus-state-invalid-validity-checked-value-icon-color)}:host([invalid][checked]:active){border-color:var(--checkbox-pressed-state-invalid-validity-checked-value-border-color);background-color:var(--checkbox-pressed-state-invalid-validity-checked-value-background-color)}:host([invalid][checked]:active) path{stroke:var(--checkbox-pressed-state-invalid-validity-checked-value-icon-color)}:host([invalid][indeterminate]){border-color:var(--checkbox-normal-state-invalid-validity-indeterminate-value-border-color);background-color:var(--checkbox-normal-state-invalid-validity-indeterminate-value-background-color)}:host([invalid][indeterminate]) path{stroke:var(--checkbox-normal-state-invalid-validity-indeterminate-value-icon-color)}:host([invalid][indeterminate]:hover){border-color:var(--checkbox-hover-state-invalid-validity-indeterminate-value-border-color);background-color:var(--checkbox-hover-state-invalid-validity-indeterminate-value-background-color)}:host([invalid][indeterminate]:hover) path{stroke:var(--checkbox-hover-state-invalid-validity-indeterminate-value-icon-color)}:host([invalid][indeterminate][focused]){border-color:var(--checkbox-focus-state-invalid-validity-indeterminate-value-border-color);background-color:var(--checkbox-focus-state-invalid-validity-indeterminate-value-background-color)}:host([invalid][indeterminate]:active){border-color:var(--checkbox-pressed-state-invalid-validity-indeterminate-value-border-color);background-color:var(--checkbox-pressed-state-invalid-validity-indeterminate-value-background-color)}:host([invalid][indeterminate]:active) path{stroke:var(--checkbox-pressed-state-invalid-validity-indeterminate-value-icon-color)}:host([disabled]){border-color:var(--checkbox-disabled-state-normal-validity-unchecked-value-border-color);background-color:var(--checkbox-disabled-state-normal-validity-unchecked-value-background-color);cursor:not-allowed}:host([disabled]) input{cursor:not-allowed}:host([checked][disabled]){border-color:var(--checkbox-disabled-state-normal-validity-checked-value-border-color);background-color:var(--checkbox-disabled-state-normal-validity-checked-value-background-color)}:host([checked][disabled]) path{stroke:var(--checkbox-disabled-state-normal-validity-checked-value-icon-color)}:host([indeterminate][disabled]){border-color:var(--checkbox-disabled-state-normal-validity-indeterminate-value-border-color);background-color:var(--checkbox-disabled-state-normal-validity-indeterminate-value-background-color)}:host([indeterminate][disabled]) path{stroke:var(--checkbox-disabled-state-normal-validity-indeterminate-value-icon-color)}"}}]);