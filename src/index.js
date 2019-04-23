alert("x");

setTimeout(() => import("./split.js"), 3000).then(({ default: val }) => alert(val));
