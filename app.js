// Today's temperature in Kelvin.
const kelvin = 0;

// Today's temperature converted from Kelvin to Celsius.
const celsius = kelvin - 273;

// Today's temperature converted from Celsius to Fahrenheit.
let fahrenheit = celsius * (9 / 5) + 32;

// Rounding the Fahrenheit down to a whole number.
fahrenheit = Math.floor(fahrenheit);

// Today's temperature converted from Celsius to Newton.
let newton = celsius * (33 / 100);

// Rounding the Newton down to a whole number.
newton = Math.floor(newton);

// Show today's temperature in Fahrenheit.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Show today's temperature in Newton.
console.log(`The temperature is ${newton} degrees Newton.`);
