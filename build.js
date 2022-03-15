const sassPlugin = require('esbuild-sass-plugin');


require('esbuild').build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outdir: 'build',
  minify: true,
  plugins: [sassPlugin.sassPlugin()],
  loader: {'.js': 'jsx', '.png': 'file', '.svg': 'file'},
}).catch(() => process.exit(1))
