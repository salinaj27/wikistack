const ex = require("express");
const morg = require("morgan");
const index = require('./views/index')
const {db} = require('./models')

const app = ex();

app.use(morg("dev"));
app.use(ex.static(__dirname + "/public"));
app.use(ex.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(index.main());
});

const PORT = 3000;

async function syncDb() {
  await db.sync( {force: true} )

  app.listen(PORT, () => {
    console.log("LISTEN");
  })
}

syncDb()
