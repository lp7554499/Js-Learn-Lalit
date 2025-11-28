// let divBaba = document.querySelector("div")

// divBaba.onmouseover = () => {
//     console.log("You Are Inside The Div")
//     document.querySelector("div").style.backgroundColor = "green"
// }

// let btnBhai = document.querySelector("button")

// btnBhai.onclick = (evt) => {
//     console.log(evt)
//     console.log(evt.type)
//     console.log(evt.target)
// } 


/////////////////////////////EVENT LISTNER/////////////////////////////////

// let btn1 = document.querySelector("#btn1")

// btn1.addEventListener("click", () => {
//     console.log("button was clicked ! - Handler 1")
// })

/////////////////////////////EVENT LISTNER/////////////////////////////////



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
//     console.log(currMode)
// })

/////////////////////////////EVENT LISTNER/////////////////////////////////


// let mosOver = document.querySelector("#mode")
// // let currMode = "light"

// mosOver.addEventListener("onmouseover",() => {
//     console.log("You Are Inside The Div")
// })

// ----------------------------Practice-------------------------------------

// let MouseOver = document.querySelector("p");

// MouseOver.onmouseover = () => {
//     console.log("You Are Inside The div");
// } // This is Not Event Listener.


// ----------------------------Practice-------------------------------------


// let btn1 = document.querySelector("#btn1")

// btn1.addEventListener("click", () => {
//     console.log("button was clicked ! - Handler 1")

//     btn1.addEventListener("click", () => {
//             console.log("button was clicked ! - Handler 2")
//         })

//         const handler3 = () => {
//             console.log("Click To The Handler 3 !")
//         }

//         btn1.addEventListener("click",handler3)
//         btn1.removeEventListener("click",handler3)
//     })


// ----------------------------Change Background Color----------------------


const chngeColorBg = document.getElementById("bol3")

function changeColor(){
    document.querySelector("body").style.backgroundColor = "yellow";
}

function resetColor(){
    document.querySelector("body").style.backgroundColor = "white";
}


chngeColorBg.addEventListener("click", changeColor)
chngeColorBg.addEventListener("mouseout", resetColor)