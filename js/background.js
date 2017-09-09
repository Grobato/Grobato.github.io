// Gogogogogo

var select = document.getElementById("background");

select.addEventListener("change", function(event) {

  if (event.target.value === "a") {
    document.body.style.backgroundImage = 'url("https://s-media-cache-ak0.pinimg.com/originals/bc/96/13/bc96139f55637a2b5020d0b57b346e33.jpg")';
  } else if (event.target.value === "d") {
    document.body.style.backgroundImage = 'url("http://jonvilma.com/images/mountain-6.jpg")';
  } else if (event.target.value === "b") {
    document.body.style.backgroundImage = 'url("https://www.walldevil.com/wallpapers/h14/forest-wallpaper-foggy-nature.jpg")';
  } else if (event.target.value === "c") {
    document.body.style.backgroundImage = 'url("http://www.yumitolesson.com/wp-content/uploads/2015/09/Fall-1.jpg")';
  }

  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';

});

window.addEventListener("load", function(event) {

  document.getElementById("formulaire").reset();
});
