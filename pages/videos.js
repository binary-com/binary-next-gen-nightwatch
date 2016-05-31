module.exports = function(browser) {
    var data = browser.globals.pages.videos;
    var login = browser.globals.pages.login;
    return {
        mobileVisit: function() {
            return browser
                .verifyLogin(login.username,function(result){
                    console.log("Login verification ");
                })
                .url(data.url)
                .waitForElementVisible('body', 3000)
                .waitForElementVisible('div[role="tab"][title="Binary TV"]', 1000)
                .click('div[role="tab"][title="Binary TV"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('div[role="tab"][title="Binary TV"][aria-selected="true"]')
                .verify.elementNotPresent(login.emailTextBox)
                .verify.elementPresent('ul.video-list')
                .verify.elementPresent('a.video-thumbnail')
        },
        desktopVisit: function() { 
            return browser
                .url(browser.globals.launch_url)
                .waitForElementVisible('body', 3000)
                .verify.elementNotPresent(login.emailTextBox)
                .waitForElementVisible('.workspace-panel', 1000)
                .verify.elementPresent('div[role="tab"][title="Video"]')
                .click('div[role="tab"][title="Video"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('div[role="tab"][title="Video"][aria-selected="true"]')
                .verify.elementPresent('ul.video-list')
                .verify.elementPresent('a.video-thumbnail')
                
        }
    };

}