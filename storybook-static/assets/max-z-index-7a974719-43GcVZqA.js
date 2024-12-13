function r(t){return Math.max(...[...t.querySelectorAll("*")].map(e=>Number.parseFloat(window.getComputedStyle(e).zIndex)).filter(e=>!Number.isNaN(e)),0)}export{r as g};
