const express = require('express')
const path = require('path')
const morgan = require('morgan')
const { engine } = require ('express-handlebars');
const route = require('./routes');

const app = express()
const port = 3000
// Static url
app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
app.use(morgan('combined'));
app.engine('hbs', engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})