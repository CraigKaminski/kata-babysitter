var calculateCharge = require('../calculate-charge');
var startToBed = calculateCharge.startToBed;

/*
s = start-time
b = bedtime
m = midnight
e = end-time
*/

describe('startToBed', function() {
  describe('Should return hours between start-time and bedtime', function() {
    it('for combination s b m e', function() {
      var startTime = 5;
      var bedtime = 8;
      var endTime = 1;
      expect(startToBed(startTime, bedtime, endTime)).toBe(3);
    });
    
    it('for combination s b e m', function() {
      var startTime = 5;
      var bedtime = 9;
      var endTime = 11;
      expect(startToBed(startTime, bedtime, endTime)).toBe(4);
    });
  });

  describe('Should return hours between start-time and midnight', function() {
    it('for combination s m b e', function() {
      var startTime = 5;
      var bedtime = 2;
      var endTime = 3;
      expect(startToBed(startTime, bedtime, endTime)).toBe(7);
    });

    it('for combiation s m e b', function() {
      var startTime = 5;
      var bedtime = 2;
      var endTime = 1;
      expect(startToBed(startTime, bedtime, endTime)).toBe(7);
    });
  });

  describe('Should return hours between start-time and end-time', function() {
    it('for combination s e m b', function() {
      var startTime = 6;
      var bedtime = 1;
      var endTime = 10;
      expect(startToBed(startTime, bedtime, endTime)).toBe(4);
    });

    it('for combination s e b m', function() {
      var startTime = 6;
      var bedtime = 11;
      var endTime = 10;
      expect(startToBed(startTime, bedtime, endTime)).toBe(4);
    });
  });
});
