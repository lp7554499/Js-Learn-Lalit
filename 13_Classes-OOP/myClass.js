class User{
    constructor(username,email,pass,userId){
        this.username = username
        this.email = email
        this.pass = pass
        this.userId = userId
    }

    encryptPassword(){
        return `Password Is : ${this.pass}abc`
    }

    changeUsername(){
        return `ChangedUsername is : ${this.username.toUpperCase()}`
    }
}

const lalit = new User("lalit5656","lp755@gmail.com","123","44557798")
console.log(lalit.encryptPassword());
console.log(lalit.changeUsername());


// Behind The Seen - With Function

