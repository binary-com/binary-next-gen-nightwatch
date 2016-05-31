module.exports = {
    tags: ['account'],
    'Login Success': function(browser) {
        browser
            .page.account().loginSuccess()
            .end();
    },
    'Login Fail': function(browser){
        browser
            .page.account().loginFailure()
            .end()
    }
};
