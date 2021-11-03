const functions = require('./index');
const stringLength = functions.length;
const reverseString = functions.reverse;
const upperCase = functions.upperCase;

class calculator {
    constructor() {}

    add (num1, num2) {
      return num1 + num2;
    }
    minus (num1, num2) {
        return num1 - num2;
    }
    divide (num1, num2) {
        return num1 / num2;
    }
    multiply (num1, num2) {
        return num1 * num2;
    }
}

const calculators = new calculator;

describe('strings', () => {
test('return number of characters of a string', () => {
    expect(stringLength('peacehyuo')).toBe(9);
    // expect(reverseString('peacehyuo')).toBe("ouyhecaep");
});

test('reverse order of string characters', () => {
    expect(reverseString('peacehyuo')).toBe("ouyhecaep");
});

test('capitalize the first letter', () => {
    expect(upperCase('peace')).toBe("Peace");
});
});

describe('calculator', () => {
    test('reverse order of string characters', () => {
        expect(calculators.add(1, 1)).toBe(2);
    });
    test('reverse order of string characters', () => {
        expect(calculators.minus(2, 1)).toBe(1);
    }); 
    test('reverse order of string characters', () => {
        expect(calculators.divide(2, 1)).toBe(2);
    }); 
});