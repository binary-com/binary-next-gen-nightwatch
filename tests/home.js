module.exports = {
    'visit': function(browser) {
        browser
            .page.home().goHome()
            .end();
    }
};