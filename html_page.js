const express = require('express');
const path = require('path');

const app = express(); //app.use its is a express executed fuction
const publicPath = path.join(__dirname, 'public');

// app.use(express.static(publicPath)); // Use is A Middleware it is express js function

app.get('', (_, res) => {
    res.sendFile(`${publicPath}/index.html`)
});

app.get('/about', (_, res) => {
    res.sendFile(`${publicPath}/about.html`)
});

app.get('*', (_, res) => {
    res.sendFile(`${publicPath}/nopage.html`)
});
app.listen(2000);