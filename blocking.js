//referance the filesystem module that ships with node
var fs = require('fs');

//drinks
console.log('DRINKS:');

var drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks);

//food
console.log('FOOD:');

var food = fs.readFileSync('food.txt', 'utf8');
console.log(food);
