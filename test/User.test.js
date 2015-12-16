'use strict';

var chai = require('chai');
chai.use(require('chai-shallow-deep-equal'));
var assert = chai.assert;
chai.config.truncateThreshold = 0;

var UserFactory = require('../src/user.js');


describe('testing the user model', function () {
    describe('user is created', function () {
        it('should return a user', function () {
            var expected = {
                name: 'Həzrət',
                surname: 'Ibadov',
                patronymic: 'Memmed',
                email: 'ibo@ramblar.ru',
                phone: '554789547',
                image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUDQgbT9PFaERFaLbqP8sFsyq2r3sSYu6BtCj63z90tLEpALgo'
            };

            var actual = UserFactory.create(expected);
            assert.shallowDeepEqual(actual, expected);
        });
    });
});