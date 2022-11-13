const Employee = require('../lib/employee')

const employee = new Employee('Joe', '123', 'abc123@abc.com')

test('It should return Employee when role is called', () => {
   const role = employee.getRole()
    expect(role).toBe('Employee')
}) 

test('It should return Joe when getName is called', () => {
    const name = employee.getName()
    expect(name).toBe('Joe')
}) 

test('It should return abc123@abc.com when getEmail is called', () => {
    const email = employee.getEmail()
    expect(email).toBe('abc123@abc.com')
}) 

test('It should return 123 when getId is called', () => {
    const id = employee.getId()
    expect(id).toBe('123')
}) 