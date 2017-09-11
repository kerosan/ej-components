module.exports = {
    test: {
        files: [
            {
                src: [
                    'sources/**/*.ts',
                    'sources/**/*.tsx',
                ],
                dest: '.test'
            },
        ],
        options: {
            // fast: 'never',
            module: 'commonjs',
            target: 'es5',
            jsx: 'react',
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
            comments: false,
            declaration: false,
            sourceMap: false,
        },
    },
};
