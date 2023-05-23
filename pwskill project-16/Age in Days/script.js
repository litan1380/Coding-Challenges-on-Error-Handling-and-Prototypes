function ageInDays(person) {
    var fullName = person.firstName + " " + person.lastName;
    var ageInYears = person.age;
    var ageInDays = ageInYears * 365;
  
    function logResult() {
      console.log("The person's full name is " + fullName + " and their age in days is " + ageInDays + ".");
    }
  
    return logResult;
  }
  
  // Example usage:
  var person = {
    firstName: "Mithun",
    lastName: "S",
    age: 20
  };
  
  var logResult = ageInDays(person);
  logResult(); // Output: The person's full name is Mithun S and their age in days is 7300.
  