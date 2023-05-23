function greetingPromise(name) {
    return new Promise(function(resolve, reject) {
      if (name) {
        resolve("Hello, " + name + "!");
      } else {
        reject("Invalid name provided.");
      }
    });
  }
  
  // Example usage:
  var name = "Mithun";
  greetingPromise(name)
    .then(function(message) {
      console.log(message); // Output: Hello, Mithun!
    })
    .catch(function(error) {
      console.log(error); // Output: Invalid name provided.
    });
  