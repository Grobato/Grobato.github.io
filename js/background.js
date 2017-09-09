// Gogogogogo

var select = document.getElementById("background");

select.addEventListener("change", function(event) {

  if (event.target.value === "a") {
    document.body.style.backgroundImage = 'url("https://drive.google.com/open?id=0Bw__udsOLruRSDY2X09sWVJvMmc")';
    document.body.style.backgroundPosition = "bottom";
  } else if (event.target.value === "d") {
    document.body.style.backgroundImage = 'url("https://drive.google.com/open?id=0Bw__udsOLruRR1pFM3VJZmRLZ2M")';
    document.body.style.backgroundPosition = "top";
  } else if (event.target.value === "b") {
    document.body.style.backgroundImage = 'url("https://drive.google.com/open?id=0Bw__udsOLruRZnJuUFRseFo0cGM")';
    document.body.style.backgroundPosition = "top";
  } else if (event.target.value === "c") {
    document.body.style.backgroundImage = 'url("https://drive.google.com/file/d/0Bw__udsOLruRZHFlLWFXdjlVeW8")';
    document.body.style.backgroundPosition = "center";
  }

  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";

});

window.addEventListener("load", function(event) {

  document.getElementById("formulaire").reset();
});
