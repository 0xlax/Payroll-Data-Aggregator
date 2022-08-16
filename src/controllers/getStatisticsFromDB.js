const fs = require('fs');
const payroll = require('../../data/payroll.json')
const knexConfig = require('../../knexfile');
const knex = require('knex')(knexConfig[process.env.NODE_ENV])



module.exports = (req, res) => {
    console.log(payroll)
    res.send('Implementing....');
};