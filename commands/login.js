exports.command = function(token, callback){
    const element = this.globals.pages.login;
    callback = callback || function(){};

    this
        .waitForElementPresent(element.tokenInput, 5000)
        .verify.elementPresent(element.tokenInput)
        .setValue(element.tokenInput, token)
        .click(element.signinButton)
        .pause(1000)
        .execute(function(token) {
            return (!!document.getElementById(element.tokenInput));
        },[token],function(result){
            callback.call(this,result);
        });

    return this;
};
