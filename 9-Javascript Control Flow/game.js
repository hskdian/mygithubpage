var num = 4;

var guess = Number(prompt("Guess a Number"));

if (guess === num){
  alert("You are right!");
}
else if (guess < num) {
  alert("Too low");
}
else {
  alert("Too high");
}
