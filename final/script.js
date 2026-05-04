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