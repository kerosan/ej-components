module.exports = {
    default: {
        options: {
            sourceMap: true,
            includePaths: ['style/']
        },
        // src: 'sources/src/*.scss',
        // dest: 'components.css'
        files: [{
            // expand: false,
            // cwd: 'sources/src/components/',
            src: 'sources/src/index.scss',
            dest: 'components.css',
            // ext: '.css',
        }]
    }
};
