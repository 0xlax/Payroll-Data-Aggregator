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

// average salary paid by position











var overview = {
    "number_of_employees": count,        // number of employees in the data set
    "sum_of_paid_salaries": sum,       // sum of the salaries listed across the data set
    "average_salary": average,             // average salary of all employees
    "average_salary_by_position": {   // average salary aggregated by position
        "Associate": "",
        "Specialist": "",
        "Executive": "",
        "Architech" : "",
        "Lialson" : "",
        "Officer" : "",
        "Coordinator" : "",
        "Designer" : "",
        "Planner" : "",
        "Developer" : "",
        "Supervisor" : "",
        "Assistant" : "",
        "Representative" : "",
        "Strategist" : "",
        "Orchestrator" : "",
        "Director" : "",
        "Facilitator" : "",
        "Consultant" : "",
        "Analyst": "",
        "Manager" : "",
        "Technician" : "",
        "Agent" : "",
        "Engineer" : "",

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

    res.send('implemented');
};