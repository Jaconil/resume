module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/* <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            build: {
                files: {
                    'js/dist/main.min.js': ['js/src/*.js'],
                    'js/dist/bootstrap-tooltip.min.js': ['lib/bootstrap/js/tooltip.js']
                }
            }
        },

        less: {
            options: {
                rootpath: '../'
            },
            build: {
                files: {
                    'css/src/main.css': ['css/src/less/main.less']
                }
            }
        },

        cssmin: {
            options: {
                banner: '/* <%= grunt.template.today("dd-mm-yyyy") %> */'
            },
            build: {
                files: {
                    'css/dist/main.min.css': ['css/src/*.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['uglify', 'less', 'cssmin']);
};
