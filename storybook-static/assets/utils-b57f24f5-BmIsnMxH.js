function o(n){return!!(n!=null&&n.changedTouches)}function i(n){const c=o(n)?n.changedTouches[0].clientX:n.clientX,t=o(n)?n.changedTouches[0].clientY:n.clientY;return{x:c,y:t}}export{i as g,o as i};
