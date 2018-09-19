const express = require("express");
const app = express();

const { getDevHealthcheck } = require("./data");

app.get("/data", async (req, res) => {
  const response = await getDevHealthcheck();
  console.log(response);
  res.send(response);
});

app.listen(4001);
