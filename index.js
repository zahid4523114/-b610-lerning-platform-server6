const express = require("express");
const app = express();
const cors = require("cors");
const courses = require("./courses.json");
const category = require("./category.json");
const port = 3500;
app.use(cors());

app.get("/", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
