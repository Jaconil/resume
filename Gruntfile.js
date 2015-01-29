var pkg = require('./package.json');

module.exports = function(grunt) {

    grunt.initConfig({
        // JS files configuration
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

        // CSS files configuration
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
        },

        // Deployment configuration
        shipit: {
            default: {
                workspace: '.tmp/' + pkg.name,
                repositoryUrl: pkg.repository.url,
                keepReleases: 3,
                servers: 'maxime-guihal.com'
            },
            prod: {
                deployTo: pkg.name
            },
            dev: {
                deployTo: 'dev/' + pkg.name
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-shipit');
    grunt.loadNpmTasks('shipit-deploy');

    grunt.registerTask('default', ['uglify', 'less', 'cssmin']);

    // Grunt-shipit configuration
    grunt.registerTask('npm:install', 'npm install', function () {
        grunt.shipit.remote('cd ' + grunt.shipit.releasePath + ' && npm install', this.async());
    });

    grunt.shipit.on('updated', function () {
        grunt.task.run(['npm:install']);
    });
};
