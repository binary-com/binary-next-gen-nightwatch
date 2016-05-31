module.exports = function(browser) {
    var data = browser.globals.pages.news;
    var login = browser.globals.pages.login;
    return {
        mobileVisit: function() { 
            return browser
                .verifyLogin(login.username,function(result){
                    console.log("Login successfully ");
                })
                .url(data.url)
                .waitForElementVisible('body', 3000)
                .verify.elementNotPresent(login.emailTextBox)
                .click('div[role="tab"][title="Daily Report"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('div[role="tab"][title="Daily Report"][aria-selected="true"]')
                .verify.elementPresent(data.articleClass)
        },
        desktopVisit: function() { 
            return browser
                .url(browser.globals.launch_url)
                .waitForElementVisible('body', 3000)
                .verify.elementNotPresent(login.emailTextBox)
                .waitForElementVisible('.workspace-panel', 1000)
                .verify.elementPresent('div[role="tab"][title="News"]')
                .click('div[role="tab"][title="News"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('div[role="tab"][title="News"][aria-selected="true"]')
                .verify.elementPresent(data.articleClass)
        }
    };

}