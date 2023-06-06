function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}


function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}

for (let i = 5; i <= 20; i++) {
  if (isEven(i)) {
    const result = exponential(i);
    console.log(`Exponential of ${i} is: ${result}`);
  }
}
