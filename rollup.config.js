import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';
import replace from 'rollup-plugin-replace';

/**
 * Add here external dependencies that actually you use.
 * 
 * About RxJS
 * Each RxJS functionality that you use in the library must be added as external dependency.
 * - For main classes use 'Rx':
 *      e.g. import { Observable } from 'rxjs/Observable'; => 'rxjs/Observable': 'Rx'
 * - For observable methods use 'Rx.Observable':
 *      e.g. import 'rxjs/add/observable/merge'; => 'rxjs/add/observable/merge': 'Rx.Observable'
 *      or for lettable operators:
 *      e.g. import { merge } from 'rxjs/observable/merge'; => 'rxjs/observable/merge': 'Rx.Observable'
 * - For operators use 'Rx.Observable.prototype':
 *      e.g. import 'rxjs/add/operator/map'; => 'rxjs/add/operator/map': 'Rx.Observable.prototype'
 *      or for lettable operators:
 *      e.g. import { map } from 'rxjs/operators'; => 'rxjs/operators': 'Rx.Observable.prototype'
 */
const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': '@angular/common',
    '@angular/forms': '@angular/forms',
    '@angular/common': 'ng.common',
    'rxjs/Observable': 'Rx',
    'rxjs/Observer': 'Rx',
    'videogular2/core': 'videogular2/core'
};

export default {
    external: Object.keys(globals),
    plugins: [
        replace({"import { VgAPI } from": "var VgAPI = require(" }),
        replace({"vg-api": "vg-api');//"}),
        replace({"import { VgCoreModule } from": "var VgCoreModule = require(" }),
        replace({"core/core": "core/core');//"}),
        resolve(),
        sourcemaps()],
    onwarn: () => { return },
    output: {
        format: 'umd',
        name: 'ng.angularLibraryStarter',
        globals: globals,
        sourcemap: true,
        exports: 'named'
    }
}
