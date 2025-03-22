const fs = require('fs')
const {add, sub} = require('./maths')

fs.writeFile('./test.txt', "Hello Backend", ()=>{})

console.log(__filename);

console.log(add(1,2));
