'use strict';

module.exports = function (grunt) {
	// Load grunt tasks automatically
	grunt.loadNpmTasks('grunt-notify');

	require('load-grunt-config')(grunt, {
		jitGrunt: {
		}
	});

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	grunt.registerTask('test', [
		'clean:test',
		'tslint:default',
		'ts:test',
		'run:jest',
	]);

    grunt.registerTask('build', [
        'clean:build',
        'tslint:default',
        'ts:build',
        'sass',
        'run:jest',
    ]);
};
