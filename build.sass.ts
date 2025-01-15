import type { BunPlugin } from 'bun';

const src_dir = './src';
const out_dir = './static';

const style: BunPlugin = {
    name: 'Sass Loader',
    async setup(build: any) {
        // implementation
        const sass = await import('sass');

        // when a .scss file is imported...
        build.onLoad({ filter: /\.scss$/ }, ({ path }) => {
            // read and compile it with the sass compiler
            const contents = sass.compile(path);
            const css = contents.css;

            return {
                loader: "text",
                contents: css,
            };
        });
    },
};

// start build main.css
globalThis.Bun.build({
    entrypoints: [`${src_dir}/scss/main.scss`],
    outdir: `${out_dir}/css`,
    naming: '[name]-[hash].css',
    plugins: [style],
});