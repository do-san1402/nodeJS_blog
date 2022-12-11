const newsRoute = require('./new');
const sideRoute = require('./site');

function route(app) {
    app.use('/news', newsRoute);
    app.use('/', sideRoute);

   
}

module.exports = route;