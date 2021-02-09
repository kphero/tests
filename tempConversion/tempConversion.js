let farenheit = 0;
let celsius = 0;

const ftoc = function(far) {
celsius = Math.round((far - 32) * (5/9) * 10) / 10
return celsius;
}

const ctof = function(cel) {
farenheit = Math.round(((cel * 1.8) + 32) * 10) / 10
return farenheit;
}

module.exports = {
  ftoc,
  ctof
}

/*
  
var ftoc = function(f) {
 return Math.round((f - 32) * (5/9) * 10) / 10
}

var ctof = function(c) {
  return Math.round(((c * 9/5) + 32) * 10) / 10 
}
*/