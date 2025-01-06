const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (ValidateData(sampleActivity)){
    time = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.LN2 / HALF_LIFE_PERIOD));
    return time;
  }
  return false;
}

function ValidateData(sampleActivity){
  if (typeof(sampleActivity) !== 'string')
    return false;

  if (+sampleActivity < 0 || +sampleActivity > MODERN_ACTIVITY)
    return false;

  if (!sampleActivity || !(+sampleActivity))
    return false;

  return true;
}

module.exports = {
  dateSample
};
