function tukarBesarKecil (kalimat) {
    var tukar = '';
    var upperCase, lowerCase;
    for(let i = 0; i < kalimat.length; i++) {
        upperCase = kalimat[i].toUpperCase();
        lowerCase = kalimat[i].toLowerCase();
        if(kalimat[i] === upperCase) {
            tukar += lowerCase;
        }   else if(kalimat[i] === lowerCase) {
            tukar += upperCase
        }   else {
            tukar += kalimat[i];
        }
    }
    return tukar;   
}
console.log(tukarBesarKecil('Hello World'));
console.log(tukarBesarKecil('I aM aLAY'));
console.log(tukarBesarKecil('My Name is Bond'));
console.log(tukarBesarKecil('IT sHOULD bE me'));
console.log(tukarBesarKecil('001-A-3-5TrdYW'));
