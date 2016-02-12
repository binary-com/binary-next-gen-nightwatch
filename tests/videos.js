module.exports = {
    'visit': function(browser) {
        browser
            .page.videos().visit()
            .end()
    }
};