let finalSum = 0
let firstNum = 0
let secondNum = 0

const sumAll = function() {
if (arguments[0] < 0 || arguments[1] < 0 || typeof arguments[0] != 'number' || typeof arguments[1] != 'number'){
    return 'ERROR'
} else if (arguments[0] < arguments[1]) {
    finalSum = 0;
    firstNum = 0;
    secondNum = 0;
    for (i = 1; i <= arguments[0]; i++) {
    firstNum += i;
    }
    for (i = arguments[0] + 1; i <= arguments[1]; i++) {
    secondNum += i;
    }
} else {
    finalSum = 0;
    firstNum = 0;
    secondNum = 0;
    for (i = 1; i <= arguments[1]; i++) {
        firstNum += i;
    }
    for (i = arguments[1] + 1; i <= arguments[0]; i++) {
        secondNum += i;
    }
}
finalSum = firstNum + secondNum;
return finalSum;
}

module.exports = sumAll

/*
const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

module.exports = sumAll;
*/
