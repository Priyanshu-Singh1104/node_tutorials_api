console.log("happy ");
// import { x } from '@/app';
const app = require('./app_basic');

const arr = [1, 2, 3, 4, 6, 7, 9, 3, 5, 0, 8];
console.warn(app);
console.warn(app.z());

let result = arr.filter((item) => { // Arrow Function
    // console.warn(item);
    // return item === 3
    // return item > 4
    return item >= 4
});
console.log(result);

const http = require('http');
const data = require('./data');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application\json' });
    res.write(JSON.stringify(data));
    res.end();
}).listen(4000);

// 2 types module global and none-global module
// console.log(); it is globale module
//const fs = require('fs'); import fs is none global module File System fs none globale mode
// const fs = require('fs');
// fs.writeFileSync('hello.txt', 'code step by step');

// const fs = require('fs').writeFileSync;
// fs('hello.txt', 'code step by step');

//it is globale module Start __dirname,__filename
console.log(__dirname); // It is print directory name
console.log("->>", __dirname); // It is print directory name
console.log("->>", __filename); // It is print File name
//it is globale module End


//Promise Use in Asynchronouse
let a = 20;
let b = 30;

let waitingdata = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    }, 2000)
})

waitingdata.then((data) => {
    b = data;
    console.log(a + b);
})





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

//Use fs.mkdir() or fs.mkdirSync() to create a new folder.const fs = require('fs')
// const fs = require('fs')
// const folderName = 'Users'
// try {
//     if (!fs.existsSync(folderName)) {
//         fs.mkdirSync(folderName, 0o776)
//     }
// } catch (err) {
//     console.error(err)
// }

// const dirnames = {
//     sync: "Priyanshu",
//     async: "asyncPriyansu"
// };
// fs.mkdirSync(dirnames.sync, 0o776);

// function printBoom() {
//     console.log("Boom");
// }
// fs.writeFileSync(`${dirnames.sync}/file.js`, `(${printBoom.toString()}())`);



// create file under directory
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');
// console.log(dirPath);

// for (i = 0; i < 5; i++) {
//     fs.writeFileSync(dirPath + "/hello" + i + ".txt", "hello priyanshu singh");
//     // fs.writeFileSync(`hello$ { i }.txt `, "hello priyanshu singh ");
// }

//CRUD with File System
//make file
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');
// const filePath = `$ { dirPath }/apple.txt`;
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