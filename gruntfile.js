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
        clean: {
            build: ["build"]
        },
        copy: {
            main: {
                files: [
                    { cwd: "source", src: "**/*.hbs", dest: "build/", expand: true },
                    { cwd: "source", src: "**/*.js", dest: "build/", expand: true },
                    { cwd: "source", src: "assets/fonts/*", dest: "build/", expand: true },
                    { cwd: "source", src: "assets/images/*", dest: "build/", expand: true },
                    { cwd: "source", src: "package.json", dest: "build/", expand: true }
                ]
            }
        },
        watch: {
            css: {
                files: ["source/**/*.styl"],
                tasks: ["clean:build", "copy", "stylus"]
            },
            templates: {
                files: ["source/**/*.hbs"],
                tasks: ["clean:build", "copy", "stylus"]
            },
            js: {
                files: ["source/**/*.js"],
                tasks: ["clean:build", "copy", "stylus"]
            }
        }
    };

    grunt.initConfig(config);

    grunt.loadNpmTasks("grunt-contrib-stylus");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["stylus", "copy"]);

};
