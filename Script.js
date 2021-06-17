var container = document.getElementById("container");
var container1 = document.querySelector("#container");
var Second = document.querySelector("#second");

var second1 = document.querySelector("ul");
second1.querySelector("ol");

//container.innerText = "Hello" ;

var Three1 = document.querySelector("div");
Three1.classList.add("main");
Three1.classList.add("footer");


Three1.classList.remove("main");

var newLi = document.createElement("li");

newLi.innerText = "four";
second1.appendChild(newLi);

var x = document.querySelectorAll("ol");
for (var i = 0; i < x.length; i++){

    x[i].style.backgroundColor = "green";
    
    };


    Three1.classList.remove("footer");