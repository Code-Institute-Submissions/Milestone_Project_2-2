var sectionHeading= document.getElementById('data')
sectionHeading.innerHTML ='<h2>Book Travel<h2>'

var newButton = document.createElement('button');
newButton.className ='agent';
newButtonText = document.createTextNode("Travel Agent");
newButton.id ="travel";
newButton.appendChild(newButtonText);
var colMd = document.querySelector("section .col-md-12");
var h3 = document.querySelector("section h3");
console.log(newButton);
colMd.insertBefore(newButton, h3);

const newLocal = `<a href="https://www.worldtravelguide.net/" target ="_blank></a>`;
newButton.onclick(newLocal);