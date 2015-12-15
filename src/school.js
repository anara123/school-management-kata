var StudentFactory = require('./student');

var School = {
    init: function(args) {
        this.name = args.name;
    },

    register: function(form){
        var result;
        if(form.validate()) {
            result = StudentFactory.create(form);
        }
        return result;
    }
};

var SchoolFactory = {
    create: function(args) {

        var school = Object.create(School);
        school.init(args);

        return school;
    }
};

module.exports = SchoolFactory;