const Intern = require('../lib/Intern');

// test for intern object creation
test("creates an intern object", () => {
    const intern = new Intern('Chris', 15, 'christopher.sarm15@gmail.com', 'UConn');
   
    expect(intern.name).toEqual('Chris');   
    expect(intern.name).toEqual(expect.any(String));

    expect(intern.id).toEqual(15);
    expect(intern.id).toEqual(expect.any(Number));

    expect(intern.email).toEqual('christopher.sarm15@gmail.com');
    expect(intern.email).toEqual(expect.any(String));

    expect(intern.school).toEqual('UConn');
    expect(intern.school).toEqual(expect.any(String));

})

// test to create getSchool of intern; method
test("creates method to return intern school", () => {
    const intern = new Intern('Chris', 15, 'christopher.sarm15@gmail.com', 'UConn');

    expect(intern.getSchool()).toEqual('UConn');
    expect(intern.getSchool()).toEqual(expect.any(String));
})

// test to create getRole of intern; method
test("creates method to return intern's role", () => {
    const intern = new Intern('Chris', 15, 'christopher.sarm15@gmail.com', 'UConn');

    expect(intern.getRole()).toEqual("Intern");
})