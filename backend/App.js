const express = require("express");

const app = express();

const Server = require("../backend/GraphQl/Api/Api");
require("dotenv").config();
const { DB } = require("../backend/config/cofig.db");

const path = require("path");

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

const StartServer = async () => {
  Server.listen(3000, DB, () => console.log("listening on"));
  app.listen(4000, DB, () => console.log("listening on"));
};

StartServer();
