const fs = require('fs');
const payroll = require('../../data/payroll.json')
var mysql = require('mysql');
var bodyParser = require('body-parser');
const { request } = require('http');
const { prepareValue } = require('pg/lib/utils');
const res = require('express/lib/response');
const { Sequelize, Model, DataTypes } = require('sequelize');


const sequelize = new Sequelize('sqlite::memory:');
const User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});



sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
 
// var connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'node',
// 	password: 'node',
// 	database: 'payroll'
//   })

// var values = []

// for(let i  =0; i< payroll.length; i++) {
//     values.push([payroll[i].position, payroll[i].salary.amount])
// }

// connection.query(
//     'INSERT INTO members (position, salary) VALUES ?',
//     [values.map(employee => [employee., employee.salary])],
//     (err, result) =>  {
//     if (err) {
//         console.log("Error in DB_READ_CONNECTION")
//     } else {
//         res.send('DB READ COMPLETE')
//     }
// });

// class Employee extends Model {}
// User.init({
//   position: DataTypes.STRING,
//   salary: DataTypes.FLOAT
// }, { sequelize, modelName: 'user' });


// (async () => {
//     await sequelize.sync();
//     const jane = await User.create({
//       username: 'janedoe',
//       birthday: new Date(1980, 6, 20)
//     });
//     console.log(jane.toJSON());
//   })();





module.exports = (req, res) => { 
    res.send('Implementing....');
};