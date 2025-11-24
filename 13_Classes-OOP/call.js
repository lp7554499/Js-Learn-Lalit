function SetUsername(username){
    this.username = username
}

function createUsername(username, pass, userid){
    SetUsername.call(this, username)
    this.pass = pass
    this.userid = userid
}

const lalit = new createUsername("lalit4545", "lalit123", "0956990")
console.log(lalit);
