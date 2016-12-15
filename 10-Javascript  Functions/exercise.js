function isEven(num){
  return num%2===0;
}

function factorialRecurse (num){
  if (num === 0){
    return 1;
  }
  else {
    return num * --num;
  }
}

function factorialIterative (num){
  var result =1;
  for (i=2; i<=num;i++){
    result *=i;
  }
  return result;
}

function kebabToSnake(str){
  var newStr = str.replace(/-/g, "_");
  return newStr;
}
