module.exports = {
    tags: ['dailyprices'],
    'visit': function(browser) {
        browser
            .page.dailyprices().visit()
            .end()
    }
};