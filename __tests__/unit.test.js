// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('9 digits with dashes is a phone number', () => {
    expect(functions.isPhoneNumber('415-991-0011')).toBe(true)
})

test('(415)991-0011 is a valid number', () => {
    expect(functions.isPhoneNumber('(415)991-0011')).toBe(true)
})

test('number containing period is not a valid number', () => {
    expect(functions.isPhoneNumber('415.991')).toBe(false)
})

test('a name is not a valid number', () => {
    expect(functions.isPhoneNumber('Alex')).toBe(false)
})

test('gmail adress is a valid email', () => {
    expect(functions.isEmail('alex@gmail.com')).toBe(true)
})

test('school domain is a vlid email', () => {
    expect(functions.isEmail('alex@ucsd.edu')).toBe(true)
})

test('alex@ucsdedu is not a valid email', () => {
    expect(functions.isEmail('alex@ucsdedu')).toBe(false)
})

test('email withouth @ is not a vlid email', () => {
    expect(functions.isEmail('alex.com')).toBe(false)
})

test('Alex12 is a password', () => {
    expect(functions.isStrongPassword('Alex12')).toBe(true)
})

test('Alex12_021sdk is a password', () => {
    expect(functions.isStrongPassword('Alex12_021sdk')).toBe(true)
})

test('Alex!@$%&** is not a password', () => {
    expect(functions.isStrongPassword('Alex!@$%&**')).toBe(false)
})

test('& is not a password', () => {
    expect(functions.isStrongPassword('&')).toBe(false)
})

test('1/2/2000 is a valid date', () => {
    expect(functions.isDate('1/2/2000')).toBe(true)
})

test('01/02/2000 is a valid date', () => {
    expect(functions.isDate('01/02/2000')).toBe(true)
})

test('1/2/00 is not a valid date', () => {
    expect(functions.isDate('1/2/00')).toBe(false)
})

test('12/2000 is not a valid date', () => {
    expect(functions.isDate('12/2000')).toBe(false)
})

test('#111 is a valid hex', () => {
    expect(functions.isHexColor('#111')).toBe(true)
})

test('#b12 is a valid hex', () => {
    expect(functions.isHexColor('#ffffff')).toBe(true)
})

test('#zzz is not a valid hex', () => {
    expect(functions.isHexColor('#zzz')).toBe(false)
})

test('#*aaa* is not a valid hex', () => {
    expect(functions.isHexColor('#*aaa*')).toBe(false)
})