
const express = require('express');
const handlebars = require('express-handlebars')

const path = require('path');
const morgan = require('morgan');

//route
const route = require('./routes')

const app = express();
//const PORT = process.env.PORT || 3000;
const PORT = 3000

// show err
app.use(morgan('combined'));

// create public folder
app.use(express.static(path.join(__dirname, 'public')));

// use body and json 
app.use(express.urlencoded(
    {extended: true}
));
app.use(express.json());

// template engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


// get methods
route(app)


app.listen(PORT, () => {
    console.log(`Server running ${PORT}`);
});


