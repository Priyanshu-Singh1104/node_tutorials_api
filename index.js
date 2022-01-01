const http = require('http');
const data = require('./data');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application\json' });
    res.write(JSON.stringify(data));
    res.end();
}).listen(4000);


//create / remove a file usingcomandand pass input parameter using command
// const fs = require('fs');
// const input = process.argv;
// if (input[2] == 'add') {
//     fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == 'remove') {
//     fs.unlinkSync(input[3]);
// } else {
//     console.log('Invalid Output');
// }


//status 200: ok
// status 201:created
// status 404:Not Found
//Status: 500 Internal Server Error
// console.log(process);
// console.log(process.argv);

// const colors = require('colors');
// console.log("hello".blue);

// const http = require('http');

// function dataControl(req, res) {
//     res.write('<h1>Hello this is Priyanshu Singh</h1>');
//     res.end();
// }

// http.createServer(dataControl).listen(4500);

// http.createServer((req, res) => {
//     res.write('<h1>Hello this is Priyanshu Singh</h1>');
//     res.end();
// }).listen(4500);