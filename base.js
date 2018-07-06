var myModule = require("./sort");
var arg = process.argv.splice(2);


for(i = 0; i < arg.length; i++){
  myModule.addToList(arg[i]);
}


console.log(myModule.getSortedList());


// var chalk = require("chalk");

// var message = "Hello " + chalk.yellow("World");
// console.log(message);