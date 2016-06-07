module.exports = {
    tags: ['tradingtimes'],
    'tradingtimes page visit': function(browser) {
        if(browser.globals.isMobile) {
            browser
                .page.tradingtimes().mobileVisit()
                .end()
        } else {
            browser
                .page.tradingtimes().desktopVisit()
                .end()
        }
    }
};