"use strict";

window.onload = function() {
    const btn = document.getElementById("helloBtn");
    btn.onclick = sayHello;
} ;

function sayHello() {
    alert("Hello!");
}

//I believe it would be easier to just call the function through the html code

//This is still useful, however