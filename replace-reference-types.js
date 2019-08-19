const replace = require('replace-in-file');
let options = {
    files: './dist/src/vg-custom-logo.d.ts',
    from: /import \{ VgAPI \} from \"videogular2\/compiled\/src\/core\/services\/vg-api\";/g,
    to: '',
};
replace(options)
    .then(changedFiles => {
        options = {
            files: './dist/src/vg-custom-logo.d.ts',
            from: /VgAPI/g,
            to: 'any',
        };
        replace(options)
            .then(changedFiles => {
                console.log('Modified files:', changedFiles);
            })
            .catch(error => {
                console.error('Error occurred:', error);
            });
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });
