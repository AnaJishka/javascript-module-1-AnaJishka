function magician(yourFunc) {
    console.log(
      "I am a magician! Watch as I mutate an array of strings to your heart's content!"
    );
    const namesArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const magicOutput = yourFunc(namesArray);
  
    return magicOutput;
  }
  
  function uppercaseAllLetters(namesArray) {
    return namesArray.map((name) => name.toUpperCase());
  }
  
  // Pass the uppercaseAllLetters function as a callback to magician
  const result = magician(uppercaseAllLetters);
  
  console.log(result);
  