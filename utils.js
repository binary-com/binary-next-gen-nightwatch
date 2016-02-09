module.exports.CONSTS = {
    dummyAccount: {
      login: 'VRTB2155',
      password: 'mRX1E3Mi00oS8LG'
    }
}


module.exports.randomStr = function (length, initChars) {
    var chars = initChars || 'abcdefghijklmnopqrstuvwxyz123456789',
        str = '';
    for (var i = length; i > 0; --i) {
        str += chars[Math.round(Math.random() * (chars.length - 1))];
    }
    return str;
};


module.exports.randomEmail = function (length, initChars) {
    var chars = initChars || 'abcdefghijklmnopqrstuvwxyz123456789',
        str = '';
    for (var i = length; i > 0; --i) {
        str += chars[Math.round(Math.random() * (chars.length - 1))];
    }
    var email = 'binarytest-' + str + '@mailinator.com';
    return email;
};


module.exports.getSign = function(str) {
	return /^\+?(0|[1-9]\d*)$/.test(str);
}


function urlExists(url, callback) {
	  var xhr = new XMLHttpRequest();
	  xhr.onreadystatechange = function() {
	    if (xhr.readyState === 4) {
	      callback(xhr.status < 400);
	    }
	  };
	  xhr.open('HEAD', url);
	  xhr.send();
	};


module.exports.openUrlsOld = function (browser, urls) {

    urls.forEach(function (url) {

        var visitUrl = browser.launch_url + url;

        browser
            .url(visitUrl, function () {
                console.log("Opening ", visitUrl);
            })
            .waitForElementVisible('body', 5000)
            .pause(2000);
    });

    browser.end();
};


module.exports.smokeTestUrls = function (urls, domain) {

    var testSteps = {};

    urls.forEach(function (url) {

        var testName = 'Smoke test: "' + url.page + '"';

        testSteps[testName] = function (browser) {

            var visitUrl = (domain || browser.launch_url) + url.path;

            browser
                .url(visitUrl)
                .waitForElementVisible('body', 5000)
                .pause(5000)
                .verify.noJsErrors()
            .end();
        };
    });

    testSteps.end = function (browser) {
        browser.end();
    };

    return testSteps;
};
