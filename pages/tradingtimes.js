module.exports = function(browser) {
    var data = browser.globals.pages.tradingtimes;
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
                .verify.elementPresent('div[role="tab"][title="Trading Times"]', 1000)
                .click('div[role="tab"][title="Trading Times"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('div[role="tab"][title="Trading Times"][aria-selected="true"]')
                .verify.elementPresent('.market-submarket-picker')
                .verify.containsText('table','Opens')
                .verify.containsText('table','Closes')
                .verify.containsText('table','Settles')
        },
        desktopVisit: function() { 
            return browser
                .url(browser.globals.launch_url)
                .waitForElementVisible('body', 3000)
                .verify.elementNotPresent(login.emailTextBox)
                .waitForElementVisible('.workspace-panel', 1000)
                .verify.elementPresent('div[role="tab"][title="Trading Times"]')
                .click('div[role="tab"][title="Trading Times"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('div[role="tab"][title="Trading Times"][aria-selected="true"]')
                .verify.elementPresent('.market-submarket-picker')
                .verify.containsText('table','Opens')
                .verify.containsText('table','Closes')
                .verify.containsText('table','Settles')
                
        }
    };

}