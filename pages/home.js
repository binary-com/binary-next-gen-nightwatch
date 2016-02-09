module.exports = function(browser) {
	 var element = {
	     tokenInput: '#token-input',
	     signinButton: 'button.btn-primary',
		 languageSelect: 'select',
	     createAccountButton: 'a.btn-secondary',
	 };

	 browser.launch_url = "https://app.binary.com";

	 return {
		goHome: function() {
			return browser
				 .url(browser.launch_url)
				 .waitForElementVisible('body', 3000);
		},
	};
}
