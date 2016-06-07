module.exports = function(browser){
    return {
        trade: function(){
            var login = browser.globals.pages.login;
            return browser
                
                .verifyLogin(login.username,function(result){
                    console.log("Login verification ");
                })
                .url(browser.globals.launch_url)
                .waitForElementVisible('body', 3000)
                .verify.elementNotPresent(login.emailTextBox)
                .click('.buy-btn')
                .waitForElementVisible('.trade-chart-container', 3000)
                .verify.visible('.contract-details-list')
                .verify.elementPresent('.trade-panel')
                .url(function(response){
                    this.assert.urlEquals(response.value, global.launch_url)
                })
                
        },
    };
}