var numerOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector(".colorDisplay");
var messageDisplay = document.querySelector(".message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector(".reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  //mode button listeners
  setupModeButtons();
  //Color for the screens
  setupSquares();
  reset();
}

function setupModeButtons(){
  for (var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numerOfSquares = 3: numerOfSquares = 6;
      reset();
    });
  }
}

function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    //add click listener to squares
    squares[i].addEventListener ("click", function(){
      //grab color of clicked squares
      var clickedColor = this.style.background;
      //compare color to pickedColor
      if (clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColor(clickedColor);
        h1.style.background = clickedColor;
      } else{
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset (){
  //generate all new colors
  colors = generateRandomColors(numerOfSquares);
  h1.style.background = "steelblue";
  messageDisplay.textContent = "";
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to pickedColor
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change colors of square.
  for (var i = 0; 1< squares.length; i ++){
    //add initial color to squares
    if (colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
}

resetButton.addEventListener("click", function(){
	reset();
})



function changeColor (color){
  //loop through all the squares and change their colors
  squares.forEach(function(square){
    square.style.background = color;
  });
}

function pickColor(){
  var random = Math.floor(Math.random() *colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  //add num random colors to array
  for(var i = 0; i < num; i++){
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb(" + r + ", " + g + ", " + b +")";
}
