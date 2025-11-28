// Arithmetic oprators

// let a = 2
// let b = 3

// console.log('a=',a, "&b= ",b)
// console.log('a+b = ',a+b)
// console.log('a-b = ',a-b)
// console.log('a/b = ',a/b)
// console.log('a%b = ',a%b)
// console.log('a*b = ',a*b)
// console.log('a**b = ',a**b)

// ----------------------------------------------------------------

// Unary Oprator 

// let a = 2
// let b = 3

// console.log('a=',a, "&b= ",b)

// // a = a + 1
// console.log('a=',--a)


// --------------------------------------------------------------------

// Assinment oprators



// let a = 2
// let b = 3

// console.log('a=',a, "&b= ",b)

// a /= 4

// console.log('Value is ',a)

// --------------------------------------------------------------------

// Comparison Oprators

// let a = 5
// let b = 5

// console.log('a=',a, "&b= ",b)

// // console.log('2!=3 -> ',a!=b)
// console.log('5===5 -> ',a===b)  // Ye int. ko bhi chaek krta hai

// --------------------------------------------------------------------


// Logical operators

/* let a = 2                                   ---------------------
                                                                   | 
                                                                   | 
let b = 3                                                          |-------------> Logic [&&]
                                                                   |        
console.log('a=',a, "&b= ",b)                                      |
console.log("a && b  ->", a == 2 && a != b)    ---------------------
*/

// let a = 5
// let b = 4

// console.log("a || b -> " , a < b || a > b)



// ----------------------------------------------------------------------------//



// Conditinol Statments.

// let age = 25 

// if (age > 18){
//     console.log('you are eligible for vote')
//     }else{
//         console.log('you are not eligible for vote')

// }



// let mode = "dark"
// let color

// if(mode == "dark"){
//     color = "black"
// }

// if(mode == "light"){
//     color = "white"
// }

// console.log(color)


// --------------------------------------------------------------------


// let num = prompt("Enter A Number : ");

// if (num % 5 === 0) {
//     console.log(num," 5 is a multiple ");
//     else {
//         console.log(num,"5 is a not a multiple");
//     }
// }


// ------------------------ [Prac-Que -> 1] -------------------------------------
// let num = prompt("Enter A Number : ");

// if (num % 5 === 0) {
//     console.log(num, "is a multiple of 5");
// } else {
//     console.log(num, "is not a multiple of 5");
// }

// ------------------------ [Prac-Que -> 2] -------------------------------------


let score = 75
let grade

if (score >= 80 && score <= 100){
    grade = 'A'
}else if(score >= 70 && score <= 79){
    grade = 'B'

}else if(score >= 60 && score <=69){
    grade = 'C'
}else if(score >= 50 && score <=59){
    grade = 'D'
}else if(score >= 0 && score <=49){
    grade = 'F'
}

console.log("Student result is : ",grade)

