let num = 10
undefined

> num > 5 && num < 15
true

> num < 10 || num === 10
true

> false || true
true

> !true
false

let greaterThan5 = num > 5
undefined

> !greaterThan5
false

> !(num === 10)
false

//The output matches the expected results for each expression.

//One thing to note is that when assigning a value to num with let num = 10, the REPL doesn't produce any output (it shows undefined). However, the value is successfully assigned to the num variable.