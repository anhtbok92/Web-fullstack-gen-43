const express = require("express");
let app = express();

app.use(express.static("../B3"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});
app.get("/header", (req, res) => {
  res.sendFile("header.html", { root: __dirname });
});
app.get("/footer", (req, res) => {
  res.sendFile("footer.html", { root: __dirname });
});
app.get("/content", (req, res) => {
  res.sendFile("content.html", { root: __dirname });
});
app.get("/navigator", (req, res) => {
  res.sendFile("navigator.html", { root: __dirname });
});
app.get("/home", (req, res) => {
  res.sendFile("home.html", { root: __dirname });
});
app.listen(4701);
