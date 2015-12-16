'use strict';

var chai = require('chai');
var assert = chai.assert;
var _ = require('lodash');
var SchoolServiceFactory = require('../src/school-service');
var RegistrationFormFactory = require('../src/registration-form');
var UuidFactory = require('../src/uuid-generator');

describe('Testing school-service', function() {

    describe('for valid creation', function() {

        it('should return a school service', function() {
            var schoolService = SchoolServiceFactory.create();

            assert.isNotNull(schoolService);
        });
    });

    describe('create new school', function() {

        var schoolRepositoryStub = {
            schools: [],

            save: function(school) {
                this.schools.push(school);
            },

            getLastSavedSchool: function() {
                return this.schools[0];
            }
        };

        var schoolService = SchoolServiceFactory.create({ schoolRepository: schoolRepositoryStub });

        before(function() {
            var schoolInputData = {
                name: 'TDD School',
                number: 5
            };

            schoolService.createSchool(schoolInputData);

        });

        it ('should save new school', function() {
            assert.equal(schoolRepositoryStub.getLastSavedSchool().number, 5);
        });
    });



    describe('#getSchool', function() {

        var schoolRepositoryStub = {
            schools: [],

            save: function(school) {
                this.schools.push(school);
            },

            getLastSavedSchool: function() {
                return this.schools[0];
            }

        };

        var schoolService = SchoolServiceFactory.create({ schoolRepository: schoolRepositoryStub });
        var schoolInputData;
        before(function() {
            schoolInputData = {
                name: 'TDD School',
                number: 5
            };

            schoolService.createSchool(schoolInputData);

        });

        it ('should  get the school', function() {
            assert.equal(schoolService.getSchoolByNumber({number: 5}), schoolRepositoryStub.getLastSavedSchool());
        });
    });

    describe('#register', function(){

        var schoolRepositoryStub = {
            schools: [],

            save: function(school) {
                this.schools.push(school);
            },

            getLastSavedSchool: function() {
                return this.schools[0];
            }

        };

        var schoolService = SchoolServiceFactory.create({ schoolRepository: schoolRepositoryStub });
        var schoolInputData;

        var form = {
            userId: UuidFactory.create({id:1}),
            name: 'H?zr?t',
            surname: 'Ibadov',
            patronymic: 'Memmed',
            email: 'ibo@ramblar.ru',
            phone: '554789547',
            image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUDQgbT9PFaERFaLbqP8sFsyq2r3sSYu6BtCj63z90tLEpALgo',
            acceptanceGrade: 547
        };
        var registrationForm = RegistrationFormFactory.create(form);
        before(function() {
            schoolInputData = {
                name: 'TDD School',
                number: 5
            };

            schoolService.createSchool(schoolInputData);

        });

        it('should register the student', function(){
            var actual = schoolService.register({number: 5,form :registrationForm});
            var expected = {
                user:{
                    userId: UuidFactory.create({id:1}),
                    name: 'H?zr?t',
                    surname: 'Ibadov',
                    patronymic: 'Memmed',
                    email: 'ibo@ramblar.ru',
                    phone: '554789547',
                    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUDQgbT9PFaERFaLbqP8sFsyq2r3sSYu6BtCj63z90tLEpALgo',
                },
                acceptanceGrade: 547
            };
            assert.shallowDeepEqual(actual, expected);
        })
    })


});