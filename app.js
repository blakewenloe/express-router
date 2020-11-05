const express = require("express");
const app = express();
const port = 3000;
const ExpressError = require("./expressError");
const { getMean, getMedian, getMode } = require("./helpers");

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
