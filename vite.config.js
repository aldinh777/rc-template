import { defineConfig } from 'vite';
import { join } from 'path';
import rcml from './dev-lib/rollup-plugin-reactive-cml';

export default defineConfig({
    plugins: [
        rcml({
            autoImports: [
                'reactive-utils',
                'reactive-utils/collection'
            ],
            parserOptions: {
                relativeImports: {
                    includes: [join(__dirname, 'src')]
                }
            }
        })
    ]
});
