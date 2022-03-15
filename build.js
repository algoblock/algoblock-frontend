const sassPlugin = require('esbuild-sass-plugin');
const scssModules = require('esbuild-scss-modules-plugin');

require('esbuild').build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outdir: 'public/build',
  minify: true,
  sourcemap: true,
  plugins: [scssModules.ScssModulesPlugin()],
  loader: {'.js': 'jsx', '.png': 'file', '.svg': 'file'},
}).catch(() => process.exit(1))
