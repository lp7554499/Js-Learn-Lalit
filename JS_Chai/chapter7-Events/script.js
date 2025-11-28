// let divBaba = document.querySelector("div")

// divBaba.onmouseover = () => {
//     console.log("You Are Inside The Div")
// }



// Event Object.

// let btnBhai = document.querySelector("button")

// btnBhai.onclick = (evt) => {
//     console.log(evt)
// //     console.log(evt.type)
// //     console.log(evt.target)

// -----------------------------Event Listner---------------------------------

// let btn1 = document.querySelector("#btn1")

// btn1.addEventListener("click", () => {
//     console.log("button was clicked ! - Handler 1")
// })
// btn1.addEventListener("click", (evt) => {
//     console.log("button was clicked ! - Handler 2")
// })
// const handler3 = () => {
//     console.log("button was clicked ! - Handler 3")
// }

// btn1.addEventListener("click",handler3)

// btn1.addEventListener("click", (evt) => {
//     console.log("button was clicked ! - Handler 4")
// })


// btn1.removeEventListener("click",handler3)


// ----------------------------Prac - Set 1--------------------------------------


// let modeBtn = document.querySelector("#mode")
// let currMode = "light"

// modeBtn.addEventListener("click" , () => {
//     if(currMode === "light"){
//         currMode = "dark"
//         document.querySelector("body").style.backgroundColor = "black"
//     }
//     else{
//         currMode = "light"
//         document.querySelector("body").style.backgroundColor = "white"
//     }
// //     console.log(currMode)
// })



// --------------------------Prac - Set 2------------------------------------------


// let mosOver = document.querySelector("#mode")
// // let currMode = "light"

// mosOver.addEventListener("onmouseover",() => {
//     console.log("You Are Inside The Div")
// })

// --------------------------------------------------------------------------------

// Select the element with the id 'hoverText'
const hoverTextElement = document.getElementById("hoverText");

// Function to change the text when mouse is over
function changeText() {
    hoverTextElement.innerText = "The text has been changed!";
}

// Function to reset the text when mouse is out
function resetText() {
    hoverTextElement.innerText = "Hover over this text to change it!";
}

// Add event listeners for mouseover and mouseout events
hoverTextElement.addEventListener("mouseover", changeText);
hoverTextElement.addEventListener("clickout", resetText);





//  DONE////}}}}}}}