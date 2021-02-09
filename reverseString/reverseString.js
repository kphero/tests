const reverseString = function(word) {
let stringReversed = "";
for (i = 0; i < word.length + 1; i++) {
    stringReversed += word.charAt(word.length - i)
}
return stringReversed
}

module.exports = reverseString

/* The actual solution (mine did work tho)

var reverseString = function(string) {
    return string.split('').reverse().join('') 
}
*/