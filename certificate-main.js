function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var button = $('.name-btn');
var message = $('.message');
var completion = $('.completion');
var end = $('.end');

button.on("click", displayCompletion);
button.on("click", displayMessage);
button.on("click", displayEnd);

function displayCompletion() {
  completion.text("CERTIFICATE OF COMPLETION");
}

function displayEnd(){
  end.text("Thank you for helping us educate people on how to help save these animals.")
}

function displayMessage() {
  var name = $('.name-entry').val();
  var options = [
    `${name} is now certified.`,
    `Congrats, ${name}! You are now a part of the family!`,
    ` ${name} is now a valid member of the enDanger Zone wildlife project!`
  ];
  var number = rNG();
  message.text(options[number]);
}

function rNG(){
  // event.preventDefault();
  var index = Math.floor(Math.random()*3);
  return index;
}
