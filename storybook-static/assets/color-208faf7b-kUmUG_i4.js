const{min:g,max:p,floor:D,round:x}=Math;function N(l,u,c){let r=l,o=u,t=c;r=r/360*6,o/=100,t/=100;const a=D(r),n=r-a,s=t*(1-o),e=t*(1-n*o),i=t*(1-(1-n)*o),d=a%6,f=[t,e,s,s,i,t][d],h=[i,t,t,e,s,s][d],m=[s,s,i,t,t,e][d];return[f*255,h*255,m*255]}function H(l,u,c){return N(l,u,c).map(r=>x(r).toString(16).padStart(2,"0"))}function v(l,u,c){let r=l,o=u,t=c;r/=255,o/=255,t/=255;const a=g(r,o,t),n=p(r,o,t),s=n-a;let e,i;const d=n;if(s===0)e=i=0;else{i=s/n;const f=((n-r)/6+s/2)/s,h=((n-o)/6+s/2)/s,m=((n-t)/6+s/2)/s;r===n?e=m-h:o===n?e=1/3+f-m:t===n&&(e=2/3+h-f),e<0?e+=1:e>1&&(e-=1)}return[e*360,i*100,d*100]}function T(l,u,c){let r=u,o=c;r/=100,o/=100,r*=o<.5?o:1-o;const t=2*r/(o+r)*100,a=(o+r)*100;return[l,Number.isNaN(t)?0:t,a]}function R(l){const c=l.match(/.{2}/g).map(r=>Number.parseInt(r,16));return v(c[0],c[1],c[2])}function b(l){return l.map(u=>{const c=Number(u);return Number.isNaN(u)?void 0:c})}function z(l){const u={rgba:/^rgba?\D+([\d.]+)(%?)\D+([\d.]+)(%?)\D+([\d.]+)(%?)\D*?(([\d.]+)(%?)|$)/i,hsla:/^hsla?\D+([\d.]+)\D+([\d.]+)\D+([\d.]+)\D*?(([\d.]+)(%?)|$)/i,hsva:/^hsva?\D+([\d.]+)\D+([\d.]+)\D+([\d.]+)\D*?(([\d.]+)(%?)|$)/i,hexa:/^#?(([\da-f]{3,4})|([\da-f]{6})|([\da-f]{8}))$/i};for(const[c,r]of Object.entries(u)){const o=r.exec(l);if(o)switch(c){case"rgba":{const t=b(o);let a=t[1],n=t[3],s=t[5],e=t[8];if(a=o[2]==="%"?a/100*255:a,n=o[4]==="%"?n/100*255:n,s=o[6]==="%"?s/100*255:s,e=o[9]==="%"?e/100:e,a>255||n>255||s>255||e<0||e>1)break;return{values:[...v(a,n,s),e],a:e,colorType:c}}case"hexa":{let[,t]=o;(t.length===4||t.length===3)&&(t=t.split("").map(s=>s+s).join(""));const a=t.slice(0,6);let n=t.slice(6);return n=n?Number.parseInt(n,16)/255:void 0,{values:[...R(a),n],a:n,colorType:c}}case"hsla":{const t=b(o),a=t[1],n=t[2],s=t[3];let e=t[5];if(e=o[6]==="%"?e/100:e,a>360||n>100||s>100||e<0||e>1)break;return{values:[...T(a,n,s),e],a:e,colorType:c}}case"hsva":{const t=b(o),a=t[1],n=t[2],s=t[3];let e=t[5];if(e=o[6]==="%"?e/100:e,a>360||n>100||s>100||e<0||e>1)break;return{values:[a,n,s,e],a:e,colorType:c}}}}return{values:null,colorType:null}}export{N as a,H as h,z as p};
