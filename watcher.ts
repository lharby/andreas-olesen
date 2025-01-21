import { watch } from "fs";
import html from 'bun-plugin-html';

const watcher = watch(
  `${import.meta.dir}/src`,
  { recursive: true },
  (event, filename) => {
    Bun.build({
      entrypoints: ['./src/index-tmp.html'],
      outdir: './static',
      // minify: true,
      plugins: [
          html({
              minifyOptions: {
                  minifyCSS: true,
                  minifyJS: true,
                  minifyHTML: false,
                  removeComments: true
              },
              inline: { 
                  css: true,
                  js: true
              },
              suppressErrors: true
          })
      ],
  });

  console.log(`Detected ${event} in ${filename} (src)`);
  }
);

process.on('SIGINT', () => {
  watcher.close();
  process.exit(0);
});