var assert = require('assert');
var UserFactory = require('./user');

var Student = {
    init:function(args){
        assert.ok(args.acceptanceGrade, 'invalid input');

        this.user = UserFactory.create(args.user);
        this.acceptanceGrade = args.acceptanceGrade;
    }

};


var StudentFactory = {
    create: function(args) {
        var student = Object.create(Student);
        student.init(args);
        return student;
    }
};

module.exports = StudentFactory;