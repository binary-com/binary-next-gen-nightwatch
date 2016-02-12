module.exports = {
    'visit': function(browser) {
        browser
            .page.settings().visit()
            .end()
    }
};