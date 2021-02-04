//JavaScript Time!

//Variables
//A variable is a way to store values. To use a variable, we must declare it (to let the program know about the variable) and then assign it (to let the program know what value we are storing in the variable).
//Here's how we would declare a variable named "xPos":
var xPosition;
//Now, we can assign xPos to hold the value 10:
xPosition = 10;
//If we want to—and we often do !—we can declare and assign in one statement:
var xPosition = 10;

//1. Create and declare your own variable.

//Remember: Variable names can begin with letters, or the symbols $ or _.They can only contain letters, numbers, $ and _.They cannot begin with a number. "myVariable", "leaf_1", and "$money3" are all examples of valid variable names.

//Data Types
//We can use strings, numbers, booleans, arrays, and objects to store data in JavaScript.
//Strings are plain text.

var author = "Alice Walker";

//2. Log to the console the length of the string stored in the author variable.

//We can use mathematical operators to solve math problems in JavaScript. We can also use the Math object to get values like PI as well as to round numbers to the nearest whole number.

var myNumber = 47.47;

//3. Log to the console myNumber rounded to the nearest whole number.

//Booleans are true or false. That's it!

//Arrays are used to store lists of items. Arrays can store any of the 5 data types.

var myRecentBooks = [
  "Frankenstein",
  "The Color Purple",
  "Where the Crawdads Sing",
  "Who's Afraid of Virginia Woolf",
];

//4. Add a new book onto the end of the myRecentBooks array.
//5. Log "Where the Crawdads Sign" to the console.

//Objects are used to store key/value pairs about an individual item. Objects use dot notation to access values in an object.

var myBook = {
  title: "Frankestein",
  author: "Mary Shelley",
  pages: 270,
};

var coolAuthor = myBook.author;
console.log(coolAuthor); // This would display Mary Shelley

//6. Given the following collection, how would you log "trees" to the console?
var myUsers = [
  {
    userId: 1,
    userName: {
      firstName: "Googley",
      lastName: "Hatchback",
    },
    userCity: "Seattle",
    userFaves: ["sour patch kids", "craft beer", "caviar"],
  },
  {
    userId: 2,
    userName: {
      firstName: "Smokey",
      lastName: "Friday",
    },
    userCity: "Denver",
    userFaves: ["trees", "chocolate", "swishers"],
  },
  {
    userId: 3,
    userName: {
      firstName: "Shoelace",
      lastName: "Sandals",
    },
    userCity: "Beachland",
    userFaves: ["rainbows", "fancy cocktails", "pina coladas", "umbrellas"],
  },
];

//Functions
//Functions are used to execute the same block of code as many times as you need to. Functions can have inputs and/or outputs. Inputs are called parameters and outputs are created with the return statement.

function createCircle(radius) {
  var calculation = Math.PI * radius * radius;
  return calculation;
}

var myCircle = createCircle(10);
//7. What is the value of myCircle after all of this code has been executed?

//8. Create a function that takes in 2 parameters, a first name and a last name, and outputs a greeting to that person. Execute the function 3 times with different arguments.

//Conditional Statements
//A conditional statement is a way for your program to test if a given statement is true or false.

var age = 47;
if (age > 21) {
  console.log("Enter");
} else {
  console.log("Denied");
}

//9. What is the above code going to log to the console?

// 10. Create an if statement that tests to see if a user is over 21 years old and has the value isCoder set to true.

//JavaScript uses equivalancey operators to see if certain data is related.

10 === 10; //
10 !== "10"; //
10 > 9; //
9 < 10; //
10 >= 10; //
10 === 10 && 9 < 10; //
10 > 9 || 9 === 10; //

//10. Indicate if each of those statements above are true or false.

//Loops
//Loops are used to iterate through a list of items in an array or through keys in an objects. Loops are created by instatiating a counter variable (i) and then setting a condition that must be true to start the loop and then must be false to end the loop.

//Given the following collection, create a for loop that adds all of the userFaves to an array.
var myUsers = [
  {
    userId: 1,
    userName: {
      firstName: "Googley",
      lastName: "Hatchback",
    },
    userCity: "Seattle",
    userFaves: ["sour patch kids", "craft beer", "caviar"],
  },
  {
    userId: 2,
    userName: {
      firstName: "Smokey",
      lastName: "Friday",
    },
    userCity: "Denver",
    userFaves: ["trees", "chocolate", "swishers"],
  },
  {
    userId: 3,
    userName: {
      firstName: "Shoelace",
      lastName: "Sandals",
    },
    userCity: "Beachland",
    userFaves: ["rainbows", "fancy cocktails", "pina coladas", "umbrellas"],
  },
];

//Given the following object, loop through the properties and print the property name as well as the property's value.
var newUser = {
  userId: 9,
  userName: {
    firstName: "Cloud",
    lastName: "Nine",
  },
  userCity: "Castlemania",
  userFaves: ["stardust", "pot of gold", "sun sprinkles", "moon ray"],
}
