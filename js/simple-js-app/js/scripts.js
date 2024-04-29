let pokemonList = [
    {name: "Pikachu", height: "3", type: ["lightning","speed"]},
    {name: "Squirtle", height: "5", type: ["water","defense"]},
    {name: "Mewtwo", height: "12", type: ["psychic","legendary"]}
];

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

print();
print();



/* This is another example of a function
function Sum(val1, val2) {
    return val1 + val2;
}

let result = Sum(5,20); 
console.log(result);

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