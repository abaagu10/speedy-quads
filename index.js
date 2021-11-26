let mainContainer=document.querySelector(".main");
var side=document.querySelector(".sidebar");
var leftContainer =document.querySelector(".sidebar-left"); 
let wholePage = [side,mainContainer,leftContainer];
var blue = document.querySelector(".dot1");
var pinki = document.querySelector(".dot2");
var green = document.querySelector(".dot3");
var white = document.querySelector(".dot4")
var clickPinki = 
// change background color to pink
pinki.addEventListener('click', function changePink() {
  for (let i = 0; i < wholePage.length; i++) {
     wholePage[i].style.backgroundColor = "rgb(200, 36, 91)";
  }  
}) 
// change backgrounf color to blue
blue.addEventListener('click', function changeBlue() {
  for (let i = 0; i < wholePage.length; i++) {
     wholePage[i].style.backgroundColor = "rgb(36, 118, 200)";
  }  
}) 
//change background color to lemon green
green.addEventListener('click', function changeGreen() {
  for (let i = 0; i < wholePage.length; i++) {
     wholePage[i].style.backgroundColor = "rgb(156, 200, 36)";
  }  
}) 
//change background color to gray
white.addEventListener('click', function changeWhite() {
  for (let i = 0; i < wholePage.length; i++) {
     wholePage[i].style.backgroundColor = "brown";
  }  
}) 

  