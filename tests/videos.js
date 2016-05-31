module.exports = {
    tags: ['videos'],
    'mobile device visit': function(browser) {
        browser
            .page.videos().mobileVisit()
    },
    'Desktop device visit': function(browser) {
        browser
            .page.videos().desktopVisit()
            .end()
    }
    
    
};