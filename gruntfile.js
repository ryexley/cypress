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
            },
            "icon-styles": {
                files: [
                    {
                        cwd: "source/assets/icons/icomoon",
                        src: "style.css",
                        dest: "source/assets/css/",
                        expand: true,
                        rename: function (dest, src) {
                            return dest + "icons.styl";
                        }
                    }
                ]
            }
        },
        watch: {
            css: {
                files: ["source/**/*.styl"],
                tasks: ["clean:build", "copy:icon-styles", "stylus", "copy:main"]
            },
            templates: {
                files: ["source/**/*.hbs"],
                tasks: ["clean:build", "stylus", "copy:main"]
            },
            js: {
                files: ["source/**/*.js"],
                tasks: ["clean:build", "stylus", "copy:main"]
            }
        }
    };

    grunt.initConfig(config);

    grunt.loadNpmTasks("grunt-contrib-stylus");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["clean:build", "copy:icon-styles", "stylus", "copy:main"]);

};
