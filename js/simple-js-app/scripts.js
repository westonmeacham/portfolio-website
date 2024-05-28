let pokemonList = [
    {name: "Pikachu", height: "3", type: ["lightning","speed"]},
    {name: "Squirtle", height: "5", type: ["water","defense"]},
    {name: "Mewtwo", height: "12", type: ["psychic","legendary"]}
];
/* My later function
function print(){
for(let i = 0; i < pokemonList.length; i++){
    if (pokemonList[i].height <12 && pokemonList[i].height >3){
        document.write("<p>" + pokemonList[i].name + ' height: 5 ' + "</p>");
    }else if (pokemonList[i].height <4){
        document.write("<p>" + pokemonList[i].name + ' height: 3 ' + "</p>");
    }else {
        document.write("<p>" + pokemonList[i].name + ' height: 12 ' + 'Wow, that is big!' + "</p>");
    }
}
}
*/
function myLoopFunction(user) {
    console.log(user.name + ' is ' + user.height + ' feet tall! ');
}
pokemonList.forEach(myLoopFunction);

/* IIFE code
let pokemonRepository = (function () {

    let pokemonList = [
        {
            name: "Pikachu",
            height: "3",
            type: ["lightning", "speed"]
        },
        {
            name: "Squirtle",
            height: "5",
            type: ["water", "defense"]
        }
        {
            name: "Mewtow",
            height: "12",
            type: ["psychic", "legendary"]
        }
    ]

    function getAll () {
        return pokemonList;
    }
    function add (pokemon) {
        pokemonList.push(pokemon);
    }

    return {
        getAll: getAll,
        add: add
    }
})()
*/




//////NOTES
/*
example of Function Composiotion
let anne = {
  name: 'Anne Smith',
  age: 38,
  hasChildren: false
};
function getAgeDescription(age) {
  return age + ' years old';
}
function getChildrenDescription(hasChildren) {
  return hasChildren ? 'has children' : 'has no children';
}
function getPersonDescription(person) {
  let ageDescription = getAgeDescription(person.age);
  let childrenDescription = getChildrenDescription(person.hasChildren);

  return person.name + ', ' + ageDescription + ', ' + childrenDescription;
}
console.log(getPersonDescription(anne)); // Anne Smith, 38 years old, has no children
 
More examples

let add = (a,b,) => a + b;
let mult = (a,b,) => a*b;

console.log(add(2, mult(4,2))); // logs 10

or 

function getFullName(person){
    return(person.firstName + " " + person.lastName);
}

let Character = {firstName: 'Homer', lastName: 'Simpson'}

let fullName = getFullName(Character);

console.log(fullName); // logs Homer Simpson
*/

/* examples of forEarch methods as functions
let myArray = [1,2,3,4,5,6,7,8,9,10];

//external function
myArray.forEach(logToConsole);

function logToConsole(item) {
    console.log(item);
}

//internal anonymous function
myArray.forEach(function(item)) {
    console.log(item);
}

//arrow funtion
myArray.forEach( item => console.log(item) );
*/

/* examples of fundtion for addition, subtraction, multiply and divide
function add(num1, num2){
  return num1 + num2;
}

function subtraction(num1, num2){
  return num1 - num2;
}

function multiply(num1, num2){
  return num1 * num2;
}

function divide(num1, num2){
  if (num2 !==0){
    return num1/num2;
  }
  else{
    return "Not Allowed";
  }
}
*/

/*
A example of a Pure Function
let age = 10;

function getNewAge(age) {
    age = age + 1;
    return age;
}

console.log(getNewAge(age)); //returns 11
console.log(age); //returns 10
*/

/*
example of a Callback Functions (I do not understand this one at all)
function functionOne(param) {
 return param;
 };

function functionTwo(param) {
   // some code
  return param + 2;
}
console.log(functionOne(2)); // returns 2

console.log(functionTwo(functionOne(2))); // functionTwo adds 2 to the result of functionOne and returns 4
*/

/* Two examples of an Anonymous Function
let Message = function (){
    console.log("Hello World!")
};

Message();

or

let sayHello = function (firstName) {
    console.log("Hello " + firstName);
};

sayHello("Bobby");
*/

/* This is another example of a function with reutrn Statement
function Sum(val1, val2) {
    return val1 + val2;
}

let result = Sum(5,20); 
console.log(result);
*/

/* This is another example of a function 
function greetingMessage(firstName, lastName) {
    console.log("Hello, My name is " + firstName + " " + lastName);
    ducument.write("Hello , My name is " + firstName + " " + lastName)
}

greetingMessage("Brad", "Pitt");
greetingMessage("Nelson", "Mandela");
*/


/* This would list all of the names of the Pokemon
for (let i = 0; i < pokemonList.length; i++){
    document.write("<p>" + pokemonList[i].name + "</p>")
}
*/


/* Just an example of an erray with a loop
let personAge = [
    {name: 'person1', age: 16},
    {name: 'person2', age: 10},
    {name: 'person3', age: 25}
];

for (let i=0; i < personAge.length; i++){
    if (personAge[i].age <19 && personAge[i].age >13){
        console.log(personAge[i].name + " is a teenager");
    }else if (personAge[i].age <13){
        console.log(personAge[i].name + " is a child");
    }else {
        console.log(personAge[i].name + " is an adult");
    }
} 
*/ 

/* More examples of loops
let text = "";
let i = 0;

do {
    text = text + " "+ i;
    i++
}
while (i < 10);
console.log(text);

let fruits = ["apple", "banana", "grape"]
let text = "";
let i = 0;

while (fruites[i]){
    text = text + " " + fruits[i]:
    i++;
}
console.log(text);
*/