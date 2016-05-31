module.exports = function(browser) {
    var data = browser.globals.pages.statement;
    var login = browser.globals.pages.login;
            
    return {
        mobileVisit: function() {
            return browser
                .verifyLogin(login.username,function(result){
                    console.log("Login verification ");
                })
                .url(data.url)
                .waitForElementVisible('body', 3000)
                .verify.elementNotPresent(login.emailTextBox)
                .verify.elementPresent('[role=tablist]')
                .verify.containsText('[role=tablist]','TODAY')
        },
        desktopVisit: function() { 
            return browser
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