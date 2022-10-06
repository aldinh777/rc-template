import { join } from 'path';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import reactiveCML from '@aldinh777/rollup-plugin-reactive-cml';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const { startServer } = require('./server/app');

const MODE = process.env.MODE || 'development';
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '777';

const devplugin = MODE === 'development' ? livereload('dist') : terser();

if (MODE === 'development') {
    startServer(PORT, HOST);
}

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
            }
        }),
        devplugin
    ]
};
