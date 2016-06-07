module.exports = function(browser) {

	 return {
		goHome: function() {
			return browser
				 .url(browser.globals.launch_url)
				 .waitForElementVisible('body', 3000);
		},
	};
}
