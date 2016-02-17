module.exports = function(browser){
    return {
        trade: function(){
            var data = browser.globals.pages.ticktrade;
            var login = browser.globals.pages.login;
            return browser
                .verifyLogin(login.token,function(result){
                    console.log("Login verification ");
                })
                .url(data.url)
                .waitForElementVisible('body', 3000)
                .verify.elementNotPresent(login.tokenInput)
                .click(data.purchaseButton)
                .waitForElementVisible(data.modalClass, 3000)
                .verify.elementPresent(data.modalClass)

        },
    };
}