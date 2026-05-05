function goTo(page) {
  window.location.href = page + ".html";
}

function reveal(id) {
  document.getElementById(id).style.display = "block";
}
function freezeMoment() {
  document.querySelector("audio").pause();
  document.body.style.filter = "grayscale(100%)";
}


function revealAndRemove(textId, buttonId) {
  document.getElementById(textId).style.display = "block";
  document.getElementById(buttonId).style.display = "none";
}

function revealAndRemove(textId, buttonId) {
  document.getElementById(textId).style.display = "block";
  document.getElementById(buttonId).style.display = "none";
}

function revealAndRemove(textId, buttonId) {
  document.getElementById(textId).style.display = "block";
  document.getElementById(buttonId).style.display = "none";
}
let isFrozen = false;

function toggleTime() {
  const audio = document.querySelector("audio");
  const button = document.getElementById("timeBtn");

  if (!isFrozen) {
    audio.pause();
    document.body.style.filter = "grayscale(100%)";
    button.textContent = "start time";
    isFrozen = true;
  } else {
    audio.play();
    document.body.style.filter = "none";
    button.textContent = "stop time";
    isFrozen = false;
  }
}