const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const app = express();
app.use(express.json()); // for getting the json object from req in api

app.use(cors());

app.post("/signup", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  resp.send(result);
});

app.listen(5001, () => {
  console.log("Working on Port No 5001");
});
