exports.command = (token, callback) => {
    const element = {
        tokenInput: '#token-input',
        signinButton: 'button.btn-primary',
        languageSelect: 'select',
        createAccountButton: 'a.btn-secondary',
    };

    this
        .waitForElementPresent(element.tokenInput, 5000)
        .setValue(tokenInput, token)
        .click(element.signinButton);

    if (typeof callback === 'function') {
        callback.call(self);
    }

    return this;
};
