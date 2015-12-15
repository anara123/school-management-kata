var regString = /[0-9]|\s/;
var regEmail = /^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
var regPhone = /[1-9]{9}$/;
var RegistrationForm = {
    init: function(args){
        this.name = args.name;
        this.surname = args.surname;
        this.patronymic = args.patronymic;
        this.email = args.email;
        this.phone = args.phone;
        this.image = args.image;
        this.isValid = false;
    },

    validate: function(){

        if(!regString.test(this.name) && !regString.test(this.surname) && !regString.test(this.patronymic) && regEmail.test(this.email) && regPhone.test(this.phone)){

            this.isValid = true;
        }

        return this.isValid;
    }
};


var RegistrationFormFactory = {
    create: function(form){
        var registrationForm = Object.create(RegistrationForm);
        registrationForm.init(form);
        return registrationForm;
    }
};


module.exports = RegistrationFormFactory;