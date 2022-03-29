const Manager = require('../lib/Manager.js');

test("creates a manager object", () => {
    const manager = new Manager('Chris', 15, 'christopher.sarm15@gmail.com', 2);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

})