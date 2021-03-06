module.exports = function(browser) {
    var login = browser.globals.pages.login;
    return {
        mobileVisit: function() {
            return browser
                .verifyLoginMobile(login.username,function(result){
                    console.log("Login verification ");
                })
                .verify.elementNotPresent(login.emailTextBox)
                .verify.visible('a.mobile-nav-btn[href="/news"]')
                .click('a.mobile-nav-btn[href="/news"]')
                .waitForElementVisible('body', 3000)
                .url(function(response){
                    this.assert.urlContains(response.value, 'news')
                })
                .verify.elementPresent('a.sidebar-btn')
                .assert.cssClassPresent('a.mobile-nav-btn[href="/news"]','active')
                .click('div[role="tab"][title="Binary TV"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('div[role="tab"][title="Binary TV"][aria-selected="true"]')
                .verify.elementNotPresent(login.emailTextBox)
                .verify.elementPresent('div.video-list')
                .verify.elementPresent('a.video-thumbnail')
        },
        desktopVisit: function() { 
            return browser
                .verifyLogin(login.username,function(result){
                    console.log("Login successfully ");
                })
                .verify.elementNotPresent(login.emailTextBox)
                .waitForElementVisible('.workspace-panel', 1000)
                .verify.elementPresent('div[role="tab"][title="Video"]')
                .click('div[role="tab"][title="Video"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('div[role="tab"][title="Video"][aria-selected="true"]')
                .verify.elementPresent('div.video-list')
                .verify.elementPresent('a.video-thumbnail')
                
        }
    };

}