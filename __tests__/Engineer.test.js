const { expect, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test("creates an engineer object", () => {
    const engineer = new Engineer('Chris', 15, 'christopher.sarm15@gmail.com', 'chris15');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test("creates method to return engineer's github", () => {
    const engineer = new Engineer('Chris', 15, 'christopher.sarm15@gmail.com', 'chris15');

    expect(engineer.getGitHub()).toEqual(expect.any(String));
})

test("creates method to return engineer role", () => {
    const engineer = new Engineer('Chris', 15, 'christopher.sarm15@gmail.com', 'chris15');

    expect(engineer.getRole()).toEqual("Engineer");
})