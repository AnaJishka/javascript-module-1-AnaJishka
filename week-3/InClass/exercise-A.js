// Create an array with the names of people at your table
let tablePeople = ["Alice", "Bob", "Charlie"];

// Log the names and the number of people at the table
console.log("People at the table:", tablePeople);
console.log("Number of people at the table:", tablePeople.length);

// Put someone from another table at the beginning of the array
tablePeople.unshift("Eve");

// Add someone else to the end of the list
tablePeople.push("Frank");

// Log the updated names and the number of people at the table
console.log("Updated people at the table:", tablePeople);
console.log("Updated number of people at the table:", tablePeople.length);
