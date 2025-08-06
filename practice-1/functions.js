// Normal function
function getName(){
    console.log("Normal Function")
}

// Arrow Function
var getName2 = () =>{
    console.log("Arrow Function")
}

getName()
getName2()

/*
    if we try to invoke the function before the function is initialized
    the normal function will store the entire code in the memory component of the Exicution context 
    but the arrow function will store the undifined in the memory component of the Exicution context 
*/