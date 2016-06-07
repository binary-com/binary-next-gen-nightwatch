module.exports = function(browser) {
    var login = browser.globals.pages.login;
    var global = browser.globals;
    return {
        
        mobileVisit: function() { 
            return browser
                .verifyLogin(login.username,function(browser,result){
                    console.log("Login successfully ");
                })
                .url(global.launch_url)
                .waitForElementVisible('body', 3000)
                .url(function(response){
                    this.assert.urlEquals(response.value, global.launch_url)
                })
                .verify.elementNotPresent(login.emailTextBox)
                .verify.visible('.mobile-nav-btn')
                .click('a.mobile-nav-btn[href="/resources-mobile"]')
                .waitForElementVisible('body', 3000)
                .url(function(response){
                    this.assert.urlContains(response.value, 'resources-mobile')
                })
                .verify.elementPresent('a.sidebar-btn')
                .assert.cssClassPresent('a.mobile-nav-btn[href="/resources-mobile"]','active')
                .verify.elementPresent('div[role="tab"][title="Asset Index"]')
                .click('div[role="tab"][title="Asset Index"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('div[role="tab"][title="Asset Index"][aria-selected="true"]')
                .verify.elementPresent('.market-submarket-picker')
                .verify.containsText('table','Up/Down')
                .verify.containsText('table','Touch/No Touch')
                .verify.containsText('table','Ends In/Out')
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
                .verify.elementPresent('div[role="tab"][title="Asset Index"]')
                .click('div[role="tab"][title="Asset Index"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('div[role="tab"][title="Asset Index"][aria-selected="true"]')
                .verify.elementPresent('.market-submarket-picker')
                .verify.containsText('table','Up/Down')
                .verify.containsText('table','Touch/No Touch')
                .verify.containsText('table','Ends In/Out')
                
        }
    };

}