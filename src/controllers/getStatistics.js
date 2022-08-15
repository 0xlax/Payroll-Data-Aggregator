const fs = require('fs');
const payroll = fs.readFileSync('data/payroll.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log(err)
    } else {
        // parse calls are volatile --- crashing the application hence a try catch wrap
        try {
                const data = JSON.parse(jsonString);
                console.log(data)
        } catch (err) {
            console.log('Error parsing JSON', err);
        }
    }
    
});
// const payroll = require('../../data/payroll.json')

const overview = {
    "number_of_employees": "",        // number of employees in the data set
    "sum_of_paid_salaries": "",       // sum of the salaries listed across the data set
    "average_salary": "",             // average salary of all employees
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






module.exports = (req, res) => {
    console.log(payroll)

    res.send('implemented');
};