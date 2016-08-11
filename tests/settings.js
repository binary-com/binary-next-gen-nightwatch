module.exports = {
    tags: ['settings'],
    'setting page visit': function(browser) {
        if(browser.globals.isMobile){
            browser
                .page.settings().mobileVisit()
                .end()
        } else {
             browser
                .page.settings().desktopVisit()
                .end()
        }
    }
};