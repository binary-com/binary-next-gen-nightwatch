exports.command = function(username,callback){
    callback = callback || function(){};
    var data = this.globals.pages.login;
    var realityCheckModal = '.modal > div > button';
    var browser = this;
    
    this
        .url(this.globals.logout_url)
        .waitForElementVisible('body', 1000)
        .url(function(response){
            console.log('logout successfully', username)
            this.assert.urlEquals(response.value, data.OnAuthUrl)
        })
        .url(this.launchUrl)
        .login(username, callback)
        .pause(1500)
        .element('css selector', realityCheckModal, function(result){
            if (result.status != -1){
                // if reality check exists, close it
                this.click(realityCheckModal)
            }
        })
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