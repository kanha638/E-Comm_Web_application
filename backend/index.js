const express = require("express");

const app = express();
app.get("/", (req, resp) => {
  resp.send("Hello this is kanha tiwari");
});

app.listen(5001);
