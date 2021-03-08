// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".card.svelte-1ec0fco{position:relative;margin:0.5em;border-bottom:1px solid var(--secondary-color)}.card.svelte-1ec0fco::after{clear:both;display:block}.card-title.svelte-1ec0fco{margin:0 0 0.5em 0;font-weight:lighter}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}