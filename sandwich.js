/*
  ...........YOUR MISSION...........

  Make me a sandwich.
  
  1. Create a Sandwich object.
  2. Create 6 keys on the object all defaulted to a value of false
     a. pickle: false
     b. lettuce: false
     c. tomato: false
     d. ketchup: false
     e. mustard: false
     f. mayo: false
  3. Create different functions where each one can change the value of only one of the keys on a Sandwich object to "true".
  4. Create a function named "makeMeASandwich".
  5. That function should take 6 arguments - one for each condiment on the sandwich.
  6. If any of those 6 argument values are true, put that condiment on the sandwich.
  7. Write to the document something like this...
    "My sandwich has pickle, ketchup, mustard on it"
*/
var message = "My sandwich has";

var sandwich = {
    pickle: false,
    lettuce: false,
    tomato: false,
    ketchup: false,
    mustard: false,
    mayo: false,
}

function changePickle() {
  sandwich.pickle = true;
}

function changeLettuce() {
  sandwich.lettuce = true;
} 

function changeTomato() {
  sandwich.tomato = true;
}

function changeKetchup() {
  sandwich.ketchup = true;
}

function changeMustard() {
  sandwich.mustard = true;
}

  function changeMayo() {
    sandwich.mayo = true;
  }
  
function makeMeASandwich(pickle, lettuce, tomato, ketchup, mustard, mayo) {
  
 
  var pickleWindow = window.prompt("Would you like pickles?");
  if(pickleWindow.toLowerCase() == "yes") {
    changePickle();
    message = message + " pickles";
  }  
  var lettuceWindow = window.prompt("Would you like lettuce?");
  if (lettuceWindow.toLowerCase() == "yes") {
    changeLettuce();
    message = message + " lettuce";
  }
  var tomatoWindow = window.prompt("Would you like tomatoes?")
  if (tomatoWindow.toLowerCase() == "yes") {
    changeTomato();
    message = message + " tomatoes";
  }
  var ketchupWindow = window.prompt("Would you like ketchup?")
  if (ketchupWindow.toLowerCase() == "yes") {
    changeKetchup();
    message = message + " ketchup";
  }
  var mustardWindow = window.prompt("Would you like mustard?")
  if (mustardWindow.toLowerCase() == "yes") {
    changeMustard();
    message = message + " mustard";
  }
  var mayoWindow = window.prompt("Would you like mayo?")
  if (mayoWindow.toLowerCase() == "yes") {
    changeMayo();
    message = message + " mayo";
  }
  return message;
  
}

  
makeMeASandwich(1, 2, 3, 4, 5, 6);

var sandwichResult = sandwich;
  
console.log(sandwichResult);
  
var elem = document.getElementById("sandwiches");
elem.innerHTML = message + ".";





