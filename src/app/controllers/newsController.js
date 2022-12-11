class newsController {

    index(req,res) {
       
        res.render('new')
    }
    show(req, res) {
        res.send('DO QUANG SAN')
    }
}

module.exports = new newsController;