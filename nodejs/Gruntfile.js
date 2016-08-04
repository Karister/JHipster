'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
	
		uglify: {
	        my_target: {
	          files: {
	            '../src/main/resources/static/js/uglified/all.js': ['../src/main/resources/static/js/*.js'],
	            '../src/main/resources/static/js/uglified/libs.js': [
					'../src/main/resources/static/bower_components/angular/angular.min.js',
					'../src/main/resources/static/bower_components/angular-ui-router/release/angular-ui-router.min.js'
				]
	          }
	        }
	      }
	});
	
	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', [ 'uglify' ]);

};