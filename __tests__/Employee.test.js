const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Chris', 15, 'christopher.sarm15@gmail.com');

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})