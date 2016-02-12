module.exports = function(browser) {
    return {
        loginSuccess: function() {
            var data = browser.globals;
            return  browser
                    .url(data.launch_url)
                    .login(data.token,function(result){
                        console.log("The login is successful");
                    })
                    .verify.elementNotPresent('.errorfield')
                    .verify.elementPresent('#header')
        },
        loginFailure: function(){
            var data = browser.globals;
            var login = browser.globals.pages.login;

            return  browser
                    .url(data.launch_url)
                    .login('WrongToken',function(result){
                        console.log("The login failed : ");
                    })
                    .verify.elementPresent(login.errorClass)
                    .verify.containsText('.errorfield span','Access denied')
                    .verify.elementNotPresent('#header')
        }

    };

}