'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		uglify: {
			my_target: {
				files: {
					'../src/main/resources/static/js/uglified/all.js': [
						'../src/main/resources/static/js/service/services.js',
						'../src/main/resources/static/js/service/*Service.js',
						'../src/main/resources/static/js/controller/controllers.js',
						'../src/main/resources/static/js/controller/*Controller.js',
						'../src/main/resources/static/js/directive/directives.js',
						'../src/main/resources/static/js/directive/*Directive.js',
						'../src/main/resources/static/js/app.js'
					],
					'../src/main/resources/static/js/uglified/libs.js': [
						'../src/main/resources/static/bower_components/angular/angular.min.js',
						'../src/main/resources/static/bower_components/angular-ui-router/release/angular-ui-router.min.js'
					]
				}
			}
		},

		clean: {
			build: {
				src: [
					'../src/main/resources/static/js/uglified',
					'../src/main/resources/static/bower_components'
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
};