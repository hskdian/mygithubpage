if (age<=0){
  console.log("Come back once you're out of the womb");
}
else if (age>=21) {
  console.log("Happy 21st Birthday");
}
else if (age%2 !== 0) {
  console.log("Your age is odd.");
}
else if (age% Math.sqrt(age)===0) {
  console.log("Your age is a perfect square");
}
