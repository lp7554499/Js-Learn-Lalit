function User(username, email){
    this._username = username
    this._email = email

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
}

const bhai = new User("lalit567","Java@google.com" )
console.log(bhai.email)