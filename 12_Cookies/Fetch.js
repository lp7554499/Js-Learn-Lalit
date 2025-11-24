// p1 = fetch("https://randomuser.me/api/")
// p1.then((response) => {
//     console.log(response.status)
//     console.log(response.ok)
//     console.log(response.headers)
//     return response.json()
// }).then((value2)=>{
//     console.log(value2)
// })

//------------------------------- Coockies --------------------------------
// console.log(document.cookie)

document.cookie = "name12300002326"
let key = prompt("Enter a key")
let value = prompt("Enter a value")

document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`

console.log(document.cookie)