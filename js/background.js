// Gogogogogo

var select = document.getElementById("background");

select.addEventListener("change", function(event) {

  if (event.target.value === "a") {
    document.body.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2017/08/18/19/48/iceland-2656257_960_720.jpg")';
  } else if (event.target.value === "d") {
    document.body.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2017/04/14/18/32/mountain-2230986_960_720.jpg")';
  } else if (event.target.value === "b") {
    document.body.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2016/02/24/18/37/fog-1220491_960_720.jpg")';
  } else if (event.target.value === "c") {
    document.body.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821_960_720.jpg")';
  }

  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';

});

window.addEventListener("load", function(event) {

  document.getElementById("formulaire").reset();
});
