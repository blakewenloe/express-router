const getMean = (nums) => {
  let reducer = nums.reduce((a, b) => Number(a) + Number(b));
  let average = reducer / nums.length;
  return average;
};

const getMedian = (arr) => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

const getMode = (nums) => {
  var modes = [],
    count = [],
    i,
    nums,
    maxIndex = 0;

  for (i = 0; i < nums.length; i += 1) {
    number = nums[i];
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }

  for (i in count)
    if (count.hasOwnProperty(i)) {
      if (count[i] === maxIndex) {
        modes.push(Number(i));
      }
    }

  return modes;
};

module.exports = { getMean, getMedian, getMode };
