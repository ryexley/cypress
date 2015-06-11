module.exports = function (grunt) {

    var config = {
        sass: {
            all: {
                options: {
                    style: "compact",
                    lineNumbers: true,
                    sourcemap: "none"
                },
                files: {
                    "build/assets/css/cypress.css": "source/assets/scss/cypress.scss"
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
            normalize: {
                files: [
                    {
                        cwd: "node_modules/normalize.css",
                        src: "normalize.css",
                        dest: "source/assets/scss/",
                        expand: true,
                        rename: function (dest, src) {
                            return dest + "_normalize.scss";
                        }
                    }
                ]
            },
            "icon-styles": {
                files: [
                    {
                        cwd: "source/assets/icons/icomoon",
                        src: "style.css",
                        dest: "source/assets/scss/",
                        expand: true,
                        rename: function (dest, src) {
                            return dest + "_icons.scss";
                        }
                    }
                ]
            }
        },
        watch: {
            css: {
                files: ["source/**/*.scss"],
                tasks: ["clean:build", "style", "copy:main"]
            },
            templates: {
                files: ["source/**/*.hbs"],
                tasks: ["clean:build", "style", "copy:main"]
            },
            js: {
                files: ["source/**/*.js"],
                tasks: ["clean:build", "style", "copy:main"]
            }
        },
        browserSync: {
            dev: {
                options: {
                    watchTask: true,
                    files: ["build/**/*.*"],
                    proxy: "localhost:2368",
                    port: 7000,
                    open: false
                }
            }
        }
    };

    grunt.initConfig(config);

    grunt.loadNpmTasks("grunt-browser-sync");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["clean:build", "style", "copy:main"]);
    grunt.registerTask("style", ["copy:normalize", "copy:icon-styles", "sass"]);
    grunt.registerTask("dev", ["browserSync", "watch"]);
};
