const container = document.querySelector("#container");

const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = "red";

const blueHeader = document.createElement("h3");
blueHeader.textContent = "Hey I'm a blue h3!";
blueHeader.style.color = "blue";

const div = document.createElement("div");
div.style.cssText = "border: 2px solid black; background-color: pink;"

const divHeader = document.createElement("h1");
divHeader.textContent = "I'm in a div";

const divParagraph = document.createElement("p");
divParagraph.textContent = "ME TOO!";

div.appendChild(divHeader);
div.appendChild(divParagraph);


container.appendChild(redParagraph);
container.appendChild(blueHeader);
container.appendChild(div);