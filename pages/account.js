module.exports = function(browser) {
    var data = browser.globals;
    return {
        loginSuccess: function() {
            var username = data.pages.login.username;
      
            return  browser
                    .url(browser.launchUrl)
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
                    .url(browser.launchUrl)
                    .waitForElementVisible('body', 3000)
                    .url(function(response){
                        this.assert.urlEquals(response.value, data.pages.login.OnAuthUrl)
                    })
                    .login('wrongUser@gmail.com', function(result){
                        console.log('The login failed : ');
                    })
                    .waitForElementVisible('body', 1000)
                    .verify.elementPresent(login.errorClass)
                    .verify.containsText(login.errorClass, 'Incorrect email or password.')
                    .url(function(response){
                        this.assert.urlEquals(response.value, data.pages.login.OnAuthUrl) //The assert on the verify the login failure
                    })
        }

    };

}