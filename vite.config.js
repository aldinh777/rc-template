import { defineConfig } from 'vite';
import { join } from 'path';
import rcml from '@aldinh777/rollup-plugin-reactive-cml';

export default defineConfig({
    plugins: [
        rcml({
            useDefaultLibs: true,
            parserOptions: {
                trimCML: true,
                relativeImports: {
                    includes: [join(__dirname, 'src/components'), join(__dirname, 'src/pages')]
                }
            }
        })
    ]
});
