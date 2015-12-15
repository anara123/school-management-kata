'use strict';

var chai = require('chai');
var assert = chai.assert;

var SchoolFactory = require('../src/school');
var StudentFactory = require('../src/student');
var RegistrationFormFactory = require('../src/registration-form');

describe('Testing school', function() {

    describe('for valid creation', function() {

        it('should return a school', function() {
            var schoolData = {
                name: "TDD School"
            };

            var school = SchoolFactory.create(schoolData);

            assert.equal(school.name, schoolData.name);
        });
    });

    describe('#registration-form input validation', function() {

        it('should return true or false', function() {
            var schoolData = {
                name: "TDD School"
            };

            var school = SchoolFactory.create(schoolData);

            var form = {
                name: 'Həzrət',
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

    describe('#register', function(){
        it('should register the user', function(){
            var schoolData = {
                name: "TDD School"
            };

            var school = SchoolFactory.create(schoolData);

            var form = {
                name: 'Həzrət',
                surname: 'Ibadov',
                patronymic: 'Memmed',
                email: 'ibo@ramblar.ru',
                phone: '554789547',
                image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUDQgbT9PFaERFaLbqP8sFsyq2r3sSYu6BtCj63z90tLEpALgo'
            };

            var registrationForm = RegistrationFormFactory.create(form);
            var actual = school.register(registrationForm);

            var expected = StudentFactory.create(registrationForm);

            assert.deepEqual(actual, expected);


        })
    })
});