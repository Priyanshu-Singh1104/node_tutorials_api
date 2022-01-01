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

// create file under directory
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');
// console.log(dirPath);

// for (i = 0; i < 5; i++) {
//     fs.writeFileSync(dirPath + "/hello" + i + ".txt", "hello priyanshu singh");
//     // fs.writeFileSync(`hello${i}.txt`, "hello priyanshu singh ");
// }

//CRUD with File System
//make file
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');
// const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath, "hello priyanshu singh ");

// //Read file
// fs.readFile(filePath, 'utf8', (err, item) => {
//         console.log(item);
//     })
//     //update file
// fs.appendFile(filePath, 'and file name is apple.txt', (err) => {
//     if (!err) {
//         console.log("file is update");
//     }
// });

// //rename file
// fs.rename(filePath, `${dirPath}/orange.txt`, (err) => {
//     if (!err) {
//         console.log("file name is Renamed");
//     }
// })

// //delete file
// fs.unlinkSync(`${dirPath}/orange.txt`);

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