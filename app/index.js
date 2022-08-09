var ip = require("ip");
const express = require("express");
const app = express();
const port = 80;
app.get("/", (req, res) => {
  res.send(ip.address());
});
app.listen(port, () => console.log("server started"));
