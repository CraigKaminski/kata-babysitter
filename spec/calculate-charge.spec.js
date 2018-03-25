var calculateCharge = require('../calculate-charge');
var startToBed = calculateCharge.startToBed;

describe('startToBed', function() {
  it('Should return hours between start-time and bedtime', function() {
    var startTime = 5;
    var bedtime = 8;
    expect(startToBed(startTime, bedtime)).toBe(3);
  });

  it('Should return hours between start-time and midnight if bedtime is after midnight', function() {
    var startTime = 5;
    var bedtime = 1;
    expect(startToBed(startTime, bedtime)).toBe(7);
  });
});
