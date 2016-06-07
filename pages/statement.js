module.exports = function(browser) {
    var login = browser.globals.pages.login;
            
    return {
        mobileVisit: function() {
            return browser
                .verifyLogin(login.username,function(result){
                    console.log("Login verification ");
                })
                .url(browser.globals.launch_url)
                .waitForElementVisible('body', 3000)
                .verify.elementNotPresent(login.emailTextBox)
                .verify.visible('.mobile-nav-btn')
                .click('a.mobile-nav-btn[href="/statement-mobile"]')
                .waitForElementVisible('body', 3000)
                .url(function(response){
                    this.assert.urlContains(response.value, 'statement-mobile')
                })
                .verify.elementPresent('a.sidebar-btn')
                .assert.cssClassPresent('a.mobile-nav-btn[href="/statement-mobile"]','active')
                .verify.elementPresent('[role=tablist]')
                .verify.containsText('[role=tablist]','TODAY')
                .verify.elementPresent('div[role="tab"][title="Today"][aria-selected="true"]')
                .verify.elementPresent('div[role="tab"][title="Yesterday"][aria-selected="false"]')
                .click('div[role="tab"][title="Yesterday"]')
                .waitForElementVisible('body', 3000)
                .verify.elementPresent('div[role="tab"][title="Today"][aria-selected="false"]')
                .verify.elementPresent('div[role="tab"][title="Yesterday"][aria-selected="true"]')

        },
        desktopVisit: function() { 
            return browser
                .verifyLogin(login.username,function(result){
                        console.log("Login verification ");
                })
                .url(browser.globals.launch_url)
                .waitForElementVisible('body', 3000)
                .verify.elementNotPresent(login.emailTextBox)
                .waitForElementVisible('.workspace-panel', 1000)
                .verify.elementPresent('div[role="tab"][title="Statement"]')
                .click('div[role="tab"][title="Statement"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('div[role="tab"][title="Statement"][aria-selected="true"]')
                .verify.elementPresent('table')
                .verify.containsText('[role=tablist]','TODAY')
                
        }
    };

}