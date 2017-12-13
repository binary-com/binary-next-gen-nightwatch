module.exports = function(browser) {

	 return {
		goHome: function() {
			return browser
				 .url(browser.launchUrl)
				 .waitForElementVisible('body', 3000);
		},
	};
}
