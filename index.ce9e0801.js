var t=document.querySelectorAll("span.population"),n=document.querySelector("span.average-population"),e=document.querySelector("span.total-population"),o=Array.from(t).map(function(t){return+t.textContent.split(",").join("")}),r=o.reduce(function(t,n){return t+n},0),a=r/o.length;e.textContent="".concat(r.toLocaleString("en-US")),n.textContent="".concat(Math.round(a).toLocaleString("en-US"));
//# sourceMappingURL=index.ce9e0801.js.map