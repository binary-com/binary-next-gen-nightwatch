module.exports = {
    tags: ['statement'],
    'mobile device visit': function(browser) {
        browser
            .page.statement().mobileVisit()
    },
    'Desktop device visit': function(browser) {
        browser
            .page.statement().desktopVisit()
            .end()
    }
};