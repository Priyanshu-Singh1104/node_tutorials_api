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