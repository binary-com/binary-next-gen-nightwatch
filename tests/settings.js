module.exports = {
    tags: ['settings'],
    'visit': function(browser) {
        browser
            .page.settings().visit()
            .end()
    }
};