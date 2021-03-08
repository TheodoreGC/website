// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "svelte-virtual-list-viewport.svelte-93y3o6{position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch;display:block}svelte-virtual-list-contents.svelte-93y3o6,svelte-virtual-list-row.svelte-93y3o6{display:block}svelte-virtual-list-row.svelte-93y3o6{overflow:hidden}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}