export default {
    esm: true,  // Optional, depends on your project setup
    plugins: [
      {
        name: 'sass',
        setup({ onResolve, onLoad }) {
          onLoad({ filter: /\.scss$/ }, async ({ path }) => {
            const sass = require('sass');
            const result = sass.renderSync({ file: path });
            return {
              contents: result.css.toString(),
              loader: 'css',
            };
          });
        },
      },
    ],
  };