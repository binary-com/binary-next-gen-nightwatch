exports.command = function(username, callback){
    var element = this.globals.pages;
    callback = callback || function(){};
    this
        .waitForElementPresent(element.login.emailTextBox, 1000)
        .waitForElementPresent(element.login.passwordTextBox, 1000)
        .setValue(element.login.emailTextBox, username)
        .setValue(element.login.passwordTextBox, element.login.password)
        .waitForElementVisible('button[id=' + element.login.signinButton + ']', 1000)
        .click('button[id=' + element.login.signinButton + ']')
        .keys(['\uE015', '\uE006'])
        .pause(1000)
        .execute(function() {
            return (!!document.getElementById(element.login.emailTextBox));
        },[username], function(result){
            callback.call(this,result);
        });

    return this;
};
