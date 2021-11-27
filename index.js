const express = require('express');
const path = require('path');
const PORT = 8000;

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());

app.use(express.static('assets'));

app.use('/', require('./routes'));



app.listen(PORT, (err) => {
    if(err){
        console.log('Issue starting server', err);
        return;
    }
    console.log('Server is up and running on', PORT);
})