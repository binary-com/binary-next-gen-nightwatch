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
        .url(this.launchUrl)
        .login(username, callback)
        .waitForElementVisible('body', 1000)
        .execute(function(data){
            return (!!document.getElementById(data.emailTextBox));
        },[],function(result){
            return callback.call(this,result);
        });

        return this;

}