const { capitalize, reverseString, calculator } = require("./index");


test("return a string with the first character captalized", () => {
    expect(capitalize("bright")).toMatch('Bright');
});
test("Reverse a string", () => {
    expect(reverseString('anyawe')).toMatch('ewayna')
});
test("Add two numbers", () => {
    expect(calculator.add(2,3)).toEqual(5)
});
test("Subtract two numbers", () => {
    expect(calculator.subtract(2,3)).toEqual(-1)
});
test("multiply two numbers", () => {
    expect(calculator.multiply(2,3)).toEqual(6)
});
test("divide two numbers", () => {
    expect(calculator.divide(2, 3)).toBeCloseTo(0.6);
});
