const express = require("express");
const app = express();

const { getHealthcheckData } = require("./data");
const { getStatusData } = require("./detailed");
const port = process.env.PORT || 4001;

app.get("/data", async (req, res) => {
  const response = await getHealthcheckData();
  res.send(response);
});

app.get("/detailed/:env", async (req, res) => {
  // EITHER: dev, test, prod or staging
  const response = await getStatusData(req.params.env);
  res.send(response);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
