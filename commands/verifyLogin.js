exports.command = function(token,callback){
    callback = callback || function(){};
    var data = this.globals.pages.login;

    this
        .url(this.globals.logout_url)
        .waitForElementVisible('body', 5000)
        .url(this.globals.launch_url)
        .verify.elementPresent(data.tokenInput)
        .setValue(data.tokenInput, token)
        .click(data.signinButton)
        .pause(1000)
        .execute(function(){
            return (!!document.getElementById(data.tokenInput) == true ? true :  false );
        },[token],function(result){
            callback.call(this,result);
        });


}