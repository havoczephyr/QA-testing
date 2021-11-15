const {returnTwo, greeting, add} = require('./function')

test('returnTwo test', () => {
    expect(returnTwo()).toBe(2)
})

test('greeting test', () => {
    expect(greeting('James')).toBe("Hello, James")
    expect(greeting('Jill')).toBe("Hello, Jill")
})

test('add test', () => {
    expect(add(1, 2)).toEqual(3)
    expect(add(5, 9)).toEqual(14)
})