// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".website-navigation-home.svelte-11x3vxl{flex:1 0 auto}.website-navigation-pages.svelte-11x3vxl{flex:1 0 auto;text-align:end}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}