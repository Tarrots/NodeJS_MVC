class NewsController{
    // [GET] /news
    _conn(req, res) {
        res.render("news")
    }
    
    // [GET] /news/:slug
    slug(req, res){
        res.send("<h1>News Slugs</h1>")
    }
}
module.exports = new NewsController