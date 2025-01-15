import html from 'bun-plugin-html';

await Bun.build({
    entrypoints: ['./src/temp.html'],
    outdir: './static',
    plugins: [
        html({
            inline: { 
                css: true,
                js: true
            }
        })
    ],
});