const calculateCharge = require('../calculate-charge');
const bedToMidnight = calculateCharge.bedToMidnight;
const startToBed = calculateCharge.startToBed;
const midnightToEnd = calculateCharge.midnightToEnd;

/*
s = start-time
b = bedtime
m = midnight
e = end-time
*/

describe('startToBed', function() {
  describe('Should return hours between start-time and bedtime', function() {
    it('for combination s b m e', function() {
      const startTime = 5;
      const bedtime = 8;
      const endTime = 1;
      expect(startToBed(startTime, bedtime, endTime)).toBe(3);
    });
    
    it('for combination s b e m', function() {
      const startTime = 5;
      const bedtime = 9;
      const endTime = 11;
      expect(startToBed(startTime, bedtime, endTime)).toBe(4);
    });
  });

  describe('Should return hours between start-time and midnight', function() {
    it('for combination s m b e', function() {
      const startTime = 5;
      const bedtime = 2;
      const endTime = 3;
      expect(startToBed(startTime, bedtime, endTime)).toBe(7);
    });

    it('for combiation s m e b', function() {
      const startTime = 5;
      const bedtime = 2;
      const endTime = 1;
      expect(startToBed(startTime, bedtime, endTime)).toBe(7);
    });
  });

  describe('Should return hours between start-time and end-time', function() {
    it('for combination s e m b', function() {
      const startTime = 6;
      const bedtime = 1;
      const endTime = 10;
      expect(startToBed(startTime, bedtime, endTime)).toBe(4);
    });

    it('for combination s e b m', function() {
      const startTime = 6;
      const bedtime = 11;
      const endTime = 10;
      expect(startToBed(startTime, bedtime, endTime)).toBe(4);
    });
  });

  describe('Should return 0', function() {
    it('if start-time is after bedtime', function() {
      const startTime = 10;
      const bedtime = 9;
      const endTime = 11;
      expect(startToBed(startTime, bedtime, endTime)).toBe(0);
    });

    it('if start-time is after midnight', function() {
      const startTime = 1;
      const bedtime = 9;
      const endTime = 11;
      expect(startToBed(startTime, bedtime, endTime)).toBe(0);
    });
  });
});

describe('bedToMidnight', function() {
  it('Should return hours between bedtime and midnight for combination s b m e', function() {
    const startTime = 7;
    const bedtime = 8;
    const endTime = 1;
    expect(bedToMidnight(startTime, bedtime, endTime)).toBe(4);
  });

  it('Should return hours between start-time and midnight for combination b s m e', function() {
    const startTime = 9;
    const bedtime = 8;
    const endTime = 1;
    expect(bedToMidnight(startTime, bedtime, endTime)).toBe(3);
  });

  it('Should return hours between bedtime and end-time for combination s b e m', function() {
    const startTime = 6;
    const bedtime = 8;
    const endTime = 10;
    expect(bedToMidnight(startTime, bedtime, endTime)).toBe(2);
  });
  
  it('Should return hours between start-time and end-time for combination b s e m', function() {
    const startTime = 9;
    const bedtime = 7;
    const endTime = 10;
    expect(bedToMidnight(startTime, bedtime, endTime)).toBe(1);
  });

  describe('Should return 0', function() {
    it('if bedtime is after midnight', function() {
      const startTime = 10;
      const bedtime = 1;
      const endTime = 2;
      expect(bedToMidnight(startTime, bedtime, endTime)).toBe(0);
    });

    it('if start-time is after midnight', function() {
      const startTime = 1;
      const bedtime = 8;
      const endTime = 2;
      expect(bedToMidnight(startTime, bedtime, endTime)).toBe(0);
    });

    it('if end-time is before bedtime', function() {
      const startTime = 7;
      const bedtime = 10;
      const endTime = 9;
      expect(bedToMidnight(startTime, bedtime, endTime)).toBe(0);
    });
  });
});

describe('midnightToEnd', function() {
  it('Should return hours between midnight and end if start-time is before midnight and end-time is after midnight', function() {
    const startTime = 8;
    const bedtime = 10;
    const endTime = 3;
    expect(midnightToEnd(startTime, bedtime, endTime)).toBe(3);
  });

  it('Should return hours between start and end if start-time and end-time are after midnight', function() {
    const startTime = 1;
    const bedtime = 8;
    const endTime = 3;
    expect(midnightToEnd(startTime, bedtime, endTime)).toBe(2);
  });

  it('Should return 0 if end-time is before midnight', function() {
    const startTime = 6;
    const bedtime = 8;
    const endTime = 11;
    expect(midnightToEnd(startTime, bedtime, endTime)).toBe(0);
  });
});
