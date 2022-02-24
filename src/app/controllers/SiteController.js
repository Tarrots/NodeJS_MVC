const Education = require('../models/Education')

class SiteController{
    // [GET] /
    home(req, res) {
        
        Education.find({}, (err, educations) => {
            if(!err)
            {
                res.json(educations)
            }
            else 
            {
                res.status(400).json({error: "ERROR"})
            }
        })

        //res.render("home")
    }

    // [GET] /search
    search(req, res) {
        res.render("search")
    }
}
module.exports = new SiteController