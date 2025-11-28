/*---------------------------This is A Normal Function-----------------------------||

function funcMulti (a,b){
    console.log("The Sum is : ", a+b)
}

funcMulti(3,5)



function sum(a,b){
    sum= a + b
    return sum
}

let Output = sum(3,5)
console.log("The Sum is : ",Output)
*/

// function loginUserMessage (username = 'LalitBhai'){
//     if(!username){
//         console.log('Please Enter A Username : ')
//         return
//     }
//     return `${username}  is Logged in`

// }

// console.log(loginUserMessage("Hitesh"))


// -----------------------------------------------------------

// function calculateCartprice(val1, val2, ...num1){
//     return num1
// }

// console.log(calculateCartprice(234,12,23,3435,56,676,343))


// const user = {
//     username : "LalitBhai",
//     price : 459,
// }

// function handleObjectfunction(anyobject){
//     console.log( `The Username is : ${anyobject.username} And Price is : ${anyobject.price} `)
// }


// handleObjectfunction(user)

// ---------------------------------------------------------------------------------

/*



*/

// let MulTiBhai = (num1,num2) => num1 * num2      // Implicity Function That Usful of [React js]
// console.log("The Imlicity Function : ",MulTiBhai(3,3))


// let sumBhai = (num1, num2) => {
//     return num1 + num2
// }

// console.log("The Sum Is : ",sumBhai(2,5))



//-----------------------------Arrow Function --------------------------------------||


//  const sum = (a, b) => {
//     Add = a + b
//     return Add
//  }

//  let Output = sum(2,3)
//  console.log('The Sum is : ',Output)

 //---------------------------Prac Set - 1------------------------------------------||

//  const countVow = (str) => {
//     let count = 0
//     for (const char of str){
//         if(
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u" 
//         )
//         {
//             count++
//         }
    
//         console.log("Count is : ",count)
//     }
//  }

// let Output =  countVow("Apna collage")
// console.log("The Vowel is : ",Output)


//--------------------------forEach Method-------------------------------------------||

// let arr = [1,2,3,4,5,6,7,8]

// arr.forEach((num) => {
//     console.log("The Sum is ; ",num+num)
// } );


// ForEach Function is used of Second method --------||
// let arr = [1,2,3,4,5,6,7,8]

// let multi = (num) => {
//     console.log(num*num)
// }

// arr.forEach(multi)



//------------------------ Map Method -----------------------------------------------||

// let arr =  [1,2,3,4,5,6,6,7,]

// // let newArr = arr.map((val) => {
// //         console.log(val*2)
// //     }
// // )

// let squrefunction = (num) => {
//     console.log(num*num)
// }

// arr.map(squrefunction)


// ----------------------- Filtor Method ----------------------------------------------||


// let arr = [1,2,3,4,5,6,7,8,9]

// let newArr = arr.filter ((num) => {
//     return num % 2 === 0
// })

// console.log(newArr)


// ------------------------- Reduce Method --------------------------------------------||


// let arr = [1,2,3,4,5,6,7,8,9]

// const Output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr
// }

// )

// console.log(Output)

// -----------------------------------------------------------------------------

// let arr = [1,2,3,4,5,6,7,8,9]

// const Output = arr.reduce((prev, curr) => {
//     return prev + curr
// }

// )

// console.log(Output)

// ------------------------------------------------------------------------------

// let arr = [1,2,3,4,5,6,7,8,9]

// const Output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr
// }

// )

// console.log(Output)

// -------------------------------- Prac-Set 1 -----------------------------------

// let marks = [23,34,78,56,90,97,34,93,34]

// const StudentMarks = marks.filter((val)  => {
//     return val >= 90
// }

// )

// console.log("The Greatest And Equal Marks : ",StudentMarks)

// ------------------------------- Prac-Set 2 -------------------------------------

let n = prompt("Enter A Number : ")

let arr = []

for (i = 1; i<=n; i++){
    arr[i-1] = i
}

console.log(arr)

// ------------------------------ Prac-Set 3 ---------------------------------------

let fctorial = arr.reduce((res, curr) =>{
    return res*curr
} )

console.log("The Factorial Is : ",fctorial)


// -------------------------------- End Lecture ------------------------------------