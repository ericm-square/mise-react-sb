import{r as Te,c as ee,h as R,H as Re,g as Ee}from"./preview-BLkU8-7b.js";import{a as Ce}from"./aria-e3448f41-DdEhA6ry.js";import{s as Oe}from"./forms-6e9919f9-DRYVCaDb.js";import{g as B}from"./index-2dc281eb-DCayfYZh.js";import{c as Ie}from"./classnames-84eaa2b2-DUfJYZCM.js";import{g as De}from"./max-z-index-7a974719-43GcVZqA.js";import{v as Pe}from"./v4-fa4bb814-SoommWqA.js";import"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";import"./iframe-BYgjunmg.js";import"../sb-preview/runtime.js";import"./tslib.es6-pJfR_DrR.js";const Me=["top","right","bottom","left"],re=["start","end"],ae=Me.reduce((e,t)=>e.concat(t,t+"-"+re[0],t+"-"+re[1]),[]),D=Math.min,L=Math.max,Y=Math.round,X=Math.floor,P=e=>({x:e,y:e}),Fe={left:"right",right:"left",bottom:"top",top:"bottom"},Ve={start:"end",end:"start"};function ce(e,t,i){return L(e,D(t,i))}function K(e,t){return typeof e=="function"?e(t):e}function V(e){return e.split("-")[0]}function C(e){return e.split("-")[1]}function me(e){return e==="x"?"y":"x"}function ge(e){return e==="y"?"height":"width"}function q(e){return["top","bottom"].includes(V(e))?"y":"x"}function ve(e){return me(q(e))}function We(e,t,i){i===void 0&&(i=!1);const s=C(e),o=ve(e),l=ge(o);let n=o==="x"?s===(i?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[l]>t.floating[l]&&(n=de(n)),[n,de(n)]}function He(e){return e.replace(/start|end/g,t=>Ve[t])}function de(e){return e.replace(/left|right|bottom|top/g,t=>Fe[t])}function $e(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ne(e){return typeof e!="number"?$e(e):{top:e,right:e,bottom:e,left:e}}function G(e){const{x:t,y:i,width:s,height:o}=e;return{width:s,height:o,top:i,left:t,right:t+s,bottom:i+o,x:t,y:i}}function he(e,t,i){let{reference:s,floating:o}=e;const l=q(t),n=ve(t),a=ge(n),r=V(t),c=l==="y",h=s.x+s.width/2-o.width/2,d=s.y+s.height/2-o.height/2,p=s[a]/2-o[a]/2;let f;switch(r){case"top":f={x:h,y:s.y-o.height};break;case"bottom":f={x:h,y:s.y+s.height};break;case"right":f={x:s.x+s.width,y:d};break;case"left":f={x:s.x-o.width,y:d};break;default:f={x:s.x,y:s.y}}switch(C(t)){case"start":f[n]-=p*(i&&c?-1:1);break;case"end":f[n]+=p*(i&&c?-1:1);break}return f}const _e=async(e,t,i)=>{const{placement:s="bottom",strategy:o="absolute",middleware:l=[],platform:n}=i,a=l.filter(Boolean),r=await(n.isRTL==null?void 0:n.isRTL(t));let c=await n.getElementRects({reference:e,floating:t,strategy:o}),{x:h,y:d}=he(c,s,r),p=s,f={},g=0;for(let m=0;m<a.length;m++){const{name:v,fn:u}=a[m],{x:y,y:b,data:x,reset:w}=await u({x:h,y:d,initialPlacement:s,placement:p,strategy:o,middlewareData:f,rects:c,platform:n,elements:{reference:e,floating:t}});h=y??h,d=b??d,f={...f,[v]:{...f[v],...x}},w&&g<=50&&(g++,typeof w=="object"&&(w.placement&&(p=w.placement),w.rects&&(c=w.rects===!0?await n.getElementRects({reference:e,floating:t,strategy:o}):w.rects),{x:h,y:d}=he(c,p,r)),m=-1)}return{x:h,y:d,placement:p,strategy:o,middlewareData:f}};async function se(e,t){var i;t===void 0&&(t={});const{x:s,y:o,platform:l,rects:n,elements:a,strategy:r}=e,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:p=!1,padding:f=0}=K(t,e),g=Ne(f),v=a[p?d==="floating"?"reference":"floating":d],u=G(await l.getClippingRect({element:(i=await(l.isElement==null?void 0:l.isElement(v)))==null||i?v:v.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:r})),y=d==="floating"?{x:s,y:o,width:n.floating.width,height:n.floating.height}:n.reference,b=await(l.getOffsetParent==null?void 0:l.getOffsetParent(a.floating)),x=await(l.isElement==null?void 0:l.isElement(b))?await(l.getScale==null?void 0:l.getScale(b))||{x:1,y:1}:{x:1,y:1},w=G(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:b,strategy:r}):y);return{top:(u.top-w.top+g.top)/x.y,bottom:(w.bottom-u.bottom+g.bottom)/x.y,left:(u.left-w.left+g.left)/x.x,right:(w.right-u.right+g.right)/x.x}}function Be(e,t,i){return(e?[...i.filter(o=>C(o)===e),...i.filter(o=>C(o)!==e)]:i.filter(o=>V(o)===o)).filter(o=>e?C(o)===e||(t?He(o)!==o:!1):!0)}const je=function(e){return e===void 0&&(e={}),{name:"autoPlacement",options:e,async fn(t){var i,s,o;const{rects:l,middlewareData:n,placement:a,platform:r,elements:c}=t,{crossAxis:h=!1,alignment:d,allowedPlacements:p=ae,autoAlignment:f=!0,...g}=K(e,t),m=d!==void 0||p===ae?Be(d||null,f,p):p,v=await se(t,g),u=((i=n.autoPlacement)==null?void 0:i.index)||0,y=m[u];if(y==null)return{};const b=We(y,l,await(r.isRTL==null?void 0:r.isRTL(c.floating)));if(a!==y)return{reset:{placement:m[0]}};const x=[v[V(y)],v[b[0]],v[b[1]]],w=[...((s=n.autoPlacement)==null?void 0:s.overflows)||[],{placement:y,overflows:x}],T=m[u+1];if(T)return{data:{index:u+1,overflows:w},reset:{placement:T}};const N=w.map(z=>{const I=C(z.placement);return[z.placement,I&&h?z.overflows.slice(0,2).reduce((Ae,Se)=>Ae+Se,0):z.overflows[0],z.overflows]}).sort((z,I)=>z[1]-I[1]),_=((o=N.filter(z=>z[2].slice(0,C(z[0])?2:3).every(I=>I<=0))[0])==null?void 0:o[0])||N[0][0];return _!==a?{data:{index:u+1,overflows:w},reset:{placement:_}}:{}}}};async function Ke(e,t){const{placement:i,platform:s,elements:o}=e,l=await(s.isRTL==null?void 0:s.isRTL(o.floating)),n=V(i),a=C(i),r=q(i)==="y",c=["left","top"].includes(n)?-1:1,h=l&&r?-1:1,d=K(t,e);let{mainAxis:p,crossAxis:f,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof g=="number"&&(f=a==="end"?g*-1:g),r?{x:f*h,y:p*c}:{x:p*c,y:f*h}}const qe=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var i,s;const{x:o,y:l,placement:n,middlewareData:a}=t,r=await Ke(t,e);return n===((i=a.offset)==null?void 0:i.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:o+r.x,y:l+r.y,data:{...r,placement:n}}}}},Ue=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:s,placement:o}=t,{mainAxis:l=!0,crossAxis:n=!1,limiter:a={fn:v=>{let{x:u,y}=v;return{x:u,y}}},...r}=K(e,t),c={x:i,y:s},h=await se(t,r),d=q(V(o)),p=me(d);let f=c[p],g=c[d];if(l){const v=p==="y"?"top":"left",u=p==="y"?"bottom":"right",y=f+h[v],b=f-h[u];f=ce(y,f,b)}if(n){const v=d==="y"?"top":"left",u=d==="y"?"bottom":"right",y=g+h[v],b=g-h[u];g=ce(y,g,b)}const m=a.fn({...t,[p]:f,[d]:g});return{...m,data:{x:m.x-i,y:m.y-s}}}}},Xe=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:i,rects:s,platform:o,elements:l}=t,{apply:n=()=>{},...a}=K(e,t),r=await se(t,a),c=V(i),h=C(i),d=q(i)==="y",{width:p,height:f}=s.floating;let g,m;c==="top"||c==="bottom"?(g=c,m=h===(await(o.isRTL==null?void 0:o.isRTL(l.floating))?"start":"end")?"left":"right"):(m=c,g=h==="end"?"top":"bottom");const v=f-r.top-r.bottom,u=p-r.left-r.right,y=D(f-r[g],v),b=D(p-r[m],u),x=!t.middlewareData.shift;let w=y,T=b;if(d?T=h||x?D(b,u):u:w=h||x?D(y,v):v,x&&!h){const Q=L(r.left,0),_=L(r.right,0),z=L(r.top,0),I=L(r.bottom,0);d?T=p-2*(Q!==0||_!==0?Q+_:L(r.left,r.right)):w=f-2*(z!==0||I!==0?z+I:L(r.top,r.bottom))}await n({...t,availableWidth:T,availableHeight:w});const N=await o.getDimensions(l.floating);return p!==N.width||f!==N.height?{reset:{rects:!0}}:{}}}};function $(e){return ye(e)?(e.nodeName||"").toLowerCase():"#document"}function k(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function O(e){var t;return(t=(ye(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ye(e){return e instanceof Node||e instanceof k(e).Node}function A(e){return e instanceof Element||e instanceof k(e).Element}function E(e){return e instanceof HTMLElement||e instanceof k(e).HTMLElement}function fe(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof k(e).ShadowRoot}function U(e){const{overflow:t,overflowX:i,overflowY:s,display:o}=S(e);return/auto|scroll|overlay|hidden|clip/.test(t+s+i)&&!["inline","contents"].includes(o)}function Ye(e){return["table","td","th"].includes($(e))}function Z(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function oe(e){const t=ne(),i=A(e)?S(e):e;return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(s=>(i.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(i.contain||"").includes(s))}function Ge(e){let t=M(e);for(;E(t)&&!H(t);){if(oe(t))return t;if(Z(t))return null;t=M(t)}return null}function ne(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function H(e){return["html","body","#document"].includes($(e))}function S(e){return k(e).getComputedStyle(e)}function J(e){return A(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function M(e){if($(e)==="html")return e;const t=e.assignedSlot||e.parentNode||fe(e)&&e.host||O(e);return fe(t)?t.host:t}function be(e){const t=M(e);return H(t)?e.ownerDocument?e.ownerDocument.body:e.body:E(t)&&U(t)?t:be(t)}function j(e,t,i){var s;t===void 0&&(t=[]),i===void 0&&(i=!0);const o=be(e),l=o===((s=e.ownerDocument)==null?void 0:s.body),n=k(o);if(l){const a=ie(n);return t.concat(n,n.visualViewport||[],U(o)?o:[],a&&i?j(a):[])}return t.concat(o,j(o,[],i))}function ie(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function we(e){const t=S(e);let i=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const o=E(e),l=o?e.offsetWidth:i,n=o?e.offsetHeight:s,a=Y(i)!==l||Y(s)!==n;return a&&(i=l,s=n),{width:i,height:s,$:a}}function le(e){return A(e)?e:e.contextElement}function W(e){const t=le(e);if(!E(t))return P(1);const i=t.getBoundingClientRect(),{width:s,height:o,$:l}=we(t);let n=(l?Y(i.width):i.width)/s,a=(l?Y(i.height):i.height)/o;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}const Ze=P(0);function xe(e){const t=k(e);return!ne()||!t.visualViewport?Ze:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Je(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==k(e)?!1:t}function F(e,t,i,s){t===void 0&&(t=!1),i===void 0&&(i=!1);const o=e.getBoundingClientRect(),l=le(e);let n=P(1);t&&(s?A(s)&&(n=W(s)):n=W(e));const a=Je(l,i,s)?xe(l):P(0);let r=(o.left+a.x)/n.x,c=(o.top+a.y)/n.y,h=o.width/n.x,d=o.height/n.y;if(l){const p=k(l),f=s&&A(s)?k(s):s;let g=p,m=ie(g);for(;m&&s&&f!==g;){const v=W(m),u=m.getBoundingClientRect(),y=S(m),b=u.left+(m.clientLeft+parseFloat(y.paddingLeft))*v.x,x=u.top+(m.clientTop+parseFloat(y.paddingTop))*v.y;r*=v.x,c*=v.y,h*=v.x,d*=v.y,r+=b,c+=x,g=k(m),m=ie(g)}}return G({width:h,height:d,x:r,y:c})}function Qe(e){let{elements:t,rect:i,offsetParent:s,strategy:o}=e;const l=o==="fixed",n=O(s),a=t?Z(t.floating):!1;if(s===n||a&&l)return i;let r={scrollLeft:0,scrollTop:0},c=P(1);const h=P(0),d=E(s);if((d||!d&&!l)&&(($(s)!=="body"||U(n))&&(r=J(s)),E(s))){const p=F(s);c=W(s),h.x=p.x+s.clientLeft,h.y=p.y+s.clientTop}return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-r.scrollLeft*c.x+h.x,y:i.y*c.y-r.scrollTop*c.y+h.y}}function et(e){return Array.from(e.getClientRects())}function ze(e){return F(O(e)).left+J(e).scrollLeft}function tt(e){const t=O(e),i=J(e),s=e.ownerDocument.body,o=L(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),l=L(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let n=-i.scrollLeft+ze(e);const a=-i.scrollTop;return S(s).direction==="rtl"&&(n+=L(t.clientWidth,s.clientWidth)-o),{width:o,height:l,x:n,y:a}}function it(e,t){const i=k(e),s=O(e),o=i.visualViewport;let l=s.clientWidth,n=s.clientHeight,a=0,r=0;if(o){l=o.width,n=o.height;const c=ne();(!c||c&&t==="fixed")&&(a=o.offsetLeft,r=o.offsetTop)}return{width:l,height:n,x:a,y:r}}function st(e,t){const i=F(e,!0,t==="fixed"),s=i.top+e.clientTop,o=i.left+e.clientLeft,l=E(e)?W(e):P(1),n=e.clientWidth*l.x,a=e.clientHeight*l.y,r=o*l.x,c=s*l.y;return{width:n,height:a,x:r,y:c}}function ue(e,t,i){let s;if(t==="viewport")s=it(e,i);else if(t==="document")s=tt(O(e));else if(A(t))s=st(t,i);else{const o=xe(e);s={...t,x:t.x-o.x,y:t.y-o.y}}return G(s)}function Le(e,t){const i=M(e);return i===t||!A(i)||H(i)?!1:S(i).position==="fixed"||Le(i,t)}function ot(e,t){const i=t.get(e);if(i)return i;let s=j(e,[],!1).filter(a=>A(a)&&$(a)!=="body"),o=null;const l=S(e).position==="fixed";let n=l?M(e):e;for(;A(n)&&!H(n);){const a=S(n),r=oe(n);!r&&a.position==="fixed"&&(o=null),(l?!r&&!o:!r&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||U(n)&&!r&&Le(e,n))?s=s.filter(h=>h!==n):o=a,n=M(n)}return t.set(e,s),s}function nt(e){let{element:t,boundary:i,rootBoundary:s,strategy:o}=e;const n=[...i==="clippingAncestors"?Z(t)?[]:ot(t,this._c):[].concat(i),s],a=n[0],r=n.reduce((c,h)=>{const d=ue(t,h,o);return c.top=L(d.top,c.top),c.right=D(d.right,c.right),c.bottom=D(d.bottom,c.bottom),c.left=L(d.left,c.left),c},ue(t,a,o));return{width:r.right-r.left,height:r.bottom-r.top,x:r.left,y:r.top}}function lt(e){const{width:t,height:i}=we(e);return{width:t,height:i}}function rt(e,t,i){const s=E(t),o=O(t),l=i==="fixed",n=F(e,!0,l,t);let a={scrollLeft:0,scrollTop:0};const r=P(0);if(s||!s&&!l)if(($(t)!=="body"||U(o))&&(a=J(t)),s){const d=F(t,!0,l,t);r.x=d.x+t.clientLeft,r.y=d.y+t.clientTop}else o&&(r.x=ze(o));const c=n.left+a.scrollLeft-r.x,h=n.top+a.scrollTop-r.y;return{x:c,y:h,width:n.width,height:n.height}}function te(e){return S(e).position==="static"}function pe(e,t){return!E(e)||S(e).position==="fixed"?null:t?t(e):e.offsetParent}function ke(e,t){const i=k(e);if(Z(e))return i;if(!E(e)){let o=M(e);for(;o&&!H(o);){if(A(o)&&!te(o))return o;o=M(o)}return i}let s=pe(e,t);for(;s&&Ye(s)&&te(s);)s=pe(s,t);return s&&H(s)&&te(s)&&!oe(s)?i:s||Ge(e)||i}const at=async function(e){const t=this.getOffsetParent||ke,i=this.getDimensions,s=await i(e.floating);return{reference:rt(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function ct(e){return S(e).direction==="rtl"}const dt={convertOffsetParentRelativeRectToViewportRelativeRect:Qe,getDocumentElement:O,getClippingRect:nt,getOffsetParent:ke,getElementRects:at,getClientRects:et,getDimensions:lt,getScale:W,isElement:A,isRTL:ct};function ht(e,t){let i=null,s;const o=O(e);function l(){var a;clearTimeout(s),(a=i)==null||a.disconnect(),i=null}function n(a,r){a===void 0&&(a=!1),r===void 0&&(r=1),l();const{left:c,top:h,width:d,height:p}=e.getBoundingClientRect();if(a||t(),!d||!p)return;const f=X(h),g=X(o.clientWidth-(c+d)),m=X(o.clientHeight-(h+p)),v=X(c),y={rootMargin:-f+"px "+-g+"px "+-m+"px "+-v+"px",threshold:L(0,D(1,r))||1};let b=!0;function x(w){const T=w[0].intersectionRatio;if(T!==r){if(!b)return n();T?n(!1,T):s=setTimeout(()=>{n(!1,1e-7)},1e3)}b=!1}try{i=new IntersectionObserver(x,{...y,root:o.ownerDocument})}catch{i=new IntersectionObserver(x,y)}i.observe(e)}return n(!0),l}function ft(e,t,i,s){s===void 0&&(s={});const{ancestorScroll:o=!0,ancestorResize:l=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:r=!1}=s,c=le(e),h=o||l?[...c?j(c):[],...j(t)]:[];h.forEach(u=>{o&&u.addEventListener("scroll",i,{passive:!0}),l&&u.addEventListener("resize",i)});const d=c&&a?ht(c,i):null;let p=-1,f=null;n&&(f=new ResizeObserver(u=>{let[y]=u;y&&y.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var b;(b=f)==null||b.observe(t)})),i()}),c&&!r&&f.observe(c),f.observe(t));let g,m=r?F(e):null;r&&v();function v(){const u=F(e);m&&(u.x!==m.x||u.y!==m.y||u.width!==m.width||u.height!==m.height)&&i(),m=u,g=requestAnimationFrame(v)}return i(),()=>{var u;h.forEach(y=>{o&&y.removeEventListener("scroll",i),l&&y.removeEventListener("resize",i)}),d==null||d(),(u=f)==null||u.disconnect(),f=null,r&&cancelAnimationFrame(g)}}const ut=qe,pt=je,mt=Ue,gt=Xe,vt=(e,t,i)=>{const s=new Map,o={platform:dt,...i},l={...o.platform,_c:s};return _e(e,t,{...o,platform:l})},yt=(e,t)=>{let i;return(...s)=>{const o=()=>{i=null,e.apply(void 0,s)};clearTimeout(i),i=setTimeout(o,t)}},bt=`:host,::slotted(*),*{box-sizing:border-box}:host([disabled]){cursor:not-allowed !important;}:host([disabled]) *,:host([disabled]) ::slotted(*){cursor:not-allowed !important;pointer-events:none !important;}:host{position:relative;outline:none;font-weight:var(--field-input-weight);font-size:var(--field-input-size);line-height:var(--field-input-leading);cursor:text}:host input,:host ::slotted(input),:host textarea,:host ::slotted(textarea){width:100%;margin:0;padding:0;border:none;background-color:transparent;color:inherit;font-weight:inherit;font-size:inherit;font-family:inherit;line-height:inherit;letter-spacing:inherit;cursor:inherit}:host ::slotted(label){cursor:inherit}:host input:focus,:host ::slotted(input:focus),:host textarea:focus,:host ::slotted(textarea:focus){outline:none}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--field-placeholder-text-color)}:host input::placeholder,:host textarea::placeholder{color:var(--field-placeholder-text-color)}:host ::slotted(input)::-moz-placeholder,:host ::slotted(textarea)::-moz-placeholder{color:var(--field-placeholder-text-color)}:host ::slotted(input)::placeholder,:host ::slotted(textarea)::placeholder{color:var(--field-placeholder-text-color)}:host([size='small']){font-size:var(--core-type-paragraph-20-size);line-height:var(--core-type-paragraph-20-leading)}:host{border-radius:var(--field-border-radius);background-color:var(--field-normal-state-background-color);color:var(--field-normal-state-input-color)}:host::after{content:"";position:absolute;inset:0;border-radius:var(--field-border-radius);box-shadow:inset 0 0 0 var(--field-border-size) var(--field-normal-state-normal-validity-border-color);pointer-events:none}:host([invalid])::after{box-shadow:inset 0 0 0 var(--field-border-size) var(--field-normal-state-invalid-validity-border-color)}:host(:hover){background-color:var(--field-hover-state-background-color);color:var(--field-hover-state-input-color)}:host(:hover)::after{box-shadow:inset 0 0 0 var(--field-border-size) var(--field-hover-state-normal-validity-border-color)}:host([invalid]:hover)::after{box-shadow:inset 0 0 0 var(--field-border-size) var(--field-hover-state-invalid-validity-border-color)}:host([focused]){color:var(--field-focus-state-input-color)}:host([focused])::after{box-shadow:inset 0 0 0 var(--field-focus-state-border-size)
        var(--field-focus-state-normal-validity-border-color)}:host([focused][invalid])::after{box-shadow:inset 0 0 0 var(--field-focus-state-border-size) var(--field-focus-state-invalid-validity-border-color)}:host([disabled]){background-color:var(--field-disabled-state-background-color) !important;color:var(--field-disabled-state-input-color) !important;cursor:not-allowed !important}:host([disabled])::after{box-shadow:inset 0 0 0 var(--field-border-size) var(--field-disabled-state-border-color) !important}:host([disabled]) ::slotted(.market-accessory),:host([disabled]) ::slotted(img[slot*="accessory"]),:host([disabled]) ::slotted(svg[slot*="accessory"]),:host([disabled]) ::slotted(div[slot*="accessory"]){--field-disabled-state-accessory-opacity:var(--row-disabled-state-leading-accessory-opacity);opacity:var(--field-disabled-state-accessory-opacity)}:host([value=""]) ::slotted(label){color:var(--field-normal-state-empty-phase-label-color)}:host(:not([value=""])) ::slotted(label),:host([value=""][autofilled]) ::slotted(label){color:var(--field-normal-state-float-phase-label-color)}:host(:hover) ::slotted(label){color:var(--field-hover-state-empty-phase-label-color)}:host(:not([value=""]):hover) ::slotted(label),:host([value=""][autofilled]:hover) ::slotted(label){color:var(--field-hover-state-float-phase-label-color)}:host([focused]) ::slotted(label){color:var(--field-focus-state-float-phase-label-color)}:host([value=""][disabled]) ::slotted(label){color:var(--field-disabled-state-empty-phase-label-color)}:host(:not([value=""])[disabled]) ::slotted(label),:host([value=""][autofilled][disabled]) ::slotted(label){color:var(--field-disabled-state-float-phase-label-color)}:host{--field-accessory-horizontal-spacing-size:16px;--field-size-small-accessory-horizontal-spacing-size:12px;--field-size-large-image-accessory-outer-spacing-size:12px;--field-size-medium-image-accessory-outer-spacing-size:4px;--field-size-large-button-accessory-outer-spacing-size:12px;--field-size-medium-button-accessory-outer-spacing-size:4px;--field-size-large-tooltip-accessory-horizontal-spacing-size:5px;--field-size-large-tooltip-accessory-vertical-spacing-size:-1px;--field-size-small-tooltip-accessory-horizontal-spacing-size:1px}:host ::slotted([slot="leading-accessory"]){flex-shrink:0;margin-right:var(--field-accessory-horizontal-spacing-size);margin-left:var(--field-accessory-horizontal-spacing-size)}:host ::slotted(.market-accessory[slot="leading-accessory"][size="image"]){margin-left:var(--field-size-large-image-accessory-outer-spacing-size)}:host ::slotted(.market-tooltip[slot="leading-accessory"]){margin:var(--field-size-large-tooltip-accessory-vertical-spacing-size)
      var(--field-size-large-tooltip-accessory-horizontal-spacing-size)}:host ::slotted(.market-button[slot="leading-accessory"][size="small"]){margin-left:var(--field-size-large-button-accessory-outer-spacing-size)}:host ::slotted([slot="trailing-accessory"]){flex-shrink:0;margin-right:var(--field-accessory-horizontal-spacing-size);margin-left:var(--field-accessory-horizontal-spacing-size)}:host ::slotted(.market-accessory[slot="trailing-accessory"][size="image"]){margin-right:var(--field-size-large-image-accessory-outer-spacing-size)}:host ::slotted(.market-tooltip[slot="trailing-accessory"]){margin:var(--field-size-large-tooltip-accessory-vertical-spacing-size)
      var(--field-size-large-tooltip-accessory-horizontal-spacing-size)}:host ::slotted(.market-button[slot="trailing-accessory"][size="small"]){margin-right:var(--field-size-large-button-accessory-outer-spacing-size)}:host([size='medium']) ::slotted(.market-accessory[slot="leading-accessory"][size="image"]){margin-left:var(--field-size-medium-image-accessory-outer-spacing-size)}:host([size='medium']) ::slotted(.market-button[slot="leading-accessory"][size="small"]){margin-left:var(--field-size-medium-button-accessory-outer-spacing-size)}:host([size='medium']) ::slotted(.market-accessory[slot="trailing-accessory"][size="image"]){margin-right:var(--field-size-medium-image-accessory-outer-spacing-size)}:host([size='medium']) ::slotted(.market-button[slot="trailing-accessory"][size="small"]){margin-right:var(--field-size-medium-button-accessory-outer-spacing-size)}:host([size='small']) ::slotted([slot="leading-accessory"]),:host([size='small']) ::slotted([slot="trailing-accessory"]){margin-right:var(--field-size-small-accessory-horizontal-spacing-size);margin-left:var(--field-size-small-accessory-horizontal-spacing-size)}:host([size='small']) ::slotted(.market-tooltip[slot="leading-accessory"]),:host([size='small']) ::slotted(.market-tooltip[slot="trailing-accessory"]){margin-right:var(--field-size-small-tooltip-accessory-horizontal-spacing-size);margin-left:var(--field-size-small-tooltip-accessory-horizontal-spacing-size)}:host .label-input-container.has-leading-accessory{padding-left:0 !important;}:host .label-input-container.has-trailing-accessory{padding-right:0 !important;}:host{--field-input-animation-speed:0.2s;--field-input-label-translate:12px;--field-empty-phase-label-text-size-unitless:16;--field-float-phase-label-text-size-unitless:14;--field-size-medium-float-phase-vertical-padding-size:12px;--field-size-medium-float-phase-horizontal-padding-size:16px;--field-size-small-float-phase-vertical-padding-size:9px;--field-size-small-float-phase-horizontal-padding-size:12px;display:flex;align-items:center}:host .label-input-container,:host([value='']:not([focused]):not([autofilled])) .label-input-container{flex-grow:1;padding:var(--field-float-phase-vertical-padding-size) var(--field-float-phase-horizontal-padding-size)}:host([size='medium']) .label-input-container,:host([size='medium'][value='']:not([focused]):not([autofilled])) .label-input-container{padding:var(--field-size-medium-float-phase-vertical-padding-size)
      var(--field-size-medium-float-phase-horizontal-padding-size)}:host([size='small']) .label-input-container,:host([size='small'][value='']:not([focused]):not([autofilled])) .label-input-container{padding:var(--field-size-small-float-phase-vertical-padding-size)
      var(--field-size-small-float-phase-horizontal-padding-size)}:host ::slotted(label){display:block;min-height:var(--field-empty-phase-label-text-leading);font-weight:var(--field-empty-phase-label-text-weight);font-size:var(--field-empty-phase-label-text-size);line-height:var(--field-empty-phase-label-text-leading);letter-spacing:var(--field-empty-phase-label-text-tracking);transition:all var(--field-input-animation-speed);transform:translateY(var(--field-input-label-translate));transform-origin:0 0}:host(:not([value=""])) ::slotted(label),:host([value=""]:not([focused])[autofilled]) ::slotted(label),:host([focused]) ::slotted(label){font-weight:var(--field-float-phase-label-text-weight);transform:scale(
        calc(var(--field-float-phase-label-text-size-unitless) / var(--field-empty-phase-label-text-size-unitless))
      )}:host input,:host ::slotted(input),:host textarea,:host ::slotted(textarea){opacity:0%}:host([focused]) input,:host([focused]) ::slotted(input),:host([focused]) textarea,:host([focused]) ::slotted(textarea),:host(:not([value=''])) input,:host(:not([value=''])) ::slotted(input),:host(:not([value=''])) textarea,:host(:not([value=''])) ::slotted(textarea){opacity:100%}:host([size='small']) ::slotted(label),:host([size='medium']) ::slotted(label){position:absolute;overflow:hidden;clip:rect(0 0 0 0);width:1px;height:1px;white-space:nowrap;-webkit-clip-path:inset(50%);clip-path:inset(50%)}:host([size='small']) input,:host([size='small']) ::slotted(input),:host([size='small']) textarea,:host([size='small']) ::slotted(textarea),:host([size='medium']) input,:host([size='medium']) ::slotted(input),:host([size='medium']) textarea,:host([size='medium']) ::slotted(textarea){opacity:100%}:host{cursor:pointer}.label-input-container{overflow:hidden}.caret{flex-shrink:0;margin-right:var(--field-float-phase-horizontal-padding-size);pointer-events:none;transition:transform var(--field-input-animation-speed)}.caret path{fill:var(--select-caret-color)}:host([aria-expanded="true"]) .caret{transform:rotate(180deg)}.placeholder{overflow:hidden;height:var(--field-input-leading);color:var(--field-placeholder-text-color);font-size:var(--field-input-size);line-height:var(--field-input-leading);text-overflow:ellipsis;white-space:nowrap;visibility:hidden}:host([focused]) .placeholder,:host([size="small"]) .placeholder,:host([size="medium"]) .placeholder{visibility:visible}:host([size="small"]) .placeholder{height:var(--core-type-paragraph-20-leading);font-size:var(--core-type-paragraph-20-size);line-height:var(--core-type-paragraph-20-leading)}::slotted(label){cursor:pointer}::slotted([slot="displayed-selection"]){min-height:0;margin:0}::slotted([slot="displayed-selection"])::before,::slotted([slot="displayed-selection"])::after{display:none}::slotted([slot="list"]){display:none}`,wt=bt,xt=class{constructor(e){Te(this,e),this.marketSelectValueDidChange=ee(this,"marketSelectValueDidChange",7),this.marketSelectOpened=ee(this,"marketSelectOpened",7),this.marketSelectClosed=ee(this,"marketSelectClosed",7),this.rowsInnerText=[],this.keypresses=[],this.debounceDelay=250,this.setFocusOnMatch=yt(()=>{const t=this.keypresses.join(""),i=[...this.rowsInnerText.slice(this.focusedRowIndex+1),...this.rowsInnerText.slice(0,this.focusedRowIndex+1)].find(l=>l.startsWith(t)),s=this.rowsInnerText.findIndex(l=>l.startsWith(i)),o=this.rows[s];o&&!o.disabled&&(this.focusedRowIndex=s,o.focus(),!this.listIsActive&&!this.multiselect&&(this.value=o.value,this.marketSelectValueDidChange.emit({value:this.value,newSelectedOption:o,newDeselectedOption:null,currentSelectedOptions:[o]}))),this.keypresses=[]},this.debounceDelay),this.list=null,this.rows=null,this.popoverElement=null,this.name=void 0,this.value="",this.size="large",this.placeholder=void 0,this.readonly=!1,this.disabled=!1,this.focused=!1,this.invalid=!1,this.multiselect=!1,this.popoverContainer=void 0,this.popoverStrategy="absolute",this.listIsActive=!1,this.focusedRowIndex=-1,this.hasLeadingAccessory=!1,this.hasTrailingAccessory=!1}valueWatcher(){this.propagateValue()}multiselectWatcher(){this.list.multiselect=this.multiselect}handleListSelection({detail:{currentSelectionValues:e,currentSelections:t,newDeselection:i,newSelection:s}}){const o=e.join(",");this.value=o,this.multiselect?this.setFocusedRow(i||s):this.setFocusedRow(s),this.marketSelectValueDidChange.emit({value:o,newSelectedOption:s,newDeselectedOption:i,currentSelectedOptions:t})}handleListItemsFiltered(){window.requestAnimationFrame(()=>{this.listIsActive&&this.updatePopper()})}windowClick(e){var t;this.el.contains(e.target)||!((t=this.popoverElement)===null||t===void 0)&&t.contains(e.target)||(this.focused=!1,this.listIsActive&&this.closeList())}getValues(){return Array.isArray(this.value)?new Set(this.value):new Set(this.multiselect?this.value.split(","):[this.value])}getValuesCount(){return this.getValues().size}getMatchingRows(){if(this.rows===null)return[];{const e=this.getValues();return[...this.rows].filter(t=>e.has(t.value))}}get hasMultipleSelections(){return this.multiselect&&this.getValues().size>1}getMultiselectDisplayValue(){const e=this.getValues();return e.size>1?`${e.size} selected`:""}getDisplayedSelectionRow(){return this.el.querySelector(`${B("market-row")}[slot="displayed-selection"]`)}propagateValue(){if(!this.list||!this.rows)return;const e=this.getMatchingRows();e.length===0?(this.list.value=this.value="",this.focusedRowIndex=-1):(this.list.value=this.value,this.setFocusedRow(e[0])),this.displaySelection(e)}displaySelection(e=[]){var t,i,s;if((i=(t=this.getDisplayedSelectionRow())===null||t===void 0?void 0:t.remove)===null||i===void 0||i.call(t),e.length===1){const o=e[0].cloneNode(!0);o.interactive=!1,o.setAttribute("role","listitem"),o.setAttribute("slot","displayed-selection"),o.size=this.size==="small"?"small":"medium",this.el.append(o)}else if(e.length>1){const o=document.createElement(`${B("market-row")}`);o.setAttribute("slot","displayed-selection"),o.innerText=`${this.getValuesCount().toLocaleString()} `,o.size=this.size==="small"?"small":"medium";const l=document.createElement("slot");l.setAttribute("name","selected-translation");const n=this.el.querySelector('[slot="selected-translation"]');l.innerHTML=(s=n==null?void 0:n.innerHTML)!==null&&s!==void 0?s:"selected",o.appendChild(l),n&&new MutationObserver(()=>{l.innerHTML=n==null?void 0:n.innerHTML}).observe(n,{characterData:!0,subtree:!0}),this.el.append(o)}}initListObserver(){new MutationObserver(this.onListChange.bind(this)).observe(this.list,{childList:!0,characterData:!0,subtree:!0})}onListChange(){this.initRows(),this.propagateValue(),this.updatePopper()}setFocusedRow(e){this.focusedRowIndex=Array.prototype.indexOf.call(this.rows,e)}async openList(){if(this.listIsActive||!this.popoverElement)return Promise.resolve();const e=this.el.closest(this.popoverContainer)||document.body;return Object.assign(this.popoverElement.style,{zIndex:`${De(e)+1}`,visibility:"hidden"}),this.moveListToPopover(),e.append(this.popoverElement),this.initPopperListeners(),new Promise(t=>{setTimeout(()=>{this.updatePopper(),this.popoverElement.style.visibility="visible",this.listIsActive=!0,this.marketSelectOpened.emit(),t()},50)})}closeList(){return this.listIsActive&&(this.popoverElement.remove(),this.cleanupPopperListeners(),this.moveListToSelect(),this.listIsActive=!1,this.marketSelectClosed.emit()),Promise.resolve()}async toggleList(){this.listIsActive?await this.closeList():await this.openList()}handleTriggerKeyDown(e){switch(e.key){case"ArrowDown":this.handleTriggerArrowDown(e);break;case"ArrowUp":this.handleTriggerArrowUp(e);break;case" ":this.handleTriggerSpacebar(e);break;case"Enter":this.handleTriggerEnter();break;case"Escape":this.handleEscape();break;case"Tab":this.handleTab(e);break;default:this.typeaheadHandler(e);break}e.stopPropagation()}async handleTriggerArrowDown(e){if(e.preventDefault(),this.listIsActive){for(let t=this.focusedRowIndex+1;t<this.rows.length;t++)if(!this.rows[t].disabled){this.focusedRowIndex=t,this.rows[t].focus();break}}else await this.openList(),this.focusedRowIndex>-1&&this.rows[this.focusedRowIndex].focus()}async handleTriggerArrowUp(e){if(e.preventDefault(),this.listIsActive){for(let t=this.focusedRowIndex-1;t>-1;t--)if(!this.rows[t].disabled){this.focusedRowIndex=t,this.rows[t].focus();break}}else await this.openList(),this.focusedRowIndex>-1&&this.rows[this.focusedRowIndex].focus()}async handleTriggerSpacebar(e){e.preventDefault(),this.listIsActive?this.closeList():(await this.openList(),this.focusedRowIndex>-1&&this.rows[this.focusedRowIndex].focus())}handleTriggerEnter(){this.listIsActive?(this.closeList(),this.el.focus()):Oe(this.el)}handleEscape(){this.listIsActive&&(this.closeList(),this.el.focus())}handleTab(e){this.listIsActive?e.preventDefault():this.focused=!1}handleListKeyDown(e){switch(e.key){case"Enter":this.handleListEnter();break;case"Escape":this.handleEscape();break;case"Tab":this.handleTab(e);break;case" ":this.handleListSpacebar(e);break;default:this.typeaheadHandler(e);break}e.stopPropagation()}handleListSpacebar(e){this.multiselect||e.target.hasAttribute("slot","search")||(e.preventDefault(),this.closeList(),this.el.focus())}handleListEnter(){this.multiselect||(this.closeList(),this.el.focus())}typeaheadHandler(e){var t;!((t=this.list)===null||t===void 0)&&t.hasAttribute("has-search")||e.key.length>1||e.key.toUpperCase()===e.key.toLowerCase()||(this.storeKeypresses(e),this.setFocusOnMatch())}storeKeypresses(e){this.keypresses=[...this.keypresses,e.key]}handleFocus(){this.readonly||this.disabled||(this.focused=!0)}handleTriggerClick(e){e.target.tagName.toLowerCase()!==B("market-tooltip")&&(this.readonly||this.disabled||this.toggleList())}handleListClick(){this.multiselect||(this.closeList(),this.el.focus())}initPopperListeners(){const{el:e,popoverElement:t,updatePopper:i}=this;this.cleanupPopperListeners=ft(e,t,i.bind(this),{elementResize:!1})}updatePopper(){const{el:e,popoverElement:t,popoverStrategy:i}=this,s=8,o=464;vt(e,t,{strategy:i,middleware:[ut(s),pt({allowedPlacements:["top","bottom"]}),gt({apply({rects:l,availableHeight:n}){Object.assign(t.style,{width:`${l.reference.width}px`,maxHeight:`${Math.min(n-s,o)}px`})}}),mt({padding:s})]}).then(({x:l,y:n})=>{Object.assign(t.style,{left:`${l}px`,top:`${n}px`})})}initPopover(){this.popoverElement=this.popoverElement||document.createElement(B("market-popover")),this.popoverElement.id=this.popoverId,this.popoverElement.style.position=this.popoverStrategy}initList(){this.list=this.el.querySelector('[slot="list"]'),this.list.interactive=!0,this.list.multiselect=this.multiselect,this.list.addEventListener("marketListSelectionsDidChange",this.handleListSelection.bind(this)),this.list.addEventListener("marketListItemsFiltered",this.handleListItemsFiltered.bind(this)),this.list.addEventListener("keydown",this.handleListKeyDown.bind(this)),this.list.addEventListener("click",this.handleListClick.bind(this))}initRows(){this.rows=this.list.querySelectorAll(`${B("market-row")}`),this.rowsInnerText=[...this.rows].filter(e=>e&&e.innerText).map(e=>e.innerText.trim().toLowerCase())}moveListToPopover(){this.list.removeAttribute("slot"),this.popoverElement.append(this.list)}moveListToSelect(){this.list.setAttribute("slot","list"),this.el.append(this.list)}registerSlottedAccessories(){const e=[...this.el.children].filter(function(i){return i.matches('[slot="leading-accessory"]')}),t=[...this.el.children].filter(function(i){return i.matches('[slot="trailing-accessory"]')});this.hasLeadingAccessory=e.length>0,this.hasTrailingAccessory=t.length>0}componentWillLoad(){this.registerSlottedAccessories(),this.popoverId=this.popoverId||`popover-${Pe()}`}componentDidLoad(){this.initList(),this.initRows(),this.initPopover(),this.initListObserver(),this.propagateValue()}componentWillRender(){const{listIsActive:e,list:t}=this;t&&e&&t.removeAttribute("slot")}disconnectedCallback(){this.closeList()}render(){const e=this.disabled?null:"0";return R(Re,{key:"21fffc66fc9251e3a0cad699285a8643d1ab797a",class:"market-select",role:"combobox","aria-label":Ce(this.el),"aria-expanded":this.listIsActive.toString(),"aria-controls":this.popoverId,"aria-haspopup":"listbox",tabindex:e,onClick:t=>{this.handleTriggerClick(t)},onFocus:()=>{this.handleFocus()},onKeyDown:t=>{this.handleTriggerKeyDown(t)}},R("slot",{key:"d37a7e5b45769eb299fba74c85e1b246344968bd",name:"leading-accessory",onSlotchange:()=>this.registerSlottedAccessories()}),R("div",{key:"ae8e194af461e3d87c5f7f79f3aeeef7fa622a0b",class:Ie("label-input-container",{"has-leading-accessory":this.hasLeadingAccessory,"has-trailing-accessory":this.hasTrailingAccessory})},R("slot",{key:"322d499a74dce32238ecdc48d7696f0001f968d2"}),R("slot",{key:"7ba67d8a7752b28e9eaf153f6fa344c1e93973c7",name:"displayed-selection"},R("div",{key:"40bb121b16f34b6f68c0260ec64b848d27d23185",class:"placeholder"},this.placeholder))),R("slot",{key:"6a66a88023ae15f2f919a1c6bff0c8b110527251",name:"list"}),R("slot",{key:"c1a44a66aa8d187e3df4fe32a0ba2a13d79696c0",name:"trailing-accessory",onSlotchange:()=>this.registerSlottedAccessories()}),R("svg",{key:"52c1a38eb67ef8c92cead0f49b39cd7cc3de12ca",class:"caret",width:"14",height:"8",viewBox:"0 0 14 8",xmlns:"http://www.w3.org/2000/svg"},R("path",{key:"1d404dca86789d0106eabc42c1e49172b86a8bbe","fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.70715 7.70711C7.31663 8.09763 6.68346 8.09763 6.29294 7.70711L0.29294 1.70711L1.70715 0.292892L7.00005 5.58579L12.2929 0.292893L13.7072 1.70711L7.70715 7.70711Z",fill:"black"})))}get el(){return Ee(this)}static get watchers(){return{value:["valueWatcher"],multiselect:["multiselectWatcher"]}}};xt.style=wt;export{xt as market_select};