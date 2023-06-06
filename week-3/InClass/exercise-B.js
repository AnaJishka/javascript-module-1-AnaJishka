// Array of names from your class
const yourClass = ["Alice", "Bob", "Charlie"];

// Array of names from another class
const anotherClass = ["Dave", "Eve", "Frank"];

// Combine the arrays
const combinedArray = yourClass.concat(anotherClass);

// Log the names in alphabetical order
console.log("Names in alphabetical order:");
console.log(combinedArray.sort());

// Function to check if a name is in the array
function checkName(name, namesArray) {
  if (namesArray.includes(name)) {
    return `${name} is at the class with ${namesArray.join(", ")}`;
  } else {
    return `${name} is not at the class with ${namesArray.join(", ")}`;
  }
}

// Example usage of the function
console.log(checkName("Alice", combinedArray));
console.log(checkName("Dave", combinedArray));
console.log(checkName("John", combinedArray));
