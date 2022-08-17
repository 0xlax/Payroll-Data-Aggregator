const fs = require('fs');
const payroll = require('../../data/payroll.json')
var mysql = require('mysql');

var bodyParser = require('body-parser');
const { request } = require('http');


var connection = mysql.createConnection({
	host: 'localhost',
	user: 'node',
	password: 'node',
	database: 'payroll'
  })









module.exports = (req, res) => { 
    console.log("SQL running")
    res.send('Implementing....');
};