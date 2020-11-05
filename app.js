const express = require("express");
const app = express();
const port = 3000;
const ExpressError = require("./expressError");
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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/mean/", (req, res) => {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }
  let nums = req.query.nums.split(",");

  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  res.json({ operation: "mean", value: getMean(nums) });
});

app.get("/median/", (req, res) => {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }

  let nums = req.query.nums.split(",");

  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  res.json({ operation: "median", value: getMedian(nums) });
});

app.get("/mode/", (req, res) => {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }

  let nums = req.query.nums.split(",");

  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  res.json({ operation: "median", value: getMode(nums) });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
