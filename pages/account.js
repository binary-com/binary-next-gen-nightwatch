module.exports = function(browser) {
    var data = browser.globals;
    return {
        loginSuccess: function() {
            var username = data.pages.login.username;
      
            return  browser
                    .url(data.launch_url)
                    .waitForElementVisible('body', 3000)
                    .url(function(response){
                        this.assert.urlEquals(response.value, data.pages.login.OnAuthUrl)
                    })
                    .login(username, function(result){
                        console.log('login successfully');
                    })
                    .url(function(response){
                        this.assert.urlContains(response.value, 'redirect')
                    })
                    .verify.elementNotPresent(data.pages.login.errorClass)
        },
        loginFailure: function(){
            var login = browser.globals.pages.login;

            return  browser
                    .url(data.launch_url)
                    .waitForElementVisible('body', 3000)
                    .url(function(response){
                        this.assert.urlEquals(response.value, data.pages.login.OnAuthUrl)
                    })
                    .login('wrongUser@gmail.com', function(result){
                        console.log('The login failed : ');
                    })
                    .waitForElementVisible('body', 1000)
                    .verify.elementPresent(login.errorClass)
                    .verify.containsText(login.errorClass,'Invalid email and password combination.')
                    .url(function(response){
                        this.assert.urlEquals(response.value, data.pages.login.OnAuthUrl) //The assert on the verify the login failure
                    })
        }

    };

}