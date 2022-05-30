const ftoc = function(fah) {
  let cel = (fah - 32) * 5 / 9;
  return +cel.toFixed(1);
};

const ctof = function(cel) {
  let fah = cel * 9 / 5 + 32;
  return +fah.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
