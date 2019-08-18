function ubahHuruf(kata) {
    var alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var result = '';
    for(var i = 0; i < kata.length; i++) {
        var letakHuruf = alfabet.indexOf(kata[i]);
        var letakBaru = letakHuruf + 1; 
        var hurufBaru = alfabet[letakBaru];
        result += hurufBaru;
    }
    return result;
}
console.log(ubahHuruf('wow'));
console.log(ubahHuruf('developer'));
console.log(ubahHuruf('javascript'));
console.log(ubahHuruf('keren'));
console.log(ubahHuruf('semangat'));
