function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: function (a, b) {
   return a + b;
  },

  subtract: function (a, b) {
   return a - b;
  },

  multiply: function (a, b) {
   return a * b;
  },

  divide: function (a, b) {
   return a / b;
  },
};

function caeserCipher (string, shift) {

let result = ''

for (let i = 0; i < string.length; i++) {
  let char = string[i];

  if(char >= 'a' && char <= 'z') {

    const newChar = String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97)
 result += newChar
  }
  else if(char >= "A" && char <= "Z") {
    const newChar = String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65)
    result += newChar
  }
  else {
     result += char
  }
}
console.log(`result ${result}`)
return result
}

module.exports = { capitalize, reverseString, calculator, caeserCipher };
