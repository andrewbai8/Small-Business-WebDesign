// Header


const input = document.getElementById("headerInput");

// updated button 
const button = document.getElementById("updateButton");
// this is the header
const header = document.getElementById("HEADER")
button.addEventListener("click",function(){
header.textContent = input.value;


});