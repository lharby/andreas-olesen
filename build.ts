import html from 'bun-plugin-html';

const runBuild = await Bun.build({
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

export {
    runBuild
}