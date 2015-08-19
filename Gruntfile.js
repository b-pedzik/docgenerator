module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-php');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    grunt.initConfig({
        php: {
            dist: {
                options: {
                    keepalive: true,
                    open: true,
                    port: 8085
                }
            }
        },
        sass: {
          development: {
            options: {
                sourceMap: true
            },
            files: {
                'templates/default/themes/isystems/css/isystems.css': 'sass/main.scss'
            }
          }
        },
        watch: {
            scripts: {
                files: ['sass/**/*.scss'],
                tasks: ['sass'],
                options: {
                    nospawn: true
                },
            },
        },
    });

    grunt.registerTask('default', ['php']);
};