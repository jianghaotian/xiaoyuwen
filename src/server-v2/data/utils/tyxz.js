var tyxz = require('../sys/tyxz.json');
var {randomsort} = require('../../utils/random');

function getTi(id) {
  let ti = tyxz['t' + id];
  if (ti == undefined) {
    return null;
  }
  for (let item of ti) {
    item.question.sort(randomsort);
  }
  // console.log(ti);
  return ti;
}

module.exports = { getTi }


// var arr = [1, 2, 3, 4, 5];
// arr.sort(randomsort);
// console.log(arr);