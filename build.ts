import html from 'bun-plugin-html';

await Bun.build({
    entrypoints: ['./src/index-tmp.html'],
    outdir: './static',
    plugins: [
        html({
            minifyOptions: {
                minifyCSS: true,
                minifyJS: true,
                removeComments: true
            },
            inline: { 
                css: true,
                js: true
            }
        })
    ],
});