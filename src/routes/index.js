const newsRouter = require('./news')
const siteRouter = require('./site')


function route(app){
    
    app.use('/news', newsRouter);
    
    app.use('/', siteRouter);

    // app.get('/news', (req, res) => {
    //     return res.render('news');
    // })

    // app.get('/search', (req, res) => {
    //     return res.render('search');
    // })

    // post methods
    // app.post('/search', (req, res) => {
    //     return res.send(req.body);
    // })
}

module.exports = route;