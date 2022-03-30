const Manager = require('../lib/Manager.js');

test("creates a manager object", () => {
    const manager = new Manager('Chris', 15, 'christopher.sarm15@gmail.com', 2);

    expect(manager.name).toEqual('Chris');
    expect(manager.name).toEqual(expect.any(String));

    expect(manager.id).toEqual(15);
    expect(manager.id).toEqual(expect.any(Number));

    expect(manager.email).toEqual('christopher.sarm15@gmail.com')
    expect(manager.email).toEqual(expect.any(String));

    expect(manager.officeNumber).toEqual(2);
    expect(manager.officeNumber).toEqual(expect.any(Number));

})

test("creates method to return manager role", () => {
    const manager = new Manager('Chris', 15, 'christopher.sarm15@gmail.com', 2);

    expect(manager.getRole()).toEqual("Manager");
})