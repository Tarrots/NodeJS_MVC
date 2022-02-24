// Import libs
const path = require("path")
const express = require("express")
const expressLayout = require("express-ejs-layouts")
const morgan = require("morgan")
const route = require("./app/routes")
const db = require("./config/db")

// Setups
const app = express()
app.use(express.static(path.join(__dirname, "public")))

// Layouts with ejs
app.use(expressLayout)

// From submit data
app.use(express.urlencoded({
  extended: true
}));

// XMLHttpRequest, fetch, axios, ...
app.use(express.json())

// Path layout master
app.set("layout",  path.join(__dirname, "./resources/views/index"))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./resources/views/pages"))

// Connect db
db.connect();

const port = 3000

// Logers request brower
app.use(morgan('combined'))

// Router init
route(app);

// Console open port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
