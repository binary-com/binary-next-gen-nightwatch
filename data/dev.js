var self = module.exports = {
    isMobile: false,
    beforeEach: function (browser, done) {
        if (browser.globals.isMobile) 
        { 
            done(); 
            return; 
        }
        browser.execute(function(data) {
            return window.navigator.userAgent;
        }, [], function(result) {
            if(/Mobile/.test(result.value)) {
                browser.globals.isMobile = true;
            }
            done();
        });
    },
    pages:{
        login:{
            tokenInput: '#token-input',
            username : 'ressurectednightwatchnextgen@mailinator.com',
            password: '80B0FhnmqBEf',
            onAuthUrl: 'https://oauth.binary.com/oauth2/authorize?app_id=1006&l=EN', 
            emailTextBox: '#txtEmail',
            passwordTextBox: '#txtPass',
            signinButton: 'btnLogin',
            errorClass: '.error-msg',
        }

    },

};