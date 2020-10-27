"use strict";

let total = 0;

let totalParagraph = document.querySelector(".total-paragraph");

let button = document.querySelector(".button");

let cola = document.querySelector(".cola");
let peanuts = document.querySelector(".peanuts");
let chocolate = document.querySelector(".chocolate");
let gummies = document.querySelector(".gummies");

cola.addEventListener("click",()=>{
  let amount = parseFloat(cola.getAttribute("data-price"));
  total += amount;
  totalParagraph.innerText=`Total $${total}.00`
})

peanuts.addEventListener("click",()=>{
  let amount = parseFloat(peanuts.getAttribute("data-price"));
  total += amount;
  totalParagraph.innerText=`Total $${total}.00`
})

chocolate.addEventListener("click",()=>{
  let amount = parseFloat(chocolate.getAttribute("data-price"));
  total += amount;
  totalParagraph.innerText=`Total $${total}.00`
})

gummies.addEventListener("click",()=>{
  let amount = parseFloat(gummies.getAttribute("data-price"));
  total += amount;
  totalParagraph.innerText=`Total $${total}.00`
})


// button.addEventListener("click",()=>{
//   let buttons = document.querySelectorAll(".button")
//   buttons.forEach((button)=>{
//     let price = parseFloat(button.getAttribute("data-price"));
//   total += price;
//       totalParagraph.innerText= `Total $${total}.00`
//   });
  
// })



//queryselector all for all the buttons. , + a loop to sum all the totals
//let buttons = all the buttons
//buttons.forEach((button)=>{
 // let price = button.getAttribute("data-price")
//}


let coinForm = document.querySelector(".coinAdderForm")


coinForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  let formData = new FormData(coinForm);
  let coinAmount = formData.get("coinAmount")
  let coinType = formData.get("coinType")
  for (let i = 1; i<= coinAmount; i++){
  let addCoin = document.createElement("div");
  addCoin.innerText = `${coinType}`
  //add styles here
  addCoin.setAttribute("class", "coin-style")
  //adds coins divs to container div
  let coinContainer = document.querySelector(".coin-container");
  coinContainer.append(addCoin);
  //removes coins on click
  addCoin.addEventListener("click", ()=>{
      addCoin.remove();
  })
  }
  coinForm.reset();
});

//
let lightbulb = document.querySelector(".lightBulb")

const lightMode = () =>{
  lightbulb.classList.add("lightChange")
};
const darkMode = () => {
  lightbulb.classList.remove("lightChange")
};
const toggle = () => {
  lightbulb.classList.toggle("lightChange")
};
const endMode = ()=>{
  lightbulb.remove();
  //gray out all buttons by applying endMod style to all "".button3" with forEach
  document.querySelectorAll(".button3").forEach(button3 =>{
    button3.classList.add("endMode")
  })
  onbutton.disabled = true
  offbutton.disabled = true
  togglebutton.disabled = true
  endbutton.disable = true
};

let onbutton = document.querySelector(".on")
onbutton.addEventListener("click", lightMode)

let offbutton = document.querySelector(".off")
offbutton.addEventListener("click",darkMode)

let togglebutton = document.querySelector(".toggle")
togglebutton.addEventListener("click", toggle)

let endbutton = document.querySelector(".end")
endbutton.addEventListener("click", endMode)
