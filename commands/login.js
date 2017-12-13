exports.command = function(username, callback){
    var data = this.globals.pages.login;
    var nextGenLoginBtn = 'a[class="signin-button btn-primary"]';
    var oauthBtn = 'button[type=submit]';
    callback = callback || function(){};
    this
        .waitForElementPresent(nextGenLoginBtn, 3000)
        .pause(1000)
        .click(nextGenLoginBtn)
        .keys(['\uE015', '\uE006'])
        .pause(1000)
        .waitForElementPresent(data.emailTextBox, 1000)
        .waitForElementPresent(data.passwordTextBox, 1000)
        .setValue(data.emailTextBox, username)
        .setValue(data.passwordTextBox, data.password)
        .waitForElementVisible(oauthBtn, 1000)
        .click(oauthBtn)
        .keys(['\uE015', '\uE006'])
        .pause(1000)
        .execute(function(data) {
            return (!!document.getElementById(data.emailTextBox));
        },[], function(result){
            return callback.call(this,result);
        });

    return this;
};
