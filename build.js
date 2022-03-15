const sassPlugin = require('esbuild-sass-plugin');
const scssModules = require('esbuild-scss-modules-plugin');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

require('esbuild').build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outdir: 'public/build',
  // minify: true,
  sourcemap: true,
  plugins: [
    sassPlugin.sassPlugin({
      async transform(source) {
        const { css } = await postcss([autoprefixer]).process(source);
        return css;
      },
    }),
  ],
  loader: {'.js': 'jsx', '.png': 'file', '.svg': 'file'},
}).catch(() => process.exit(1))
