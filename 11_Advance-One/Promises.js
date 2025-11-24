const promisOne = new Promise(function(resolve,reject){
    // Do An Async Task
    // DB Calls , CryptoGraphy, Network
    setTimeout(function (){
        console.log("Async Task Is Complete")
        resolve()
    },1000)
})

promisOne.then(() => {
    console.log("Promise is Done")
} )


new Promise(function(resolve,reject){
    setTimeout((function(){
        console.log("Async Task 2")
        resolve()
    }),1000)
}).then( ()  => {
    console.log("2ns Async Resolved")
})


const threePromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "lalitPandit4545",pass:"123"})
    },1000)
})

threePromise.then(function(user){
    console.log(user)
})

// Ye Jo Upper Jo he vo DATA conjupmsion ho gya he

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"RohitPandit",pass:"12"})
        }else{
            reject("ERROR : something went wrong")
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))
