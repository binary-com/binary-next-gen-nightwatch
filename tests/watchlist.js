module.exports = {
    'visit': function(browser) {
        browser
            .page.watchlist().visit()
            .end()
    }
};