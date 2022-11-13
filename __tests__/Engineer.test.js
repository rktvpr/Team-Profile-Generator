const Engineer = require('../lib/engineer')

const engineer = new Engineer('Joe', '123', 'abc123@abc.com', 'testgithub')

test('It should return Engineer when getRole is called', () => {
   const role = engineer.getRole()
    expect(role).toBe('Engineer')
}) 

test('It should return testgithub when getGithub is called', () => {
    const github = engineer.getGithub()
    expect(github).toBe('testgithub')
}) 