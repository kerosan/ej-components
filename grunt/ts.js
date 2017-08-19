module.exports = {
	build: {
		files: [
			{
				src: [
					'sources/**/*.ts',
					'sources/**/*.tsx',
				],
				dest: 'build'
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
			declaration: true,
			sourceMap: false,
            lib: ["es2015", "dom"],
            types: ["node", "jest"],
            typeRoots: [
                "../node_modules/@types"
            ]
		},
	},
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
