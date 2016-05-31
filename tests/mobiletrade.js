module.exports = {
    tags: ['mobiletrade'],
    'visit': function(browser) {
        browser
            .page.mobiletrade().trade()
            .end()
    }
};