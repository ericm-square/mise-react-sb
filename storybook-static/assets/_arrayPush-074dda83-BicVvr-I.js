import{g as c}from"./_getNative-e422aac7-CFRFUET7.js";import{M as l}from"./_Map-5d7abd2f-CY00VWNU.js";var u=9007199254740991,d=/^(?:0|[1-9]\d*)$/;function R(t,e){var a=typeof t;return e=e??u,!!e&&(a=="number"||a!="symbol"&&d.test(t))&&t>-1&&t%1==0&&t<e}function f(t,e){return t===e||t!==t&&e!==e}var v=c(Object,"create");const s=v;function g(){this.__data__=s?s(null):{},this.size=0}function C(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var y="__lodash_hash_undefined__",m=Object.prototype,w=m.hasOwnProperty;function z(t){var e=this.__data__;if(s){var a=e[t];return a===y?void 0:a}return w.call(e,t)?e[t]:void 0}var b=Object.prototype,x=b.hasOwnProperty;function D(t){var e=this.__data__;return s?e[t]!==void 0:x.call(e,t)}var H="__lodash_hash_undefined__";function O(t,e){var a=this.__data__;return this.size+=this.has(t)?0:1,a[t]=s&&e===void 0?H:e,this}function n(t){var e=-1,a=t==null?0:t.length;for(this.clear();++e<a;){var r=t[e];this.set(r[0],r[1])}}n.prototype.clear=g;n.prototype.delete=C;n.prototype.get=z;n.prototype.has=D;n.prototype.set=O;function P(){this.__data__=[],this.size=0}function o(t,e){for(var a=t.length;a--;)if(f(t[a][0],e))return a;return-1}var E=Array.prototype,I=E.splice;function M(t){var e=this.__data__,a=o(e,t);if(a<0)return!1;var r=e.length-1;return a==r?e.pop():I.call(e,a,1),--this.size,!0}function N(t){var e=this.__data__,a=o(e,t);return a<0?void 0:e[a][1]}function S(t){return o(this.__data__,t)>-1}function $(t,e){var a=this.__data__,r=o(a,t);return r<0?(++this.size,a.push([t,e])):a[r][1]=e,this}function i(t){var e=-1,a=t==null?0:t.length;for(this.clear();++e<a;){var r=t[e];this.set(r[0],r[1])}}i.prototype.clear=P;i.prototype.delete=M;i.prototype.get=N;i.prototype.has=S;i.prototype.set=$;function j(){this.size=0,this.__data__={hash:new n,map:new(l||i),string:new n}}function A(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function _(t,e){var a=t.__data__;return A(e)?a[typeof e=="string"?"string":"hash"]:a.map}function G(t){var e=_(this,t).delete(t);return this.size-=e?1:0,e}function F(t){return _(this,t).get(t)}function U(t){return _(this,t).has(t)}function L(t,e){var a=_(this,t),r=a.size;return a.set(t,e),this.size+=a.size==r?0:1,this}function h(t){var e=-1,a=t==null?0:t.length;for(this.clear();++e<a;){var r=t[e];this.set(r[0],r[1])}}h.prototype.clear=j;h.prototype.delete=G;h.prototype.get=F;h.prototype.has=U;h.prototype.set=L;function T(t,e){for(var a=-1,r=e.length,p=t.length;++a<r;)t[p+a]=e[a];return t}export{i as L,h as M,T as a,f as e,R as i};