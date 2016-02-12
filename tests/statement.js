module.exports = {
    'visit': function(browser) {
        browser
            .page.statement().visit()
            .end()
    }
};