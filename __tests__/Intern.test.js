const Intern = require('../lib/intern')

const intern = new Intern('Joe', '123', 'abc123@abc.com', 'UPenn')

test('It should return intern when getRole is called', () => {
   const role = intern.getRole()
    expect(role).toBe('Intern')
}) 

test('It should return UPenn when getSchool is called', () => {
    const school = intern.getSchool()
    expect(school).toBe('UPenn')
}) 