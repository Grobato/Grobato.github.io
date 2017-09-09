// Gogogogogo

var select = document.getElementById("background");

select.addEventListener("change", function(event) {

  if (event.target.value === "a") {
    document.body.style.backgroundImage = 'url("https://s2.qwant.com/thumbr/0x0/e/3/b4ebad6423120ad73eddb9ba8398f8/b_1_q_0_p_0.jpg?u=https%3A%2F%2Fwww.taberhols.co.uk%2Ffiles%2FIceland%2Fvik-iceland-holiday.jpg&q=0&b=1&p=0&a=1")';
    document.body.style.backgroundPosition = "top";
  } else if (event.target.value === "d") {
    document.body.style.backgroundImage = 'url("https://s2.qwant.com/thumbr/0x0/f/6/7f5368732ced90aa84d8f75bdc985c/b_1_q_0_p_0.jpg?u=http%3A%2F%2Fblog.teamalpin.com%2Fwp-content%2Fuploads%2F2012%2F09%2FMount_Fuji_2.jpg&q=0&b=1&p=0&a=1")';
    document.body.style.backgroundPosition = "top";
  } else if (event.target.value === "b") {
    document.body.style.backgroundImage = 'url("https://www.consciouslifestylemag.com/wp-content/uploads/2015/05/Iceland-travel-guide-foggy-road-mystical.jpg")';
    document.body.style.backgroundPosition = "bottom";
  } else if (event.target.value === "c") {
    document.body.style.backgroundImage = 'url("https://s2.qwant.com/thumbr/0x0/7/5/b52dc2b63b576ce330352a191f87a5/b_1_q_0_p_0.jpg?u=http%3A%2F%2Fdata.1freewallpapers.com%2Fdownload%2Fautumn-trees-nature-landscape-leaf-leaves-desktop-background-images.jpg&q=0&b=1&p=0&a=1")';
    document.body.style.backgroundPosition = "top";
  }

  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";

});

window.addEventListener("load", function(event) {

  document.getElementById("formulaire").reset();
});
