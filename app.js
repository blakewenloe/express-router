const express = require("express");
const app = express();
const port = 3000;

const getMean = (nums) => {
  let reducer = nums.reduce((a, b) => Number(a) + Number(b));
  let average = reducer / nums.length;
  return average;
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/mean/:nums", (req, res) => {
  let nums = req.params.nums.split(",");
  res.json({ operation: "mean", value: getMean(nums) });
});

app.get("/median/:nums", (req, res) => {});

app.get("/mode/:nums", (req, res) => {});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
