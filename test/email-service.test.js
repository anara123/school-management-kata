'use strict';

var chai = require('chai');
var assert = chai.assert;

var EmailService = require('../src/email-service');

describe('Testing email service', function () {

    describe('#send email', function () {

        it('should return success for valid input', function () {
            var emailServiceProvider;
            var emailService = EmailService.create(emailServiceProvider);
        });
    });
});