let message = "You clicked the button!";

function changeText() {
  let textElement = document.querySelector("#myText");
  textElement.innerHTML = message;
}

let button = document.querySelector("#myButton");

button.addEventListener("click", changeText);