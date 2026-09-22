const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const tasks = [];
let nextId = 1;

app.use(express.json());

app.get("/health", (request, response) => {
  response.json({ status: "ok" });
});

// Implement the task routes described in README.md below this line.

app.listen(port, () => {
  console.log(`Task Tracker API listening on port ${port}`);
});
