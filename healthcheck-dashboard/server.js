const express = require("express");
const app = express();

const { getHealthcheckData } = require("./data");
const { getStatusData } = require("./detailed");

app.get("/data", async (req, res) => {
  const response = await getHealthcheckData();
  res.send(response);
});

app.get("/detailed/:env", async (req, res) => {
  // EITHER: dev, test, prod
  const response = await getStatusData(req.params.env);
  res.send(response);
});

app.listen(4001);
