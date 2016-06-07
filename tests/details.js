module.exports = {
    tags: ['details'],
    'details page visit': function(browser) {
        if(browser.globals.isMobile){
            console.log('This test is disabled for mobile device')
            browser.end()    
        } else {
            browser
                .page.details().visit()
                .end()
        }
    }
};