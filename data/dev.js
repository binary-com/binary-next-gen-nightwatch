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
    launch_url: "https://app.binary.com",
    signout_url: "https://app.binary.com/signout",
    pages:{
        login:{
            tokenInput: '#token-input',
            username : 'test8@mailinator.com',
            password: 'Test1234',
            onAuthUrl: 'https://oauth.binary.com/oauth2/authorize?app_id=1006&l=EN', 
            emailTextBox: '#txtEmail',
            passwordTextBox: '#txtPass',
            signinButton: 'btnLogin',
            errorClass: '.errorfield',
        }

    },

};