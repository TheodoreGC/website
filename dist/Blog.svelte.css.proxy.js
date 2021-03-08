// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".container.svelte-3xego9{margin:2rem 0;min-height:200px;flex:1 0 auto}.blog-list-search-box.svelte-3xego9{background-color:transparent;color:var(--main-color);border:none;line-height:1.5rem;border-bottom:2px solid var(--highlight-color);width:fit-content}.blog-list-information.svelte-3xego9{display:flex;justify-content:space-between}.svelte-3xego9::-webkit-input-placeholder{color:var(--main-color)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}