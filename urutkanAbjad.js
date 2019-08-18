function urutkanAbjad (str) {
    var abjad = 'abcdefghijklmnopqrstuvwxyz', urutan = '';
    for(var i = 0; i < abjad.length; i++) {
        for(var j = 0; i < str.length; j++) {
            if(abjad[i] === str[j]) {
                urutan += abjad[i];
            }
        }
    }
    return urutan;
}
console.log(urutkanAbjad('hello'));
console.log(urutkanAbjad('truncate'));
console.log(urutkanAbjad('developer'));
console.log(urutkanAbjad('software'));
console.log(urutkanAbjad('aegis'));
