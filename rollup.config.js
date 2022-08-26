import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

const pkg = require('./package.json');

export default [
  {
    input: 'src/index.ts',
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
        preprocess: autoPreprocess(),
        emitCss: false
      }),
      typescript({ sourceMap: true }),
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
