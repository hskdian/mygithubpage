var movies = [
  {
    title:"Frozen",
    rating:"4.5",
    haswatched: true
  },
  {
    title:"Titanic",
    rating:"5",
    haswatched: true
  },
  {
    title:"The Room",
    rating:"0",
    haswatched: false
  }
]

function watched(movies){
  for(i=0;i<movies.length;i++){
    var results = "You have "
    if(movies[i].haswatched){
      results += "watched ";
    }
    else{
      results+= "not seen "
    }
    results += "\"" + movies[i].title + "\" - ";
    results += movies[i].rating + " stars";
    console.log(results);
  }
}
