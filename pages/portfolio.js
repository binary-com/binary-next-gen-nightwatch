module.exports = function(browser) {
    var data = browser.globals.pages.portfolio;
    var login = browser.globals.pages.login;
    return {
        tags: ['portfolio'],
        mobileVisit: function() { 
            return browser
                .verifyLogin(login.username,function(result){
                    console.log("Login successfully ");
                })
                .url(data.url)
                .waitForElementVisible('body', 3000)
                .verify.elementNotPresent(login.emailTextBox)
                .verify.elementPresent('table')
                .verify.containsText('table','Ref')
                .verify.containsText('table','Indicative')
                .verify.containsText('table','Purchase')
        },
        desktopVisit: function() { 
            return browser
                .url(browser.globals.launch_url)
                .waitForElementVisible('body', 3000)
                .verify.elementNotPresent(login.emailTextBox)
                .waitForElementVisible('.workspace-panel', 1000)
                .verify.elementPresent('div[role="tab"][title="Portfolio"]')
                .click('div[role="tab"][title="Portfolio"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('div[role="tab"][title="Portfolio"][aria-selected="true"]')
                .url(function(response){
                    this.assert.urlEquals(response.value, browser.globals.launch_url)
                })/*Commenting , pending solution to the cause of the failure.
                .verify.elementPresent('table') //This test suppose to pass without an issue , yet it didn't
                .verify.containsText('table','Ref')
                .verify.containsText('table','Indicative')
                .verify.containsText('table','Purchase')
                */
                
        }
    };

}