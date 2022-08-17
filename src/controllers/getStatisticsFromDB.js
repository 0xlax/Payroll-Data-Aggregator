const fs = require('fs');
const payroll = require('../../data/payroll.json')
var mysql = require('mysql');
var bodyParser = require('body-parser');
const { request } = require('http');
const { prepareValue } = require('pg/lib/utils');
const res = require('express/lib/response');






const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'payroll',
 '',
 '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
 

// const sequelize = new Sequelize('sqlite::memory:');
// const User = sequelize.define('User', {
//   position: DataTypes.STRING,
//   salary: DataTypes.FLOAT,
// });




// Promise.all(payroll.map(function(value) {
//     User.create({
//         position: payroll.position,
//         salary: payroll.salary.amount,
//     })
//     return Guild.findOrCreate({where: {position: payroll[key].position, salary: payroll[key].salary.amount}, defaults: {
//                 position: payroll[key].position,
//                 salary: payroll[key].salary.amount
//             }})
//             .spread(function(payroll, created) {
//                 console.log(payroll.get ({
//                     plain: true
//                 }))
//                 console.log(created)
//             })
//   })).then(function() {
//     console.log("created")
//   })
  


// for (var key in payroll) {
//     Guild
//     .findOrCreate
// }



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