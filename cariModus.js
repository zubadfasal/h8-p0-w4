function cariModus(arr) {
    var arrModus = [], isSame = false;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        isSame = true;
        arrModus.push(arr[i]);
      } else {
        isSame = false;
      }
    }
  }

  return (arrModus[0] === undefined || isSame) ? -1 : arrModus[0];
}
console.log(cariModus([10, 4, 5, 2, 4])); 
console.log(cariModus([5, 10, 10, 6, 5]));
console.log(cariModus([10, 3, 1, 2, 5]));
console.log(cariModus([1, 2, 3, 3, 4, 5]));
console.log(cariModus([7, 7, 7, 7, 7]));
