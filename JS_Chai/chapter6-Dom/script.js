// ------------------------------[ Prac Set - 1 ]---------------------

// let h2 = document.querySelector("h2")
// console.dir(h2.innerText)

// h2.innerText = h2.innerText + "Apna Bhai Hai"


// ------------------------------[ Prac Set - 2 ]---------------------

// let divs = document.querySelectorAll(".box")
// // console.log(divs)
// // divs[0].innerText = "Hello Box 1"
// // divs[1].innerText = "Hello Box 2"
// // divs[2].innerText = "Hello Box 3"
// let idx = 1
// for(div of divs){
//     div.innerText =  `New Uniqe Value ${idx}`
//     idx++
// }

// --------------------------------------------------------------------


// let Att = document.querySelector("div")
// console.log(Att)

// let id = Att.getAttribute("id")
// console.log(id)


// let name = Att.getAttribute('name')
// console.log(name)

// let para = document.querySelector("p")
// console.log(para.getAttribute("class"))

// para.style.backgroundColor = "green";
// para.style.fontSize = "28px";
// para.innerText = "Hello I am inner text"

// --------------------------------------------------------------------

// Insert Element

// let CrBtn = document.createElement("button")
// CrBtn.innerText = "Click Me!"
// console.log(CrBtn)


// let div = document.querySelector("div")
// div.after(CrBtn)


// let newHeading = document.createElement("h1")

// newHeading.innerHTML = "<i>Hi i am a new technolgy of ai</i>"

// document.querySelector("body").prepend(newHeading)

// console.log(newHeading)


// newHeading.remove()
// ------------------------------Prac Set[1]-------------------------------------


// let createBtn = document.createElement("button")
// createBtn.innerText = "ClickMe!"
// console.log(createBtn)

// createBtn.style.backgroundColor = "red"
// createBtn.style.color = "white"

// let div = document.querySelector("div")
// document.querySelector("body").prepend(createBtn)


// ------------------------------Prac Setp[2]--------------------------------------

let para = document.querySelector("p")

para.classList.add("newClass")

// ----------------------------- End DOM ------------------------------------------