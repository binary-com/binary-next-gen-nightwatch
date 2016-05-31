module.exports = function(browser){
    return {
        trade: function(){
            var data = browser.globals.pages.ticktrade;
            var login = browser.globals.pages.login;
            return browser
                .verifyLogin(login.username,function(result){
                    console.log("Login verification ");
                })
                .url(data.url)
                .waitForElementVisible('body', 3000)
                .verify.elementNotPresent(login.emailTextBox)
                .click(data.purchaseButton)
                .waitForElementVisible('.trade-chart-container', 3000)
                .verify.elementPresent('.trade-panel')
                .url(function(response){
                    this.verify.urlContains(response.value, data.url)
                })
                
        },
    };
}