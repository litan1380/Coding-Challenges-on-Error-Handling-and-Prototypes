function manipulateString(str) {
    var manipulatedString = str.toUpperCase();
  
    function logString() {
      console.log("The manipulated string is: " + manipulatedString);
    }
  
    return logString;
  }
  
  // Example usage:
  function logString() {
    console.log("The manipulated string is: " + manipulatedString);
  }
  
  var str = "hello, world!";
  var logString = manipulateString(str);
  logString(); // Output: The manipulated string is: HELLO, WORLD!
  