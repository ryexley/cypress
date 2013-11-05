module.exports = function (grunt) {

    var config = {
        stylus: {
            compile: {
                options: {
                    linenos: false
                },
                files: {
                    "build/assets/css/cypress.css": ["source/assets/css/cypress.styl"]
                }
            }
        },
        copy: {
            main: {
                files: [
                    { cwd: "source", src: "**/*.hbs", dest: "build/", expand: true },
                    { cwd: "source", src: "**/*.js", dest: "build/", expand: true },
                    { cwd: "source", src: "assets/fonts/*", dest: "build/", expand: true },
                    { cwd: "source", src: "assets/images/*", dest: "build/", expand: true }
                ]
            }
        },
        watch: {
            css: {
                files: ["source/**/*.styl"],
                tasks: ["stylus"]
            },
            templates: {
                files: ["source/**/*.hbs"],
                tasks: ["copy"]
            },
            js: {
                files: ["source/**/*.js"],
                tasks: ["copy"]
            }
        }
    };

    grunt.initConfig(config);

    grunt.loadNpmTasks("grunt-contrib-stylus");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["stylus", "copy"]);

};
