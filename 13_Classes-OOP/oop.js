// Object Litrals

const user = {
    username : "LalitPandit",
    pass : "123",
    loginCount : 8,
    signedIn : true,

    getUserdetails : function(){
        console.log(`Username : ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username);
// console.log(user.getUserdetails());

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new User("lalit4545",23,true)
const userTwo = new User("lalit77",12,false)

console.log(userOne.constructor);
// console.log(userTwo);
