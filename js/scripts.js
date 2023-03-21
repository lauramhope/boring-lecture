
window.onload = function() {
  let body = document.querySelector("body");
  let text = document.querySelector("p");
  let buttonLight = document.querySelector("#buttonLight");
  buttonLight.onclick = function() {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    text.style.color = "blue";
  };
  let buttonDark = document.querySelector("#buttonDark");
  buttonDark.onclick = function() {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    text.style.color = "orange";
  };

  let buttonLarge = document.querySelector("#buttonLarge");
  buttonLarge.onclick = function() {
    text.style.fontSize = "40px";
  };

  let buttonRegular = document.querySelector("#buttonRegular");
  buttonRegular.onclick = function() {
    text.style.fontSize = "15px";
  };
}


