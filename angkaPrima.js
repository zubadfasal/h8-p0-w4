function angkaPrima(angka) {
    for(i = 0; i <= 33; i++) {
        if(angka % 2 == 0) {
           return false;
        }
    }
    return true;
}
console.log(angkaPrima(3));
console.log(angkaPrima(7));
console.log(angkaPrima(6));
console.log(angkaPrima(23));
console.log(angkaPrima(33));
