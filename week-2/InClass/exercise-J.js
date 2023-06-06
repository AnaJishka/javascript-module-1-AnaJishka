
function secondMatchesAmy(array) {
  if (array[1] === "Amy") {
    return "Second index matched!";
  }
  return "Second index not matched";
}

console.log(secondMatchesAmy([1, "Amy", true])); // Output: "Second index matched!"
console.log(secondMatchesAmy(["John", "Amy", "Alice"])); // Output: "Second index matched!"
console.log(secondMatchesAmy(["apple", "banana", "cherry"])); // Output: "Second index not matched"
