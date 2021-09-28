let animaleSalbatice=[
"leu",
"urs",
"sacal"
];

let animaleDomestice =[
"pisica",
"caine",
"papagal",
"capibara",
"hamster",
"pisica"
]

// functii access
let animale = animaleSalbatice.concat(animaleDomestice);

console.log(animale);

let animaleString = animale.join();

console.log(animaleString);

let animaleSlice = animale.slice(3,6);

console.log(animaleSlice);

console.log(animale.indexOf("pisica"));

console.log(animale.lastIndexOf("pisica"));

//iteratie

const num =[2,3,5,7,78,9];

let text= "";

num.forEach(functiaMea);
document.getElementById("itt").innerHTML = text;

function functiaMea(value){
text+= value + "<br>";
}

//mutator

//push
num.push(72);
console.log(num);

//unshift
num.unshift(27);
console.log(num);

//pop
num.pop();
console.log(num);

//shift
num.shift()
console.log(num);

//reverse
num.reverse();
console.log(num);

//sort
num.sort();
console.log(num);

//copyWithin
console.log(num.copyWithin(1,5));

