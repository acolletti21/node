var inputs =  process.argv.slice(2);
var result = inputs.map(input => input.charAt(0))
.reduce((input, b) => input.concat(b));
console.log(`\[${inputs}\] becomes \"${result}\"`);