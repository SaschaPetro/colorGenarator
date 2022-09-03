function changeColor() {
  let red = document.querySelector("#slider-red").value;
  let green = document.querySelector("#slider-green").value;
  let blue = document.querySelector("#slider-blue").value;
  let color = "rgb(" + red + "," + green + "," + blue + ")";
  document.body.style.backgroundColor = color;
  document.querySelector("#color-value").innerHTML = " " + color;
}

document.querySelector("#slider-red").addEventListener("input", changeColor);

document.querySelector("#slider-green").addEventListener("input", changeColor);

document.querySelector("#slider-blue").addEventListener("input", changeColor);
