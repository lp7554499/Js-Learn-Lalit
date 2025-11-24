const hero = {
    _email: "hp@windo.com",
    _pass: "123",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}

const tea = Object.create(hero)
console.log(tea.email);
