const {
  capitalize,
  reverseString,
  calculator,
  caeserCipher,
  analyzeArray,
} = require("./index");


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
    expect(calculator.subtract(2, 3)).toEqual(-1);
});
test("multiply two numbers", () => {
    expect(calculator.multiply(2,3)).toEqual(6)
});
test("divide two numbers", () => {
    expect(calculator.divide(2, 2)).toEqual(1);
});
test("shift z to a specified position", () => {
 expect(caeserCipher('z', 3)).toMatch('c');
}); 
test("shift letters to a specified position", () => {
 expect(caeserCipher('xyz', 3)).toMatch('abc');
}); 
test("shift letters to a specified position", () => {
 expect(caeserCipher('HeLLo', 3)).toBe('KhOOr');
}); 
test("shift letters to a specified position", () => {
 expect(caeserCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
}); 
test("Return the statistics of an array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(
      
        {
          average: 4,
          min: 1,
          max: 8,
          length: 6,
        }
    );
}); 