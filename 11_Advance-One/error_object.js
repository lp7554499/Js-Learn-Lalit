try{
    let age = prompt("Enter Your Age")
    age = Number.parseInt(age)
    if(age>150){
        throw new ReferenceError("This is probably Not True")
    }
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    
    
}

console.log("Script Is Still Running")