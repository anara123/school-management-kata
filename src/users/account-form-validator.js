'use strict';

var async = require('async');
var assert = require('assert');
var UsernamePolicyValidator = require('./username-policy-validator');
var PasswordPolicyValidator = require('./password-policy-validator');

var AccountFormValidator = {

    init: function (args) {

    },
    validate: function (args, done) {
        assert.ok(args.username && args.password, 'Username or password is incorrect');
        var username = args.username;
        var password = args.password;

        async.parallel({
            isValidUsername: function (next) {
                UsernamePolicyValidator.validate(username, next);
            },
            isValidPassword: function (next) {
                var passwordValidationResult = PasswordPolicyValidator.validate(password);
                return next(null, passwordValidationResult);
            }
        }, function (err, result) {
            if (err) {
                return done(err);
            } else {
                if (result.isValidUsername && result.isValidPassword) {
                    return done(null, true);
                }
                else {
                    return done(null, false)
                }
            }
        });
    }
};


var AccountFormValidatorFactory = {

    create: function () {
        var newAccountFormValidator = Object.create(AccountFormValidator);
        newAccountFormValidator.init();

        return newAccountFormValidator;
    }
};

module.exports = AccountFormValidatorFactory;