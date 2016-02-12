module.exports = {
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
