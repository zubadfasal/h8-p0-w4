function checkAB (num) {
    var arr = num.split(''), arr2 = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] !== '') {
            arr2.push(arr[i]);
        }
    }

    for(var a = 0; a < arr2.length; a++) {
        if(arr[a] === 'a') {
            for(var b = a; b <= (a+3); b++) {
                if(arr2[b] === 'b') {
                    return true;
                }
            }
        }
    }
    return false;
}
console.log(checkAB('lane borrowed'));
console.log(checkAB('i am sick'));
console.log(checkAB('you are boring'));
console.log(checkAB('barbarian'));
console.log(checkAB('bacon and meat'));
