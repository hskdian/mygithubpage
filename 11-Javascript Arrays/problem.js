function printReverse(array){
  for(var i = array.length -1;i>=0;i--){
    console.log(array[i]);
  }
}

function isUniform(arr){
  var first = arr[0];
  for(var i=1;i<arr.length;i++){
    if(first!==arr[i]){
      console.log("Not Uniform!!!");
      return false;
    }
  }
  console.log("Uniform!!!");
  return true;
}

function sumArray(arr){
  var total = 0;
  arr.forEach(function(item){
    total+=item;
  });
  return total;
}

function max(arr){
  var max = arr[0];
  for(var i=1;i<arr.length;i++){
    if (max<arr[i]){
      max=arr[i];
    }
  }
  return max;
}
