const express = require("express")
const router = express.Router()
const newsController = require("../controllers/NewsController")

router.use("/:slug", newsController.slug)
router.use("/", newsController._conn)

module.exports = router