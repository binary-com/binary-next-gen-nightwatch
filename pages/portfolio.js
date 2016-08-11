module.exports = function(browser) {
    var login = browser.globals.pages.login;
    return {
        tags: ['portfolio'],
        mobileVisit: function() { 
            return browser
                .verifyLoginMobile(login.username,function(result){
                    console.log("Login successfully ");
                })
                .verify.elementNotPresent(login.emailTextBox)
                .click('a.mobile-nav-btn[href="/portfolio"]')
                .keys(['\uE015', '\uE006'])
                .pause(1000)
                .waitForElementVisible('body', 3000)
                .url(function(response){
                    this.assert.urlContains(response.value, 'portfolio')
                })
                .verify.elementPresent('a.sidebar-btn')
                .assert.cssClassPresent('a.mobile-nav-btn[href="/portfolio"]','active')
        },
        desktopVisit: function() { 
            return browser
                .verifyLogin(login.username,function(result){
                    console.log("Login successfully ");
                })
                .verify.elementNotPresent(login.emailTextBox)
                .waitForElementVisible('div[id="right-tab-list"][role="tablist"]', 1000)
                .verify.elementPresent('div[role="tab"][title="Portfolio"]')
                .click('div[role="tab"][title="Portfolio"]')
                .keys(['\uE015', '\uE006'])
                .pause(1000)
                .verify.elementPresent('div[role="tab"][title="Portfolio"][aria-selected="true"]')
                .url(function(response){
                    this.assert.urlEquals(response.value, browser.globals.launch_url)
                })
                
                
        }
    };

}