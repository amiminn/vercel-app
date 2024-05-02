import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
const port = 3000;
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.status(200).json("Hello World!");
});

app.get("/app", (req, res) => {
  res.status(200).json("Hello App!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
