'use strict';

let assert = require('assert');

describe('#test setup', function () {
    it('should set return true', function (done) {
        setTimeout(function(){
            assert.ok(true);
            done();
        }, 10);
    });
});
