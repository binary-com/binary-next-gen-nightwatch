module.exports = {
    tags: ['videos'],
    'videos page visit': function(browser) {
        if(browser.globals.isMobile) {
            browser
                .page.videos().mobileVisit()
                .end()
        } else {
            browser
                .page.videos().desktopVisit()
                .end()
        }
           
    }
    
};