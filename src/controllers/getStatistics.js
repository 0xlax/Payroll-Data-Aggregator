const fs = require('fs');
// const jsonfile = fs.readFileSync('../../data/payroll.json');
const json = fs.readFileSync('data/payroll.json', 'utf8')





module.exports = (req, res) => {
    console.log(json);

    res.send('implemented');
};