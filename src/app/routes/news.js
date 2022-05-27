const express = require("express")
const router = express.Router()
const newsController = require("../controllers/NewsController")

router.get("/:slug", newsController.slug)
router.get("/", newsController._conn)

module.exports = router