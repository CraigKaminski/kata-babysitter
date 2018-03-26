// Prompt start-time

// Prompt bedtime

// Prompt end-time

// Calculate hours between start-time and bedtime
function startToBed(startTime, bedtime) {
  // if Bedtime after midnight
  if (bedtime < 5) {
    return 12 - startTime;
  } else {
    return bedtime - startTime;
  }
}

// Calculate hours between bedtime and midnight

// Calculate hours between midnight and end-time

// Calculate charge for each time period and print sum of charges.

module.exports = {
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
