module.exports = function check(str, bracketsConfig) {
  let pairs = bracketsConfig.map(i => i.join(''));
  let result;
  pairs.map(i => (result === undefined) ? result = str.split(i).join('') : result = result.split(i).join(''));
  if (str !== result) {
    return check(result, bracketsConfig);
  } else if (str.length == 0) {
    return true;
  } else if (str.length != 0) {
    return false;
  }
}