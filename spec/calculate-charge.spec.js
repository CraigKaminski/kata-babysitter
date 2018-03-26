var calculateCharge = require('../calculate-charge');
var startToBed = calculateCharge.startToBed;

describe('startToBed', function() {
  it('Should return hours between start-time and bedtime if start is before bedtime and bedtime is before midnight and end', function() {
    var startTime = 5;
    var bedtime = 8;
    var endTime = 10
    expect(startToBed(startTime, bedtime, endTime)).toBe(3);
    var endTime = 2;
    expect(startToBed(startTime, bedtime, endTime)).toBe(3);
  });

  it('Should return hours between start-time and midnight if start is before midnight and bedtime and end-time are after midnight', function() {
    var startTime = 5;
    var bedtime = 2;
    var endTime = 2
    expect(startToBed(startTime, bedtime, endTime)).toBe(7);
    var endtime = 1
    expect(startToBed(startTime, bedtime, endTime)).toBe(7);
  });
});
