const p =document.getElementById("p1")
const para= document.getElementsByClassName("para")
const h1= document.getElementById("h1")

p.textContent='Hello lika'

p.style.color='red'

const h2= document.createElement("h2")
const h3= document.createElement("h3")

h2.style.color='blue'    

const createButton = document.getElementById("create")

createButton.addEventListener("click", () =>{
    h2.textContent='This is a new';
    h3.textContent="hi";
    h1.appendChild(h3)
    h1.appendChild(h2);
})

const hi = document.getElementById("para");
const removeButton = document.getElementById("remove");

removeButton.addEventListener("click", ()=>{
    h2.remove();
    h3.remove();
})


