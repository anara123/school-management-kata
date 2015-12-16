'use strict';
var UuidFactory = require('../src/uuid-generator');

var User = {
  init: function(args){
      this.userId = args.userId || UuidFactory.create();
      this.name = args.name;
      this.surname = args.surname;
      this.patronymic = args.patronymic;
      this.email = args.email;
      this.phone = args.phone;
      this.image = args.image;
  }
};

var UserFactory = {

    create: function(args){
        var user = Object.create(User);
        user.init(args);
        return user;
    }
};


module.exports = UserFactory;