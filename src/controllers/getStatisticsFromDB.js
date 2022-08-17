const fs = require('fs');
const payroll = require('../../data/payroll.json')
var mysql = require('mysql');
var bodyParser = require('body-parser');
const { request } = require('http');
const { prepareValue } = require('pg/lib/utils');
const res = require('express/lib/response');




const Sequelize = require("sequelize");
const { rejects } = require('assert');
// const { count } = require('console');
const DataTypes = Sequelize.DataTypes;
const count = Sequelize.Model;

const sequelize = new Sequelize(
 'payroll',
 'laxman',
 'lasuprha',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

const Users = sequelize.define("users", {
    position: {
        type: Sequelize.DataTypes.STRING,
        allowNull:  false
    },
    salary: {
        type:  DataTypes.INTEGER,
    }
})






sequelize.sync().then(() => {
   console.log('User table created successfully!');

    for (let i = 0; i < payroll.length; i++) {
        Users.create({
            position: payroll[i].position,
            salary: payroll[i].salary.amount,
        }).then(res => {
            return
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });
     
    }
}).catch((error) => {
   console.error('Unable to create table : ', error);
});


// Total per Position - WIP
async function getTotalPaid() {
    const totalAmount = await Users.findAll({
        attributes: [
            'position',
            [sequelize.fn('sum', sequelize.col('salary')), 'total_amount'],
        ],
        group: ['position'],
        raw: true
    })

    return totalAmount
    
}


// Number of Users

async function getUsers() {
    
    const countUser = await Users.count()
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(countUser))
    });
    return countUser;
}

var numb = null
function logUsers() {
    getUsers().then( (result) => numb = result );
    return numb

}




// totaal sum being paid
async function getSum() {
    const sumOf = await Users.findAll({
        attributes: [[sequelize.fn('sum', sequelize.col('salary')), 'totalPaid']],
        raw: true
    })
    return sumOf
} 

// async function getSum() {
//     const totalSalary
// }




sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
 

 var overview = {
    "number_of_employees": logUsers(),        // number of employees in the data set
    "sum_of_paid_salaries": "",      // sum of the salaries listed across the data set
    "average_salary": "",             // average salary of all employees
    "average_salary_by_position": {   // average salary aggregated by position
        "Orchestrator": "",
        "Architect": "",
        "Liaison": "",
        "Analyst" : "",
        "Officer" : "",
        "Coordinator" : "",
        "Specialist": "",
        "Designer" : "",
        "Planner" : "",
        "Developer" : "",
        "Supervisor" : "",
        "Executive" : "",
        "Assistant": "",
        "Facilitator": "",
        "Representative": "",
        "Strategist": "",
        "Director": "",
        "Consultant": "",
        "Manager": "",
        "Producer": "",
        "Technician": "",
        "Agent": "",
        "Engineer": "",
        "Associate": "",
        "Administrator": "",  


    }
}





module.exports = (req, res) => { 
    console.log("number_of_employees : " + logUsers(), )
    // console.log(getSum())
    // console.log(getTotalPaid())
    console.log(overview)
    res.send('Implementing....');
};

