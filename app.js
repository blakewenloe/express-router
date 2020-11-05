const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/mean/:nums", (req, res) => {});

app.get("/median/:nums", (req, res) => {});

app.get("/mode/:nums", (req, res) => {});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
