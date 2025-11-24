class User {
    constructor(username, email){
        this.username = username
        this.email = email
    }

    get username(){
        return this._username.toUpperCase()
    }

    set username(value){
        this._username = value
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
}

const salute = new User("Lalit$545", "goa@safari.com")
console.log(salute.email);