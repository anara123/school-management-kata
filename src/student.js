
var Student = {
    init:function(form){

    }
}


var StudentFactory = {
    create: function(form){
        var student = Object.create(Student);
        student.init(form);
        return student;
    }
};

module.exports = StudentFactory;