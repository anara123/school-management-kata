var StudentFactory = require('./student');

var School = {
    init: function(args) {
        this.name = args.name;
        this.number = args.number;
    },

    register: function(form){
        var student;
        if(form.validate()) {
            var user = {
                userId: form.userId,
                name: form.name,
                surname: form.surname,
                patronymic: form.patronymic,
                email: form.email,
                phone: form.phone,
                image: form.image
            };
            student = StudentFactory.create({ user: user, acceptanceGrade: form.acceptanceGrade});
        }

        return student;
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