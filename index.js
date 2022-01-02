const express = require('express');

const app = express();
const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("Please Provide Your gae")
    } else if (req.query.age < 18) {
        res.send("You can't access this Page")
    } else {
        next();
    }

}

app.use(reqFilter);
app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

app.get('/users', (req, res) => {
    res.send('Welcome to Users Page');
});

app.listen(2000);