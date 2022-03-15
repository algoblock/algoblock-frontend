const sassPlugin = require('esbuild-sass-plugin');


require('esbuild').build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outdir: 'public/build',
  minify: true,
  sourcemap: true,
  plugins: [sassPlugin.sassPlugin()],
  loader: {'.js': 'jsx', '.png': 'file', '.svg': 'file'},
}).catch(() => process.exit(1))
