import{r as y,c as v,h as d,H as b,g as f}from"./preview-BLkU8-7b.js";import{i as P,g}from"./utils-b57f24f5-BmIsnMxH.js";import{a as D,h as E,p as C}from"./color-208faf7b-kUmUG_i4.js";import{t as k}from"./throttle-552e88ff-BILzQ6sF.js";import"./isObject-f305a0d7-CA5ssx5i.js";import"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";import"./iframe-BYgjunmg.js";import"../sb-preview/runtime.js";import"./tslib.es6-pJfR_DrR.js";import"./isSymbol-385885b1-CYoGKoqs.js";const O=`:host{--primary-gradient-height:var(--color-picker-adjustments-hue-min-height);--gradient-border-radius:var(--color-picker-adjustments-hue-radius);--gradient-margin:var(--color-picker-vertical-spacing);--secondary-gradient-height:calc(var(--color-picker-adjustments-saturation-brightness-min-height) * 1px);--gradient-pointer-width:12px;--gradient-pointer-height:12px;--gradient-pointer-border:2px white solid;--gradient-pointer-border-radius:50%;display:block}.primary-gradient{position:relative;width:100%;height:var(--primary-gradient-height);border-radius:var(--gradient-border-radius);background:linear-gradient(
      to right,
      hsl(0deg 100% 50%),
      hsl(60deg 100% 50%),
      hsl(120deg 100% 50%),
      hsl(180deg 100% 50%),
      hsl(240deg 100% 50%),
      hsl(300deg 100% 50%),
      hsl(0deg 100% 50%)
    )}.secondary-gradient{position:relative;width:100%;height:var(--secondary-gradient-height);margin-top:var(--gradient-margin);border-radius:var(--gradient-border-radius)}.pointer{position:absolute;z-index:2;width:var(--gradient-pointer-width);height:var(--gradient-pointer-height);border:var(--gradient-pointer-border);border-radius:var(--gradient-pointer-border-radius);box-shadow:var(--elevation-20-shadow)}#primary-pointer{top:calc(50% - 8px)}`,S=O,x=16,u="primary-pointer",p="secondary-pointer",M=[50,50],m=[95,10],G=class{constructor(t){y(this,t),this.marketColorPickerGradientValueChange=v(this,"marketColorPickerGradientValueChange",7),this.secondaryPointerCoordinates=m,this.boundOnDragMove=this.onDragMove.bind(this),this.boundOnDragEnd=this.onDragEnd.bind(this),this.throttledUpdatePointerOnDrag=k(this.updatePointerOnDrag.bind(this),x),this.value=void 0}onDragStart(t,e){if(t.preventDefault(),t.stopPropagation(),!P(t)&&t.button!==0)return;const r=g(t);this.updatePointerOnDrag(r.x,r.y,e),this.draggablePointer=e,document.addEventListener("mousemove",this.boundOnDragMove),document.addEventListener("mouseup",this.boundOnDragEnd),document.addEventListener("touchmove",this.boundOnDragMove,{passive:!1}),document.addEventListener("touchend",this.boundOnDragEnd,{passive:!1})}onDragMove(t){t.preventDefault();const e=g(t);this.throttledUpdatePointerOnDrag(e.x,e.y,this.draggablePointer)}onDragEnd(t){t.preventDefault(),this.draggablePointer=null,document.removeEventListener("mousemove",this.boundOnDragMove),document.removeEventListener("mouseup",this.boundOnDragEnd),document.removeEventListener("touchmove",this.boundOnDragMove),document.removeEventListener("touchend",this.boundOnDragEnd)}updatePointerOnDrag(t,e,r){const n=r.parentElement;if(!n)return;const o=n.getBoundingClientRect(),a=o.left,i=o.top,s=o.width,c=o.height;let h=(t-a)/s,l=(e-i)/c;h=Math.max(Math.min(h,1),0),l=Math.max(Math.min(l,1),0),this.setPointerCoordinates({pointer:r,x:h*100,y:l*100})}setPointerCoordinates(t){const{pointer:e,x:r,y:n=50,emitEvent:o=!0,colorType:a=""}=t,i=e.offsetWidth/2;e.style.left=`calc(${r}% - ${i}px)`,e.id===u?this.setPrimaryGradientColor(r/100,o):e.id===p&&(e.style.top=`calc(${n}% - ${i}px)`,this.setSecondaryGradientColor(r/100,n/100,o,a))}setPrimaryGradientColor(t,e=!0){this.primaryHue=t*360,this.primaryPointer.style.background=`hsl(${this.primaryHue}, 100%, 50%)`,this.updateSecondaryGradient(e)}setSecondaryGradientColor(t,e,r=!0,n=""){const o=t*100,a=100-e*100;let i,s;n==="rgba"?(i=D(this.primaryHue,o,a),s=`rgb(${i[0]}, ${i[1]}, ${i[2]})`):(i=E(this.primaryHue,o,a),s=`#${i.join("")}`),this.secondaryPointer.style.background=s,this.secondaryPointerCoordinates=[t,e],r&&this.marketColorPickerGradientValueChange.emit({value:s})}updateSecondaryGradient(t=!0){const e=this.el.shadowRoot.querySelector(".secondary-gradient");e.style.background=`
      linear-gradient(to top, rgb(0, 0, 0), transparent),
      linear-gradient(to left, hsl(${this.primaryHue}, 100%, 50%), rgb(255, 255, 255))
    `,this.setSecondaryGradientColor(...this.secondaryPointerCoordinates,t)}updateGradientsByValue(){const t=C(this.value);if(t.values&&this.primaryPointer&&this.secondaryPointer){const e=t.values[0],r=t.values[1],n=t.values[2],o=100*e/360,a=r,i=100-n,s={pointer:this.primaryPointer,x:o,emitEvent:!1},c={pointer:this.secondaryPointer,x:a,y:i,colorType:t.colorType,emitEvent:!1};return this.setPointerCoordinates(s),this.setPointerCoordinates(c),!0}return!1}setInitialPointers(){const t=[this.primaryPointer,this.secondaryPointer],e=[M,m];t.forEach((r,n)=>{const o={pointer:r,x:e[n][0],y:e[n][1],emitEvent:!1};this.setPointerCoordinates(o)})}componentDidLoad(){this.primaryPointer=this.el.shadowRoot.querySelector(`#${u}`),this.secondaryPointer=this.el.shadowRoot.querySelector(`#${p}`),this.updateGradientsByValue()||this.setInitialPointers()}render(){return d(b,{key:"27b14b18a7e6c1035e8c062f8125918f7cc4a2c2",class:"market-color-picker-gradient"},d("slot",{key:"5abf8dc220282ff102cd8b5011849a35e79a4596"}),d("div",{key:"036d0b665d8f536d8e89e9e44a11c0a323ebe648",class:"primary-gradient",role:"input",onMouseDown:t=>this.onDragStart(t,this.primaryPointer),onTouchStart:t=>this.onDragStart(t,this.primaryPointer)},d("div",{key:"96d5a6573888eb84d0c8833f493a4feb2869466c",id:u,class:"pointer"})),d("div",{key:"825d8adfc5eb558d5114d540b9d054b8085967a5",class:"secondary-gradient",role:"input",onMouseDown:t=>this.onDragStart(t,this.secondaryPointer),onTouchStart:t=>this.onDragStart(t,this.secondaryPointer)},d("div",{key:"3b8b8955b967f45d3bac7b57b5904c52d71f1d34",id:p,class:"pointer"})))}get el(){return f(this)}static get watchers(){return{value:["updateGradientsByValue"]}}};G.style=S;export{G as market_color_picker_gradient};