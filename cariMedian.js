function cariMedian(arr) {
    var median = Math.floor(arr.length / 2);
    if (arr.length % 2) {
      return arr[median];
    } else {  
      return (arr[median-1] + arr[median]) / 2;
    }
  }
  
  console.log(cariMedian([1, 2, 3, 4, 5]));
  console.log(cariMedian([1, 3, 4, 10, 12, 13]));
  console.log(cariMedian([3, 4, 7, 6, 10]));
  console.log(cariMedian([1, 3, 3]));
  console.log(cariMedian([7, 7, 8, 8]));
