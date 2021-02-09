const repeatString = function(word, time) {
let repeatWord = ''
if (time < 0) {
    return 'ERROR'
}
for (i = 0; i < time; i++) {
    repeatWord += word;
}
return repeatWord
}

module.exports = repeatString
