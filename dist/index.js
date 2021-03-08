import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import App from './App.svelte.js';

const appConfig = { target: document.body };
const app = new App(appConfig);

export default app;

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
  undefined /* [snowpack] import.meta.hot */ .dispose(() => {
    app.$destroy();
  });
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('theme', 'dark');
}
