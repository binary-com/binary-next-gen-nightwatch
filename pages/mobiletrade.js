module.exports = function(browser){
    return {
        trade: function(){
            var login = browser.globals.pages.login;
            return browser
                .verifyLoginMobile(login.username,function(result){
                    console.log("Login verification ");
                })
                .verify.elementNotPresent(login.emailTextBox)
                .click('.buy-btn')
                .keys(['\uE015', '\uE006'])
                .pause(1000)
                .waitForElementVisible('p.errorfield', 3000)
                .verify.elementPresent('.trade-panel')
                .url(function(response){
                    this.assert.urlEquals(response.value, global.launch_url)
                })
                
        },
    };
}