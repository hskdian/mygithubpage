var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");
var reset = document.querySelector(".reset");
var winDisplay = document.querySelector("h2 span");
var winScore = parseInt(winDisplay.textContent);
var inputNum = document.querySelector("input");
var p1DisplayScore = document.querySelector(".p1DisplayScore");
var p2DisplayScore = document.querySelector(".p2DisplayScore");
var p1score = 0;
var p2score = 0;
var gameover = false;

p1.addEventListener("click", function(){
  if(!gameover){
    p1score++;
    if(p1score === winScore){
      p1DisplayScore.classList.add("win");
      gameover = true;
    }
    p1DisplayScore.textContent = p1score;
  }
});

p2.addEventListener("click", function(){
  if(!gameover){
    p2score++;
    if(p2score === winScore){
      p2DisplayScore.classList.add("win");
      gameover = true;
    }
    p2DisplayScore.textContent = p2score;
  }
});

reset.addEventListener("click", function(){
  resetall();
});

inputNum.addEventListener("change",function(){
  winDisplay.textContent = this.value;
  winScore = parseInt(this.value);
  resetall();
});

function resetall (){
  p1DisplayScore.classList.remove("win");
  p2DisplayScore.classList.remove("win");
  p1score = 0;
  p2score = 0;
  p1DisplayScore.textContent = p1score;
  p2DisplayScore.textContent = p2score;
  gameover = false;
}
