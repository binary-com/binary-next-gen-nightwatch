module.exports = function(browser) {
    var login = browser.globals.pages.login;
    return {
        mobileVisit: function() { 
            return browser
                .verifyLogin(login.username,function(result){
                    console.log("Login successfully ");
                })
                .url(browser.globals.launch_url)
                .waitForElementVisible('body', 3000)
                .verify.elementNotPresent(login.emailTextBox)
                .verify.visible('.mobile-nav-btn')
                .click('a.mobile-nav-btn[href="/news-mobile"]')
                .waitForElementVisible('body', 3000)
                .url(function(response){
                    this.assert.urlContains(response.value, 'news-mobile')
                })
                .verify.elementPresent('a.sidebar-btn')
                .assert.cssClassPresent('a.mobile-nav-btn[href="/news-mobile"]','active')
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
                .url(browser.globals.launch_url)
                .waitForElementVisible('body', 3000)
                .verify.elementNotPresent(login.emailTextBox)
                .waitForElementVisible('.workspace-panel', 1000)
                .verify.elementPresent('div[role="tab"][title="News"]')
                .click('div[role="tab"][title="News"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('div[role="tab"][title="News"][aria-selected="true"]')
                .verify.elementPresent('a.article-preview')
        }
    };

}