import sourcemaps from 'rollup-plugin-sourcemaps';
import license from 'rollup-plugin-license';
import replace from 'rollup-plugin-replace';

const path = require('path');

export default {
    output: {
        format: 'es',
        sourcemap: true
    },
    plugins: [
        replace({"import { VgAPI } from": "var VgAPI = require(" }),
        replace({"vg-api": 'vg-api");//'}),
        replace({"import { VgCoreModule } from": "var VgCoreModule = require(" }),
        replace({"core/core": 'core/core");//'}),
        sourcemaps(),
        license({
            sourceMap: true,

            banner: {
                file: path.join(__dirname, 'license-banner.txt'),
                encoding: 'utf-8',
            }
        })
    ],
    onwarn: () => { return }
}
