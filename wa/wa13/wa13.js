
// Problem 1: Create JSON for each employee with the following details
const employees = [
    { firstName: 'Sam', department: 'Tech', designation: 'Manager', salary: 40000, raiseEligible: true },
    { firstName: 'Mary', department: 'Finance', designation: 'Trainee', salary: 18500, raiseEligible: true },
    { firstName: 'Bill', department: 'HR', designation: 'Executive', salary: 21200, raiseEligible: false }
];
console.log('Problem 1:', employees);

// Problem 2: Create JSON for the company with the following details
const companyDetails = {
    companyName: 'Tech Stars', website: 'www.techstars.site', employees: employees
};
console.log('Problem 2:', companyDetails);

// Problem 3: A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
employees.push({
    firstName: 'Anna',
    department: 'Tech',
    designation: 'Executive',
    salary: 25600,
    raiseEligible: false
});
console.log('Problem 3: Updated Employees with New Addition:', employees);

// Problem 4: Given the JSON for the company, calculate the total salary for all company employees.
function calculateTotalSalary(employees) {
    let totalSalary = 0;
    for (const employee of employees) {
        totalSalary += employee.salary;
    }
    return totalSalary;
}
console.log('Problem 4: Total Salary:', calculateTotalSalary(employees));


// Problem 5: It's raise time. 
function raiseTime(employees) {
    employees.forEach(employee => {
        if (employee.raiseEligible) {
            employee.salary += employee.salary * 0.10;
            employee.raiseEligible = false;
        }
    });
}
raiseTime(employees);
console.log('Problem 5: Updated Employees after Raises:', employees);

// Problem 6: Some employees have decided to work from home.
const workingFromHomeNames = ['Anna', 'Sam'];
employees.forEach(employee => {
    employee.wfh = workingFromHomeNames.includes(employee.firstName);
});
console.log('Problem 6: Employees with WFH Status:', employees);