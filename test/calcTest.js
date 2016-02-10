var assert = require('assert');
var createTuning = require('../app/tuner');
var expect = require('chai').expect


describe('tuner', function() {
	it('should return proper tuning', function() {
		var result = createTuning([8,14],true,0,1,'yamaha');
		expect(result.drums[0].size).to.equal(8);
		expect(result.drums[1].size).to.equal(14);
		expect(result.owner.topHigher).to.equal(true);
	});
})