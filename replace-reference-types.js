const replace = require('replace-in-file');
const options = {
    files: './dist/src/vg-custom-logo.d.ts',
    from: /import \{ VgAPI \} from \"videogular2\/compiled\/src\/core\/services\/vg-api\";/g,
    to: 'const VgAPI = require("videogular2/compiled/src/core/services/vg-api");',
};
replace(options)
    .then(changedFiles => {
        console.log('Modified files:', changedFiles);
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });