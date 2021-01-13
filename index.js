/**
 * How do you store data available for operations?
 */
/*
var a; //Declare variable named a.
a = 10; //Assign the integer value of 10 to variable a.
b = 11; //Create variable b and assign a value to it. No previous declaration statement.
var c = 12; //Declare variable c and assign it the value of 12 in one statement.

console.log(a); //Print the content of variable a
console.log(b); //Print the content of variable b
console.log(c); //Print the content of variable c 
*/

/**
 * Mutability of variables
 */
/*
a = 13; //Reassign a new value of type number to a.
console.log(a); //Prints out 13.
a = "Another value which is a string";  //Reassign a new value of type string to a.
console.log(a); //Prints out Another value which is a string.
a = true; //Reassign a new value of type boolean - i.e. true or false.
console.log(a); //Prints out true.

var d;
console.log(d); //This will print out the value undefined.
a = null;
console.log(a); //This will print out the value null.
*/

/**
 * Arithmetic operations
 */

a = 10; //Assign variable a the value of 10
b = 20; //Assign variable b the value of 20
c = a + b; //Add value in a and b and put the result in variable c.
console.log(c); //This should print out 30
console.log(b - a); //Subtract a value from b value; displays 10 in console.
console.log(b/a); //Divide b value by a value; displays 2 in console.
console.log(a*b); //Multiply a value by b value; displays 200 in console.
console.log(b%a); //Divide b value by a value and return remainder; displays 0 in console.
console.log(a**2); //a value raised to power 2; displays 100 in console.
a++; //Increment a value.
console.log(a); //Displays 11 in console.
b--; //Decrement b value.
console.log(b); //Displays 19 in console.


/**
 * String operations
 */
firstName = "Pius";
lastName = "Onobhayedo";
fullName = firstName + " " + lastName; //Concatenate firstName, whitespace and lastName
console.log(fullName); //This should output the full name Pius Onobhayedo

/**
 * Comparisons
 */
a = 10;
a < 11; //Returns true
console.log(a < 11); //Displays true in console
var test = a > 20; //Declares a variable named test and gives it the value of false.
console.log(test); //Displays false in console
a >= 10; //Returns true
a <= 20; //Returns true
a == 10; //Returns true
a === "10"; //Returns false because a holds an integer value of 10 and not string value "10"

/**
 * Logical Operations
 */
a = 1;
b = 2;
console.log(a < 3 && b < 3); //Prints true as both a and b contain values that are less than 3.
console.log(a > 3 && b < 3); //Prints false as the first condition (a > 3) is not true.
console.log(a > 3 || b < 3); //Prints true as at least one condition (b < 3) is true.
console.log(!(a < 3)); //Prints false as condition (NOT a < 3) is false.
console.log(!(a < 3) || !(b > 3)); //Prints true as one of the conditions (NOT b > 3) is true.

/**
 * Ternary operations
 */
var age = 21;
var adult = (age > 20)? "Yes" : "No";
console.log(adult); //This should display the string "No"

/**
 * Bitwise operations
 */

5 << 1; //Equivalent of 5 * 2
5 << 2; //Equivalent of 5 * 4
5 << 3; //Equivalent of 5 * 8
40 >> 1; //Equivalent of 40 / 2
40 >> 2; //Equivalent of 40 / 4
40 >> 3; //Equivalent of 40 / 8

/**
 * typeof operator
 */

 /*
typeof  "Pius Onobhayedo";  //Returns the value "string"
typeof false;  //Returns the value "boolean"
typeof (10 + 10);  //Returns the value "number"
typeof 33;  //Returns the value "number"
*/

/** Decision making */

var minimumVotingAge = 15;
var age = 17;
if (age < minimumVotingAge){
    console.log("Not eligible to vote");
}else{
    console.log("Eligible to vote");
}

var dayOfTheWeekCount = 6;
switch (dayOfTheWeekCount){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Sorry, day of the week numbered " + dayOfTheWeekCount + " does not exist")
} //The switch statement prints out Sunday

var ageRange = "below 20";
switch (ageRange){
    case "below 1":
        console.log("Infant");
        break;
    case "below 13":
        console.log("Pre-teen");
        break;
    case "below 20":
        console.log("Teenager");
        break;
    default:
        console.log("Adult")
}//This switch statement should print out Pre-teen.

/**loops */
/*
for (var c = 1; c < 11; c++){
    console.log(c);
}

for (var c = 1; c < 11; c++){
    if(c == 7) break;    
    console.log(c);
}

for (var c = 1; c < 11; c++){
    if(c == 7) continue;
    console.log(c);
}
*/

var n = 0;
while(n != 5){
    n = Math.floor((Math.random() * 10));
    console.log(n)
}

var n = 0;
while(n != 5){
    n = Math.random(); //generate a random number between 0 and 1 exclusive of 1.
    n = n * 10;//multiply the number generated by 10
    n = Math.floor(n); //round down
    console.log(n); //print the final number
}

console.log("Do while begins");
var x = 0;

do{
    x++;
    console.log(x);
}while(x < 10)

/**readline sync */
/*
console.log("readline-sync begins");

var readlineSync = require('readline-sync'); //make the module just installed available for use in our program
var answer; //declare variable named answer;
do{
    //use question() function to read input and assign the value to answer
    answer = readlineSync.question('What should I do? [Type "exit" for me to quit]: ');
    console.log('You asked me to '+ answer);
}while(answer != 'exit')
*/

/**functions */
console.log("Functions begin");
//1. By direct declaration
console.log(addTwoNumbersA(20,30)); //Call addTwoNumbersA defined below. Correct!
function addTwoNumbersA(number1, number2){
    return number1 + number2; //Add the two numbers passed when function is called
}

//2. By expression
//console.log(addTwoNumbersB(20,30)); //Call addTwoNumbersB defined below. Wrong!
var addTwoNumbersB = function(number1, number2){
    return number1 + number2;
}

console.log(addTwoNumbersA(20,30)); //Call addTwoNumbersA and print return value (50).
console.log(addTwoNumbersB(20,30)); //Call addTwoNumbersB and print return value (50).

console.log("multiplier begins");

var product = 2000;

function multiplier(){
    var product = 1;
    for (var x=0; x < arguments.length; x++){
        product = product * arguments[x];
    }
    return product;
}

console.log("product = " + product);

console.log(multiplier(10,30));//Prints 300 to the console
console.log(multiplier(10,30,10,5,2,1.5,50,50000));//Prints 3000 to the console

/** Array literal */
//Declare a variable named vehicles and assign an array literal that contains three elements
console.log("Array literals begin here")
var vehicles = ["car","lorry","trailer"]; 
console.log(vehicles); //Prints out the array literal [ 'car', 'lorry', 'trailer' ]

//Declare a variable named basket and assign an empty array literal.
var basket = [];
console.log(basket); //Prints out the array literal [ ] 

//expression with operation as illustrated in the following example:
//Declare a variable named myExpressions and assign an array literal which contains expressions.
/*var myExpressions = ["car", 2+3, 10, true];  //The second element includes a plus operation
console.log(myExpressions); //Prints out [ 'car', 5, 10, true]

console.log(myExpressions[0]); //Prints out 'car'
console.log(myExpressions[1]); //Prints out 5
console.log(myExpressions[2]); //Prints out 10
console.log(myExpressions[3]); //Prints out true
*/

//Array literals can also contain undefined elements as shown below:
var myExpressions = ["car", , 10, true];  //The second element (i.e. index position 1), is undefined
console.log(myExpressions[1]); //Prints out undefined

/** Object literal */
console.log("Object literal begins")
var myObject = {
    name: {
        firstName : "Pius",
        surname: "Onobhayedo"
    },
    expertise: "Software design and development",
    languages: ["Python","JavaScript","Java","C++"],
    isRetired: false,
    favouriteCombination: 3 + 3
}

console.log(myObject.name); //Prints out { firstName: 'Pius', surname: 'Onobhayedo' }.
console.log(myObject['name']); //Also prints out { firstName: 'Pius', surname: 'Onobhayedo' }.

console.log(myObject.expertise); //Prints out Software design and development
console.log(myObject['expertise']); //Also prints out Software design and development

console.log(myObject.languages); //Prints out [ 'Python', 'JavaScript', 'Java', 'C++' ]
console.log(myObject['languages']); //Also prints out [ 'Python', 'JavaScript', 'Java', 'C++' ]

console.log(myObject.isRetired); //Prints out false
console.log(myObject['isRetired']); //Also prints out false

console.log(myObject.favouriteCombination); //Prints out 6
console.log(myObject['favouriteCombination']); //Also prints out 6

console.log(myObject.name.surname);
console.log(myObject['name']['surname']);

myObject.favouriteCombination = 9 + 9;
console.log(myObject.favouriteCombination); //Prints out 18


myObject.newProperty = "another property added"; //Add a new property named newProperty
console.log(myObject.newProperty); //Prints out the string, another property added

delete myObject.newProperty

var phones = {
    make: 'Samsung',
    model: 'S7',
    cost: 500
}
console.log('make' in phones); //Prints out true
delete phones.make; //Delete property phones.make
console.log('make' in phones); //Prints out false
    
/**OOP */
console.log("OOP")
function Person(firstName, lastName, height, weight){
    //Below are properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.height = height;
    this.weight = weight;
    //Below is a method
    this.getFullName = function(){ 
        return this.firstName + " " + this.lastName
    }
}

var person1 = new Person("Pius", "Onobhayedo",1.72, 80);
var person2 = new Person("Mary", "Joseph", 1.7, 70)

console.log (person1.firstName); //Prints out Pius
console.log (person1.getFullName()); //Prints out Pius Onobhayedo
console.log (person2.firstName); //Prints out Mary
console.log (person2.getFullName()); //Prints out Mary Joseph

    
console.log("Built-in object blueprints begin")

function calculateAge(birthday){
    var today = new Date();
    var difference = today - birthday; //Returns equivalent of time elapsed since 1970 i.e. epoch time
    console.log(difference);
    //Get the equivalent year for difference
    var yearEquivalent = new Date(difference).getFullYear();
    //Subtract 1970 to get age.
    return yearEquivalent - 1970;
}

//Invoke function calculateAge()
var birthday = new Date (1981,12,30);
console.log(calculateAge(birthday) + " years old"); //Prints out birthday


console.log("JSON string begins")

var personJSON1 ='{ "firstName": "Pius", "lastName": "Onobhayedo", "complexion": "brown", "heightInMeters": 1.7, "programmer": true, "olympicMedal": null, "degrees": ["BSc", "MSc", "PhD"] }'

var personJSON1 =' { \
    "firstName": "Pius", \
    "lastName": "Onobhayedo", \
    "complexion": "brown", \
    "heightInMeters": 1.7,\
    "programmer": true, \
    "olympicMedal": null, \
    "degrees": ["BSc", "MSc", "PhD"] \
}'



