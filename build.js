import html from 'bun-plugin-html';

await Bun.build({
    entrypoints: ['./src/temp.html'],
    outdir: './static',
    minify: true,
    plugins: [
        html({
            inline: true,
        })
    ],
});