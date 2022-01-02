const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('Hello,This is a Home Page<a href="/about">About</a>');
});

app.get('/about', (req, res) => { // Render Json
    res.send({
        name: 'Priyanshu Singh',
        email: 'priyanshu@gmail.com'
    });
});

app.get('/help', (req, res) => { // render Html tag
    res.send(`<input type="text" name="email" id="email" placeholder="enter email id" value="${req.query.name}"><button>Click Me</button>`);
});

app.get('/req', (req, res) => { //http://localhost:2000/req?name=happy
    console.log('Data sent by Browser', req.query);
    console.log('Data sent by Browser', req.query.name);
    res.send('Hello,' + req.query.name);
});

app.listen(2000);