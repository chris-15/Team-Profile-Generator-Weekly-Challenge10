const Engineer = require('../lib/Manager.js');

test("creates an engineer object", () => {
    const engineer = new Engineer('Chris', 15, 'christopher.sarm15@gmail.com', 'chris-15');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    

})