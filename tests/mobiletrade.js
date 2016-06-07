module.exports = {
    tags: ['mobiletrade'],
    'mobile trading page visit': function(browser) {
        if(browser.globals.isMobile){
            browser
                .page.mobiletrade().trade()
                .end()
        } else {
            console.log('this test is not available for the device')
            browser.end();
        }
    }
};