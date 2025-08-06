/*
    hoisting is a phenomena in javascript by which you can access the variables and functions
    before initializing it and all this thinghs will be automatically handeld by the javascript 
*/

console.log(x) // undifined
var x = 10 // assigned the value
console.log(x) // 10

// console.log(genName) // getName is not defined
// getName() 
function getName(){
    console.log("Hellow there!")
}
getName()
console.log(x)
console.log(getName) // it will return [Funtion : getName] (if it is runnig on the terminal)