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

  substract: function (a, b) {
   return a - b;
  },

  multiply: function (a, b) {
   return a * b;
  },

  divide: function (a, b) {
   return a / b;
  },
};

module.exports = { capitalize, reverseString, calculator };
