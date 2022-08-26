import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const pkg = require('./package.json');

export default {
    input: 'src/index.ts',
    output:
        {file: pkg.main, format: 'umd', name: 'proi-ui-icons'}
    ,
    plugins: [
        svelte(),
        resolve(),
        commonjs()
    ],
};