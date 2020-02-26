var sectionHeading= document.getElementById('data')
sectionHeading.innerHTML ='<h2>Book Travel<h2>'

/*---------------New Paragraphs----------------- */
var newParagraph = document.createElement("p");
newParagraphText = document.createTextNode("When you have found the ideal location");
newParagraph.appendChild(newParagraphText);
var para = document.querySelector("section .col-md-12");
para.insertBefore(newParagraph, h3);


var newParagraph2= document.createElement("p");
newParagraph2Text = document.createTextNode("Click on the link to start your journey")
newParagraph2.appendChild(newParagraph2Text);
para.insertBefore(newParagraph2, h3);

/* -----------------URL Link--------------------*/
var newButton = document.createElement("a");
newButton.onclick ='myFunction()';
newButton.className ='btn btn-primary btn-block';
newButtonText = document.createTextNode("link");
newButton.href = ('https://www.worldtravelguide.net/');
newButton.appendChild(newButtonText);
var colMd = document.querySelector("section .col-md-12");
var h3 = document.querySelector("section h3");
console.log(newButton);
colMd.insertBefore(newButton, h3);

/*--------------------Change URL Hostname--------*/
const myUrl = new URL("https://www.worldtravelguide.net/");
myUrl.hostname = 'stephen.travel'
myUrl.search = 'ms_project'
console.log(myUrl)
