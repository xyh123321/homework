const employeeTest = require('ava');
const { Employee } = require('../src/employee')

employeeTest('test case1: toString',t => {
    const employee =new Employee("jayden","engineer");
    t.is("jayden (engineer)",employee.toString())
})

employeeTest('test case2: throw new error',t => {
    try{
        new Employee("jayden","dev");
        t.fail();
    }catch(e){
        t.is('Employee cannot be of type dev',e.message)
    }
})