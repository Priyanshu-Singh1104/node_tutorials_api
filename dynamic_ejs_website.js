const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

app.get('/profile', (_, res) => {
    const user = {
        name: 'Priyanshu Singh',
        email: 'priyanshu@gmail.com',
        city: 'Mumbai',
        skills: ['php', 'js', 'c++', 'node'],
    }
    res.render('profile', { user });
});

app.get('/login', (_, res) => {
    res.render('login');
});

app.listen(2000);