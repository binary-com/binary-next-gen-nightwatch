module.exports = {
    tags: ['statement'],
    'statement page visit': function(browser) {
        if(browser.globals.isMobile) {
            browser
                .page.statement().mobileVisit()
                .end()
        } else {
            browser
                .page.statement().desktopVisit()
                .end()
        }
    }
};