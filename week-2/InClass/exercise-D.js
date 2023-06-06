function moodChecker(mood) {
    if (mood === "happy") {
      return "Good job, you're doing great!";
    } else if (mood === "sad") {
      return "Every cloud has a silver lining";
    } else if (typeof mood === "number") {
      return "Beep beep boop";
    } else {
      return "I'm sorry, I'm still learning about feelings!";
    }
  }

console.log(moodChecker("happy")); // Output: "Good job, you're doing great!"
console.log(moodChecker("sad")); // Output: "Every cloud has a silver lining"
console.log(moodChecker(123)); // Output: "Beep beep boop"
console.log(moodChecker(true)); // Output: "I'm sorry, I'm still learning about feelings!"
