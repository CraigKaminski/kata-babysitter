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
