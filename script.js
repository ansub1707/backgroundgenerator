var a=document.querySelector("h3");
var c1=document.querySelector(".color1");
var c2=document.querySelector(".color2"); 
var b=document.getElementById("gradient");
//var cs=document.defaultView.getComputedStyle(b,null);
//var bg=cs.getPropertyValue('background-color');
//a.textContent=bg+";";

function colorimplement()
{b.style.background = "linear-gradient(to right, "+ c1.value +","+c2.value +")";
 a.textContent=b.style.background+";";
}

c1.addEventListener("input",colorimplement);
c2.addEventListener("input",colorimplement);