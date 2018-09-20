const express = require("express");
const app = express();

const { getHealthcheckData } = require("./data");

app.get("/data", async (req, res) => {
  const response = await getHealthcheckData();
  console.log(response);
  res.send(response);
});

app.listen(4001);
