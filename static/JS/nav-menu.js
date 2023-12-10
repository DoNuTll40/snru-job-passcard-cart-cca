
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav-button") {
    x.className += " responsive";
  } else if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "nav-button";
  }
}

function myMenu(x) {
  x.classList.toggle("change");
}
