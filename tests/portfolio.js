module.exports = {
    tags: ['portfolio'],
    'mobile device visit': function(browser) {
        browser
            .page.portfolio().mobileVisit()
    },
    'Desktop device visit': function(browser) {
        browser
            .page.portfolio().desktopVisit()
            .end()
    }
};