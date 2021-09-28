var parrot ={
name:"Mango",
color:"green",
age: 1
};

var parrot2 ={
    name:"COCO",
    color:"blue",
    age: 2,
    wings: "black"

    };

document.getElementById("parrot").innerHTML = `The parrot is ${parrot.color} and it's name is ${parrot.name}.`;



//am folosit spread syntax
const mergedObject={...parrot2}
console.log(mergedObject); 