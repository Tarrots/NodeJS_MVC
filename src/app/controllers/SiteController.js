const Education = require('../models/Education')

class SiteController{
    // [GET] /
    home(req, res, next) {
        Education.find({})
            .then(educations => res.render("home",{ educations }))
            .catch(next)

        //res.render("home")
    }

    // [GET] /search
    search(req, res) {
        res.render("search")
    }
}
module.exports = new SiteController