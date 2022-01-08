// Mysql Query Start
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ag_games",
});
con.connect(function(error) {
    if (error)
        throw error;
    else
        console.log('Connected');

    con.query("select * from amd_master_admin", function(err, result) {
        if (err)
            throw err;
        else
            console.log('all Result are Here', result[0].admin_name);
        console.log('all Result are Here', result);
    });
});
// Mysql Query End

// Http Query Start
var http = require('http');
var uc = require('upper-case');
var page = '<h1>Hello Node JS</h1>';
http.createServer(function(req, res) {
    res.writeHead(200, { 'Cobtent-Type': "text/html" });
    // res.write(page);
    res.write(uc.upperCase("node web js"));
    res.end();
}).listen(1000);
// Http Query End

// Email Query Start
var nodeMailer = require('nodemailer');
var transport = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'technicaltutorialsmedia@gmail.com',
        pass: 'Tech96191104',
    }
});
var mailOptions = {
    from: 'technicaltutorialsmedia@gmail.com',
    to: 'technicaltutorialsmedia@gmail.com',
    subject: 'Test node Mail',
    text: 'Hello Priyanshu This is my First Mail by Node JS',
}
transport.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email Has Been Sent", info.response);
    }
});

//First On This Before Send Mail https://myaccount.google.com/lesssecureapps
// Email Query End