module.exports = function (grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        shell: {
           crossbrowser: {
        	   command: 'nightwatch -e firefox,chrome,ie,android,ios -g tests/pom'
            },

            browserstack: {
            	command: 'nightwatch -e browserstack -g tests/pom'

            },

            pom: {
            	command: 'nightwatch -e account_bs,myaccount_bs,cashier_bs,resources_bs,trading_bs'
            },
        },
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-junit-report');

    grunt.registerTask('pom', ['shell:pom']);
    grunt.registerTask('crossbrowser', ['shell:crossbrowser']);
    grunt.registerTask('browserstack', ['shell:browserstack']);
    grunt.registerTask('push', ['shell:push']);

};
