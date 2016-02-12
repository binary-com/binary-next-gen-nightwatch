module.exports = {
    'visit': function(browser) {
        browser
            .page.news().visit()
            .end()
    }
};