import{a,b as e,r as n}from"./isObject-f305a0d7-CA5ssx5i.js";import{g as o}from"./_getNative-e422aac7-CFRFUET7.js";var i=Array.isArray;const f=i;var c=9007199254740991;function E(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=c}var p="[object Arguments]";function t(r){return a(r)&&e(r)==p}var s=Object.prototype,m=s.hasOwnProperty,b=s.propertyIsEnumerable,g=t(function(){return arguments}())?t:function(r){return a(r)&&m.call(r,"callee")&&!b.call(r,"callee")};const M=g;var u=o(n,"Map");const j=u;export{j as M,M as a,E as b,f as i};
