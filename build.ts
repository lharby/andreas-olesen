import html from 'bun-plugin-html';

await Bun.build({
    entrypoints: ['./src/temp.html'],
    outdir: './static',
    plugins: [
        html({
            minifyOptions: {
                minifyCSS: true,
                minifyJS: true
            },
            inline: { 
                css: true,
                js: true
            }
        })
    ],
});