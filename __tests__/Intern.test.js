const Intern = require('../lib/Intern');

test("creates an intern object", () => {
    const intern = new Intern('Chris', 15, 'christopher.sarm15@gmail.com', 'UConn');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

})

test("creates method to return intern school", () => {
    const intern = new Intern('Chris', 15, 'christopher.sarm15@gmail.com', 'UConn');

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test("creates method to return intern's role", () => {
    const intern = new Intern('Chris', 15, 'christopher.sarm15@gmail.com', 'UConn');

    expect(intern.getRole()).toEqual("Intern");
})