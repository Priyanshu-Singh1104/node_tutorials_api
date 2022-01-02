const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

app.get('/profile', (_, res) => {
    const user = {
        name: 'Priyanshu Singh',
        email: 'priyanshu@gmail.com',
        city: 'Mumbai'
    }
    res.render('profile', { user });
});

app.listen(2000);