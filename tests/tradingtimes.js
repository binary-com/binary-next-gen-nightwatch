module.exports = {
    tags: ['tradingtimes'],
    'mobile device visit': function(browser) {
        browser
            .page.tradingtimes().mobileVisit()
    },
    'Desktop device visit': function(browser) {
        browser
            .page.tradingtimes().desktopVisit()
            .end()
    }
};