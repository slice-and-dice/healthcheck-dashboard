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
  // EITHER: dev, test, prod
  const response = await getStatusData(req.params.env);
  res.send(response);
});

// if (process.env.NODE_ENV === "production") {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, "client/build")));
//   // Handle React routing, return all requests to React app
//   app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "client/build", "index.html"));
//   });
// }
app.listen(port, () => console.log(`Listening on port ${port}`));
