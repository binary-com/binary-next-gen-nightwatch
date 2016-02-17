module.exports = {
    'visit': function(browser) {
        browser
            .page.workspace().visit()
            .end()
    }
};