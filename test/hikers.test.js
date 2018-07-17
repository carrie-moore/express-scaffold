const { assert } = require('chai');
const mongo = require('../lib/mongodb');
const request = require('./request');

describe('Hikers API', () => {

    beforeEach(() => {
        return mongo.then(db => {
            return db.collection('hikers').remove();
        });
    });

    function save(hiker) {
        return request
            .post('/api/hikers')
            .send(hiker)
            .then(({ body }) => body);
    }

    let allgood;

    beforeEach(() => {
        allgood = {
            name: 'Allgood',
            trail: 'CDT',
            date: 2017
        };
        return save(allgood)
            .then(data => {
                allgood = data;
            });
    });

    it('saves a hiker', () => {
        assert.isOk(allgood._id);
    });

    

});