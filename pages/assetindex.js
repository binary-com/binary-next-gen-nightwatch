module.exports = function(browser) {
    var data = browser.globals.pages.assetindex;
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