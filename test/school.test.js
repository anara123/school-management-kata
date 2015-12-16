'use strict';

var chai = require('chai');
var assert = chai.assert;

var SchoolFactory = require('../src/school');
var StudentFactory = require('../src/student');
var RegistrationFormFactory = require('../src/registration-form');
var UuidFactory = require('../src/uuid-generator');
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



    describe('#register', function(){
        it('should register the user', function(){
            var schoolData = {
                name: "TDD School"
            };

            var school = SchoolFactory.create(schoolData);

            var form = {
                userId: UuidFactory.create({id:1}),
                name: 'Həzrət',
                surname: 'Ibadov',
                patronymic: 'Memmed',
                email: 'ibo@ramblar.ru',
                phone: '554789547',
                image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUDQgbT9PFaERFaLbqP8sFsyq2r3sSYu6BtCj63z90tLEpALgo',
                acceptanceGrade: 547
            };
            var registrationForm = RegistrationFormFactory.create(form);

            var actual = school.register(registrationForm);

            var expected = {
                user:{
                    userId: UuidFactory.create({id:1}),
                    name: 'Həzrət',
                    surname: 'Ibadov',
                    patronymic: 'Memmed',
                    email: 'ibo@ramblar.ru',
                    phone: '554789547',
                    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUDQgbT9PFaERFaLbqP8sFsyq2r3sSYu6BtCj63z90tLEpALgo',
                },
                acceptanceGrade: 547
            };

            //StudentFactory.save = function() {
            //
            //};

            assert.shallowDeepEqual(actual, expected);


        })
    })
});