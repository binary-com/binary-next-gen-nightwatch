module.exports = function(browser) {
    var login = browser.globals.pages.login;
    return {
        mobileVisit: function() { 
            return browser
                .verifyLoginMobile(login.username,function(result){
                    console.log("Login successfully ");
                })
                .verify.elementNotPresent(login.emailTextBox)
                .click('a.mobile-nav-btn[href="/news"]')
                .keys(['\uE015', '\uE006'])
                .pause(1000)
                .waitForElementVisible('body', 3000)
                .url(function(response){
                    this.assert.urlContains(response.value, 'news')
                })
                .verify.elementPresent('a.sidebar-btn')
                .assert.cssClassPresent('a.mobile-nav-btn[href="/news"]','active')
                .click('div[role="tab"][title="Daily Report"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('div[role="tab"][title="Daily Report"][aria-selected="true"]')
                .verify.elementPresent('a.article-preview')
        },
        desktopVisit: function() { 
            return browser
                .verifyLogin(login.username,function(result){
                    console.log("Login successfully ");
                })
                .verify.elementNotPresent(login.emailTextBox)
                .waitForElementVisible('div[id="right-tab-list"][role="tablist"]', 1000)
                .verify.elementPresent('div[role="tab"][title="News"]')
                .click('div[role="tab"][title="News"]')
                .keys(['\uE015', '\uE006'])
                .pause(1000)
                .verify.elementPresent('div[role="tab"][title="News"][aria-selected="true"]')
                .verify.elementPresent('a.article-preview')
        }
    };

}