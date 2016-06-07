module.exports = function(browser) {
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
                .verify.elementPresent('div[role="tab"][title="Daily Prices"]')
                .click('div[role="tab"][title="Daily Prices"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('div[role="tab"][title="Daily Prices"][aria-selected="true"]')
                .verify.elementPresent('table')
                .verify.containsText('table','Date')
                .verify.containsText('table','Open')
                .verify.containsText('table','High')
                
        }
    };

}