const ex = require("express");
const morg = require("morgan");
const app = ex();
app.use(morg("dev"));
app.use(ex.static(__dirname + "/public"));
app.use(ex.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("WORK");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("LISTEN");
});
