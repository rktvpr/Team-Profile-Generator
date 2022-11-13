const Manager = require("../lib/manager")

test('It should return manager when getRole is called', () => {
    const manager = new Manager('Joe', '123', 'abc123@abc.com', '123')
    const role = manager.getRole()

    expect(role).toBe('Manager')
}) 