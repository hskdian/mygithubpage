var todos = document.querySelectorAll("li");

for (var i = 0; i < todos.length; i++){
	todos[i].addEventListener("mouseover", function(){
		this.classList.add("selected");
	});
	todos[i].addEventListener("mouseout", function(){
		this.classList.remove("selected");
	});

	todos[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});
}