module.exports = {
    tags: ['portfolio'],
    'Portfolio page visit': function(browser) {
        if(browser.globals.isMobile) {
            browser
                .page.portfolio().mobileVisit()
                .end()
        } else {
            browser
                .page.portfolio().desktopVisit()
                .end()
        }
        
    }
};