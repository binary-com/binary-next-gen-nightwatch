//  New client can log into account after already logging out

var utils = require('../utils');

module.exports = {
    'login': function(browser) {
        browser
            .page.home().goHome()
            // .login(token)
        .end();
    }
};
