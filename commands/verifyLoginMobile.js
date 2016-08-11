exports.command = function(username,callback){
    callback = callback || function(){};
    var data = this.globals.pages.login;

    this
        .url(this.globals.logout_url)
        .waitForElementVisible('body', 1000)
        .url(function(response){
            console.log('logout successfully', username)
            this.assert.urlEquals(response.value, data.OnAuthUrl)
        })
        .url(this.globals.launch_url)
        .waitForElementPresent('a[class="signin-button btn-primary"]', 1000)
        .click('a[class="signin-button btn-primary"]')
        .keys(['\uE015', '\uE006'])
        .pause(1000)
        .waitForElementVisible(data.emailTextBox, 1000)
        .waitForElementVisible(data.passwordTextBox, 1000)
        .setValue(data.emailTextBox, username)
        .setValue(data.passwordTextBox, data.password)
        .waitForElementVisible('button[id=' + data.signinButton + ']', 1000)
        .click('button[id=' + data.signinButton + ']')
        .keys(['\uE015', '\uE006'])
        .pause(1000)
        .waitForElementVisible('body', 1000)
        .execute(function(data){
            return (!!document.getElementById(data.emailTextBox));
        },[],function(result){
            return callback.call(this,result);
        });

        return this;

}