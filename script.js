//funktion am Anfang ausführen um die Hexadecimal Zahl vorab anzuzeigen
changeColor();

function changeColor() {
  let red = document.querySelector("#slider-red").value;
  let green = document.querySelector("#slider-green").value;
  let blue = document.querySelector("#slider-blue").value;

  let color = rgbToHex(parseInt(red), parseInt(green), parseInt(blue));

  document.body.style.backgroundColor = color;
  document.querySelector("#color-value").innerHTML = color;
}

//Funktion um RGB auf Hex umzustellen
function rgbToHex(red, green, blue) {
  let hexRed = red.toString(16);
  let hexGreen = green.toString(16);
  let hexBlue = blue.toString(16);

  return "#" + prefixHex(hexRed) + prefixHex(hexGreen) + prefixHex(hexBlue);
}

//Wenn die Zahl einstellig ist... eine 0 davor zustellen
function prefixHex(hex) {
  if (hex.length < 2) {
    return "0" + hex;
  } else {
    return hex;
  }
}

document.querySelector("#slider-red").addEventListener("input", changeColor);
document.querySelector("#slider-green").addEventListener("input", changeColor);
document.querySelector("#slider-blue").addEventListener("input", changeColor);

function randomColor() {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.color);
      document.body.style.backgroundColor = data.color;
      document.querySelector("#color-value").innerHTML = data.color;
    });
}

document.querySelector(".random-btn").addEventListener("click", randomColor);
