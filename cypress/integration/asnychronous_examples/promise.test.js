let promise1 =  new Promise((resolve,reject) => {
    let a = 1 + 2 
    if(a==2)
        resolve("Promise fulfilled")
    else
        reject("Promise rejected")
})

promise1.then((message) => {
    console.log(message + ",Promise has passed")
}).catch((message) => {
    console.log(message + ",Promise has failed")  
})

