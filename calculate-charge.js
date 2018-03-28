const readline = require('readline');

// readline interface
let rl;

const startToBedRate = 12
const bedToMidnightRate = 8;
const midnightToEndRate = 16;

// Prompt start-time
function prompStartTime() {
  rl.question('start time: ', (startTime) => {
    promptBedtime(startTime);
  });
}

// Prompt bedtime
function promptBedtime(startTime) {
  rl.question('bedtime: ', (bedtime) => {
    promptEndTime(startTime, bedtime);
  });
}

// Prompt end-time
function promptEndTime(startTime, bedtime) {
  rl.question('end time: ', (endTime) => {
    const startTimeInt = parseInt(startTime, 10);
    const bedtimeInt = parseInt(bedtime, 10);
    const endTimeInt = parseInt(endTime, 10);
    calculateCharge(startTimeInt, bedtimeInt, endTimeInt);
    rl.close();
  });
}

// Calculate hours between start-time and bedtime
function startToBed(startTime, bedtime, endTime) {
  // if start-time is after midnight or start-time is after bedtime
  if (startTime < 5 || (startTime > bedtime && bedtime > 4)) {
    return 0;
  }
  // if end-time is before bedtime and midnight
  else if ((endTime < 12 && endTime > 4) && (endTime < bedtime || bedtime < 5)) {
    return endTime - startTime;
  }
  // if Bedtime after midnight
  else if (bedtime < 5) {
    return 12 - startTime;
  } else {
    return bedtime - startTime;
  }
}

// Calculate hours between bedtime and midnight
function bedToMidnight(startTime, bedtime, endTime) {
  // if bedtime is after midnight or start-time is after midnight or end-time is before bedtime
  if (bedtime < 5 || startTime < 5 || (endTime < bedtime && endTime > 4)) {
    return 0;
  }
  // if start-time is after bedtime and end-time is before midnight
  else if (bedtime < startTime && endTime < 12 && endTime > 4) {
    return endTime - startTime;
  }
  // if end-time is before midnight
  else if (endTime < 12 && endTime > 4) {
    return endTime - bedtime;
  }
  // if start-time is after bedtime
  else if (bedtime < startTime) {
    return 12 - startTime;
  } else {
    return 12 - bedtime;
  }
}

// Calculate hours between midnight and end-time
function midnightToEnd(startTime, bedtime, endTime) {
  // if end-time is before midnight
  if (endTime < 12 && endTime > 4) {
    return 0;
  }
  // if start-time is after midnight
  else if (startTime < 5) {
    return endTime - startTime;
  } else {
    return endTime;
  }
}

// Calculate charge for each time period and print sum of charges.
function calculateCharge(startTime, bedtime, endTime) {
  const startToBedHours = startToBed(startTime, bedtime, endTime);
  const bedToMidnightHours = bedToMidnight(startTime, bedtime, endTime);
  const midnightToEndHours = midnightToEnd(startTime, bedtime, endTime);
  // console.log('start to bed: '+ startToBedHours);
  // console.log('bed to midnight: ' + bedToMidnightHours);
  // console.log('midnight to end: ' + midnightToEndHours);
  const totalCharge = startToBedRate * startToBedHours +
               bedToMidnightRate * bedToMidnightHours +
               midnightToEndRate * midnightToEndHours;
  console.log('total charge: ' + totalCharge);
}

if (require.main === module) {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  prompStartTime();
}

module.exports = {
  bedToMidnight: bedToMidnight,
  midnightToEnd: midnightToEnd,
  startToBed: startToBed
};

/*
All possible combinations where start is before end:
(s = start, b = bedtime, m = midnight, e = end)
s b m e
s m b e
b s m e
b m s e
m b s e
m s b e
s e m b
s e b m
s m e b
s b e m
b s e m
m s e b
*/

/*
All possible combinations where start is before end
and start is before bedtime and midnight:
(This is for calculating hours before bedtime)
s b m e
s b e m
s m b e
s m e b
s e m b
s e b m
*/

/*
All possible combinations where bedtime is before midnight
and start is before midnight and end is after bedtime
(This is for calculating hours between bedtime and midnight)
s b m e
b s m e
s b e m
b s e m
*/

/*
All possible combinations where end-time is after midnight
(This is for calculating hours between midnight and end-time)
s b m e
s m b e
b s m e
b m s e
s m e b
m b s e
m s b e
m s e b
*/
