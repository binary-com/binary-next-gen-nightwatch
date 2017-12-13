module.exports = function(browser) {
    var login = browser.globals.pages.login;
    var global = browser.globals;
    var assetDataTable = '.asset-index-data > table';
    return {
        
        mobileVisit: function() { 
            return browser
                .verifyLoginMobile(login.username,function(browser,result){
                    console.log("Login successfully ");
                })
                .url(function(response){
                    this.assert.urlEquals(response.value, this.launchUrl)
                })
                .verify.elementNotPresent(login.emailTextBox)
                .click('a.mobile-nav-btn[href="/resources"]')
                .keys(['\uE015', '\uE006'])
                .pause(1000)
                .waitForElementVisible('body', 3000)
                .url(function(response){
                    this.assert.urlContains(response.value, 'resources')
                })
                .verify.elementPresent('a.sidebar-btn')
                .assert.cssClassPresent('a.mobile-nav-btn[href="/resources"]','active')
                .verify.elementPresent('div[role="tab"][title="Asset Index"]')
                .click('div[role="tab"][title="Asset Index"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('div[role="tab"][title="Asset Index"][aria-selected="true"]')
                .verify.elementPresent('.market-submarket-picker')
                .verify.containsText(assetDataTable,'Up/Down')
                .verify.containsText(assetDataTable,'Touch/No Touch')
                .verify.containsText(assetDataTable,'Ends In/Out')
        },
        desktopVisit: function() { 
            return browser
                .verifyLogin(login.username,function(result){
                    console.log("Login successfully ");
                })
                .verify.elementNotPresent(login.emailTextBox)
                .waitForElementVisible('div[id="right-tab-list"][role="tablist"]', 1000)
                .verify.elementPresent('div[role="tab"][title="Asset Index"]')
                .click('div[role="tab"][title="Asset Index"]')
                .keys(['\uE015', '\uE006'])
                .waitForElementVisible('div[role="tab"][title="Asset Index"][aria-selected="true"]', 1000)
                .verify.elementPresent('.market-submarket-picker')
                .verify.containsText(assetDataTable,'Up/Down')
                .verify.containsText(assetDataTable,'Touch/No Touch')
                .verify.containsText(assetDataTable,'Ends In/Out')
                
        }
    };

}