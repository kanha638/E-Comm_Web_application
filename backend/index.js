const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product");
const app = express();
app.use(express.json()); // for getting the json object from req in api

app.use(cors());
// SignUp Api
app.post("/signup", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

// Login api
app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    const result = await User.findOne(req.body).select("-password");
    if (result) {
      resp.send(result);
    } else {
      resp.send({ alert: "No User Found" });
    }
  } else {
    resp.send({ alert: "No User Found" });
  }
});
// Add product API

app.post("/add-product", async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();

  resp.send(result);
});

app.get("/", (req, resp) => {
  resp.send("hii api is working ");
});

app.listen(5001, () => {
  console.log("Working on Port No 5001");
});
