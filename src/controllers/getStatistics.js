const fs = require('fs');



// The code below is for a safer way to generate Javascript objects, 
// unfortunately they are comparatively slower

// const payroll = fs.readFileSync('data/payroll.json', 'utf8', (err, jsonString) => {
//     if (err) {
//         console.log(err)
//     } else {


//         console.log(jsonString)
//         // // parse calls are volatile --- crashing the application hence a try catch wrap
//         // try {
//         //         const data = JSON.parse(jsonString);
//         //         console.log(data)
//         // } catch (err) {
//         //     console.log('Error parsing JSON', err);
//         // }
//     }
    
// });

// read json
const payroll = require('../../data/payroll.json')



// number of users
var count = Object.keys(payroll).length

//sum of salaries paid
let salaries = []
for (let i = 0; i< payroll.length; i++) {
    salaries.push(parseInt(payroll[i].salary.amount))
}

var sum = 0;
for (let i = 0; i < salaries.length; i++) {
    sum += salaries[i]
}

// average_salary
var average = Math.round(sum/count)


let positions = []
for (let i = 0; i< payroll.length -1; i++) {

    if (!positions.includes(payroll[i].position)) {
        positions.push(payroll[i].position);
    }
}

// all positions uncounted
let positionuncounts = []
for (let i = 0; i< payroll.length -1; i++) {

    if (true) {
        positionuncounts.push(payroll[i].position);
    }
}

// all  position sorted and counted

const positioncounts = positionuncounts.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
}, {});




// get sum of each position
var holder = {};

payroll.forEach(function(d) {
    if (holder.hasOwnProperty(d.position)) {
        holder[d.position] = parseFloat(holder[d.position]) + parseFloat(d.salary.amount);
        console.log(d.salary.amount)
    } else {
        holder[d.position] = d.salary.amount;
    }
});

var obj2 = [];

for (var prop in holder) {
    obj2.push({ position: prop, value : holder[prop]})
}


// Method #2

// const res = Array.from(payroll.reduce(
//     (m, {position, amount}) => m.set(position, (m.get(position) || 0) + amount), new Map
//     ), ([position, amount]) =>  ({position, amount}));








var overview = {
    "number_of_employees": count,        // number of employees in the data set
    "sum_of_paid_salaries": sum,       // sum of the salaries listed across the data set
    "average_salary": average,             // average salary of all employees
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


fs.writeFile('data/userrecord.json', JSON.stringify(overview, null, 2), err => {
    if (err) {
        console.log(err);
    } else {
        console.log("User record file written")
    }
})








module.exports = (req, res) => {
    console.log(JSON.stringify(overview, null, 2))
    console.log(positioncounts)
    console.log(obj2)

    res.send('implemented');
};