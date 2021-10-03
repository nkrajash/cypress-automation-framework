"use strict"

let test1 = function(){

    setTimeout(function (){ 
        console.log("Code starts here!")
        alert("This is an alert!")
        console.log("Code ends here!")

    }, 3000)

}

let test2 = function(){
    console.log("Please notice me!")
}

test1()
test2()


function log(arg) {
    console.log(arg)
}

log(1);

// This function is asynchronous
setTimeout(() => {
    console.log(2)
}, 0);

log(3)

//O/p:
//Please notice me!
//1
//3
//2
//Code starts here!
//Code ends here!
