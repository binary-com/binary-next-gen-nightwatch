module.exports = {
    tags: ['details'],
    'visit': function(browser) {
        browser
            .page.details().visit()
            .end()
    }
};