function romanNumeral(string) {
  // type your code here
  if (typeof num !== "number") {
    return false;
  }

  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

let total = 0
 let idx = 0

 while (idx < string.length) {
  const twoChar = string[idx] + (string[idx + 1] || '');

  if (romans[twoChar] !== undefined) {
    total += romans[twoChar];
    idx += 2;
  } else {
    total += romans[string[idx]];
    ++idx;
  }
}

return total;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
