/** @type { Object.<number, number> } */
const cache = {};

/**
 * @param {number} num
 * @returns {number}
*/
function factorial(num) {
  if (typeof num !== 'number') throw new Error(`Number is required`);
  if (num < 0) throw new Error(`Minus factorial isn't possible`);
  if (num === 0 || num === 1) return 1;
  if (cache[num]) {
    return cache[num]
  }
  const res = num * factorial(num - 1);
  cache[num] = res;
  return res;
}
module.exports = factorial;
