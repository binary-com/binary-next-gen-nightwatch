module.exports = {
    tags: ['assetindex'],
    'assetIndex page visit': function(browser) {
        if(browser.globals.isMobile) {
            browser
                .page.assetindex().mobileVisit()
                .end()
        } else {
            browser
                .page.assetindex().desktopVisit()
                .end()
        }
    }
};