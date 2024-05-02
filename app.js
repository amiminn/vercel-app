import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as whatsapp from "wa-multi-session";
import { toDataURL } from "qrcode";

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

whatsapp.onConnected((session) => {
  console.log("connected => ", session);
});

whatsapp.onDisconnected((session) => {
  console.log("disconnected => ", session);
});

whatsapp.onConnecting((session) => {
  console.log("connecting => ", session);
});

whatsapp.loadSessionsFromStorage();
