function changeMe (arr) {
    var nomor = 0;
    for(i = 0; i < arr.length; i++) {
        console.log(++nomor + ' ' + arr[i][0] + ' ' + arr[i][1]);
        var obj = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[1][2],
            age: 2019 - arr[i][3],
        }
        if(!Number.isInteger(obj.age)) {
            obj.age = 'Invalid Birth Year'
        }
    console.log(obj);      
    }
}
changeMe([['Christ', 'Evans', 'Male', 1982], 
['Robert', 'Downey', 'Male']]);
changeMe([]);
