'use strict';

var chai = require('chai');
chai.use(require('chai-shallow-deep-equal'));
var assert = chai.assert;

var AccountFormValidator = require('../../src/users/account-form-validator');
var AccountFinder = require('../../src/users/account-finder');

describe('AccountFormValidator test', function () {

    describe('#validate username and password policy', function () {

        var accountFormValidator;
        var input = {};

        before(function () {
            AccountFinder.findByUsername = function(err, done){
                // account not found
                return done(null, null);
            };

            input.account = {
                username: 'azersafarov4s',
                password: 'a4s9qc63s'
            };

            accountFormValidator = AccountFormValidator.create();
        });

        it('should return true for valid username and password input', function (testDone) {
            accountFormValidator.validate(input.account, function(err, isValidForm) {
                assert.isTrue(isValidForm);
                testDone();
            });
        });
    });


    describe('#validate username is not match the policy', function () {

        var accountFormValidator;
        var account;

        before(function () {
            AccountFinder.findByUsername = function(err, done){
                var existingAccount = {
                    username: 'azer',
                    hashedPassword: '23123123123123'
                };
                return done(null, existingAccount);
            };

            account = {
                username: 'azer',
                password: 'a4s9qc63s'
            };

            accountFormValidator = AccountFormValidator.create();
        });

        it('should return true for valid username and password input', function (testDone) {
            accountFormValidator.validate(account, function(err, isValidForm) {
                assert.isFalse(isValidForm);
                testDone();
            });
        });
    });

    describe('#validate password is not match the policy', function () {

        var accountFormValidator;
        var account;

        before(function () {
            AccountFinder.findByUsername = function(err, done){
                return done(null, null);
            };

            account = {
                username: 'azer',
                password: 'aaaaaa'
            };

            accountFormValidator = AccountFormValidator.create();
        });

        it('should return true for valid username and password input', function (testDone) {
            accountFormValidator.validate(account, function(err, isValidForm) {
                assert.isFalse(isValidForm);
                testDone();
            });
        });
    });
});

