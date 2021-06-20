class siteController {
    // [GET] /news
    index(req, res) {
        res.render('home');
    }

    //[Get] /search/:slug
    search(req, res){
        res.render('search');
    }
}
module.exports = new siteController; 