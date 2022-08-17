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





// Sum of Salaries Paid
async function getSum() {
    const sumOf = await Users.findAll({
        attributes: [[sequelize.fn('sum', sequelize.col('salary')), 'totalPaid']],
        raw: true
    })
    return sumOf[0]
} 

var numc = []
function logTotal() {
    getSum().then( (result) => numc = result );
    return numc.totalPaid
}

// Averge salary paid by positions

async function getSumByPo() {
    const sumofpo = await Users.findAll({
        attributes: [
            'position'[sequelize.fn('AVG', sequelize.col('salary')), 'Positions']],
        group: 'position',
        order: [[sequelize.fn('AVG', sequelize.col('salary')), 'DESC']],

        raw: true
    })
    return sumofpo
} 
var po = []
function getSumPo() {
    getSumByPo().then( (result) => pos = result );
    return po
}






async function getSumByPos() {
    const sumofpos = await Users.findAll({
        attributes: [[sequelize.fn('AVG', sequelize.col('salary')), 'Positions']],
        group: 'position',
        raw: true
    })
    return sumofpos
} 

var pos = []
function getSumPos() {
    getSumByPos().then( (result) => pos = result );
    return pos
}










var overview = {
    // "number_of_employees" : logUsers(),
    // "sum_of_paid_salaries": "",      
    // "average_salary": "",             
    "average_salary_by_position": {   
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
    console.log("sum_of_paid_salaries: " + logTotal())
    console.log("average_salary: " + logTotal() / logUsers())
    console.log(pos)
    console.log(po)

    console.log("average_salary_by_position : " + pos)
    console.log(overview)
    res.send('Implementing....');
};

