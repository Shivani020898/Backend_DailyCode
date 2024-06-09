const os = require("os")

// modules basicallty unction over there

//why only const -- so i can't reassign 
console.log(os.freemem())
// Returns the amount of free system memory in bytes as an integer.
console.log(os.hostname())