function one(){
    console.log(x)
    function two(){
        console.log(x)
        /* will it log the x or not   YES  because the two() functioons lexical environment is one()
            and the one() functions lexical environment is Global Execution Context and the x is
            available in GEC so it will log the x
        */
    }
    two()
    // call it from here

}
var x = 10
one()

three()
function three(){
    var y = 20
    console.log(y)
}

// console.log(y)        // can not access outside the scope 
