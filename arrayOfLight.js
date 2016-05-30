function arrayOfLight (x) {
  var array = [];
  for (var i=1; i <= x; i++) {
    array.push(i);
  }
  return array;
}

console.log(arrayOfLight(5))