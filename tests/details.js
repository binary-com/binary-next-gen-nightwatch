module.exports = {
    tags: ['details'],
    'details page visit': function(browser) {
        if(browser.globals.isMobile){
            browser
                .page.details().mobileVisit()
                .end()
        } else {
            browser
                .page.details().desktopVisit()
                .end()
        }
    }
};