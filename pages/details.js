module.exports = function(browser) {
    var data = browser.globals.pages.portfolio;
    var login = browser.globals.pages.login;
    return {
        visit: function() { 
            return browser
                .verifyLogin(login.username,function(result){
                    console.log("Login successfully ");
                })
                .url(browser.globals.launch_url)
                .waitForElementVisible('body', 3000)
                .verify.elementNotPresent(login.emailTextBox)
                .waitForElementVisible('.workspace-panel', 1000)
                .verify.elementPresent('div[role="tab"][title="Details"]')
                .click('div[role="tab"][title="Details"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('div[role="tab"][title="Details"][aria-selected="true"]')
                .verify.elementPresent('.asset-details')
                .verify.elementPresent('table:first-of-type')
                .verify.containsText('.asset-details table:first-of-type','Opens')
                .verify.containsText('.asset-details table:first-of-type','Closes')
                .verify.containsText('.asset-details table:first-of-type','Settles')
                .verify.containsText('.asset-details table:first-of-type','Closes')
                .verify.containsText('.asset-details table:nth-of-type(2)','Trade Type')
                .verify.containsText('.asset-details table:nth-of-type(2)','Durations')
        }
    };

}