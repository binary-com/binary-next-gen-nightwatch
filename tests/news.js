module.exports = {
    tags: ['news'],
    'mobile device visit': function(browser) {
        if(browser.globals.isMobile) {
            browser
                .page.news().mobileVisit()
                .end()
        } else {
            browser
                .page.news().desktopVisit()
                .end()
        }
    }
    
};