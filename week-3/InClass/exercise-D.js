function uppercaseAndSort(namesArray) {
    const modifiedArray = namesArray.map((name) => name.toUpperCase());
    return modifiedArray.sort();
  }

  

  const result = magician(uppercaseAndSort);
console.log(result);
