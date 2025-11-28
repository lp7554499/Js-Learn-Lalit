// for (let i = 1; i < 5; i++){
//     console.log('apna Collage')
// }


// -----------------------------------------------------------

// Calculate The Sum of 1 To 5.


// let sum = 0
// let n = 1000
// for (let i = 1; i<=n; i++){
//     sum = sum + i
// }

// console.log("The Sum Is : " ,sum)
// console.log("The loop Is endedd!")



// While Loop

// let i = 1
// while(i<=5){
//     console.log("Apna Bhai Hai")
//     i = i+3
// }

// Do-While Loop

// let i = 1
// do{
//     console.log("Apna Bhia Haie")
//     i++
// }while(i<=5)



// For-of Loop This Called To iterater

// let str = "Apna Collage"   //iteratorr
// let size = 0
// for (let i of str){
//     console.log("i = ",i)
//     size++
// }

// console.log("The Size of : ",size)


// const student = {
//     name : "Rahul Kumar",
//     Class : "12th",
//     Age : "34",
//     Student : "67",
//     Pin : "311001",
// }


// for (let key in student){
//     console.log("Key ",key, "value -> " ,student[key])
// }


// ----------------------------------------------------------------------------

// prac set [1].
// let num = 34

// for (let num=0; num<=100; num++){
//     if(num%2 === 0){
//         console.log("The Number is Even : ",num)
//     }
//     }


// prac set [2]

// let gameNum = 35
// let usernum = prompt("Enter A number : ")

// while(usernum != gameNum){
//     usernum = prompt('You Have Entered Wrong Number : ')
// }

// console.log("Congratulation You Have Guess Write Number")


// --------------------------------------------------------------------

// Strings

// str.length()

// let str = "Apna Collage"
// console.log("OutPut is: ",str[2])

// --------------------------------------------------------------------

// Template Litrals.
// let obj = {
//     item : "pencil",
//     price : 34,
// }

// let OutPut = console.log(`The ${obj.item}  price is ${obj.price}`) // Template Litrals

// ---------------------------------------------------------------------

// Strings Methods'

// let str = "                        Lalit Bhai        "
// let Outpur = console.log("The Output is : ",str.trim())



// --------------------- Prac Set 1 -----------------------------------

let fullName = prompt("Enter A Full Name: ")
let combine = "@" + fullName + fullName.length

console.log(combine)