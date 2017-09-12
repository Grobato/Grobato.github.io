// creating table chat
var tableMessages = [{
  name: "Grobato",
  message: "Yo, you can chat here ! Just type and launch."
}];

// variables
var chatName = document.getElementById("chatname");
var chatMessage = document.getElementById("chatmessage");
var chatSubmit = document.getElementById("chatsubmit");



tableMessages.forEach(function(msg) {

  var displayChat = document.getElementById("displaychat");

  var divElt = document.createElement("div");
  divElt.setAttribute("class", "displaymessage");

  var spanElt = document.createElement("span");
  spanElt.setAttribute("class", "boldname");
  spanElt.style.fontWeight = "bold";
  spanElt.style.color = "#FF6600";
  spanElt.textContent = msg.name + ": ";

  var messageElt = document.createTextNode(msg.message);


  displayChat.appendChild(divElt);
  divElt.appendChild(spanElt);
  divElt.appendChild(messageElt);


});


// Event click on submit button
chatsubmit.addEventListener("submit", function(e) {

  if (chatName !== null && chatMessage !== null) {
    var newMessage = {
      name: chatName.value,
      message: chatMessage.value
    };
    tableMessages.push(newMessage);
  } else {
    document.getElementById("launchchat").textContent = "Name and Message are empty";
  }

});
