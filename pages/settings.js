module.exports = function(browser) {
    var login = browser.globals.pages.login;
    return {
        mobileVisit: function() {
            return browser
                .verifyLoginMobile(login.username,function(result){
                    console.log("Login successfully ");
                })
                .verify.elementNotPresent(login.emailTextBox)
                .verify.elementPresent('a.sidebar-btn[href="/settings"]')
                .click('label#hamburger-btn')
                .keys(['\uE015', '\uE006'])
                .pause(1000)
                .click('a.sidebar-btn[href="/settings"]')
                .keys(['\uE015', '\uE006'])
                .pause(1000)
                .waitForElementVisible('body', 3000)
                .url(function(response){
                    this.assert.urlContains(response.value, 'settings')
                })
                .verify.elementPresent('a.sidebar-btn')
                .assert.cssClassPresent('a.sidebar-btn[href="/settings"]','active')

                //verify subtabs
                .verify.elementPresent('.settings-card div[role="tab"][title="Personal"]')
                .verify.elementPresent('.settings-card div[role="tab"][title="Personal"][aria-selected="true"]')

                //Password Tab
                .verify.elementPresent('.settings-card div[role="tab"][title="Security"]')
                .click('.settings-card div[role="tab"][title="Security"]')
                .keys(['\uE015', '\uE006'])
                .pause(1000)
                .verify.elementPresent('.settings-card div[role="tab"][title="Security"][aria-selected="true"]')

                //Self Exclusion
                .verify.elementPresent('.settings-card div[role="tab"][title="Self Exclusion"]')
                .click('.settings-card div[role="tab"][title="Self Exclusion"]')
                .keys(['\uE015', '\uE006'])
                .pause(1000)
                .verify.elementPresent('.settings-card div[role="tab"][title="Self Exclusion"][aria-selected="true"]')

                //Limits
                .verify.elementPresent('.settings-card div[role="tab"][title="Limits"]')
                .click('.settings-card div[role="tab"][title="Limits"]')
                .keys(['\uE015', '\uE006'])
                .pause(1000)
                .verify.elementPresent('.settings-card div[role="tab"][title="Limits"][aria-selected="true"]')
        },
        desktopVisit : function() {
            return browser
                .verifyLogin(login.username,function(result){
                    console.log("Login verification ");
                })
                .verify.elementNotPresent(login.emailTextBox)
                .waitForElementVisible('.workspace-panel', 1000)
                .verify.elementPresent('div[role="tab"][title="Settings"]')
                .click('div[role="tab"][title="Settings"]')
                .keys(['\uE015', '\uE006'])
                .verify.elementPresent('div[role="tab"][title="Settings"][aria-selected="true"]')

                //verify subtabs
                .verify.elementPresent('.settings-card div[role="tab"][title="Personal"]')
                .verify.elementPresent('.settings-card div[role="tab"][title="Personal"][aria-selected="true"]')

                //Password Tab
                .verify.elementPresent('.settings-card div[role="tab"][title="Security"]')
                .click('.settings-card div[role="tab"][title="Security"]')
                .keys(['\uE015', '\uE006'])
                .pause(1000)
                .verify.elementPresent('.settings-card div[role="tab"][title="Security"][aria-selected="true"]')

                //Self Exclusion
                .verify.elementPresent('.settings-card div[role="tab"][title="Self Exclusion"]')
                .click('.settings-card div[role="tab"][title="Self Exclusion"]')
                .keys(['\uE015', '\uE006'])
                .pause(1000)
                .verify.elementPresent('.settings-card div[role="tab"][title="Self Exclusion"][aria-selected="true"]')

                //Limits
                .verify.elementPresent('.settings-card div[role="tab"][title="Limits"]')
                .click('.settings-card div[role="tab"][title="Limits"]')
                .keys(['\uE015', '\uE006'])
                .pause(1000)
                .verify.elementPresent('.settings-card div[role="tab"][title="Limits"][aria-selected="true"]')
        }
    };

}