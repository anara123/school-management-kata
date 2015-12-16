'use strict';
var uuid = require('uuid');

var UuidGenerator = {
    init: function(args){
        args = args || {};
        this.id = args.id || uuid.v1();
    },

    getId: function() {
        return this.id;
    }
};

var uuidFactory = {
    create: function (args){
        var uuidGenerator = Object.create(UuidGenerator);
        uuidGenerator.init(args);
        return uuidGenerator.getId();
    }
};

module.exports = uuidFactory;