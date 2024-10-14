// Immediately Invoked Function Expressions (IIFE)

// named iife
(function chai() {
  console.log("DB CONNECTED");
})(); // Semicolon is necessery to end or stop previous function

/// ()() -> first parenthesis is for function definition and 2nd one is for execution

((name) => {
  console.log(`DB CONNECTED TWO ${name}`); // Arrow function can also be used to make iife
})("Basir");
