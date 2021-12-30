import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

const pkg = require('./package.json');

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    plugins: [
      svelte({
        emitCss: false
      }),
      resolve(),
      commonjs()
    ]
  },
  {
    input: 'src/proi-ui.css',
    output: { file: 'dist/proi-ui.css', format: 'es' },
    plugins: [
      postcss({
        modules: true,
        extract: true
      })
    ]
  }
];
