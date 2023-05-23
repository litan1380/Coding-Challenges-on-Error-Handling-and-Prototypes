function doubleUsingCallback(arr, callback) {
    var doubledArray = [];
    
    for (var i = 0; i < arr.length; i++) {
      var doubledValue = callback(arr[i]);
      doubledArray.push(doubledValue);
    }
    
    return doubledArray;
  }
  
  // Example usage:
  var numbers = [1, 2, 3, 4, 5];
  
  function double(num) {
    return num * 2;
  }
  
  var doubledNumbers = doubleUsingCallback(numbers, double);
  console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
  