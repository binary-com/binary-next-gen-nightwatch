module.exports = {
    tags: ['settings'],
    'setting page visit': function(browser) {
        if(browser.globals.isMobile){
            browser
                .page.settings().visit()
                .end()
        } else {
            console.log('this test is not available for the device')
            browser.end();
        }
    }
};