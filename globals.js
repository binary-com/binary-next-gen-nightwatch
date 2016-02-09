function randomStr(length, initChars) {
    var chars = initChars || 'abcdefghijklmnopqrstuvwxyz123456789',
        str = '';
    for (var i = length; i > 0; --i) {
        str += chars[Math.round(Math.random() * (chars.length - 1))];
    }
    return str;
}

module.exports = {
	'TEST_CREDENTIALS':{
		USERNAME:undefined,
		PASSWORD:undefined
	},

  reporter : function(results, done) {
    if (results.failed === 0) return;

    console.log('\nList of failed tests:');

    Object.keys(results.modules).forEach(function(x) {
        var module = results.modules[x];
        Object.keys(module).forEach(function(suite) {
            module[suite].tests.forEach(function(test) {
                if (test.failure) {
                    console.log('\n', suite, '\n', test.message, '\n', test.failure);
                }
            });
        });
    });
    done();
}
};
