import { join } from 'path';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import reactiveCML from '@aldinh777/rollup-plugin-reactive-cml';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const { startServer } = require('./server/app');

const mode = process.env.MODE || 'development';
if (mode === 'development') {
    startServer();
}
const devplugin = mode === 'development' ? livereload('dist') : terser();

export default {
    input: 'index.js',
    output: {
        file: 'dist/js/bundle.js',
        format: 'cjs'
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        reactiveCML({
            useDefaultLibs: true,
            parserOptions: {
                trimCML: false,
                relativeImports: {
                    includes: [join(__dirname, 'src/components'), join(__dirname, 'src/pages')]
                }
            },
        }),
        devplugin
    ]
};
