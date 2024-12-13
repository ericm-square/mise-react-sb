import{r as D,c as p,h as l,H as T,g as y}from"./preview-BLkU8-7b.js";import{c as d}from"./index-2c945920-BNEorLC5.js";import{i as E,g as c}from"./utils-b57f24f5-BmIsnMxH.js";import{c as w}from"./focus-trap-a29c2e91-BWKCq7bF.js";import{t as v,a as S}from"./throttle-552e88ff-BILzQ6sF.js";import{i as k}from"./identity-db011338-DKeuBCMA.js";import{s as _,o as O}from"./_overRest-cac964a9-l4wuDZ7q.js";import"./isObject-f305a0d7-CA5ssx5i.js";import"./_getNative-e422aac7-CFRFUET7.js";import"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";import"./iframe-BYgjunmg.js";import"../sb-preview/runtime.js";import"./tslib.es6-pJfR_DrR.js";import"./isSymbol-385885b1-CYoGKoqs.js";function A(t,e){return _(O(t,e,k),t+"")}var I="Expected a function";function R(t,e,i){if(typeof t!="function")throw new TypeError(I);return setTimeout(function(){t.apply(void 0,i)},e)}var N=A(function(t,e,i){return R(t,S(e)||0,i)});const x=N,C={threshold:0,linearRatio:1,quadraticRatio:1,invert:!1};function M(t,e={}){const{quadraticRatio:i,linearRatio:a,threshold:o,invert:s}=Object.assign({},C,e),r=s?-1:1;if(t*r<o*r)return t;let n=((t-o)*r+1)**i-1;return n=n*a,o+n*r}function m(t,e,i){return t+i*(e-t)}function u(t,e){return{x:e.x-t.x,y:e.y-t.y}}function H(t){return(t.x**2+t.y**2)**.5}const L=`@keyframes market-popup{from{opacity:0%;transform:scale(0.9, 0.9)}to{opacity:100%;transform:scale(1, 1)}}@keyframes market-popdown{from{opacity:100%;transform:scale(1, 1)}to{opacity:0%;transform:scale(0.9, 0.9)}}@keyframes market-slideup{from{opacity:0%;transform:translateY(80vh)}to{opacity:100%;transform:translateY(0)}}@keyframes market-slidedown{from{opacity:100%;transform:translateY(0)}to{opacity:0%;transform:translateY(80vh)}}@keyframes market-slide-left-enter{from{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes market-slide-left-exit{from{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes market-fade-in{from{opacity:0%}to{opacity:100%}}@keyframes market-fade-out{from{opacity:100%}to{opacity:0%}}@keyframes market-input-autofill-start{from{}to{}}@keyframes market-input-autofill-cancel{from{}to{}}@keyframes market-input-search-compact-enter{from{}to{}}@keyframes market-input-search-compact-exit{from{}to{}}:host{display:flex;flex-direction:column;justify-content:stretch;overflow:hidden}:host ::slotted(main){flex:0 1 100%;overflow-y:auto;height:100%}:host ::slotted(.market-header){margin-bottom:var(--core-metrics-spacing-300);padding-top:0}:host ::slotted(.market-footer){padding-bottom:0}:host{--handle-whitespace:calc(var(--modal-sheet-handle-padding-top-size) + var(--modal-sheet-handle-padding-bottom-size));--handle-area-height:calc(var(--handle-whitespace) + var(--modal-sheet-handle-height));--max-width-padding:var(--modal-sheet-regular-horizontal-size-class-horizontal-padding);--min-width-padding:var(--modal-sheet-compact-horizontal-size-class-horizontal-padding);--padding-width:clamp(var(--min-width-padding), calc(50% - 200px), var(--max-width-padding));--padding-height:var(--modal-sheet-regular-vertical-size-class-vertical-padding);position:fixed;top:calc(100vh + var(--handle-area-height));bottom:auto;left:50%;overflow:visible;box-sizing:border-box;width:100%;max-width:calc(400px + calc(var(--max-width-padding) + var(--max-width-padding)));max-height:calc(100% - var(--handle-area-height));padding-top:var(--padding-height);border-radius:var(--modal-sheet-border-radius) var(--modal-sheet-border-radius) 0 0;background-color:var(--modal-sheet-background-color);opacity:0%;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:top var(--core-animation-enter-transition-moderate-speed-duration),
    opacity var(--core-animation-enter-transition-moderate-speed-duration);transform:translate(-50%, 0)}:host([state="closed"]){top:calc(100vh + var(--handle-area-height));opacity:0%;transition:top var(--core-animation-exit-transition-moderate-speed-duration),
      opacity var(--core-animation-exit-transition-moderate-speed-duration)}:host([state="partial-open"]){opacity:100%}:host([state="full-open"]){opacity:100%}:host([dragging]){transition:opacity var(--core-animation-enter-transition-moderate-speed-duration)}:host([tapdisabled]){pointer-events:none}:host ::slotted([slot="header"]){padding-right:var(--padding-width);padding-left:var(--padding-width)}:host::after{content:"";position:absolute;top:100%;display:block;width:inherit;max-width:inherit;height:100vh;background-color:inherit}.handle{position:fixed;bottom:calc(100% + var(--modal-sheet-handle-padding-bottom-size));left:50%;display:block;width:var(--modal-sheet-handle-width);height:var(--modal-sheet-handle-height);border:none;border-radius:var(--modal-sheet-border-radius);background-color:var(--modal-sheet-handle-background-color);-webkit-user-select:none;-moz-user-select:none;user-select:none;transform:translate(-50%, 0)}.handle::before{content:"";position:absolute;inset:calc(var(--modal-sheet-handle-padding-bottom-size) * -1)}.handle:focus{outline:var(--button-focus-ring-border-size) solid var(--button-focus-ring-color)}.main{overflow-x:hidden;overflow-y:auto;padding-right:var(--padding-width);padding-bottom:var(--padding-height);padding-left:var(--padding-width);overscroll-behavior:contain}.main[dragging]{overflow-y:hidden}`,B=L,h=d.MODAL_SHEET_HANDLE_HEIGHT+d.MODAL_SHEET_HANDLE_PADDING_BOTTOM_SIZE+d.MODAL_SHEET_HANDLE_PADDING_TOP_SIZE,P=.12,z=250,F=.01,G=.8,X=.55,b=16,U=class{constructor(t){D(this,t),this.marketDialogLoaded=p(this,"marketDialogLoaded",7),this.marketDialogDismissed=p(this,"marketDialogDismissed",7),this.marketDialogDidDismiss=p(this,"marketDialogDidDismiss",7),this.type="sheet",this.boundOnDragMove=this.onDragMove.bind(this),this.boundOnDragEnd=this.onDragEnd.bind(this),this.boundOnScrollDrag=this.onScrollDrag.bind(this),this.hidden=!1,this.dialogID=void 0,this.openMode="partial",this.animationEnterDuration=d.CORE_ANIMATION_ENTER_TRANSITION_MODERATE_SPEED_DURATION,this.animationExitDuration=d.CORE_ANIMATION_EXIT_TRANSITION_MODERATE_SPEED_DURATION,this.disableFocus=!1,this.closeHandleAriaLabel="Close"}async activateFocusTrap(t,e){this.focusTrap?(this.focusTrap.activate(e),this.disableFocus&&(this.disableFocus=!1)):this.focusTrap=w({activateOptions:e,el:this.el,options:Object.assign(Object.assign({},t),{initialFocus:!1})}),this.focusTrapActivateOptions=e}async deactivateFocusTrap(t){this.focusTrap&&(this.focusTrap.deactivate(t),this.focusTrap=void 0)}async dismiss(t){const{defaultPrevented:e}=this.marketDialogDismissed.emit({dialog:this.el,type:this.type,origin:(t==null?void 0:t.origin)||this.el});e||(this.hidden=!0,await new Promise(i=>setTimeout(i,d.CORE_ANIMATION_EXIT_TRANSITION_MODERATE_SPEED_DURATION)),this.marketDialogDidDismiss.emit({dialog:this.el,type:this.type,origin:this.el}))}setState(t){let e=t;e!=="closed"&&this.openMode!=="dynamic"&&(e=`${this.openMode}-open`),this.el.setAttribute("state",e),this.resetTopByState()}resetTopByState(){this.calculateTopBoundary();const t=this.el.getAttribute("state"),e=this.el.clientHeight;t==="closed"?this.el.style.removeProperty("top"):e+h>=window.innerHeight||t==="full-open"?this.el.style.top=`${h+window.visualViewport.offsetTop}px`:this.el.style.top=`calc(100% - ${e}px)`,this.el.style.paddingBottom=window.visualViewport.offsetTop?`${window.visualViewport.offsetTop}px`:"0"}calculateTopBoundary(){this.topBoundary=this.openMode==="partial"?window.innerHeight-this.el.clientHeight:h,this.compressionRatio=m(X,G,this.topBoundary/window.innerHeight)}setTop(t){const e=M(t,{threshold:this.topBoundary,quadraticRatio:this.compressionRatio,invert:!0});return this.el.style.top=`${e}px`,e}onDragStart(t){if(!E(t)&&t.button!==0)return;if(window.visualViewport.offsetTop){if(t.target===document.activeElement)return;document.activeElement.blur(),t.target.click(),t.preventDefault();return}const{top:e}=this.el.getBoundingClientRect();this.dragStartTop=e,this.el.setAttribute("dragging",""),this.calculateTopBoundary();const i=this.setTop(e),a=c(t);this.dragEventStack=[[t.timeStamp,i]],this.touchStartCoords=a,this.dragDelta={x:0,y:0};const{boundOnDragMove:o,boundOnDragEnd:s}=this;document.addEventListener("mousemove",o),document.addEventListener("mouseup",s),document.addEventListener("touchmove",o),document.addEventListener("touchend",s)}onDragMove(t){const e=c(t);this.dragDelta=u(this.touchStartCoords,e),!this.el.hasAttribute("tapdisabled")&&H(this.dragDelta)/window.innerHeight>F&&this.el.setAttribute("tapdisabled","");const i=this.setTop(this.dragStartTop+this.dragDelta.y);this.dragEventStack.push([t.timeStamp,i]),this.pruneStack(t.timeStamp)}onDragEnd(t){const e=c(t);this.dragDelta=u(this.touchStartCoords,e);const i=this.dragStartTop+this.dragDelta.y,a=this.setTop(i),o=this.openMode==="full"?h:window.innerHeight-this.el.clientHeight,s=window.innerHeight/2,r=m(window.innerHeight,o,.6),g=m(h,o,.6),n=P*window.innerHeight;this.dragEventStack.push([t.timeStamp,a]);const f=this.getGestureDelta(t,n);f>n?this.dismiss():f<-n?this.setState("full-open"):i>s&&i>r?this.dismiss():i<g?this.setState("full-open"):this.setState("partial-open"),this.cleanupDragging()}onScrollStart(){this.scrollStart=this.mainContent.scrollTop,document.addEventListener("touchmove",this.boundOnScrollDrag,{passive:!0})}onScrollDrag(t){const e=this.mainContent.scrollHeight-this.mainContent.clientHeight,i=c(t),a=u(this.touchStartCoords,i),o=this.scrollStart-a.y,{boundOnScrollDrag:s,mainContent:r}=this;o>=0&&o<=e?(t.stopImmediatePropagation(),this.cleanupDragging()):r.setAttribute("dragging",""),document.removeEventListener("touchmove",s)}pruneStack(t){for(;this.dragEventStack.length>0&&this.dragEventStack[0][0]<t-z;)this.dragEventStack.shift()}getGestureDelta(t,e){let i=0,a=this.dragEventStack.pop()[1];for(this.pruneStack(t.timeStamp);this.dragEventStack.length>0;){const o=this.dragEventStack.pop()[1],s=a-o;if(i+=s,a=o,Math.abs(i)>e)break}return i}cleanupDragging(){const{boundOnDragMove:t,boundOnDragEnd:e,el:i,mainContent:a}=this;i.removeAttribute("dragging"),a.removeAttribute("dragging"),i.removeAttribute("tapdisabled"),document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",e),document.removeEventListener("touchmove",t),document.removeEventListener("touchend",e)}onKeyDown(t){switch(t.key){case"Enter":this.dismiss();break;case" ":this.dismiss(t),t.preventDefault();break}}connectedCallback(){setTimeout(()=>{this.marketDialogLoaded.emit({dialog:this.el,type:this.type}),this.disableFocus||this.activateFocusTrap()},this.hidden?0:d.CORE_ANIMATION_ENTER_TRANSITION_MODERATE_SPEED_DURATION)}hiddenHandler(){this.setState(this.hidden?"closed":"partial-open")}componentDidLoad(){this.hiddenHandler(),this.heightObserver=new ResizeObserver(v(()=>{this.resetTopByState()},b)),this.heightObserver.observe(this.el),window.visualViewport.addEventListener("resize",v(()=>{this.resetTopByState()},b)),this.mainContent.addEventListener("focusin",t=>{this.resetTopByState(),x(()=>{var e,i;if(window.visualViewport.offsetTop){const a=(e=t.relatedTarget)===null||e===void 0?void 0:e.offsetTop,o=(i=document.activeElement)===null||i===void 0?void 0:i.offsetTop;document.activeElement.scrollIntoView({behavior:"smooth",block:a<o?"start":"center",inline:"start"})}},250)})}disconnectedCallback(){var t;(t=this.heightObserver)===null||t===void 0||t.disconnect()}render(){return l(T,{key:"d81a914151f163f6651bc4a4c235b0f41017cabe",role:"dialog",onMouseDown:t=>this.onDragStart(t),onTouchStart:t=>this.onDragStart(t)},l("button",{key:"c71497211604a79d82600537dbab071d0723c069","aria-label":this.closeHandleAriaLabel,class:"handle",onClick:this.dismiss.bind(this),onKeyDown:this.onKeyDown.bind(this)}),l("slot",{key:"6e93c4810dda13e2b3d1c8557fe7cc6ac9bdf103",name:"header"}),l("div",{key:"21ad78bc7533edd0cca7e70f301fdc92d98522a8",class:"main",ref:t=>this.mainContent=t,onTouchStart:()=>this.onScrollStart()},l("slot",{key:"1fca5e53d572840594a1b0c69424ac8b7cc2cd74"})))}get el(){return y(this)}static get watchers(){return{hidden:["hiddenHandler"]}}};U.style=B;export{U as market_sheet};
