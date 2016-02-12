module.exports = {
    'visit': function(browser) {
        browser
            .page.portfolio().visit()
            .end()
    }
};