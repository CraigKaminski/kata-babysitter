var calculateCharge = require('../calculate-charge');
var bedToMidnight = calculateCharge.bedToMidnight;
var startToBed = calculateCharge.startToBed;
var midnightToEnd = calculateCharge.midnightToEnd;

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

  describe('Should return 0', function() {
    it('if start-time is after bedtime', function() {
      var startTime = 10;
      var bedtime = 9;
      var endTime = 11;
      expect(startToBed(startTime, bedtime, endTime)).toBe(0);
    });

    it('if start-time is after midnight', function() {
      var startTime = 1;
      var bedtime = 9;
      var endTime = 11;
      expect(startToBed(startTime, bedtime, endTime)).toBe(0);
    });
  });
});

describe('bedToMidnight', function() {
  it('Should return hours between bedtime and midnight for combination s b m e', function() {
    var startTime = 7;
    var bedtime = 8;
    var endTime = 1;
    expect(bedToMidnight(startTime, bedtime, endTime)).toBe(4);
  });

  it('Should return hours between start-time and midnight for combination b s m e', function() {
    var startTime = 9;
    var bedtime = 8;
    var endTime = 1;
    expect(bedToMidnight(startTime, bedtime, endTime)).toBe(3);
  });

  it('Should return hours between bedtime and end-time for combination s b e m', function() {
    var startTime = 6;
    var bedtime = 8;
    var endTime = 10;
    expect(bedToMidnight(startTime, bedtime, endTime)).toBe(2);
  });
  
  it('Should return hours between start-time and end-time for combination b s e m', function() {
    var startTime = 9;
    var bedtime = 7;
    var endTime = 10;
    expect(bedToMidnight(startTime, bedtime, endTime)).toBe(1);
  });

  describe('Should return 0', function() {
    it('if bedtime is after midnight', function() {
      var startTime = 10;
      var bedtime = 1;
      var endTime = 2;
      expect(bedToMidnight(startTime, bedtime, endTime)).toBe(0);
    });

    it('if start-time is after midnight', function() {
      var startTime = 1;
      var bedtime = 8;
      var endTime = 2;
      expect(bedToMidnight(startTime, bedtime, endTime)).toBe(0);
    });

    it('if end-time is before bedtime', function() {
      var startTime = 7;
      var bedtime = 10;
      var endTime = 9;
      expect(bedToMidnight(startTime, bedtime, endTime)).toBe(0);
    });
  });
});

describe('midnightToEnd', function() {
  it('Should return hours between midnight and end if start-time is before midnight and end-time is after midnight', function() {
    var startTime = 8;
    var bedtime = 10;
    var endTime = 3;
    expect(midnightToEnd(startTime, bedtime, endTime)).toBe(3);
  });

  it('Should return hours between start and end if start-time and end-time are after midnight', function() {
    var startTime = 1;
    var bedtime = 8;
    var endTime = 3;
    expect(midnightToEnd(startTime, bedtime, endTime)).toBe(2);
  });

  it('Should return 0 if end-time is before midnight', function() {
    var startTime = 6;
    var bedtime = 8;
    var endTime = 11;
    expect(midnightToEnd(startTime, bedtime, endTime)).toBe(0);
  });
});
