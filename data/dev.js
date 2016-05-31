module.exports = {
    token: "Smuz4jQ0RZr99rD",
    launch_url: "https://app.binary.com",
    signout_url: "https://app.binary.com/#/signout",
    isMobile: false,
    pages:{
        login:{
            tokenInput: '#token-input',
            username : 'test8@mailinator.com',
            password: 'Test1234',
            onAuthUrl: 'https://oauth.binary.com/oauth2/authorize?app_id=1006&l=EN', 
            emailTextBox: '#txtEmail',
            passwordTextBox: '#txtPass',
            signinButton: 'btnLogin',
            languageSelect: 'select',
            errorClass: '.errorfield',
            createAccountButton: 'a.btn-secondary',
            token: "Smuz4jQ0RZr99rD"
        },
        news:{
            url: "https://app.binary.com/#/news-mobile",
            articleClass: 'a.article-preview',
        },
        videos:{
            url: "https://app.binary.com/#/news-mobile",
        },
        settings: {
            url: "https://app.binary.com/#/mobile",
        },
        statement:{
            url: "https://app.binary.com/#/statement-mobile",
        },
        ticktrade:{
            url: "https://app.binary.com/#/mobile",
            purchaseButton: '.buy-btn',
            modalClass: '.modal',
        },
        tradingtimes:{
            url: "https://app.binary.com/#/resources-mobile",
        },
        assetindex:{
            url: "https://app.binary.com/#/resources-mobile",
        },
        portfolio:{
            url: "https://app.binary.com/#/portfolio-mobile",
        },

    },

};