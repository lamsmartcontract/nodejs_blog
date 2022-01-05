const express = require('express');
const handlebars = require('express-handlebars')

const path = require('path');
const morgan = require('morgan');

const app = express();
//const PORT = process.env.PORT || 3000;
const PORT = 3000

app.use(morgan('combined'));

// create public folder
app.use(express.static(path.join(__dirname, 'public')));

// template engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    return res.render('home');
})

app.get('/news', (req, res) => {
    return res.render('news');
})


app.listen(PORT, () => {
    console.log(`Server running ${PORT}`);
});

console.log(path.join(__dirname, 'public'))