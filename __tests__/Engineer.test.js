const Engineer = require('../lib/Engineer');

// test for engineer object creation
test("creates an engineer object", () => {
    const engineer = new Engineer('Chris', 15, 'christopher.sarm15@gmail.com', 'chris-15');
    
    expect(engineer.name).toEqual('Chris');
    expect(engineer.name).toEqual(expect.any(String));

    expect(engineer.id).toEqual(15);
    expect(engineer.id).toEqual(expect.any(Number));

    expect(engineer.email).toEqual('christopher.sarm15@gmail.com');
    expect(engineer.email).toEqual(expect.any(String));

    expect(engineer.github).toEqual('chris-15');
    expect(engineer.github).toEqual(expect.any(String));

})

// test to create getGitHub of engineer; method
test("creates method to return engineer's github", () => {
    const engineer = new Engineer('Chris', 15, 'christopher.sarm15@gmail.com', 'chris-15');
    
    expect(engineer.getGitHub()).toEqual('chris-15');
    expect(engineer.getGitHub()).toEqual(expect.any(String));
})

// test to create getRole of engineer; method
test("creates method to return engineer role", () => {
    const engineer = new Engineer('Chris', 15, 'christopher.sarm15@gmail.com', 'chris-15');

    expect(engineer.getRole()).toEqual("Engineer");
})