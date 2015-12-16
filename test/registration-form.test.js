'use strict';

var chai = require('chai');
var assert = chai.assert;

var RegistrationFormFactory = require('../src/registration-form');

describe('registration-form test', function () {

    describe('#validate valid form', function () {

        it('should return true', function () {

            var form = {
                name: 'H?zr?t',
                surname: 'Ibadov',
                patronymic: 'Memmed',
                email: 'ibo@ramblar.ru',
                phone: '554789547',
                image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUDQgbT9PFaERFaLbqP8sFsyq2r3sSYu6BtCj63z90tLEpALgo'
            };
            var registrationForm = RegistrationFormFactory.create(form);
            var actual = registrationForm.validate();

            assert.equal(actual, true);
        });

    });


    describe('#validate invalid form - email not exist', function () {

        it('should return false', function () {

            var form = {
                name: 'H?zr?t',
                surname: 'Ibadov',
                patronymic: 'Memmed',
                phone: '554789547',
                image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUDQgbT9PFaERFaLbqP8sFsyq2r3sSYu6BtCj63z90tLEpALgo'
            };
            var registrationForm = RegistrationFormFactory.create(form);
            var actual = registrationForm.validate();

            assert.equal(actual, false);
        });

    });

    describe('#validate invalid form - name is contains digits', function () {

        it('should return false', function () {

            var form = {
                name: 'H?zr5?t',
                surname: 'Ibadov',
                patronymic: 'Memmed',
                email: 'ibo@ramblar.ru',
                phone: '554789547',
                image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUDQgbT9PFaERFaLbqP8sFsyq2r3sSYu6BtCj63z90tLEpALgo'
            };
            var registrationForm = RegistrationFormFactory.create(form);
            var actual = registrationForm.validate();

            assert.equal(actual, false);
        });

    });

});