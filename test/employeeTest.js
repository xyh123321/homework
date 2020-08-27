const employeeTest = require('ava');
const { Employee } = require('../src/employee')

employeeTest('test case1: toString',t => {
    const employee =new Employee("jayden","engineer");
    t.is("jayden (engineer)",employee.toString())
})