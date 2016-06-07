module.exports = {
    tags: ['home'],
    'home page visit': function(browser) {
        browser
            .page.home().goHome()
            .end();
    }
};