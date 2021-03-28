// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".container.svelte-zwvxy3{margin:2rem 0;min-height:200px;flex:1 0 auto}.blog-list-search-box.svelte-zwvxy3{background-color:transparent;color:var(--main-color);border:none;line-height:1.5rem;border-bottom:2px solid var(--highlight-color);width:fit-content}.blog-list-information.svelte-zwvxy3{display:flex;justify-content:space-between}.svelte-zwvxy3::-webkit-input-placeholder{color:var(--main-color)}.blog-list-hidden.svelte-zwvxy3{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}