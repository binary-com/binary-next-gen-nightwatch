module.exports = {
    'trade': function(browser) {
        browser
            .page.ticktrade().trade()
            .end()
    }
};