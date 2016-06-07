module.exports = function(browser) {
    return {
        visit: function() {
            var login = browser.globals.pages.login;
            return browser
                .verifyLogin(login.username,function(result){
                    console.log("Login verification ");
                })
                .url(browser.globals.launch_url)
                .waitForElementVisible('body', 3000)
                .verify.elementNotPresent(login.emailTextBox)
                .click('label#hamburger-btn')
                .keys(['\uE015', '\uE006'])
                .waitForElementVisible('nav.sidebar', 1000)
                .verify.containsText('nav.sidebar','Trade')
                .verify.containsText('nav.sidebar','Open Positions')
                .verify.containsText('nav.sidebar','Statement')
                .verify.containsText('nav.sidebar','News')
        },
    };

}