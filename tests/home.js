module.exports = {
    tags: ['home'],
    'visit': function(browser) {
        browser
            .page.home().goHome()
            .end();
    }
};