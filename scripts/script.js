// JavaScript Document
console.log("hi");

var hamburger = Document.querySelector('header nav a:last-of-type img');
var menu = Document.querySelector('header nav ul');

function doeOpen() {
    hamburger.classList.toggle("header nav ul.active"); 
    menu.classList.toggle("header nav ul.active");
}

hamburger.addEventListener("click", doeOpen);
