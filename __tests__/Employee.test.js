const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

// test for employee object creation
test('creates an employee object', () => {
    const employee = new Employee('Chris', 15, 'christopher.sarm15@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

// test to create getName of employee; method
test('creates method to return employee name', () => {
    const employee = new Employee('Chris', 15, 'christopher.sarm15@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
})

// test to create getId of employee; method
test('creates method to return employee id', () => {
    const employee = new Employee('Chris', 15, 'christopher.sarm15@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));   
})

// test to create getEmail of employee; method
test('creates method to return employee email', () => {
    const employee = new Employee('Chris', 15, 'christopher.sarm15@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
})

test('creates method to return employee role', () => {
    const employee = new Employee('Chris', 15, 'christopher.sarm15@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
})