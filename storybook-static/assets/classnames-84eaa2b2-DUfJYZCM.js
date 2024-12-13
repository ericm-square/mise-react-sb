function n(...f){return f.reduce((o,e)=>{if(typeof e=="string")o.push(e);else if(typeof e=="object")for(const c of Object.keys(e))e[c]&&o.push(c);return o},[]).join(" ")}export{n as c};
