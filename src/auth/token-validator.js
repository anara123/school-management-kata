'use strict';

var TokenValidator = {
    init: function(args) {

    },

    validate: function (token, done) {
        console.log('##### token validate ');
        var testAccount = {
            username: 'anar',
            role: 'ADMIN'
        };

        done(null, testAccount)
    }
};

var TokenValidatorFactory = {
    create: function() {
        var validator = Object.create(TokenValidator);
        validator.init();
        return validator;
    }
};

module.exports = TokenValidatorFactory;