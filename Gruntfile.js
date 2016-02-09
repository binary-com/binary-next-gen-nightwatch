module.exports = function(grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        shell: {
            crossbrowser: {
                command: 'nightwatch -e firefox,chrome,ie,edge,android,ios'
            },

            browserstack: {
                command: 'nightwatch -e browserstack'
            },
        },
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-junit-report');

    grunt.registerTask('crossbrowser', ['shell:crossbrowser']);
    grunt.registerTask('browserstack', ['shell:browserstack']);
    grunt.registerTask('push', ['shell:push']);

};
