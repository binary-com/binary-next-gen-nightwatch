module.exports = {
    tags: ['assetindex'],
    'mobile device visit': function(browser) {
        browser
            .page.assetindex().mobileVisit()
    },
    'Desktop device visit': function(browser) {
        browser
            .page.assetindex().desktopVisit()
            .end()
    }
};