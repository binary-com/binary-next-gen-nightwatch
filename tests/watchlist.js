module.exports = {
    tags: ['watchlist'],
    'watchlist page visit': function(browser) {
        if(browser.globals.isMobile) {
            console.log('this test is not available for the device')
            browser.end();
        } else {
            browser
                .page.watchlist().desktopVisit()
                .end()
        }
           
    }
    
};