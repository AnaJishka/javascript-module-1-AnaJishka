
function calculateBirthYear(age) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    return birthYear;
  }
  
 
  function generateBirthYearSentence(name, age) {
    const birthYear = calculateBirthYear(age);
    return `${name} was born in ${birthYear}.`;
  }
  
  // Example usage
  const name = "John";
  const age = 30;
  const sentence = generateBirthYearSentence(name, age);
  console.log(sentence);

  


