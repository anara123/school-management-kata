'use strict';
var _ = require('lodash');
var SchoolFactory = require('./school');
var SchoolRepository = require('./school-repository');

var SchoolService = {
    init: function (args) {
        args = args || {};
        this.schoolRepository = args.schoolRepository || Object.create(SchoolRepository);
    },

    getSchoolByNumber: function(args){
        return _.find(this.schoolRepository.schools,{ number: args.number });
    },

    createSchool: function (args) {

        // create new school from input data
        var newSchool = SchoolFactory.create({
            name: args.name,
            number: args.number
        });

        // save school to db

        this.schoolRepository.save(newSchool);
    },

    register: function(args){
        var school = this.getSchoolByNumber(args);
        var student = school.register(args.form);
        return student;
    }
};


var SchoolServiceFactory = {

    create: function(args) {
        var service = Object.create(SchoolService);
        service.init(args);

        return service;
    }
};


module.exports = SchoolServiceFactory;