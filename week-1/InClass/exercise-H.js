function combineStringsAndNumber(string1, string2, number) {
    const concatenatedString = string1 + string2;
    const result = number * 2;
    return concatenatedString + result;
    }
    // Call the function and run the script
    const output = combineStringsAndNumber("Hello", " World!", 5);
    console.log(output);


    //Difference between return and console.log: 
    //Return is used within a function to provide a value back to the caller of the function. It terminates the execution of the function and sends the value back.
//Console.log is used to output messages or values to the console for debugging or informational purposes. It does not affect the flow of the program and is often used to inspect values during runtime.
//When to use functions over scripting:

//Functions provide modularity and reusability to code.
//They allow you to encapsulate a piece of logic that can be executed multiple times with different inputs.
//Functions make the code more organized, easier to read, and maintainable.
//When you need to perform a specific task repeatedly or want to abstract a complex logic, it's better to use functions instead of writing the same code multiple times.