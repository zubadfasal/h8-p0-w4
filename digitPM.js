function digitPerkalianMinimum (angka) {
    var digitPalingSedikit = Number.MAX_SAFE_INTEGER;
    for(var i = 1; i <= Math.round(Math.sqrt(angka)); i++) {
        if(angka % i === 0) {
            var str_number1 = String(i);
            var str_number2 = String(angka/i);
            var number_count = (str_number1 + str_number2).length;
            if(digitPalingSedikit > number_count) {
                digitPalingSedikit = number_count;
            }
        }
    }
    return digitPalingSedikit;
}
console.log(digitPerkalianMinimum(24));
console.log(digitPerkalianMinimum(90));
console.log(digitPerkalianMinimum(20));
console.log(digitPerkalianMinimum(179));
console.log(digitPerkalianMinimum(1));

