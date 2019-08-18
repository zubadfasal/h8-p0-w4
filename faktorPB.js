function fpb(num1, num2) {
       var result = 0;
        for(var i = 1; i < num1; i ++) {
           if(num1 % i === 0 && num2 % i === 0) { 
        result = i;
      }
    }
    return result;
  }
  console.log(fpb(12, 16));
  console.log(fpb(50, 40));
  console.log(fpb(22, 99));
  console.log(fpb(24, 36));
  console.log(fpb(17, 23));
