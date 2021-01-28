const { parse } = require('markdown-wasm/dist/markdown.node.js');
const fs = require('fs');

module.exports = function (snowpackConfig, pluginOptions = {}) {
  return {
    name: 'markdown-parser',
    resolve: {
      input: ['.md', '.markdown'],
      output: ['.html']
    },
    load: ({ filePath }) => {
      const markdown = fs.readFileSync(filePath, 'utf-8');
      const code = parse(markdown, pluginOptions);
      return {
        '.html': `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="description" content="Theodore Garson's Website" />
              <link rel="stylesheet" type="text/css" href="index.css">
              <link rel="shorcut icon" type="image/x-icon" href="favicon.ico">
              <title>Theodore Garson's website</title>
            </head>
            <body>
              <nav class="website-nav">
                <a href="./">Home</a> |
                <a class="disabled" href="./blog/">Blog</a>
              </nav>
              <div class="main-content">${code}</div>
              <footer>&copy; Copyright 2021 Theodore Garson</footer>
              <script type="module" src="index.js"></script>
            </body>
          </html>
        `
      }
    }
  };
}
