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


let jobandwage = []
for (let i = 0; i < payroll.length - 1; i++) {
    jobandwage[payroll[i].position] = payroll[i].salary.amount;
}


// convert array to Object Keys format

function arr2obj(arr) {
  
    // Create an empty object
    let obj = {};
  
    arr.forEach((v) => {
  
        // Extract the key and the value
        let key = v[0];
        let value = v[1];
  
        // Add the key and value to
        // the object
        obj[key] = value;
    });
  
    // Return the object
    return obj;
}

job = arr2obj(jobandwage)



// const obj = positions.reduce((accumulators, value) => {
//     return {...accumulators, [value]: ""};
// }, {});





// Lodash and external libraries redues efficiency - hence using regular for loop
// Average salary paid by position




// for (let j = 0; j <= positions.length; j++) {
//     var q = positions[j]
//     console.log(q)
    

//     for (let i = 0; i <= payroll.length ; i++) {
//         if (payroll[i].position == q) {
//         positions.salary += payroll[i].salary.amount

//         }
//     }
//     // console.log(positions)

// }

// for (let i = 0; i <= payroll.length; i++) {
//     var p = payroll
// }













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
        "Producer" : "",
        "Administrator" : "",


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
    // console.log(JSON.stringify(overview, null, 2))
    console.log(jobandwage(2))

    res.send('implemented');
};