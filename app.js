import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).json("Hello World!");
});

app.get("/app", (req, res) => {
  res.status(200).json("Hello App!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
