'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345',
    database: 'APICreditos'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;